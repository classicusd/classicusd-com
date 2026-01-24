/**
 * Classic USD (USC) Contract and Link Constants
 * Canonical addresses for Classic USD stablecoin
 */

// Token Details
export const USC_TOKEN = {
  name: 'Classic USD',
  ticker: 'USC',
  decimals: 6,
  coingeckoId: 'classic-usd',
} as const;

// Contract Addresses
export const USC_CONTRACT = {
  etc: '0xDE093684c796204224BC081f937aa059D903c52a',
  polygon: '0x131409b31bf446737dd04353d43dacada544b6fa',
  mordor: '0xDE093684c796204224BC081f937aa059D903c52a',
} as const;

// Chain Configuration
export const CHAINS = {
  etc: {
    id: 61,
    name: 'Ethereum Classic',
    symbol: 'ETC',
    explorer: 'https://etc.blockscout.com',
    rpc: 'https://etc.rivet.link',
  },
  polygon: {
    id: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    explorer: 'https://polygonscan.com',
    rpc: 'https://polygon-rpc.com',
  },
  mordor: {
    id: 63,
    name: 'Mordor Testnet',
    symbol: 'METC',
    explorer: 'https://etc-mordor.blockscout.com',
    rpc: 'https://rpc.mordor.etccooperative.org',
  },
} as const;

// Contract Links
export const CONTRACT_LINKS = {
  etc: {
    address: `${CHAINS.etc.explorer}/address/${USC_CONTRACT.etc}`,
  },
  polygon: {
    address: `${CHAINS.polygon.explorer}/address/${USC_CONTRACT.polygon}`,
  },
  mordor: {
    address: `${CHAINS.mordor.explorer}/address/${USC_CONTRACT.mordor}`,
  },
} as const;

// Partners
export const PARTNERS = {
  brale: {
    name: 'Brale',
    url: 'https://brale.xyz',
    nmls: '2376957',
    description: 'Regulated issuer and platform operator',
  },
  whitebox: {
    name: 'White B0x',
    url: 'https://whiteb0x.com',
    description: 'Web3 Development Studio',
  },
} as const;

// DeFi Integrations
export const INTEGRATIONS = {
  etcswapV2: {
    name: 'ETCswap V2',
    url: 'https://v2.etcswap.org',
    logo: '/images/etcswapv2.svg',
    description: 'Trade USC on the leading ETC DEX',
  },
  etcswapV3: {
    name: 'ETCswap V3',
    url: 'https://v3.etcswap.org',
    logo: '/images/etcswapv3.svg',
    description: 'Advanced trading with concentrated liquidity',
  },
} as const;

// External Links
export const LINKS = {
  coingecko: 'https://www.coingecko.com/en/coins/classic-usd',
  braleApp: 'https://app.brale.xyz',
  braleDocs: 'https://docs.brale.xyz',
  ethereumClassic: 'https://ethereumclassic.com',
  blockscout: 'https://etc.blockscout.com',
} as const;

// Social Links
export const SOCIAL = {
  twitter: 'https://twitter.com/classicusd',
  ethereumClassic: 'https://twitter.com/eth_classic',
} as const;

// Site Metadata
export const SITE = {
  name: 'Classic USD',
  title: 'Classic USD | The US Dollar for Ethereum Classic',
  tagline: 'The US Dollar for Ethereum Classic',
  description: 'Classic USD ($USC) is the definitive stablecoin for Ethereum Classic. US-regulated, fully backed, and redeemable 1:1 for USD. Issued by Brale.',
  url: 'https://classicusd.com',
  image: '/images/og-usc.png',
  version: '0.1.0',
  twitterHandle: '@classicusd',
} as const;

// SEO Keywords organized by category
export const SEO_KEYWORDS = {
  primary: ['Classic USD', 'USC', 'stablecoin', 'Ethereum Classic stablecoin'],
  trust: ['fiat-backed', 'regulated stablecoin', 'US dollar', 'reserve-backed'],
  network: ['Ethereum Classic', 'ETC', 'Polygon', 'multi-chain'],
  defi: ['DeFi', 'ETCswap', 'decentralized exchange', 'liquidity'],
  issuer: ['Brale', 'regulated issuer', 'NMLS', 'money transmission'],
} as const;
