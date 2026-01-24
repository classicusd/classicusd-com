import { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  // Static pages
  const staticPages = [
    '',
    '/docs',
    '/docs/getting-started/what-is-usc',
    '/docs/getting-started/quick-start',
    '/docs/token/contracts',
    '/docs/token/chains',
    '/docs/token/specifications',
    '/docs/guides/minting',
    '/docs/guides/trading',
    '/docs/guides/defi',
    '/docs/technical/smart-contract',
    '/docs/technical/api',
    '/docs/technical/examples',
    '/docs/resources/faq',
    '/docs/resources/glossary',
    '/docs/resources/links',
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/docs/getting-started') ? 0.9 : 0.8,
  }));
}
