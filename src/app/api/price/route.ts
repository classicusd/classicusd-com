import { NextResponse } from 'next/server';
import { USC_TOKEN } from '@/lib/constants';

// Cache duration in seconds
const CACHE_DURATION = 60; // 1 minute

// CoinGecko API endpoint
const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export interface PriceData {
  price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  total_supply: number;
  last_updated: string;
}

export interface PriceResponse {
  data: PriceData | null;
  error: string | null;
  cached: boolean;
}

// In-memory cache
let cachedData: PriceData | null = null;
let cacheTimestamp: number = 0;

async function fetchFromCoinGecko(): Promise<PriceData> {
  const response = await fetch(
    `${COINGECKO_API}/coins/${USC_TOKEN.coingeckoId}?localization=false&tickers=false&community_data=false&developer_data=false`,
    {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: CACHE_DURATION },
    }
  );

  if (!response.ok) {
    throw new Error(`CoinGecko API error: ${response.status}`);
  }

  const data = await response.json();

  return {
    price: data.market_data?.current_price?.usd ?? 1,
    price_change_24h: data.market_data?.price_change_24h ?? 0,
    price_change_percentage_24h: data.market_data?.price_change_percentage_24h ?? 0,
    market_cap: data.market_data?.market_cap?.usd ?? 0,
    total_volume: data.market_data?.total_volume?.usd ?? 0,
    circulating_supply: data.market_data?.circulating_supply ?? 0,
    total_supply: data.market_data?.total_supply ?? 0,
    last_updated: data.market_data?.last_updated ?? new Date().toISOString(),
  };
}

export async function GET(): Promise<NextResponse<PriceResponse>> {
  try {
    const now = Date.now();

    // Check if cache is still valid
    if (cachedData && (now - cacheTimestamp) < CACHE_DURATION * 1000) {
      return NextResponse.json({
        data: cachedData,
        error: null,
        cached: true,
      });
    }

    // Fetch fresh data
    const priceData = await fetchFromCoinGecko();

    // Update cache
    cachedData = priceData;
    cacheTimestamp = now;

    return NextResponse.json({
      data: priceData,
      error: null,
      cached: false,
    });
  } catch (error) {
    console.error('Price API error:', error);

    // Return cached data if available, even if stale
    if (cachedData) {
      return NextResponse.json({
        data: cachedData,
        error: 'Using stale cache due to API error',
        cached: true,
      });
    }

    // Return fallback data for stablecoins (always ~$1)
    return NextResponse.json({
      data: {
        price: 1,
        price_change_24h: 0,
        price_change_percentage_24h: 0,
        market_cap: 0,
        total_volume: 0,
        circulating_supply: 0,
        total_supply: 0,
        last_updated: new Date().toISOString(),
      },
      error: error instanceof Error ? error.message : 'Unknown error',
      cached: false,
    });
  }
}
