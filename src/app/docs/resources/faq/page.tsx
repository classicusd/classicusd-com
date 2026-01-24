import Link from 'next/link';
import { PARTNERS, LINKS } from '@/lib/constants';

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Classic USD ($USC).',
};

const faqs = [
  {
    question: 'What is Classic USD ($USC)?',
    answer: `Classic USD is a fiat-backed stablecoin issued on Ethereum Classic and Polygon. Each $USC token is backed 1:1 by US dollars held in reserve, making it redeemable at any time for USD, USDC, or USDP through the Brale Platform.`,
  },
  {
    question: 'Who issues Classic USD?',
    answer: `Classic USD is issued by Brale Inc., a US-regulated financial services company (NMLS #${PARTNERS.brale.nmls}). Brale holds state money transmission licenses and maintains full compliance with US financial regulations.`,
  },
  {
    question: 'How is $USC backed?',
    answer: `Every $USC token is backed 1:1 by US dollars held in segregated reserve accounts at regulated US financial institutions. Brale provides regular third-party attestations to verify that reserves match or exceed the tokens in circulation.`,
  },
  {
    question: 'How do I get Classic USD?',
    answer: `You can get $USC in two ways: (1) Mint directly through the Brale Platform by depositing USD, or (2) Trade for it on decentralized exchanges like ETCswap. The Brale Platform is best for larger amounts, while DEXs offer instant access.`,
  },
  {
    question: 'What can I redeem $USC for?',
    answer: `$USC can be redeemed 1:1 for: USD (via bank transfer to your account), USDC (Circle), or USDP (Paxos). All redemptions are processed through the Brale Platform with no slippage.`,
  },
  {
    question: 'Why Ethereum Classic?',
    answer: `Ethereum Classic is a proof-of-work blockchain with strong decentralization and immutability guarantees. $USC brings dollar liquidity to ETC's growing DeFi ecosystem and enables the network to participate in the broader stablecoin economy.`,
  },
  {
    question: 'Is Classic USD audited?',
    answer: `Yes. Brale provides regular third-party attestations verifying that $USC reserves match or exceed the tokens in circulation. The $USC smart contract follows standard ERC-20 patterns and has been reviewed for security.`,
  },
  {
    question: 'What are the fees?',
    answer: `Fee structures vary based on the type of transaction and volume. For current fee schedules, please contact Brale directly or check their documentation. Trading on DEXs involves standard swap fees and gas costs.`,
  },
  {
    question: 'Is there a minimum amount to mint?',
    answer: `Minimum amounts may apply for direct minting through Brale. For smaller amounts, trading on ETCswap is often more practical. Check with Brale for current minimum requirements.`,
  },
  {
    question: 'How long does minting take?',
    answer: `Minting time depends on your deposit method. ACH transfers typically settle in 1-3 business days, while wire transfers can settle same-day. Once your deposit clears, $USC is minted and sent to your wallet within minutes.`,
  },
  {
    question: 'Can I use $USC in DeFi?',
    answer: `Yes! $USC is integrated with ETCswap V2 and V3, where you can trade, provide liquidity, and earn fees. As the ETC DeFi ecosystem grows, expect more integrations.`,
  },
  {
    question: 'Is $USC available for businesses?',
    answer: `Yes. Brale offers API access for businesses that need programmatic minting, redemption, and treasury management. Contact Brale for enterprise solutions.`,
  },
  {
    question: 'What happens if Brale goes out of business?',
    answer: `All USD reserves backing $USC are held in segregated accounts, separate from Brale's operational funds. In the event of any business disruption, reserves would be used to honor redemptions. Brale's regulatory status provides additional protections.`,
  },
  {
    question: 'How do I add $USC to my wallet?',
    answer: `Most wallets auto-detect tokens after you receive them. If not, manually add $USC using the contract address for your network (ETC Chain ID: 61). The token uses 6 decimals.`,
  },
];

export default function FAQPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Frequently Asked Questions
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Common questions about Classic USD. Can&apos;t find what you&apos;re looking for?
        Check the <a href={LINKS.braleDocs} target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline">Brale documentation</a> or
        reach out to the team.
      </p>

      <div className="space-y-4 mb-8">
        {faqs.map((faq, index) => (
          <div key={index} className="p-5 rounded-xl bg-usc-surface border border-usc-border">
            <h3 className="text-lg font-semibold text-usc-text mb-2">
              {faq.question}
            </h3>
            <p className="text-usc-text-secondary text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Still Have Questions?</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <a
          href={LINKS.braleDocs}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <h3 className="text-usc-text font-semibold mb-1 group-hover:text-usc-green transition-colors">
            Brale Documentation
          </h3>
          <p className="text-usc-text-secondary text-sm">
            Detailed API docs and guides for developers.
          </p>
        </a>

        <Link
          href="/docs/resources/glossary"
          className="p-4 rounded-xl bg-usc-surface border border-usc-border hover:border-usc-green transition-colors group"
        >
          <h3 className="text-usc-text font-semibold mb-1 group-hover:text-usc-green transition-colors">
            Glossary
          </h3>
          <p className="text-usc-text-secondary text-sm">
            Definitions of key terms and concepts.
          </p>
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Related Pages</h2>

      <div className="space-y-2">
        <Link
          href="/docs/getting-started/what-is-usc"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          What is Classic USD?
        </Link>
        <Link
          href="/docs/guides/minting"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Minting & Redemption Guide
        </Link>
        <Link
          href="/docs/token/contracts"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Contract Addresses
        </Link>
      </div>
    </div>
  );
}
