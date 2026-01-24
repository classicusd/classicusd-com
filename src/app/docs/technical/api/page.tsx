import { LINKS } from '@/lib/constants';

export const metadata = {
  title: 'API Reference',
  description: 'API documentation for Classic USD ($USC) integrations.',
};

export default function APIPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        API Reference
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Classic USD operations are powered by the Brale Stablecoin API. This page provides
        an overview and links to the full API documentation.
      </p>

      <div className="p-6 rounded-xl bg-usc-green/5 border border-usc-green/20 mb-8">
        <h2 className="text-xl font-bold text-usc-text mb-3">Brale Stablecoin API</h2>
        <p className="text-usc-text-secondary mb-4">
          The Brale API enables programmatic minting, redemption, and management of $USC.
          It&apos;s designed for businesses and developers who need to integrate stablecoin
          operations into their applications.
        </p>
        <a
          href={LINKS.braleDocs}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-4 py-2 text-sm inline-block"
        >
          View Full API Documentation
        </a>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">API Capabilities</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Token Operations</h3>
          <ul className="text-usc-text-secondary text-sm space-y-1">
            <li>- Mint $USC from USD deposits</li>
            <li>- Redeem $USC to USD/USDC/USDP</li>
            <li>- Query token balances</li>
            <li>- Track transaction status</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Account Management</h3>
          <ul className="text-usc-text-secondary text-sm space-y-1">
            <li>- Create and manage accounts</li>
            <li>- Link bank accounts</li>
            <li>- Manage wallet addresses</li>
            <li>- Configure automations</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Transfers</h3>
          <ul className="text-usc-text-secondary text-sm space-y-1">
            <li>- Send $USC between addresses</li>
            <li>- Batch payouts</li>
            <li>- Cross-chain transfers</li>
            <li>- Fiat on/off ramps</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-usc-surface border border-usc-border">
          <h3 className="text-usc-text font-semibold mb-2">Webhooks & Events</h3>
          <ul className="text-usc-text-secondary text-sm space-y-1">
            <li>- Transaction notifications</li>
            <li>- Status updates</li>
            <li>- Balance changes</li>
            <li>- Compliance events</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Authentication</h2>

      <p className="text-usc-text-secondary mb-4">
        The Brale API uses API keys for authentication. You&apos;ll need to:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-usc-text-secondary mb-8">
        <li>Create a Brale account and complete verification</li>
        <li>Generate API credentials from your dashboard</li>
        <li>Include your API key in request headers</li>
        <li>Use appropriate scopes for different operations</li>
      </ol>

      <div className="p-4 rounded-lg bg-usc-surface border border-usc-border mb-8">
        <p className="text-usc-text-muted text-xs mb-2">Example Authentication Header</p>
        <code className="text-usc-green text-sm">
          Authorization: Bearer your_api_key_here
        </code>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Rate Limits</h2>

      <p className="text-usc-text-secondary mb-4">
        API rate limits vary by endpoint and account tier. Contact Brale for specific
        limits and enterprise options.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">SDKs & Tools</h2>

      <div className="space-y-3 mb-8">
        <a
          href={LINKS.braleDocs}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">Postman Collection</p>
            <p className="text-usc-text-secondary text-sm">
              Explore and test API endpoints interactively
            </p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 mb-8">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-blue-400 text-sm">
              <strong>Need help?</strong> Contact Brale support for API access, custom integrations,
              or enterprise solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
