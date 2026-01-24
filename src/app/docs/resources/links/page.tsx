import { LINKS, PARTNERS, INTEGRATIONS, CHAINS, SOCIAL } from '@/lib/constants';

export const metadata = {
  title: 'External Links',
  description: 'Official links and resources for Classic USD ($USC).',
};

export default function LinksPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        External Links
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Official links and resources for Classic USD. Always verify URLs before interacting
        with any service.
      </p>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Brale (Issuer)</h2>

      <div className="space-y-3 mb-8">
        <a
          href={LINKS.braleApp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">Brale Platform</p>
            <p className="text-usc-text-muted text-xs">{LINKS.braleApp}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href={LINKS.braleDocs}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">Brale API Documentation</p>
            <p className="text-usc-text-muted text-xs">{LINKS.braleDocs}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href={PARTNERS.brale.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">Brale Website</p>
            <p className="text-usc-text-muted text-xs">{PARTNERS.brale.url}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Trading</h2>

      <div className="space-y-3 mb-8">
        <a
          href={INTEGRATIONS.etcswapV3.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">{INTEGRATIONS.etcswapV3.name}</p>
            <p className="text-usc-text-muted text-xs">{INTEGRATIONS.etcswapV3.url}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href={INTEGRATIONS.etcswapV2.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">{INTEGRATIONS.etcswapV2.name}</p>
            <p className="text-usc-text-muted text-xs">{INTEGRATIONS.etcswapV2.url}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Market Data</h2>

      <div className="space-y-3 mb-8">
        <a
          href={LINKS.coingecko}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">CoinGecko</p>
            <p className="text-usc-text-muted text-xs">{LINKS.coingecko}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Block Explorers</h2>

      <div className="space-y-3 mb-8">
        <a
          href={CHAINS.etc.explorer}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">ETC Blockscout</p>
            <p className="text-usc-text-muted text-xs">{CHAINS.etc.explorer}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href={CHAINS.polygon.explorer}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">PolygonScan</p>
            <p className="text-usc-text-muted text-xs">{CHAINS.polygon.explorer}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href={CHAINS.mordor.explorer}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">Mordor Blockscout (Testnet)</p>
            <p className="text-usc-text-muted text-xs">{CHAINS.mordor.explorer}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Social</h2>

      <div className="space-y-3 mb-8">
        <a
          href={SOCIAL.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">Classic USD Twitter</p>
            <p className="text-usc-text-muted text-xs">{SOCIAL.twitter}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Partners</h2>

      <div className="space-y-3 mb-8">
        <a
          href={PARTNERS.whitebox.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">{PARTNERS.whitebox.name}</p>
            <p className="text-usc-text-secondary text-sm">{PARTNERS.whitebox.description}</p>
            <p className="text-usc-text-muted text-xs mt-1">{PARTNERS.whitebox.url}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href={LINKS.ethereumClassic}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg bg-usc-surface border border-usc-border hover:border-usc-green transition-colors"
        >
          <div>
            <p className="text-usc-text font-semibold">Ethereum Classic</p>
            <p className="text-usc-text-muted text-xs">{LINKS.ethereumClassic}</p>
          </div>
          <svg className="w-5 h-5 text-usc-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
