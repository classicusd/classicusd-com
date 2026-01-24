import Link from 'next/link';
import { INTEGRATIONS, LINKS } from '@/lib/constants';

export const metadata = {
  title: 'DeFi Integration',
  description: 'Using Classic USD ($USC) in DeFi on Ethereum Classic.',
};

export default function DeFiPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        DeFi Integration
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Classic USD is essential infrastructure for DeFi on Ethereum Classic. As a stable
        unit of account, $USC enables trading pairs, lending protocols, and other financial
        applications.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Current Integrations</h2>

      <div className="space-y-4 mb-8">
        <div className="p-6 rounded-xl bg-usc-surface border border-usc-border">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-usc-text">ETCswap V3</h3>
            <a
              href={INTEGRATIONS.etcswapV3.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-usc-green hover:text-usc-green-light text-sm"
            >
              Visit →
            </a>
          </div>
          <p className="text-usc-text-secondary text-sm mb-4">
            The first concentrated liquidity DEX on Ethereum Classic. $USC was required for
            the V3 deployment and is integrated as a primary trading pair.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-usc-green/10 text-usc-green rounded">Trading</span>
            <span className="px-2 py-1 text-xs bg-usc-green/10 text-usc-green rounded">Liquidity Pools</span>
            <span className="px-2 py-1 text-xs bg-usc-green/10 text-usc-green rounded">Concentrated Liquidity</span>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-usc-surface border border-usc-border">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-usc-text">ETCswap V2</h3>
            <a
              href={INTEGRATIONS.etcswapV2.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-usc-green hover:text-usc-green-light text-sm"
            >
              Visit →
            </a>
          </div>
          <p className="text-usc-text-secondary text-sm mb-4">
            Classic AMM with constant product pools. Simple interface for swaps and
            liquidity provision.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-usc-green/10 text-usc-green rounded">Trading</span>
            <span className="px-2 py-1 text-xs bg-usc-green/10 text-usc-green rounded">Liquidity Pools</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Use Cases</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Trading Pair</h3>
          <p className="text-usc-text-secondary text-sm">
            $USC serves as a stable quote currency for trading pairs (e.g., ETC/$USC),
            enabling dollar-denominated trading on ETC.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Liquidity Provision</h3>
          <p className="text-usc-text-secondary text-sm">
            Provide liquidity to $USC pools and earn trading fees. Ideal for those who
            want passive yield on stable assets.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Payments</h3>
          <p className="text-usc-text-secondary text-sm">
            Use $USC for payments where price stability matters. Recipients know exactly
            what they&apos;re receiving in dollar terms.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Treasury Management</h3>
          <p className="text-usc-text-secondary text-sm">
            DAOs and protocols can hold $USC as a stable treasury asset, reducing exposure
            to crypto volatility.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Future Integrations</h2>

      <p className="text-usc-text-secondary mb-4">
        As the ETC DeFi ecosystem grows, expect $USC to be integrated with:
      </p>

      <ul className="list-disc list-inside space-y-2 text-usc-text-secondary mb-8">
        <li>Lending protocols (borrow against collateral, earn yield)</li>
        <li>Yield aggregators</li>
        <li>Payment processors</li>
        <li>Cross-chain bridges</li>
      </ul>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Build with $USC</h2>

      <p className="text-usc-text-secondary mb-4">
        Integrating $USC into your DeFi protocol? $USC is a standard ERC-20 token,
        making integration straightforward. Key resources:
      </p>

      <div className="space-y-2 mb-8">
        <Link
          href="/docs/token/contracts"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Contract Addresses
        </Link>
        <Link
          href="/docs/technical/smart-contract"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Smart Contract Details
        </Link>
        <a
          href={LINKS.braleDocs}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Brale API Documentation
        </a>
      </div>
    </div>
  );
}
