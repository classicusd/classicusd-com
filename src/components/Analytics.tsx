'use client';

import Script from 'next/script';

export function Analytics() {
  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "2d317c694a2a4dbb84281e80984b854f"}'
      strategy="afterInteractive"
    />
  );
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
