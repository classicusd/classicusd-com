import Link from 'next/link';
import { USC_TOKEN, PARTNERS } from '@/lib/constants';

export const metadata = {
  title: 'Token Specifications',
  description: 'Technical specifications for Classic USD ($USC).',
};

export default function SpecificationsPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Token Specifications
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Technical specifications and properties of the Classic USD ($USC) token.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Basic Information</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text w-1/3">Token Name</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">{USC_TOKEN.name}</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Symbol</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">${USC_TOKEN.ticker}</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Decimals</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">{USC_TOKEN.decimals}</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Token Standard</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">ERC-20</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Issuer</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">Brale Inc. (NMLS #{PARTNERS.brale.nmls})</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Backing</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">1:1 USD fiat reserves</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">CoinGecko ID</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">{USC_TOKEN.coingeckoId}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Decimal Handling</h2>

      <p className="text-usc-text-secondary mb-4">
        $USC uses <strong>6 decimals</strong>, which is standard for USD-pegged stablecoins
        (matching USDC and USDP). This means:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead className="border-b border-usc-border">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-usc-text">Human Readable</th>
              <th className="px-4 py-3 text-left font-semibold text-usc-text">Raw Value (wei)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-usc-text">1 $USC</td>
              <td className="px-4 py-3 text-usc-text-secondary font-mono">1,000,000</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-usc-text">0.01 $USC (1 cent)</td>
              <td className="px-4 py-3 text-usc-text-secondary font-mono">10,000</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-usc-text">100 $USC</td>
              <td className="px-4 py-3 text-usc-text-secondary font-mono">100,000,000</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-usc-text">1,000,000 $USC</td>
              <td className="px-4 py-3 text-usc-text-secondary font-mono">1,000,000,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 mb-8">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-blue-400 text-sm">
              <strong>Developer note:</strong> Always handle amounts in the smallest unit (6 decimals)
              when interacting with the contract. Use libraries like <code className="bg-blue-500/20 px-1 rounded">parseUnits</code>
              and <code className="bg-blue-500/20 px-1 rounded">formatUnits</code> to convert.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Contract Features</h2>

      <div className="space-y-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Mintable</h3>
          <p className="text-usc-text-secondary text-sm">
            New tokens can be minted by authorized addresses (Brale) when users deposit USD.
            The total supply increases with each mint.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Burnable</h3>
          <p className="text-usc-text-secondary text-sm">
            Tokens are burned during redemption, removing them from circulation and
            decreasing total supply.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Pausable</h3>
          <p className="text-usc-text-secondary text-sm">
            Transfers can be paused in emergencies. This is a regulatory requirement
            for compliant stablecoins.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Upgradeable</h3>
          <p className="text-usc-text-secondary text-sm">
            The contract uses a proxy pattern allowing logic upgrades without
            changing addresses or losing state.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Supply Information</h2>

      <p className="text-usc-text-secondary mb-4">
        $USC has no maximum supply cap. Supply is determined by demand — tokens are minted
        when users deposit USD and burned when users redeem. This ensures 1:1 backing
        at all times.
      </p>

      <ul className="list-disc list-inside space-y-2 text-usc-text-secondary mb-8">
        <li><strong>Total Supply:</strong> Variable, based on circulating tokens</li>
        <li><strong>Max Supply:</strong> Unlimited (demand-driven)</li>
        <li><strong>Initial Supply:</strong> 0 (all tokens minted on demand)</li>
      </ul>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Related Pages</h2>

      <div className="space-y-2">
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
        <Link
          href="/docs/technical/examples"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Code Examples
        </Link>
      </div>
    </div>
  );
}
