import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE, SEO_KEYWORDS, PARTNERS } from '@/lib/constants';
import { ThemeProvider } from '@/components/ThemeProvider';
import { BackgroundSystem } from '@/components/BackgroundSystem';
import { Analytics } from '@/components/Analytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

// Flatten SEO keywords for metadata
const allKeywords = [
  ...SEO_KEYWORDS.primary,
  ...SEO_KEYWORDS.trust,
  ...SEO_KEYWORDS.network,
  ...SEO_KEYWORDS.defi,
  ...SEO_KEYWORDS.issuer,
];

export const metadata: Metadata = {
  // Core metadata
  title: {
    default: SITE.title,
    template: '%s | Classic USD - Stablecoin on Ethereum Classic',
  },
  description: SITE.description,
  keywords: allKeywords,
  authors: [
    { name: 'White B0x', url: PARTNERS.whitebox.url },
    { name: 'Brale', url: PARTNERS.brale.url },
  ],
  creator: 'White B0x',
  publisher: 'classicusd.com',

  // Canonical URL
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: '/',
  },

  // OpenGraph metadata
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-usc.png',
        width: 1200,
        height: 630,
        alt: 'Classic USD - The US Dollar for Ethereum Classic',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
    title: SITE.title,
    description: SITE.description,
    images: {
      url: '/images/og-usc.png',
      alt: 'Classic USD - The US Dollar for Ethereum Classic',
    },
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/images/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/usc-icon.svg', color: '#33FD99' },
    ],
  },

  // Manifest
  manifest: '/manifest.json',

  // App metadata
  applicationName: 'Classic USD',
  category: 'finance',

  // Additional metadata
  other: {
    'crypto:ticker': 'USC',
    'crypto:network': 'Ethereum Classic',
    'issuer:nmls': PARTNERS.brale.nmls,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('usc-theme');
                  if (theme === 'light' || (!theme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${SITE.url}/#organization`,
                  name: 'Classic USD',
                  url: SITE.url,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${SITE.url}/images/usc-icon.svg`,
                  },
                  description: SITE.description,
                  sameAs: [
                    'https://twitter.com/classicusd',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': `${SITE.url}/#website`,
                  url: SITE.url,
                  name: SITE.name,
                  publisher: {
                    '@id': `${SITE.url}/#organization`,
                  },
                },
                {
                  '@type': 'FinancialProduct',
                  '@id': `${SITE.url}/#product`,
                  name: 'Classic USD (USC)',
                  description: 'A fiat-backed stablecoin on Ethereum Classic, redeemable 1:1 for US dollars.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Brale Inc.',
                    url: PARTNERS.brale.url,
                  },
                  category: 'Stablecoin',
                  offers: {
                    '@type': 'Offer',
                    price: '1.00',
                    priceCurrency: 'USD',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <BackgroundSystem />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
