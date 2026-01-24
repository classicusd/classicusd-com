# Classic USD Website - Development Milestones

> **Project**: classicusd.com rebuild
> **Goal**: Professional stablecoin website inspired by Circle USDC and Paxos USDP
> **Stack**: Next.js 16 + React 19 + Tailwind 4 + TypeScript + pnpm

---

## Phase 0: Foundation Setup ✓
*Infrastructure and project scaffolding*

- [x] Initialize Next.js 16 project with TypeScript
- [x] Configure pnpm workspace and .nvmrc (Node 22)
- [x] Setup Tailwind CSS 4 with design tokens
- [x] Configure ESLint
- [x] Create base layout with dark theme
- [x] Setup Framer Motion animation library
- [x] Create reusable UI components (Button, Card, etc.)
- [x] Create BackgroundSystem component (network visualization)
- [x] Setup constants.ts with contract addresses and links
- [x] Configure metadata and SEO foundations

---

## Phase 1: Core Informational Pages ✓
*Primary website content - What is Classic USD?*

- [x] **Hero Section**: "The first fiat-backed stablecoin on Ethereum Classic"
- [x] **Why USC Section**: Trust, regulation, interoperability pillars
- [x] **Backed by Brale Section**: NMLS licensing, regulatory compliance
- [x] **Network Support Section**: ETC (primary), Polygon, Mordor testnet
- [x] **Interoperability Section**: 1:1 redeemable for USDC/USDP
- [x] **Partners Section**: White B0x, Brale logos and descriptions
- [x] **DeFi Integration Section**: ETCswap V2/V3 integration cards
- [x] **Footer**: Links, social, legal disclaimers

---

## Phase 2: Trust & Compliance ✓
*Establishing credibility like Circle/Paxos*

- [x] **Reserve Transparency Section**: Link to Brale attestations
- [x] **Regulatory Framework Section**: Brale NMLS #2376957 details
- [x] **How It Works Section**: Mint/redeem flow diagram
- [x] **FAQ Section**: Common questions about USC
- [x] **Security Section**: Smart contract audits, custody info
- [x] Add JSON-LD structured data for organization/cryptocurrency

---

## Phase 3: Documentation System (/docs) ✓
*Developer documentation modeled after docs.stablecoin.xyz and docs.brale.xyz*

### Structure & Navigation
- [x] Setup MDX-based docs system with sidebar navigation
- [x] Create /docs route with nested layouts
- [ ] Implement docs search functionality
- [x] Mobile-responsive docs navigation

### Core Documentation Sections
- [x] **Getting Started**: Introduction to Classic USD
- [x] **Token Information**: Contract addresses table (ETC, Polygon, Mordor)
- [x] **Minting & Redemption**: How to mint/redeem via Brale Platform
- [x] **Integration Guide**: Links to Brale API docs for developers
- [x] **Supported Chains**: ETC (primary), Polygon, testnet details

### Technical Documentation
- [x] **Smart Contract**: ERC-20 implementation details, proxy pattern
- [x] **API Reference**: Link to Brale Stablecoin API docs
- [x] **Code Examples**: viem/wagmi integration snippets
- [x] **Glossary**: Key terms (custodial wallets, deployments, etc.)

### Use Cases & Guides
- [x] **DeFi Integration**: Using $USC on ETCswap
- [x] **Trading Guide**: How to trade on ETCswap
- [x] **Onramp/Offramp**: Fiat to stablecoin conversion (via minting guide)

### Reference Content
- [x] Link to [Brale Stablecoin API Docs](https://docs.brale.xyz/)
- [x] Link to [SBC Documentation](https://docs.stablecoin.xyz/)
- [x] FAQ migration to docs format

---

## Phase 4: Live Data Integration ✓
*Dynamic content from external APIs*

- [x] Setup CoinGecko API integration (classic-usd)
- [x] Live price display with 24h change
- [x] Market cap and volume stats
- [x] Create /api/price route with caching
- [x] Add usePrice hook for components
- [x] Display circulating supply

---

## Phase 5: Developer Resources ✓
*For builders integrating USC*

- [x] **Contract Addresses Page**: ETC mainnet, Polygon, Mordor (`/docs/token/contracts`)
- [x] **Integration Guide Section**: Links to Brale docs (`/docs/technical/api`)
- [x] **Get USC Section**: How to acquire (Brale Platform, DEXs) (`/docs/getting-started/quick-start`)
- [x] Add code snippets for viem integration (`/docs/technical/examples`)

---

## Phase 6: Polish & Performance
*Production readiness*

- [ ] Implement site-wide search (docs + main site)
  - *Note: Implement after all content is finalized. Options: Algolia DocSearch, Pagefind, or Flexsearch for client-side*
- [x] Lighthouse audit (P:91 A:98 BP:96 SEO:100)
- [x] Mobile responsiveness audit (375px+)
- [x] Accessibility audit (WCAG AA compliant)
- [x] Image optimization (SVG assets + dynamic OG images)
- [x] Meta tags and OpenGraph images
- [x] Favicon and PWA manifest
- [x] Error boundaries and loading states
- [x] 404 page

---

## Phase 7: Launch Preparation ✓
*Final checks before go-live*

- [x] Content review and copyediting
- [x] Legal disclaimer review
- [x] Analytics setup (privacy-respecting, Plausible/Vercel ready)
- [x] Deployment configuration (vercel.json, .env.example)
- [ ] DNS and SSL verification (deploy-time)
- [x] Performance monitoring setup (sitemap.xml, robots.txt)

---

## Future Phases (Post-Launch)

### Phase 8: Mint/Redeem Integration
*Requires viem and wallet connection*

- [ ] Research Brale Platform API
- [ ] Wallet connection (wagmi/viem)
- [ ] Mint flow UI
- [ ] Redeem flow UI
- [ ] Transaction status tracking

### Phase 9: Ecosystem Expansion (Internal Roadmap)
*Not public-facing - internal tracking only*

- [ ] Rain Cards integration page (when ready)
- [ ] Coinflow fiat ramp integration (when ready)
- [ ] 1Konto OTC desk information (when ready)
- [ ] Prediction market announcement (when ready)
- [ ] Forex marketplace announcement (when ready)

---

## Technical Specifications

### Stack Decisions
| Component | Version | Rationale |
|-----------|---------|-----------|
| Node.js | 22.x LTS | Active LTS through Oct 2025, Maintenance through Apr 2027 |
| Next.js | 16.x | Turbopack stable, 2-5x faster builds |
| React | 19.x | Server Components stable, 38% faster initial loads |
| Tailwind | 4.x | Oxide engine, 5x faster builds, modern CSS |
| TypeScript | 5.x | Strict mode enabled |
| pnpm | 9.x | Fast, disk-efficient package manager |
| Framer Motion | 12.x | Smooth animations, reduced motion support |

### Contract Addresses
| Network | Address | Status |
|---------|---------|--------|
| ETC Mainnet | `0xDE093684c796204224BC081f937aa059D903c52a` | Primary ✓ |
| Polygon | `0x131409b31bf446737dd04353d43dacada544b6fa` | Secondary ✓ |
| Mordor Testnet | `0xDE093684c796204224BC081f937aa059D903c52a` | Testing ✓ |

### External Integrations
| Service | Purpose | Priority |
|---------|---------|----------|
| CoinGecko API | Price/market data | Phase 3 |
| Brale Platform | Mint/redeem (future) | Phase 7 |

---

## Progress Tracking

**Current Phase**: 7 - Launch Preparation (Complete)
**Last Updated**: 2026-01-24
**Overall Progress**: 97%

### Completion by Phase
| Phase | Status | Progress |
|-------|--------|----------|
| 0 - Foundation | Complete | 10/10 |
| 1 - Core Pages | Complete | 8/8 |
| 2 - Trust & Compliance | Complete | 6/6 |
| 3 - Documentation | Complete | 16/17 |
| 4 - Live Data | Complete | 6/6 |
| 5 - Developer | Complete | 4/4 |
| 6 - Polish | In Progress | 8/9 |
| 7 - Launch | Complete | 5/6 |

---

*This document is the source of truth for project progress. Update checkboxes as tasks complete.*
