import Link from 'next/link';
import { LINKS } from '@/lib/constants';

export const metadata = {
  title: 'Minting & Redemption',
  description: 'Learn how to mint and redeem Classic USD ($USC) through the Brale Platform.',
};

export default function MintingPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Minting & Redemption
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Classic USD is minted and redeemed through the <a href={LINKS.braleApp} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline">Brale Platform</a>.
        This guide covers the complete process for both individuals and businesses.
      </p>

      <div className="p-4 rounded-lg bg-usc-green/10 border border-usc-green/30 mb-8">
        <p className="text-usc-green text-sm">
          <strong>1 $USC = 1 USD</strong> — Always redeemable at par value. No slippage, no price impact.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">How Minting Works</h2>

      <p className="text-usc-text-secondary mb-6">
        When you mint $USC, you deposit US dollars with Brale, and they issue an equivalent
        amount of $USC tokens to your specified wallet address. The process is straightforward:
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-xl bg-usc-surface border border-usc-border text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold">
            1
          </div>
          <h3 className="text-usc-text font-semibold mb-2">Deposit USD</h3>
          <p className="text-usc-text-secondary text-sm">
            Send USD via ACH or wire transfer to Brale
          </p>
        </div>

        <div className="p-6 rounded-xl bg-usc-surface border border-usc-border text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold">
            2
          </div>
          <h3 className="text-usc-text font-semibold mb-2">Tokens Minted</h3>
          <p className="text-usc-text-secondary text-sm">
            $USC is minted 1:1 to your deposit amount
          </p>
        </div>

        <div className="p-6 rounded-xl bg-usc-surface border border-usc-border text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-usc-green flex items-center justify-center text-[#121412] font-bold">
            3
          </div>
          <h3 className="text-usc-text font-semibold mb-2">Receive $USC</h3>
          <p className="text-usc-text-secondary text-sm">
            Tokens sent to your ETC or Polygon wallet
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Step-by-Step Minting Guide</h2>

      <div className="space-y-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">1. Create a Brale Account</h3>
          <p className="text-usc-text-secondary text-sm mb-3">
            Sign up at <a href={LINKS.braleApp} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline">app.brale.xyz</a>.
            You&apos;ll need to complete identity verification (KYC) to comply with US regulations.
          </p>
          <p className="text-usc-text-muted text-xs">
            Required: Government ID, proof of address, basic personal information.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">2. Link Your Bank Account</h3>
          <p className="text-usc-text-secondary text-sm mb-3">
            Connect your US bank account for deposits and withdrawals. Brale supports ACH
            transfers and wire transfers.
          </p>
          <p className="text-usc-text-muted text-xs">
            ACH transfers typically settle in 1-3 business days. Wire transfers settle same-day.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">3. Initiate a Deposit</h3>
          <p className="text-usc-text-secondary text-sm mb-3">
            From your Brale dashboard, initiate a USD deposit. Specify the amount and follow
            the instructions to complete the transfer.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">4. Select Destination Network</h3>
          <p className="text-usc-text-secondary text-sm mb-3">
            Choose where you want to receive your $USC: Ethereum Classic (primary) or Polygon.
            Provide your wallet address for the selected network.
          </p>
          <p className="text-usc-text-muted text-xs">
            Double-check your wallet address. Tokens sent to the wrong address cannot be recovered.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">5. Receive Your $USC</h3>
          <p className="text-usc-text-secondary text-sm">
            Once your deposit clears, $USC will be minted and sent to your wallet. You&apos;ll
            receive confirmation via email and can track the transaction on-chain.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Redemption Process</h2>

      <p className="text-usc-text-secondary mb-6">
        Redemption is the reverse process — you burn $USC tokens and receive the equivalent value
        in USD, USDC, or USDP.
      </p>

      <div className="space-y-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">Redeem for USD</h3>
          <p className="text-usc-text-secondary text-sm">
            Send $USC to Brale and receive USD via ACH or wire transfer to your linked bank account.
            No fees on redemption; you receive exactly $1 for each $USC.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-lg font-semibold text-usc-text mb-2">Redeem for USDC/USDP</h3>
          <p className="text-usc-text-secondary text-sm">
            Prefer to stay on-chain? Redeem $USC 1:1 for USDC (Circle) or USDP (Paxos) on
            supported networks. Useful for accessing other DeFi ecosystems.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">For Businesses</h2>

      <p className="text-usc-text-secondary mb-4">
        Brale offers API access for businesses that need programmatic minting and redemption.
        The API supports:
      </p>

      <ul className="list-disc list-inside space-y-2 text-usc-text-secondary mb-6">
        <li>Batch minting for payroll or treasury operations</li>
        <li>Automated redemption workflows</li>
        <li>Real-time balance and transaction monitoring</li>
        <li>Webhook notifications for transaction status</li>
      </ul>

      <a
        href={LINKS.braleDocs}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline px-4 py-2 text-sm inline-block mb-8"
      >
        View Brale API Documentation
      </a>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Fees & Limits</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead className="border-b border-usc-border">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-usc-text">Action</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-usc-text">Fee</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-usc-text">Settlement Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm text-usc-text">Mint (ACH)</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">Contact Brale</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">1-3 business days</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm text-usc-text">Mint (Wire)</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">Contact Brale</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">Same day</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm text-usc-text">Redeem to USD</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">Contact Brale</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">1-3 business days</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 text-sm text-usc-text">Redeem to USDC/USDP</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">Contact Brale</td>
              <td className="px-4 py-3 text-sm text-usc-text-secondary">Same day</td>
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
              For current fee schedules and limits, contact Brale directly or check the
              <a href={LINKS.braleDocs} target="_blank" rel="noopener noreferrer" className="underline ml-1">Brale documentation</a>.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Next Steps</h2>

      <div className="space-y-2">
        <a
          href={LINKS.braleApp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Go to Brale Platform
        </a>
        <Link
          href="/docs/guides/trading"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Trade $USC on ETCswap
        </Link>
        <Link
          href="/docs/resources/faq"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Read the FAQ
        </Link>
      </div>
    </div>
  );
}
