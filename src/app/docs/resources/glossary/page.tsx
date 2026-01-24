import Link from 'next/link';

export const metadata = {
  title: 'Glossary',
  description: 'Key terms and definitions for Classic USD ($USC) and stablecoins.',
};

const terms = [
  {
    term: 'Stablecoin',
    definition: 'A cryptocurrency designed to maintain a stable value relative to a reference asset, typically the US dollar. Stablecoins can be fiat-backed, crypto-backed, or algorithmic.',
  },
  {
    term: 'Fiat-Backed Stablecoin',
    definition: 'A stablecoin backed by traditional currency (like USD) held in reserve. Each token can be redeemed for the underlying fiat currency, maintaining the 1:1 peg.',
  },
  {
    term: 'Mint',
    definition: 'The process of creating new stablecoin tokens. For $USC, minting occurs when a user deposits USD with Brale, and new tokens are issued to their wallet.',
  },
  {
    term: 'Redeem / Burn',
    definition: 'The process of exchanging stablecoin tokens for the underlying asset. When $USC is redeemed, the tokens are "burned" (destroyed) and USD is sent to the user.',
  },
  {
    term: 'ERC-20',
    definition: 'A technical standard for fungible tokens on Ethereum-compatible blockchains. $USC follows the ERC-20 standard, ensuring compatibility with wallets, exchanges, and DeFi protocols.',
  },
  {
    term: 'Attestation',
    definition: 'A formal verification by an independent third party confirming that reserve assets match or exceed the stablecoin supply. Brale provides regular attestations for $USC.',
  },
  {
    term: 'NMLS',
    definition: 'Nationwide Multistate Licensing System. A database used by US financial regulators to track licensed money transmitters. Brale is registered under NMLS #2376957.',
  },
  {
    term: 'Money Transmitter License (MTL)',
    definition: 'A state-level license required to operate as a money services business in the US. Brale holds MTLs in states where required to issue and redeem $USC.',
  },
  {
    term: 'Custodial Wallet',
    definition: 'A wallet where a third party (like Brale) manages the private keys. Brale uses MPC (Multi-Party Computation) custody for secure key management.',
  },
  {
    term: 'Non-Custodial Wallet',
    definition: 'A wallet where the user controls the private keys. When you withdraw $USC from Brale to your own wallet, you have non-custodial control.',
  },
  {
    term: 'DeFi (Decentralized Finance)',
    definition: 'Financial services built on blockchain technology that operate without traditional intermediaries. $USC can be used in DeFi protocols like ETCswap for trading and liquidity provision.',
  },
  {
    term: 'DEX (Decentralized Exchange)',
    definition: 'An exchange that operates using smart contracts rather than a centralized order book. ETCswap is the primary DEX for trading $USC on Ethereum Classic.',
  },
  {
    term: 'AMM (Automated Market Maker)',
    definition: 'A type of DEX that uses liquidity pools and mathematical formulas to determine prices, rather than an order book. ETCswap V2 uses a constant product AMM.',
  },
  {
    term: 'Liquidity Pool',
    definition: 'A smart contract holding paired tokens that enables trading on a DEX. Users can provide liquidity to pools (e.g., ETC/$USC) and earn trading fees.',
  },
  {
    term: 'Concentrated Liquidity',
    definition: 'An AMM feature (used by ETCswap V3) where liquidity providers can allocate capital to specific price ranges, improving capital efficiency.',
  },
  {
    term: 'Slippage',
    definition: 'The difference between the expected price of a trade and the actual execution price. Direct minting/redemption through Brale has zero slippage.',
  },
  {
    term: 'Gas',
    definition: 'The fee paid to execute transactions on a blockchain. On Ethereum Classic, gas is paid in ETC. Gas costs vary based on network congestion and transaction complexity.',
  },
  {
    term: 'Chain ID',
    definition: 'A unique identifier for a blockchain network. Ethereum Classic uses Chain ID 61, Polygon uses 137, and Mordor testnet uses 63.',
  },
  {
    term: 'Proxy Contract',
    definition: 'A smart contract pattern that separates storage from logic, allowing upgrades without changing the contract address. $USC uses an upgradeable proxy pattern.',
  },
  {
    term: 'Multi-Signature (Multi-Sig)',
    definition: 'A security feature requiring multiple parties to approve a transaction. Used to protect admin functions on the $USC contract.',
  },
  {
    term: 'Proof of Work (PoW)',
    definition: 'A consensus mechanism where miners compete to solve computational puzzles. Ethereum Classic uses PoW, providing security and decentralization.',
  },
  {
    term: 'BSA/AML',
    definition: 'Bank Secrecy Act / Anti-Money Laundering. US regulations requiring financial institutions to monitor and report suspicious activities. Brale maintains BSA/AML compliance.',
  },
  {
    term: 'KYC (Know Your Customer)',
    definition: 'Identity verification process required by financial regulations. Users must complete KYC to mint or redeem $USC directly through Brale.',
  },
];

export default function GlossaryPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Glossary
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Key terms and definitions related to Classic USD, stablecoins, and blockchain technology.
      </p>

      <div className="space-y-4 mb-8">
        {terms.map((item, index) => (
          <div key={index} className="p-4 rounded-lg bg-usc-surface border border-usc-border">
            <h3 className="text-lg font-semibold text-usc-text mb-1">{item.term}</h3>
            <p className="text-usc-text-secondary text-sm">{item.definition}</p>
          </div>
        ))}
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
          href="/docs/resources/faq"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Frequently Asked Questions
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
      </div>
    </div>
  );
}
