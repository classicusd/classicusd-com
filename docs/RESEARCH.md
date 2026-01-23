# Classic USD Website - Research Reference

> Last Updated: 2025-01-23

---

## Product Information

### Classic USD (USC)
- **Name**: Classic USD
- **Ticker**: USC
- **Decimals**: 6
- **Primary Network**: Ethereum Classic (ETC)
- **Secondary Network**: Polygon
- **Testnet**: Mordor
- **Launch Date**: April 2024
- **CoinGecko ID**: `classic-usd`
- **CoinGecko URL**: https://www.coingecko.com/en/coins/classic-usd

### Key Value Propositions
1. **First native fiat-backed stablecoin on Ethereum Classic**
2. **Regulated issuer** (Brale Inc., NMLS #2376957)
3. **1:1 redeemable** for USD, USDC, or USDP
4. **Bridge to greater EVM ecosystem** via interoperability
5. **Required for composable DeFi** on ETC (ETCswap V3 dependency)

---

## Partners

### White B0x Inc.
- **Role**: Development team
- **Website**: https://whiteb0x.com
- **Products**: Composable DeFi stack on Ethereum Classic

### Brale Inc.
- **Role**: Regulated issuer and platform operator
- **Website**: https://brale.xyz
- **NMLS ID**: 2376957
- **Regulation**: US money transmission licensing

---

## Current Integrations

### ETCswap V2
- Clone of Uniswap V2 on Ethereum Classic
- USC trading pairs available

### ETCswap V3
- Clone of Uniswap V3 on Ethereum Classic
- **Dependent on USC** for deployment (native stablecoin requirement)

---

## Inspirational Websites

### Circle USDC (https://www.circle.com/usdc)

**Key Sections Observed:**
1. Hero: "World's largest regulated stablecoin powering global finance"
2. Why Businesses Choose USDC (4 pillars)
3. Active network stats (transaction volume, partners, growth)
4. Accessibility/global reach
5. Security/Trust (fully backed, regulated, Big Four attestations)
6. Blockchain support grid (30+ networks)
7. Use case stories with partner logos
8. Get started dual pathways (partnership, developer)
9. Educational cards
10. FAQs (11 questions)

**Design Style:**
- Clean, professional aesthetic
- Gradient backgrounds
- Abundant whitespace
- Trust-focused color scheme (blues, purples, greens)

**Key Messaging:**
- Trustworthiness (reserve transparency, regulatory licenses, audits)
- Accessibility (24/7, global, multi-chain)
- Compliance ("world's largest regulated stablecoin")
- Innovation (programmable money, developer-ready)

**Trust Presentation:**
- $75.6B circulation displayed
- Monthly Deloitte & Touche attestations
- BlackRock custody highlighted
- SEC Covered Stablecoin classification

### Paxos USDP (https://www.paxos.com/usdp)

**Key Sections Observed:**
1. Hero (700px height, centered)
2. Trust & Compliance (OCC National Trust Charter #25379)
3. Features/Benefits (3-column)
4. How It Works technical section
5. Product showcase
6. Footer

**Design Style:**
- Clean white background
- Green accents (#c7e36c, #a1d62c)
- Sans-serif typography (Geist)
- Responsive breakpoints (1440px, 810px, 390px)

**Trust Presentation:**
- OCC Charter number prominently displayed
- "Fully reserved, dollar-backed" messaging
- Federal regulatory oversight emphasis
- Consumer protection standards

### SBC Stablecoin (https://stablecoin.xyz/) - PRIMARY COPY REFERENCE

> **Note**: SBC is another Brale-issued stablecoin. Copy is directly applicable to Classic USD since both share the same Brale infrastructure, features, and regulatory backing.

**Hero Messaging:**
- "The fiat-backed stablecoin unlocking seamless global payments for developers and businesses"

**Key Copy Points (adapt for USC):**

1. **Stability & Backing**:
   - "Backed by fiat reserves, offering stability and trust"
   - "Each token is exchangeable for one US dollar, ensuring reliability"
   - "Brale provides automated reserve management with third-party attestations"
   - "US-regulated backing"

2. **Multi-chain Support**:
   - "Built as a multi-chain stablecoin to support new networks and emerging ecosystems"
   - "Vital for blockchain growth"

3. **Technical Features** (adapt relevant ones):
   - Wallet integration (Metamask, Rainbow, etc.)
   - DEX integration (Uniswap-style)

**Related Resources:**
- Docs: https://docs.stablecoin.xyz/
- Swap: https://swap.stablecoin.xyz/
- MassPay: https://masspay.stablecoin.xyz/

**Copy Adaptation Notes for USC:**
- Replace "SBC" with "Classic USD" or "USC"
- Replace generic "multi-chain" with "Ethereum Classic (primary), Polygon"
- Add ETC-specific value props (first on ETC, ETCswap integration)
- Keep Brale regulatory messaging verbatim

---

## Monorepo Reference Projects

### ethereumclassic-com
- **Stack**: Next.js 16.1.1, React 19.2.3, Tailwind 4, TypeScript
- **Package Manager**: npm
- **Node**: 22.x (via .nvmrc)
- **Key Patterns**:
  - Live data integration with CoinGecko (24h cache)
  - Framer Motion animations (FadeIn, HoverLift)
  - Design tokens in /app/styles/tokens.css
  - MDX content management
  - i18n support (3 languages)
  - 137 pages across 13+ sections

### wrappedether
- **Stack**: Next.js 16.1.3, React 19.2.3, Tailwind 4, TypeScript
- **Package Manager**: pnpm 9.x
- **Node**: ≥22.0.0
- **Key Patterns**:
  - Custom SVG animations with Framer Motion
  - BackgroundSystem with network visualization
  - Centralized animation presets (/lib/animations.ts)
  - Constants file for contract addresses
  - Dark theme optimized
  - Single-page marketing site structure

---

## Technology Stack Research (2025)

### Node.js LTS
- **Recommended**: Node.js 22.x (Active LTS "Jod")
- **Status**: Active LTS until October 2025, Maintenance until April 2027
- **Alternative**: Node.js 24.x (Newest LTS "Krypton", October 2025)
- **Source**: https://nodejs.org/en/about/previous-releases

### Next.js
- **Recommended**: Next.js 16.x
- **Key Changes**:
  - Turbopack stable and default
  - 2-5x faster production builds
  - 10x faster Fast Refresh
  - Async Request APIs required (sync removed)
  - `use cache` directive for explicit caching
  - proxy.ts replaces middleware.ts
- **Source**: https://nextjs.org/docs/app/guides/upgrading/version-16

### React
- **Recommended**: React 19.x (19.2.x latest)
- **Status**: Production-ready since December 5, 2024
- **Key Features**:
  - Server Components fully stable
  - Built-in compiler (reduces useMemo/useCallback needs)
  - 38% faster initial loads (average)
  - `<Activity>` API in 19.2
  - useEffectEvent hook
- **Compatibility**: 90%+ with React 18 code
- **Source**: https://react.dev/blog/2024/12/05/react-19

### Tailwind CSS
- **Recommended**: Tailwind CSS 4.x
- **Release Date**: January 22, 2025
- **Key Features**:
  - Oxide engine (Rust rewrite)
  - 5x faster full builds
  - 100x faster incremental builds
  - Zero configuration
  - Single CSS import: `@import "tailwindcss"`
  - Automatic content detection
  - First-party Vite plugin
- **Browser Support**: Safari 16.4+, Chrome 111+, Firefox 128+
- **Source**: https://tailwindcss.com/blog/tailwindcss-v4

---

## Future Integrations (Internal Notes)

> **Note**: These are not public-facing and should not appear on the website until announced.

1. **Rain Cards** - Debit card integration for ETC wallet holders
2. **Coinflow** - Fiat ramp for non-USD countries
3. **1Konto OTC** - Institutional money movement desk
4. **Prediction Market** - Native ETC prediction market with USC settlement
5. **Forex Marketplace** - Tokenized forex with USC as primary USD settlement

---

## URLs and Resources

### Official
- Classic USD: https://classicusd.com (target domain)
- White B0x: https://whiteb0x.com
- Brale Platform: https://brale.xyz

### Data Sources
- CoinGecko API: https://api.coingecko.com/api/v3/coins/classic-usd
- Blockscout ETC: https://etc.blockscout.com

### Inspiration & Copy Reference
- **SBC Stablecoin: https://stablecoin.xyz/** (PRIMARY - same Brale issuer, copy directly applicable)
- Circle USDC: https://www.circle.com/usdc (design/structure inspiration)
- Paxos USDP: https://www.paxos.com/usdp (trust messaging inspiration)

### Ecosystem
- ETCswap: https://etcswap.org (assumed)
- Ethereum Classic: https://ethereumclassic.org

---

*This document serves as the canonical reference for project research. Update as new information becomes available.*
