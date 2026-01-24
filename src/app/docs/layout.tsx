'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DocsSidebar, MobileDocsSidebar } from '@/components/docs/DocsSidebar';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-usc-bg">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-usc-bg/80 backdrop-blur-md border-b border-usc-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden text-usc-text-muted hover:text-usc-text"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <Link href="/" className="flex items-center gap-2">
                <span className="text-usc-green font-bold text-xl">$USC</span>
                <span className="text-usc-text-muted text-sm hidden sm:inline">Classic USD</span>
              </Link>

              <span className="text-usc-border">|</span>

              <Link href="/docs" className="text-usc-text font-medium text-sm hover:text-usc-green transition-colors">
                Docs
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://docs.brale.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-usc-text-secondary hover:text-usc-green text-sm hidden sm:inline transition-colors"
              >
                Brale API
              </a>
              <ThemeToggle />
              <Link
                href="https://app.brale.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2 text-sm"
              >
                Get $USC
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <MobileDocsSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <DocsSidebar />

          {/* Content */}
          <main className="flex-1 min-w-0">
            <article className="prose prose-invert max-w-none">
              {children}
            </article>
          </main>

          {/* Table of contents (optional, for future) */}
          <aside className="w-48 flex-shrink-0 hidden xl:block">
            {/* On this page navigation will go here */}
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-usc-border mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-usc-text-muted">
            <p>Classic USD Documentation</p>
            <div className="flex gap-4">
              <a href="https://classicusd.com" className="hover:text-usc-green transition-colors">
                Website
              </a>
              <a href="https://docs.brale.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-usc-green transition-colors">
                Brale Docs
              </a>
              <a href="https://coingecko.com/en/coins/classic-usd" target="_blank" rel="noopener noreferrer" className="hover:text-usc-green transition-colors">
                CoinGecko
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
