# Classic USD Website - Development Milestones

> **Project**: classicusd.com rebuild
> **Goal**: Professional stablecoin website inspired by Circle USDC and Paxos USDP
> **Stack**: Next.js 16 + React 19 + Tailwind 4 + TypeScript + pnpm

---

## Phase 0: Foundation Setup
*Infrastructure and project scaffolding*

- [ ] Initialize Next.js 16 project with TypeScript
- [ ] Configure pnpm workspace and .nvmrc (Node 22)
- [ ] Setup Tailwind CSS 4 with design tokens
- [ ] Configure ESLint + Prettier
- [ ] Create base layout with dark theme
- [ ] Setup Framer Motion animation library
- [ ] Create reusable UI components (Button, Card, etc.)
- [ ] Create BackgroundSystem component (network visualization)
- [ ] Setup constants.ts with contract addresses and links
- [ ] Configure metadata and SEO foundations

---

## Phase 1: Core Informational Pages
*Primary website content - What is Classic USD?*

- [ ] **Hero Section**: "The first fiat-backed stablecoin on Ethereum Classic"
- [ ] **Why USC Section**: Trust, regulation, interoperability pillars
- [ ] **Backed by Brale Section**: NMLS licensing, regulatory compliance
- [ ] **Network Support Section**: ETC (primary), Polygon, Mordor testnet
- [ ] **Interoperability Section**: 1:1 redeemable for USDC/USDP
- [ ] **Partners Section**: White B0x, Brale logos and descriptions
- [ ] **DeFi Integration Section**: ETCswap V2/V3 integration cards
- [ ] **Footer**: Links, social, legal disclaimers

---

## Phase 2: Trust & Compliance
*Establishing credibility like Circle/Paxos*

- [ ] **Reserve Transparency Section**: Link to Brale attestations
- [ ] **Regulatory Framework Section**: Brale NMLS #2376957 details
- [ ] **How It Works Section**: Mint/redeem flow diagram
- [ ] **FAQ Section**: Common questions about USC
- [ ] **Security Section**: Smart contract audits, custody info
- [ ] Add JSON-LD structured data for organization/cryptocurrency

---

## Phase 3: Live Data Integration
*Dynamic content from external APIs*

- [ ] Setup CoinGecko API integration (classic-usd)
- [ ] Live price display with 24h change
- [ ] Market cap and volume stats
- [ ] Create /api/price route with caching
- [ ] Add usePrice hook for components
- [ ] Display circulating supply

---

## Phase 4: Developer Resources
*For builders integrating USC*

- [ ] **Contract Addresses Page**: ETC mainnet, Polygon, Mordor
- [ ] **Integration Guide Section**: Links to Brale docs
- [ ] **Get USC Section**: How to acquire (Brale Platform, DEXs)
- [ ] Add code snippets for viem integration (reference only)

---

## Phase 5: Polish & Performance
*Production readiness*

- [ ] Lighthouse audit (target >90 all categories)
- [ ] Mobile responsiveness audit (375px+)
- [ ] Accessibility audit (WCAG AA)
- [ ] Image optimization
- [ ] Meta tags and OpenGraph images
- [ ] Favicon and PWA manifest
- [ ] Error boundaries and loading states
- [ ] 404 page

---

## Phase 6: Launch Preparation
*Final checks before go-live*

- [ ] Content review and copyediting
- [ ] Legal disclaimer review
- [ ] Analytics setup (privacy-respecting)
- [ ] Deployment configuration (Vercel/other)
- [ ] DNS and SSL verification
- [ ] Performance monitoring setup

---

## Future Phases (Post-Launch)

### Phase 7: Mint/Redeem Integration
*Requires viem and wallet connection*

- [ ] Research Brale Platform API
- [ ] Wallet connection (wagmi/viem)
- [ ] Mint flow UI
- [ ] Redeem flow UI
- [ ] Transaction status tracking

### Phase 8: Ecosystem Expansion (Internal Roadmap)
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
| ETC Mainnet | TBD | Primary |
| Polygon | TBD | Secondary |
| Mordor Testnet | TBD | Testing |

### External Integrations
| Service | Purpose | Priority |
|---------|---------|----------|
| CoinGecko API | Price/market data | Phase 3 |
| Brale Platform | Mint/redeem (future) | Phase 7 |

---

## Progress Tracking

**Current Phase**: 0 - Foundation Setup
**Last Updated**: 2025-01-23
**Overall Progress**: 0%

### Completion by Phase
| Phase | Status | Progress |
|-------|--------|----------|
| 0 - Foundation | Not Started | 0/10 |
| 1 - Core Pages | Not Started | 0/8 |
| 2 - Trust | Not Started | 0/6 |
| 3 - Live Data | Not Started | 0/6 |
| 4 - Developer | Not Started | 0/4 |
| 5 - Polish | Not Started | 0/8 |
| 6 - Launch | Not Started | 0/6 |

---

*This document is the source of truth for project progress. Update checkboxes as tasks complete.*
