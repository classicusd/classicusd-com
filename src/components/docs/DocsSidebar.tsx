'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'What is Classic USD?', href: '/docs/getting-started/what-is-usc' },
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
    ],
  },
  {
    title: 'Token Information',
    items: [
      { title: 'Contract Addresses', href: '/docs/token/contracts' },
      { title: 'Supported Chains', href: '/docs/token/chains' },
      { title: 'Token Specifications', href: '/docs/token/specifications' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Minting & Redemption', href: '/docs/guides/minting' },
      { title: 'Trading on ETCswap', href: '/docs/guides/trading' },
      { title: 'DeFi Integration', href: '/docs/guides/defi' },
    ],
  },
  {
    title: 'Technical',
    items: [
      { title: 'Smart Contract', href: '/docs/technical/smart-contract' },
      { title: 'API Reference', href: '/docs/technical/api' },
      { title: 'Code Examples', href: '/docs/technical/examples' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'FAQ', href: '/docs/resources/faq' },
      { title: 'Glossary', href: '/docs/resources/glossary' },
      { title: 'External Links', href: '/docs/resources/links' },
    ],
  },
];

function NavSection({ item, pathname }: { item: NavItem; pathname: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-usc-text hover:text-usc-green transition-colors"
      >
        <span>{item.title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && item.items && (
        <ul className="mt-1 space-y-1">
          {item.items.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href || '#'}
                className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                  pathname === child.href
                    ? 'bg-usc-green/10 text-usc-green font-medium'
                    : 'text-usc-text-secondary hover:text-usc-text hover:bg-usc-surface'
                }`}
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24 pr-4">
        <div className="pb-4 mb-4 border-b border-usc-border">
          <Link href="/docs" className="flex items-center gap-2 text-usc-text font-bold">
            <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Documentation
          </Link>
        </div>
        {navigation.map((item) => (
          <NavSection key={item.title} item={item} pathname={pathname} />
        ))}
      </div>
    </nav>
  );
}

// Mobile sidebar
export function MobileDocsSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-72 bg-usc-bg border-r border-usc-border overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-usc-border">
            <Link href="/docs" className="flex items-center gap-2 text-usc-text font-bold" onClick={onClose}>
              <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Documentation
            </Link>
            <button onClick={onClose} className="text-usc-text-muted hover:text-usc-text">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {navigation.map((item) => (
            <NavSection key={item.title} item={item} pathname={pathname} />
          ))}
        </div>
      </div>
    </div>
  );
}
