'use client';

import Script from 'next/script';

/**
 * Privacy-respecting analytics component
 *
 * Supports multiple providers:
 * - Plausible Analytics (default, privacy-focused)
 * - Vercel Analytics
 * - Simple Analytics
 *
 * Configure by setting NEXT_PUBLIC_ANALYTICS_PROVIDER and related env vars
 */

const ANALYTICS_PROVIDER = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || 'none';
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'classicusd.com';

export function Analytics() {
  // Don't load analytics in development
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  switch (ANALYTICS_PROVIDER) {
    case 'plausible':
      return (
        <Script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      );

    case 'simple':
      return (
        <Script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
      );

    case 'vercel':
      // Vercel Analytics is typically installed via @vercel/analytics package
      // If using Vercel, install: pnpm add @vercel/analytics
      // Then import { Analytics } from '@vercel/analytics/react' in layout
      return null;

    default:
      return null;
  }
}

/**
 * Track custom events (works with Plausible)
 */
export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined' && ANALYTICS_PROVIDER === 'plausible') {
    // Plausible custom event tracking
    const plausible = (window as unknown as { plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void }).plausible;
    if (plausible) {
      plausible(eventName, { props });
    }
  }
}
