'use client';

import { usePrice, formatPrice, formatLargeNumber, formatSupply, formatPercentage } from '@/hooks/usePrice';
import { LINKS } from '@/lib/constants';

interface PriceDisplayProps {
  variant?: 'compact' | 'full' | 'stats';
  className?: string;
}

export function PriceDisplay({ variant = 'compact', className = '' }: PriceDisplayProps) {
  const { data, isLoading, error } = usePrice();

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <span className="text-usc-text font-mono">
          {isLoading ? (
            <span className="animate-pulse">$-.--</span>
          ) : (
            formatPrice(data?.price ?? 1)
          )}
        </span>
        {data && !isLoading && (
          <span
            className={`text-xs font-medium ${
              data.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {formatPercentage(data.price_change_percentage_24h)}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`p-6 rounded-2xl bg-usc-surface border border-usc-border ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-usc-text">$USC Price</h3>
          <a
            href={LINKS.coingecko}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-usc-text-muted hover:text-usc-green transition-colors"
          >
            CoinGecko →
          </a>
        </div>

        {isLoading ? (
          <div className="space-y-3">
            <div className="h-10 bg-usc-bg animate-pulse rounded" />
            <div className="h-4 bg-usc-bg animate-pulse rounded w-1/2" />
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold text-usc-text font-mono">
                {formatPrice(data?.price ?? 1)}
              </span>
              {data && (
                <span
                  className={`text-sm font-medium ${
                    data.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {formatPercentage(data.price_change_percentage_24h)} (24h)
                </span>
              )}
            </div>

            {data && (
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-usc-border">
                <div>
                  <p className="text-usc-text-muted text-xs mb-1">Market Cap</p>
                  <p className="text-usc-text font-mono text-sm">
                    {data.market_cap > 0 ? formatLargeNumber(data.market_cap) : '—'}
                  </p>
                </div>
                <div>
                  <p className="text-usc-text-muted text-xs mb-1">24h Volume</p>
                  <p className="text-usc-text font-mono text-sm">
                    {data.total_volume > 0 ? formatLargeNumber(data.total_volume) : '—'}
                  </p>
                </div>
                <div>
                  <p className="text-usc-text-muted text-xs mb-1">Circulating</p>
                  <p className="text-usc-text font-mono text-sm">
                    {data.circulating_supply > 0 ? formatSupply(data.circulating_supply) : '—'}
                  </p>
                </div>
                <div>
                  <p className="text-usc-text-muted text-xs mb-1">Total Supply</p>
                  <p className="text-usc-text font-mono text-sm">
                    {data.total_supply > 0 ? formatSupply(data.total_supply) : '—'}
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        {error && !isLoading && (
          <p className="text-xs text-usc-text-muted mt-2">
            Data may be delayed
          </p>
        )}
      </div>
    );
  }

  // Stats variant - horizontal stats bar
  if (variant === 'stats') {
    return (
      <div className={`flex flex-wrap gap-6 ${className}`}>
        <div>
          <p className="text-usc-text-muted text-xs mb-1">Price</p>
          {isLoading ? (
            <div className="h-6 w-16 bg-usc-surface animate-pulse rounded" />
          ) : (
            <div className="flex items-center gap-2">
              <p className="text-usc-text font-mono font-semibold">
                {formatPrice(data?.price ?? 1)}
              </p>
              {data && (
                <span
                  className={`text-xs ${
                    data.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {formatPercentage(data.price_change_percentage_24h)}
                </span>
              )}
            </div>
          )}
        </div>

        <div>
          <p className="text-usc-text-muted text-xs mb-1">Market Cap</p>
          {isLoading ? (
            <div className="h-6 w-20 bg-usc-surface animate-pulse rounded" />
          ) : (
            <p className="text-usc-text font-mono font-semibold">
              {data && data.market_cap > 0 ? formatLargeNumber(data.market_cap) : '—'}
            </p>
          )}
        </div>

        <div>
          <p className="text-usc-text-muted text-xs mb-1">24h Volume</p>
          {isLoading ? (
            <div className="h-6 w-20 bg-usc-surface animate-pulse rounded" />
          ) : (
            <p className="text-usc-text font-mono font-semibold">
              {data && data.total_volume > 0 ? formatLargeNumber(data.total_volume) : '—'}
            </p>
          )}
        </div>

        <div>
          <p className="text-usc-text-muted text-xs mb-1">Circulating Supply</p>
          {isLoading ? (
            <div className="h-6 w-16 bg-usc-surface animate-pulse rounded" />
          ) : (
            <p className="text-usc-text font-mono font-semibold">
              {data && data.circulating_supply > 0 ? `${formatSupply(data.circulating_supply)} USC` : '—'}
            </p>
          )}
        </div>
      </div>
    );
  }

  return null;
}
