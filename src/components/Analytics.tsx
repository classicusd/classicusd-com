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
