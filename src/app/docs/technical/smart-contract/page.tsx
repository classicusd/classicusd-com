import Link from 'next/link';
import { LINKS } from '@/lib/constants';

export const metadata = {
  title: 'Smart Contract',
  description: 'Technical details about the Classic USD ($USC) smart contract.',
};

export default function SmartContractPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Smart Contract
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Technical details about the Classic USD ($USC) smart contract implementation.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Contract Architecture</h2>

      <p className="text-usc-text-secondary mb-4">
        $USC is implemented as an ERC-20 token with additional features for regulatory compliance
        and operational flexibility.
      </p>

      <div className="space-y-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">ERC-20 Standard</h3>
          <p className="text-usc-text-secondary text-sm">
            $USC implements the full ERC-20 interface, ensuring compatibility with wallets,
            exchanges, and DeFi protocols. Standard functions include <code className="text-usc-green">transfer</code>,
            <code className="text-usc-green">approve</code>, <code className="text-usc-green">transferFrom</code>,
            and <code className="text-usc-green">allowance</code>.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">Upgradeable Proxy Pattern</h3>
          <p className="text-usc-text-secondary text-sm">
            The contract uses a transparent proxy pattern (EIP-1967) allowing logic upgrades
            while preserving storage, balances, and approvals. This enables security patches
            without requiring token migrations.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">Role-Based Access Control</h3>
          <p className="text-usc-text-secondary text-sm">
            Admin functions use role-based access control with multi-signature requirements.
            This prevents single points of failure and ensures operational security.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">Pausable</h3>
          <p className="text-usc-text-secondary text-sm">
            The contract includes a pause mechanism for emergency situations. When paused,
            transfers are blocked but users retain ownership of their tokens. This is a
            standard safety feature for regulated stablecoins.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Token Details</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Name</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">Classic USD</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Symbol</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">USC</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Decimals</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">6</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Standard</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">ERC-20</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm font-medium text-usc-text">Proxy Standard</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary font-mono">EIP-1967</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Key Functions</h2>

      <div className="space-y-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <code className="text-usc-green text-sm">mint(address to, uint256 amount)</code>
          <p className="text-usc-text-secondary text-sm mt-2">
            Creates new tokens and sends them to the specified address. Only callable by
            authorized minters (Brale).
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <code className="text-usc-green text-sm">burn(uint256 amount)</code>
          <p className="text-usc-text-secondary text-sm mt-2">
            Destroys tokens from the caller&apos;s balance. Used during redemption to remove
            tokens from circulation.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <code className="text-usc-green text-sm">pause() / unpause()</code>
          <p className="text-usc-text-secondary text-sm mt-2">
            Emergency controls to halt transfers. Only callable by authorized admin roles
            with multi-sig.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Security Considerations</h2>

      <ul className="list-disc list-inside space-y-2 text-usc-text-secondary mb-8">
        <li>Multi-signature requirements for all admin operations</li>
        <li>Timelock delays for significant changes</li>
        <li>Regular security assessments and monitoring</li>
        <li>Established incident response procedures</li>
        <li>SOC 2 compliance (Brale infrastructure)</li>
      </ul>

      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 mb-8">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-blue-400 text-sm">
              For detailed API documentation and integration guides, see the{' '}
              <a href={LINKS.braleDocs} target="_blank" rel="noopener noreferrer" className="underline">
                Brale documentation
              </a>.
            </p>
          </div>
        </div>
      </div>

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
          href="/docs/technical/examples"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Code Examples
        </Link>
        <Link
          href="/docs/technical/api"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          API Reference
        </Link>
      </div>
    </div>
  );
}
