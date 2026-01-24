'use client';

import { useState, useEffect, useCallback } from 'react';
import type { PriceData, PriceResponse } from '@/app/api/price/route';

interface UsePriceOptions {
  refreshInterval?: number; // in milliseconds, default 60000 (1 minute)
  enabled?: boolean;
}

interface UsePriceReturn {
  data: PriceData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function usePrice(options: UsePriceOptions = {}): UsePriceReturn {
  const { refreshInterval = 60000, enabled = true } = options;

  const [data, setData] = useState<PriceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrice = useCallback(async () => {
    if (!enabled) return;

    try {
      const response = await fetch('/api/price');
      const result: PriceResponse = await response.json();

      if (result.data) {
        setData(result.data);
      }
      if (result.error) {
        setError(result.error);
      } else {
        setError(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch price');
    } finally {
      setIsLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    fetchPrice();

    if (enabled && refreshInterval > 0) {
      const interval = setInterval(fetchPrice, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [fetchPrice, refreshInterval, enabled]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchPrice,
  };
}

// Utility functions for formatting
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(price);
}

export function formatLargeNumber(num: number): string {
  if (num >= 1_000_000_000) {
    return `$${(num / 1_000_000_000).toFixed(2)}B`;
  }
  if (num >= 1_000_000) {
    return `$${(num / 1_000_000).toFixed(2)}M`;
  }
  if (num >= 1_000) {
    return `$${(num / 1_000).toFixed(2)}K`;
  }
  return `$${num.toFixed(2)}`;
}

export function formatSupply(num: number): string {
  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(2)}B`;
  }
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(2)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(2)}K`;
  }
  return num.toFixed(0);
}

export function formatPercentage(num: number): string {
  const sign = num >= 0 ? '+' : '';
  return `${sign}${num.toFixed(2)}%`;
}
