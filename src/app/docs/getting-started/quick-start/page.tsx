import Link from 'next/link';
import { LINKS, INTEGRATIONS } from '@/lib/constants';

export const metadata = {
  title: 'Quick Start',
  description: 'Get started with Classic USD ($USC) in under 5 minutes.',
};

export default function QuickStartPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Quick Start Guide
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Get started with Classic USD ($USC) in just a few steps. Choose the method that
        works best for you.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Option 1: Buy on DEX (Fastest)</h2>

      <p className="text-usc-text-secondary mb-4">
        The quickest way to get $USC is to swap for it on a decentralized exchange.
      </p>

      <div className="p-6 rounded-xl bg-usc-surface border border-usc-border mb-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold text-sm flex-shrink-0">
            1
          </div>
          <div>
            <h3 className="text-usc-text font-semibold mb-1">Connect your wallet</h3>
            <p className="text-usc-text-secondary text-sm">
              Make sure your wallet is connected to Ethereum Classic (Chain ID: 61).
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold text-sm flex-shrink-0">
            2
          </div>
          <div>
            <h3 className="text-usc-text font-semibold mb-1">Go to ETCswap</h3>
            <p className="text-usc-text-secondary text-sm">
              Visit <a href={INTEGRATIONS.etcswapV3.url} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline">ETCswap V3</a> or <a href={INTEGRATIONS.etcswapV2.url} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline">ETCswap V2</a>.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold text-sm flex-shrink-0">
            3
          </div>
          <div>
            <h3 className="text-usc-text font-semibold mb-1">Swap ETC for $USC</h3>
            <p className="text-usc-text-secondary text-sm">
              Select ETC as input and $USC as output. Enter the amount and confirm the swap.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold text-sm flex-shrink-0">
            4
          </div>
          <div>
            <h3 className="text-usc-text font-semibold mb-1">Done!</h3>
            <p className="text-usc-text-secondary text-sm">
              $USC will appear in your wallet after the transaction confirms.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-8">
        <a
          href={INTEGRATIONS.etcswapV3.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-4 py-2 text-sm"
        >
          Trade on ETCswap V3
        </a>
        <a
          href={INTEGRATIONS.etcswapV2.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline px-4 py-2 text-sm"
        >
          Trade on ETCswap V2
        </a>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Option 2: Mint via Brale Platform</h2>

      <p className="text-usc-text-secondary mb-4">
        For larger amounts or direct USD conversion, mint $USC through the Brale Platform.
      </p>

      <div className="p-6 rounded-xl bg-usc-surface border border-usc-border mb-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold text-sm flex-shrink-0">
            1
          </div>
          <div>
            <h3 className="text-usc-text font-semibold mb-1">Create a Brale account</h3>
            <p className="text-usc-text-secondary text-sm">
              Sign up at <a href={LINKS.braleApp} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline">app.brale.xyz</a> and complete KYC verification.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold text-sm flex-shrink-0">
            2
          </div>
          <div>
            <h3 className="text-usc-text font-semibold mb-1">Deposit USD</h3>
            <p className="text-usc-text-secondary text-sm">
              Send USD via bank transfer (ACH or wire) to your Brale account.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold text-sm flex-shrink-0">
            3
          </div>
          <div>
            <h3 className="text-usc-text font-semibold mb-1">Mint $USC</h3>
            <p className="text-usc-text-secondary text-sm">
              Convert your USD to $USC. Select Ethereum Classic or Polygon as your destination network.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold text-sm flex-shrink-0">
            4
          </div>
          <div>
            <h3 className="text-usc-text font-semibold mb-1">Receive tokens</h3>
            <p className="text-usc-text-secondary text-sm">
              $USC will be minted and sent to your specified wallet address.
            </p>
          </div>
        </div>
      </div>

      <a
        href={LINKS.braleApp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary px-4 py-2 text-sm inline-block mb-8"
      >
        Go to Brale Platform
      </a>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Add $USC to Your Wallet</h2>

      <p className="text-usc-text-secondary mb-4">
        If $USC doesn&apos;t appear automatically, add it manually using the contract address:
      </p>

      <div className="p-4 rounded-lg bg-usc-surface border border-usc-border mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-usc-text-muted text-xs mb-1">ETC Mainnet Contract</p>
            <code className="text-usc-green text-sm font-mono">
              See <Link href="/docs/token/contracts" className="underline">Contract Addresses</Link>
            </code>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 mb-8">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-blue-400 text-sm">
              <strong>Tip:</strong> Most wallets can auto-detect tokens. If you&apos;ve received $USC but don&apos;t see it,
              try refreshing your wallet or manually adding the token contract.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Next Steps</h2>

      <div className="space-y-2">
        <Link
          href="/docs/guides/trading"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Learn about trading on ETCswap
        </Link>
        <Link
          href="/docs/guides/defi"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Explore DeFi with $USC
        </Link>
        <Link
          href="/docs/guides/minting"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Detailed minting guide
        </Link>
      </div>
    </div>
  );
}
