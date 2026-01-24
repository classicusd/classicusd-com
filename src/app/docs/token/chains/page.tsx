import Link from 'next/link';
import { CHAINS } from '@/lib/constants';

export const metadata = {
  title: 'Supported Chains',
  description: 'Networks where Classic USD ($USC) is available.',
};

export default function ChainsPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Supported Chains
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Classic USD is available on multiple networks, with Ethereum Classic as the primary chain.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Ethereum Classic (Primary)</h2>

      <div className="p-6 rounded-xl bg-usc-green/5 border border-usc-green/20 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-usc-green/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-usc-green" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 12l8 5 8-5-8-10zm0 15l-8-5 8 10 8-10-8 5z"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-usc-text mb-1">{CHAINS.etc.name}</h3>
            <p className="text-usc-text-secondary text-sm mb-3">
              The home of Classic USD. ETC provides proof-of-work security, decentralization,
              and immutability for $USC operations.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div className="p-2 rounded bg-usc-surface">
                <span className="text-usc-text-muted text-xs">Chain ID</span>
                <p className="text-usc-text font-mono">{CHAINS.etc.id}</p>
              </div>
              <div className="p-2 rounded bg-usc-surface">
                <span className="text-usc-text-muted text-xs">Native Token</span>
                <p className="text-usc-text font-mono">{CHAINS.etc.symbol}</p>
              </div>
              <div className="p-2 rounded bg-usc-surface">
                <span className="text-usc-text-muted text-xs">Explorer</span>
                <a href={CHAINS.etc.explorer} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline text-xs">
                  Blockscout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-usc-text mb-3">ETC Network Configuration</h3>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Network Name</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">Ethereum Classic</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Chain ID</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">{CHAINS.etc.id}</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Currency Symbol</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">{CHAINS.etc.symbol}</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">RPC URL</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">{CHAINS.etc.rpc}</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Block Explorer</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">{CHAINS.etc.explorer}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Polygon</h2>

      <div className="p-6 rounded-xl bg-usc-surface border border-usc-border mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 7.5L12 4 6.5 7.5V14L12 17.5l5.5-3.5V7.5z"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-usc-text mb-1">{CHAINS.polygon.name}</h3>
            <p className="text-usc-text-secondary text-sm mb-3">
              Extended reach for $USC. Polygon offers fast, low-cost transactions for
              users who need interoperability with the broader EVM ecosystem.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div className="p-2 rounded bg-usc-bg">
                <span className="text-usc-text-muted text-xs">Chain ID</span>
                <p className="text-usc-text font-mono">{CHAINS.polygon.id}</p>
              </div>
              <div className="p-2 rounded bg-usc-bg">
                <span className="text-usc-text-muted text-xs">Native Token</span>
                <p className="text-usc-text font-mono">{CHAINS.polygon.symbol}</p>
              </div>
              <div className="p-2 rounded bg-usc-bg">
                <span className="text-usc-text-muted text-xs">Explorer</span>
                <a href={CHAINS.polygon.explorer} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline text-xs">
                  PolygonScan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Mordor Testnet</h2>

      <div className="p-6 rounded-xl bg-usc-surface border border-usc-border mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-usc-text mb-1">{CHAINS.mordor.name}</h3>
            <p className="text-usc-text-secondary text-sm mb-3">
              Test your integrations before deploying to mainnet. Mordor uses test ETC
              with no real value.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div className="p-2 rounded bg-usc-bg">
                <span className="text-usc-text-muted text-xs">Chain ID</span>
                <p className="text-usc-text font-mono">{CHAINS.mordor.id}</p>
              </div>
              <div className="p-2 rounded bg-usc-bg">
                <span className="text-usc-text-muted text-xs">Native Token</span>
                <p className="text-usc-text font-mono">{CHAINS.mordor.symbol}</p>
              </div>
              <div className="p-2 rounded bg-usc-bg">
                <span className="text-usc-text-muted text-xs">Explorer</span>
                <a href={CHAINS.mordor.explorer} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline text-xs">
                  Blockscout
                </a>
              </div>
            </div>
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
              <strong>Developer tip:</strong> Always test on Mordor before deploying to ETC mainnet.
              Get test ETC from the <a href="https://etc-mordor.blockscout.com/faucets" target="_blank" rel="noopener noreferrer" className="underline">Mordor faucet</a>.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Next Steps</h2>

      <div className="space-y-2">
        <Link
          href="/docs/token/contracts"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          View contract addresses
        </Link>
        <Link
          href="/docs/technical/examples"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Code examples
        </Link>
      </div>
    </div>
  );
}
