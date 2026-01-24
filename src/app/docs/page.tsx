import Link from 'next/link';
import { PARTNERS, CHAINS } from '@/lib/constants';

export const metadata = {
  title: 'Documentation',
  description: 'Learn how to use Classic USD ($USC) - the first fiat-backed stablecoin on Ethereum Classic.',
};

export default function DocsPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Classic USD Documentation
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Welcome to the Classic USD ($USC) documentation. Here you&apos;ll find guides,
        technical references, and resources for integrating with $USC.
      </p>

      {/* Quick links */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <Link
          href="/docs/getting-started/what-is-usc"
          className="p-4 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-usc-text font-semibold mb-1 group-hover:text-usc-green transition-colors">
            What is Classic USD?
          </h3>
          <p className="text-usc-text-secondary text-sm">
            Learn about $USC and its role in the ETC ecosystem.
          </p>
        </Link>

        <Link
          href="/docs/getting-started/quick-start"
          className="p-4 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-usc-text font-semibold mb-1 group-hover:text-usc-green transition-colors">
            Quick Start
          </h3>
          <p className="text-usc-text-secondary text-sm">
            Get started with $USC in under 5 minutes.
          </p>
        </Link>

        <Link
          href="/docs/token/contracts"
          className="p-4 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-usc-text font-semibold mb-1 group-hover:text-usc-green transition-colors">
            Contract Addresses
          </h3>
          <p className="text-usc-text-secondary text-sm">
            Find $USC contract addresses on all networks.
          </p>
        </Link>

        <Link
          href="/docs/guides/minting"
          className="p-4 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-usc-text font-semibold mb-1 group-hover:text-usc-green transition-colors">
            Minting & Redemption
          </h3>
          <p className="text-usc-text-secondary text-sm">
            Learn how to mint and redeem $USC.
          </p>
        </Link>

        <Link
          href="/docs/guides/trading"
          className="p-4 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <h3 className="text-usc-text font-semibold mb-1 group-hover:text-usc-green transition-colors">
            Trading on ETCswap
          </h3>
          <p className="text-usc-text-secondary text-sm">
            Trade $USC on decentralized exchanges.
          </p>
        </Link>

        <a
          href="https://docs.brale.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <h3 className="text-usc-text font-semibold mb-1 group-hover:text-usc-green transition-colors">
            Brale API Docs
          </h3>
          <p className="text-usc-text-secondary text-sm">
            Full API documentation for developers.
          </p>
        </a>
      </div>

      {/* Key info */}
      <div className="p-6 rounded-xl bg-usc-green/5 border border-usc-green/20 mb-8">
        <h2 className="text-xl font-bold text-usc-text mb-4">Key Information</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-usc-text-muted mb-1">Token Symbol</p>
            <p className="text-usc-text font-mono">$USC</p>
          </div>
          <div>
            <p className="text-usc-text-muted mb-1">Issuer</p>
            <p className="text-usc-text">Brale Inc. (NMLS #{PARTNERS.brale.nmls})</p>
          </div>
          <div>
            <p className="text-usc-text-muted mb-1">Primary Network</p>
            <p className="text-usc-text">{CHAINS.etc.name} (Chain ID: {CHAINS.etc.id})</p>
          </div>
          <div>
            <p className="text-usc-text-muted mb-1">Token Standard</p>
            <p className="text-usc-text">ERC-20</p>
          </div>
        </div>
      </div>

      {/* Next steps */}
      <h2 className="text-xl font-bold text-usc-text mb-4">Next Steps</h2>
      <div className="space-y-2">
        <Link
          href="/docs/getting-started/what-is-usc"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Learn what Classic USD is and how it works
        </Link>
        <Link
          href="/docs/getting-started/quick-start"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Get started with your first $USC transaction
        </Link>
        <Link
          href="/docs/token/contracts"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Find contract addresses for integration
        </Link>
      </div>
    </div>
  );
}
