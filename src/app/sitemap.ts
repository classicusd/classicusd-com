import { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { execSync } from 'child_process';

function gitDate(filePath: string): Date {
  try {
    const iso = execSync(`git log -1 --format="%cI" -- "${filePath}"`, {
      encoding: 'utf8',
      cwd: process.cwd(),
    }).trim();
    return iso ? new Date(iso) : new Date();
  } catch {
    return new Date();
  }
}

function routeToFile(route: string): string {
  return route === '' ? 'src/app/page.tsx' : `src/app${route}/page.tsx`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

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
    lastModified: gitDate(routeToFile(path)),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/docs/getting-started') ? 0.9 : 0.8,
  }));
}
