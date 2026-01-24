import Link from 'next/link';
import { INTEGRATIONS, CHAINS } from '@/lib/constants';

export const metadata = {
  title: 'Trading on ETCswap',
  description: 'Learn how to trade Classic USD ($USC) on ETCswap.',
};

export default function TradingPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Trading on ETCswap
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        ETCswap is the primary decentralized exchange for trading $USC on Ethereum Classic.
        This guide covers how to swap, provide liquidity, and navigate the DEX.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Available Versions</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <a
          href={INTEGRATIONS.etcswapV3.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-usc-text group-hover:text-usc-green transition-colors">
              ETCswap V3
            </h3>
            <span className="px-2 py-1 text-xs bg-usc-green text-[#121412] rounded">Recommended</span>
          </div>
          <p className="text-usc-text-secondary text-sm mb-3">
            {INTEGRATIONS.etcswapV3.description}
          </p>
          <ul className="text-usc-text-muted text-xs space-y-1">
            <li>+ Concentrated liquidity for better rates</li>
            <li>+ More capital efficient</li>
            <li>+ Lower slippage on most pairs</li>
          </ul>
        </a>

        <a
          href={INTEGRATIONS.etcswapV2.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <h3 className="text-lg font-semibold text-usc-text mb-3 group-hover:text-usc-green transition-colors">
            ETCswap V2
          </h3>
          <p className="text-usc-text-secondary text-sm mb-3">
            {INTEGRATIONS.etcswapV2.description}
          </p>
          <ul className="text-usc-text-muted text-xs space-y-1">
            <li>+ Simple, proven AMM model</li>
            <li>+ Easier liquidity provision</li>
            <li>+ Good for smaller trades</li>
          </ul>
        </a>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">How to Swap</h2>

      <div className="space-y-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-usc-green flex items-center justify-center text-[#121412] text-sm font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-usc-text font-semibold mb-1">Connect Your Wallet</h3>
              <p className="text-usc-text-secondary text-sm">
                Ensure your wallet is connected to Ethereum Classic (Chain ID: {CHAINS.etc.id}).
                MetaMask, Rabby, and other EVM wallets work with ETCswap.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-usc-green flex items-center justify-center text-[#121412] text-sm font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-usc-text font-semibold mb-1">Select Tokens</h3>
              <p className="text-usc-text-secondary text-sm">
                Choose your input token (e.g., ETC) and output token ($USC). If $USC isn&apos;t
                listed, import it using the contract address from our <Link href="/docs/token/contracts" className="text-usc-green hover:underline">contracts page</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-usc-green flex items-center justify-center text-[#121412] text-sm font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-usc-text font-semibold mb-1">Enter Amount</h3>
              <p className="text-usc-text-secondary text-sm">
                Enter how much you want to swap. The interface will show the expected output,
                price impact, and minimum received after slippage.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-usc-green flex items-center justify-center text-[#121412] text-sm font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-usc-text font-semibold mb-1">Review & Confirm</h3>
              <p className="text-usc-text-secondary text-sm">
                Review the transaction details. If this is your first time trading this token,
                you&apos;ll need to approve the token first (one-time). Then confirm the swap.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Trading Tips</h2>

      <div className="space-y-3 mb-8">
        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-blue-400 text-sm">
                <strong>Check slippage settings.</strong> Default is usually 0.5-1%. For $USC,
                you can often use lower slippage since it&apos;s a stablecoin.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-blue-400 text-sm">
                <strong>Compare versions.</strong> V3 often has better rates for larger trades,
                while V2 may be simpler for small amounts.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-blue-400 text-sm">
                <strong>Watch gas prices.</strong> ETC gas is generally low, but complex V3
                swaps may cost more than V2 swaps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Providing Liquidity</h2>

      <p className="text-usc-text-secondary mb-4">
        You can earn trading fees by providing liquidity to $USC pools. When you add liquidity,
        you deposit both tokens in a pair (e.g., ETC + $USC) and receive LP tokens representing
        your share.
      </p>

      <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 mb-8">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="text-yellow-400 text-sm">
              <strong>Understand impermanent loss.</strong> Providing liquidity carries risks.
              If token prices change significantly, you may end up with less value than if
              you had simply held the tokens.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Next Steps</h2>

      <div className="space-y-2">
        <a
          href={INTEGRATIONS.etcswapV3.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Start trading on ETCswap V3
        </a>
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
          href="/docs/token/contracts"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Get contract addresses
        </Link>
      </div>
    </div>
  );
}
