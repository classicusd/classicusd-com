import Link from 'next/link';
import { USC_CONTRACT, USC_TOKEN, CHAINS } from '@/lib/constants';
import { CopyButton } from '@/components/CopyButton';

export const metadata = {
  title: 'Contract Addresses',
  description: 'Classic USD ($USC) smart contract addresses on all supported networks.',
};

export default function ContractsPage() {
  const contracts = [
    {
      network: CHAINS.etc.name,
      chainId: CHAINS.etc.id,
      address: USC_CONTRACT.etc,
      explorer: CHAINS.etc.explorer,
      status: 'Primary',
      statusColor: 'bg-usc-green text-[#121412]',
    },
    {
      network: CHAINS.polygon.name,
      chainId: CHAINS.polygon.id,
      address: USC_CONTRACT.polygon,
      explorer: CHAINS.polygon.explorer,
      status: 'Secondary',
      statusColor: 'bg-usc-surface text-usc-text-secondary',
    },
    {
      network: CHAINS.mordor.name,
      chainId: CHAINS.mordor.id,
      address: USC_CONTRACT.mordor,
      explorer: CHAINS.mordor.explorer,
      status: 'Testnet',
      statusColor: 'bg-orange-500/20 text-orange-400',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Contract Addresses
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Classic USD ($USC) is deployed on multiple networks. Use the addresses below to
        interact with or integrate $USC.
      </p>

      <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 mb-8">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="text-yellow-400 text-sm">
              <strong>Always verify addresses!</strong> Before interacting with any contract, verify the address
              on the official block explorer. Never trust addresses from unofficial sources.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Token Information</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <p className="text-usc-text-muted text-xs mb-1">Token Name</p>
          <p className="text-usc-text font-semibold">{USC_TOKEN.name}</p>
        </div>
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <p className="text-usc-text-muted text-xs mb-1">Token Symbol</p>
          <p className="text-usc-text font-semibold">${USC_TOKEN.ticker}</p>
        </div>
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <p className="text-usc-text-muted text-xs mb-1">Decimals</p>
          <p className="text-usc-text font-semibold">{USC_TOKEN.decimals}</p>
        </div>
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <p className="text-usc-text-muted text-xs mb-1">Token Standard</p>
          <p className="text-usc-text font-semibold">ERC-20</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Deployed Contracts</h2>

      <div className="space-y-4 mb-8">
        {contracts.map((contract) => (
          <div
            key={contract.chainId}
            className="p-4 rounded-xl bg-usc-surface border border-usc-border"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-usc-text">{contract.network}</h3>
                <p className="text-usc-text-muted text-xs">Chain ID: {contract.chainId}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded ${contract.statusColor}`}>
                {contract.status}
              </span>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-usc-bg">
              <code className="text-usc-green text-sm font-mono flex-1 break-all">
                {contract.address}
              </code>
              <CopyButton text={contract.address} />
              <a
                href={`${contract.explorer}/address/${contract.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-usc-text-muted hover:text-usc-green transition-colors"
                title="View on explorer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Adding to MetaMask</h2>

      <p className="text-usc-text-secondary mb-4">
        To add $USC to MetaMask or another wallet:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-usc-text-secondary mb-8">
        <li>Open your wallet and navigate to &quot;Import Tokens&quot; or &quot;Add Token&quot;</li>
        <li>Select &quot;Custom Token&quot;</li>
        <li>Paste the contract address for your network</li>
        <li>The token symbol ($USC) and decimals (6) should auto-fill</li>
        <li>Confirm to add the token</li>
      </ol>

      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 mb-8">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-blue-400 text-sm">
              <strong>Note:</strong> Make sure your wallet is connected to the correct network before adding the token.
              ETC Mainnet uses Chain ID 61.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Next Steps</h2>

      <div className="space-y-2">
        <Link
          href="/docs/token/chains"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Learn about supported chains
        </Link>
        <Link
          href="/docs/technical/smart-contract"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Smart contract technical details
        </Link>
        <Link
          href="/docs/guides/minting"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Start minting $USC
        </Link>
      </div>
    </div>
  );
}
