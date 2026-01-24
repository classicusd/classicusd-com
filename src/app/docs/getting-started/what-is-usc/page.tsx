import Link from 'next/link';
import { PARTNERS, CHAINS } from '@/lib/constants';

export const metadata = {
  title: 'What is Classic USD?',
  description: 'Learn about Classic USD ($USC) - the first fiat-backed stablecoin on Ethereum Classic.',
};

export default function WhatIsUSCPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        What is Classic USD?
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Classic USD ($USC) is the first fiat-backed stablecoin on Ethereum Classic,
        providing a stable, regulated bridge between traditional finance and the ETC ecosystem.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Overview</h2>

      <p className="text-usc-text-secondary mb-4">
        $USC is a stablecoin issued by <a href={PARTNERS.brale.url} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline">Brale Inc.</a> (NMLS #{PARTNERS.brale.nmls}),
        a US-regulated financial services company. Each $USC token is backed 1:1 by US dollars
        held in segregated reserve accounts at regulated financial institutions.
      </p>

      <div className="p-4 rounded-lg bg-usc-green/10 border border-usc-green/30 mb-6">
        <p className="text-usc-green text-sm">
          <strong>1 $USC = 1 USD</strong> — Always redeemable at par value through the Brale Platform.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Key Features</h2>

      <div className="space-y-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">Fiat-Backed</h3>
          <p className="text-usc-text-secondary text-sm">
            Every $USC token is backed by real US dollars held in regulated bank accounts.
            Brale provides regular third-party attestations to verify reserve balances.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">US Regulated</h3>
          <p className="text-usc-text-secondary text-sm">
            Brale holds state-by-state money transmission licenses and maintains full compliance
            with BSA/AML requirements. NMLS #{PARTNERS.brale.nmls}.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">Interoperable</h3>
          <p className="text-usc-text-secondary text-sm">
            $USC can be redeemed 1:1 for USD, USDC, or USDP through Brale. This interoperability
            connects Ethereum Classic to the broader stablecoin ecosystem.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">DeFi Ready</h3>
          <p className="text-usc-text-secondary text-sm">
            $USC is integrated with ETCswap V2 and V3, enabling trading, liquidity provision,
            and other DeFi activities on Ethereum Classic.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Supported Networks</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead className="border-b border-usc-border">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-usc-text">Network</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-usc-text">Chain ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-usc-text">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm text-usc-text">{CHAINS.etc.name}</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">{CHAINS.etc.id}</td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 text-xs bg-usc-green text-[#121412] rounded">Primary</span>
              </td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm text-usc-text">{CHAINS.polygon.name}</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">{CHAINS.polygon.id}</td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 text-xs bg-usc-surface text-usc-text-secondary rounded">Secondary</span>
              </td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm text-usc-text">{CHAINS.mordor.name}</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">{CHAINS.mordor.id}</td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded">Testnet</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Why Ethereum Classic?</h2>

      <p className="text-usc-text-secondary mb-4">
        Ethereum Classic is a proof-of-work blockchain with strong decentralization and
        immutability guarantees. $USC brings dollar liquidity to ETC&apos;s growing DeFi
        ecosystem and enables the network to participate in the broader stablecoin economy.
      </p>

      <p className="text-usc-text-secondary mb-8">
        As a proof-of-work chain, ETC offers censorship resistance and true decentralization,
        making it an ideal foundation for financial infrastructure like stablecoins.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Next Steps</h2>

      <div className="space-y-2">
        <Link
          href="/docs/getting-started/quick-start"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Quick Start Guide
        </Link>
        <Link
          href="/docs/guides/minting"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Learn how to mint $USC
        </Link>
        <Link
          href="/docs/token/contracts"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          View contract addresses
        </Link>
      </div>
    </div>
  );
}
