'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';
import { PARTNERS, LINKS, INTEGRATIONS, CHAINS } from '@/lib/constants';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-usc-gold/10 border border-usc-gold/30"
            variants={staggerItem}
          >
            <span className="text-usc-gold text-sm font-medium">
              Issued by Brale · NMLS #{PARTNERS.brale.nmls}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={staggerItem}
          >
            <span className="text-white">The First </span>
            <span className="text-gradient-usc">Fiat-Backed Stablecoin</span>
            <span className="text-white"> on Ethereum Classic</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto"
            variants={staggerItem}
          >
            Classic USD (USC) is backed by fiat reserves, offering stability and trust.
            Each USC is exchangeable for one US dollar, ensuring reliability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerItem}
          >
            <Button href={LINKS.braleApp} size="lg" external>
              Get USC
            </Button>
            <Button href={INTEGRATIONS.etcswapV3.url} variant="outline" size="lg" external>
              Trade on ETCswap
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 text-text-muted text-sm"
            variants={staggerItem}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-usc-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>US Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-usc-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>1:1 USD Backed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-usc-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Third-Party Attestations</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why USC Section */}
      <section className="py-24 px-4 bg-section-alt">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Classic USD?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The fiat-backed stablecoin unlocking seamless global payments for developers and businesses on Ethereum Classic.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stability */}
            <motion.div
              className="p-8 rounded-2xl panel"
              variants={staggerItem}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-usc-gold/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-usc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Stability & Backing</h3>
              <p className="text-text-secondary">
                Backed by fiat reserves with automated reserve management. Brale provides third-party attestations to ensure US-regulated backing.
              </p>
            </motion.div>

            {/* Interoperability */}
            <motion.div
              className="p-8 rounded-2xl panel"
              variants={staggerItem}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-usc-gold/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-usc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Interoperability</h3>
              <p className="text-text-secondary">
                Redeemable 1:1 for USD, USDC, or USDP. Classic USD bridges Ethereum Classic to the greater EVM ecosystem.
              </p>
            </motion.div>

            {/* DeFi Ready */}
            <motion.div
              className="p-8 rounded-2xl panel"
              variants={staggerItem}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-usc-gold/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-usc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DeFi Ready</h3>
              <p className="text-text-secondary">
                Integrated with ETCswap V2 and V3. Essential infrastructure for composable DeFi on Ethereum Classic.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Backed by Brale Section */}
      <section className="py-24 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-usc-gold/10 border border-usc-gold/30">
                <span className="text-usc-gold text-xs font-medium uppercase tracking-wider">
                  US Regulated
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Backed by Brale
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Brale provides automated reserve management with third-party attestations
                to ensure US-regulated backing of Classic USD. Each USC token is fully
                collateralized and redeemable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-usc-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-usc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">NMLS #{PARTNERS.brale.nmls}</h4>
                    <p className="text-text-secondary text-sm">Licensed money transmitter with state-by-state compliance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-usc-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-usc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Third-Party Attestations</h4>
                    <p className="text-text-secondary text-sm">Regular reserve verification by independent auditors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-usc-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-usc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Segregated Reserves</h4>
                    <p className="text-text-secondary text-sm">Customer funds held in regulated US financial institutions</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl panel-strong"
              variants={staggerItem}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-usc-gold/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-usc-gold">$</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">1 USC = 1 USD</h3>
                <p className="text-text-secondary mb-6">
                  Always redeemable at par value through the Brale Platform
                </p>
                <Button href={LINKS.braleApp} external className="w-full">
                  Mint or Redeem
                </Button>
                <a
                  href={LINKS.braleDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-text-muted hover:text-usc-gold transition-colors"
                >
                  View Documentation →
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Network Support Section */}
      <section className="py-24 px-4 bg-section-alt">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Chain Support
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Classic USD is built as a multi-chain stablecoin to support new networks
              and emerging ecosystems, vital for blockchain growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Ethereum Classic - Primary */}
            <motion.div
              className="p-6 rounded-2xl panel-strong relative overflow-hidden"
              variants={staggerItem}
            >
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 text-xs font-medium bg-usc-gold text-usc-black rounded">
                  Primary
                </span>
              </div>
              <div className="w-12 h-12 mb-4 rounded-xl bg-etc-green/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-etc-green" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 12l8 5 8-5-8-10zm0 15l-8-5 8 10 8-10-8 5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{CHAINS.etc.name}</h3>
              <p className="text-text-secondary text-sm mb-4">
                The home of Classic USD. Native integration with ETCswap and the ETC DeFi ecosystem.
              </p>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span className="px-2 py-1 bg-usc-gray rounded">Chain ID: {CHAINS.etc.id}</span>
                <span className="px-2 py-1 bg-usc-gray rounded">{CHAINS.etc.symbol}</span>
              </div>
            </motion.div>

            {/* Polygon */}
            <motion.div
              className="p-6 rounded-2xl panel"
              variants={staggerItem}
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 7.5L12 4 6.5 7.5V14L12 17.5l5.5-3.5V7.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{CHAINS.polygon.name}</h3>
              <p className="text-text-secondary text-sm mb-4">
                Extended reach to the Polygon ecosystem for broader DeFi access.
              </p>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span className="px-2 py-1 bg-usc-gray rounded">Chain ID: {CHAINS.polygon.id}</span>
                <span className="px-2 py-1 bg-usc-gray rounded">{CHAINS.polygon.symbol}</span>
              </div>
            </motion.div>

            {/* Mordor Testnet */}
            <motion.div
              className="p-6 rounded-2xl panel"
              variants={staggerItem}
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{CHAINS.mordor.name}</h3>
              <p className="text-text-secondary text-sm mb-4">
                Test integrations safely before deploying to mainnet.
              </p>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span className="px-2 py-1 bg-usc-gray rounded">Chain ID: {CHAINS.mordor.id}</span>
                <span className="px-2 py-1 bg-usc-gray rounded">{CHAINS.mordor.symbol}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Interoperability Section */}
      <section className="py-24 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="order-2 lg:order-1" variants={fadeInUp}>
              <div className="p-8 rounded-2xl panel">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Redeem 1:1 For
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-usc-gray">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-400 font-bold">$</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">US Dollar</p>
                        <p className="text-text-muted text-xs">Traditional USD</p>
                      </div>
                    </div>
                    <span className="text-usc-gold font-mono">1:1</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-usc-gray">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-sm">USDC</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">USD Coin</p>
                        <p className="text-text-muted text-xs">Circle</p>
                      </div>
                    </div>
                    <span className="text-usc-gold font-mono">1:1</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-usc-gray">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-emerald-400 font-bold text-sm">USDP</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Pax Dollar</p>
                        <p className="text-text-muted text-xs">Paxos</p>
                      </div>
                    </div>
                    <span className="text-usc-gold font-mono">1:1</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2" variants={fadeInUp}>
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-usc-gold/10 border border-usc-gold/30">
                <span className="text-usc-gold text-xs font-medium uppercase tracking-wider">
                  Bridge to EVM
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Interoperability Built In
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                Classic USD is the first interoperable bridge for Ethereum Classic to
                the greater EVM and Solana ecosystems. Seamlessly move value between
                chains through the Brale Platform.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-usc-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No slippage on redemptions</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-usc-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Institutional-grade liquidity</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-usc-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expand ETC&apos;s reach to other ecosystems</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* DeFi Integration Section */}
      <section className="py-24 px-4 bg-section-alt">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              DeFi on Ethereum Classic
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Classic USD is essential infrastructure for composable DeFi.
              Trade, provide liquidity, and build on the ETC ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ETCswap V3 */}
            <motion.a
              href={INTEGRATIONS.etcswapV3.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl panel hover:border-etc-green transition-colors group"
              variants={staggerItem}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-etc-green/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-etc-green" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <svg className="w-5 h-5 text-text-muted group-hover:text-etc-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{INTEGRATIONS.etcswapV3.name}</h3>
              <p className="text-text-secondary mb-4">
                {INTEGRATIONS.etcswapV3.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-etc-green/10 text-etc-green rounded-full">
                  Concentrated Liquidity
                </span>
                <span className="px-3 py-1 text-xs bg-etc-green/10 text-etc-green rounded-full">
                  USC Pairs
                </span>
              </div>
            </motion.a>

            {/* ETCswap V2 */}
            <motion.a
              href={INTEGRATIONS.etcswapV2.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl panel hover:border-etc-green transition-colors group"
              variants={staggerItem}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-etc-green/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-etc-green" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <svg className="w-5 h-5 text-text-muted group-hover:text-etc-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{INTEGRATIONS.etcswapV2.name}</h3>
              <p className="text-text-secondary mb-4">
                {INTEGRATIONS.etcswapV2.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-etc-green/10 text-etc-green rounded-full">
                  Classic AMM
                </span>
                <span className="px-3 py-1 text-xs bg-etc-green/10 text-etc-green rounded-full">
                  Stable Pools
                </span>
              </div>
            </motion.a>
          </div>

          <motion.div
            className="mt-12 text-center"
            variants={fadeInUp}
          >
            <p className="text-text-muted text-sm mb-4">
              Classic USD was required for ETCswap V3 deployment — the first concentrated
              liquidity DEX on Ethereum Classic.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Built with Trust
          </motion.h2>
          <motion.p
            className="text-text-secondary text-lg mb-12"
            variants={fadeInUp}
          >
            A partnership between regulated infrastructure and ETC expertise.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Brale */}
            <motion.a
              href={PARTNERS.brale.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl panel hover:border-usc-gold transition-colors"
              variants={staggerItem}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Brale</h3>
              <p className="text-usc-gold text-sm mb-4">NMLS #{PARTNERS.brale.nmls}</p>
              <p className="text-text-secondary">
                {PARTNERS.brale.description}
              </p>
            </motion.a>

            {/* White B0x */}
            <motion.a
              href={PARTNERS.whitebox.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl panel hover:border-usc-gold transition-colors"
              variants={staggerItem}
            >
              <h3 className="text-2xl font-bold text-white mb-2">White B0x</h3>
              <p className="text-usc-gold text-sm mb-4">Development Partner</p>
              <p className="text-text-secondary">
                {PARTNERS.whitebox.description}
              </p>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-section-alt">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Mint or redeem Classic USD through the Brale Platform, or trade on ETCswap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={LINKS.braleApp} size="lg" external>
              Brale Platform
            </Button>
            <Button href={LINKS.coingecko} variant="outline" size="lg" external>
              View on CoinGecko
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-usc-gray-light">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white font-bold text-lg mb-1">Classic USD</p>
              <p className="text-text-muted text-sm">
                The first fiat-backed stablecoin on Ethereum Classic
              </p>
            </div>
            <div className="flex gap-6 text-text-secondary text-sm">
              <a href={LINKS.coingecko} target="_blank" rel="noopener noreferrer" className="hover:text-usc-gold transition-colors">
                CoinGecko
              </a>
              <a href={LINKS.blockscout} target="_blank" rel="noopener noreferrer" className="hover:text-usc-gold transition-colors">
                Explorer
              </a>
              <a href={LINKS.braleDocs} target="_blank" rel="noopener noreferrer" className="hover:text-usc-gold transition-colors">
                Docs
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-usc-gray text-center text-text-muted text-xs">
            <p>
              Classic USD is issued by Brale Inc. NMLS #{PARTNERS.brale.nmls}.
              Not FDIC insured. May lose value.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
