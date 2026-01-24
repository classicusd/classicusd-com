'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PriceDisplay } from '@/components/PriceDisplay';
import { FAQAccordion } from '@/components/FAQAccordion';
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';
import { PARTNERS, LINKS, INTEGRATIONS, CHAINS } from '@/lib/constants';

const faqItems = [
  {
    question: 'What is Classic USD ($USC)?',
    answer:
      'Classic USD is a fiat-backed stablecoin issued on Ethereum Classic and Polygon. Each $USC token is backed 1:1 by US dollars held in reserve, making it redeemable at any time for USD, USDC, or USDP through the Brale Platform.',
  },
  {
    question: 'Who issues Classic USD?',
    answer: `Classic USD is issued by Brale Inc., a US-regulated financial services company (NMLS #${PARTNERS.brale.nmls}). Brale holds state money transmission licenses and maintains full compliance with US financial regulations.`,
  },
  {
    question: 'How do I get Classic USD?',
    answer:
      'You can mint $USC directly through the Brale Platform by depositing USD, or trade for it on decentralized exchanges like ETCswap. $USC is also available through Brale\'s institutional API for businesses.',
  },
  {
    question: 'Why Ethereum Classic?',
    answer:
      'Ethereum Classic is a proof-of-work blockchain with strong decentralization and immutability guarantees. $USC brings dollar liquidity to ETC\'s growing DeFi ecosystem and enables the network to participate in the broader stablecoin economy.',
  },
  {
    question: 'Is Classic USD audited?',
    answer:
      'Yes. Brale provides regular third-party attestations verifying that $USC reserves match or exceed the tokens in circulation. The $USC smart contract follows standard ERC-20 patterns and has been reviewed for security.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-usc-green font-bold text-xl">$USC</span>
            <span className="text-usc-text-muted text-sm hidden sm:inline">Classic USD</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/docs"
              className="text-usc-text-secondary hover:text-usc-green text-sm transition-colors hidden sm:inline"
            >
              Docs
            </Link>
            <a
              href={LINKS.coingecko}
              target="_blank"
              rel="noopener noreferrer"
              className="text-usc-text-secondary hover:text-usc-green text-sm transition-colors hidden sm:inline"
            >
              CoinGecko
            </a>
            <ThemeToggle />
            <Button href={LINKS.braleApp} size="sm" external>
              Get $USC
            </Button>
          </div>
        </div>
      </nav>
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
            className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-usc-green/10 border border-usc-green/30"
            variants={staggerItem}
          >
            <span className="text-usc-green text-sm font-medium">
              Issued by Brale · NMLS #{PARTNERS.brale.nmls}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={staggerItem}
          >
            <span className="text-usc-text">The </span>
            <span className="text-gradient-usc">US Dollar</span>
            <span className="text-usc-text"> for Ethereum Classic</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-usc-text-secondary mb-10 max-w-2xl mx-auto"
            variants={staggerItem}
          >
            Classic USD ($USC) is the definitive stablecoin for ETC. US-regulated, fully backed,
            and redeemable 1:1 for USD.
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
            className="mt-16 flex flex-wrap justify-center gap-8 text-usc-text-muted text-sm"
            variants={staggerItem}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-usc-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>US Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-usc-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>1:1 USD Backed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-usc-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Third-Party Attestations</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Live Stats Section */}
      <section className="py-8 px-4 border-b border-usc-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <PriceDisplay variant="stats" />
            <a
              href={LINKS.coingecko}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-usc-text-muted hover:text-usc-green transition-colors flex items-center gap-1"
            >
              Data from CoinGecko
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why USC Section */}
      <section className="py-24 px-4 bg-usc-section-alt">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-4">
              Why Classic USD?
            </h2>
            <p className="text-usc-text-secondary text-lg max-w-2xl mx-auto">
              The fiat-backed stablecoin unlocking seamless global payments for developers and businesses on Ethereum Classic.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stability */}
            <motion.div
              className="p-8 rounded-2xl panel"
              variants={staggerItem}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-usc-green/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-usc-text mb-3">Stability & Backing</h3>
              <p className="text-usc-text-secondary">
                Backed by fiat reserves with automated reserve management. Brale provides third-party attestations to ensure US-regulated backing.
              </p>
            </motion.div>

            {/* Interoperability */}
            <motion.div
              className="p-8 rounded-2xl panel"
              variants={staggerItem}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-usc-green/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-usc-text mb-3">Interoperability</h3>
              <p className="text-usc-text-secondary">
                Redeemable 1:1 for USD, USDC, or USDP. Classic USD bridges Ethereum Classic to the greater EVM ecosystem.
              </p>
            </motion.div>

            {/* DeFi Ready */}
            <motion.div
              className="p-8 rounded-2xl panel"
              variants={staggerItem}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-usc-green/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-usc-text mb-3">DeFi Ready</h3>
              <p className="text-usc-text-secondary">
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
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-usc-green/10 border border-usc-green/30">
                <span className="text-usc-green text-xs font-medium uppercase tracking-wider">
                  US Regulated
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
                Backed by Brale
              </h2>
              <p className="text-usc-text-secondary text-lg mb-8">
                Brale provides automated reserve management with third-party attestations
                to ensure US-regulated backing of Classic USD. Each $USC token is fully
                collateralized and redeemable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-usc-text font-semibold mb-1">NMLS #{PARTNERS.brale.nmls}</p>
                    <p className="text-usc-text-secondary text-sm">Licensed money transmitter with state-by-state compliance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-usc-text font-semibold mb-1">Third-Party Attestations</p>
                    <p className="text-usc-text-secondary text-sm">Regular reserve verification by independent auditors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-usc-text font-semibold mb-1">Segregated Reserves</p>
                    <p className="text-usc-text-secondary text-sm">Customer funds held in regulated US financial institutions</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl panel-strong"
              variants={staggerItem}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-usc-green/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-usc-green">$</span>
                </div>
                <h3 className="text-2xl font-bold text-usc-text mb-2">1 $USC = 1 USD</h3>
                <p className="text-usc-text-secondary mb-6">
                  Always redeemable at par value through the Brale Platform
                </p>
                <Button href={LINKS.braleApp} external className="w-full">
                  Mint or Redeem
                </Button>
                <a
                  href={LINKS.braleDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-usc-text-muted hover:text-usc-green transition-colors"
                >
                  View Documentation →
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Network Support Section */}
      <section className="py-24 px-4 bg-usc-section-alt">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-4">
              Multi-Chain Support
            </h2>
            <p className="text-usc-text-secondary text-lg max-w-2xl mx-auto">
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
                <span className="px-2 py-1 text-xs font-medium bg-usc-green text-[#121412] rounded">
                  Primary
                </span>
              </div>
              <div className="w-12 h-12 mb-4 rounded-xl bg-etc-green/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-etc-green" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 12l8 5 8-5-8-10zm0 15l-8-5 8 10 8-10-8 5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-usc-text mb-2">{CHAINS.etc.name}</h3>
              <p className="text-usc-text-secondary text-sm mb-4">
                The home of Classic USD. Native integration with ETCswap and the ETC DeFi ecosystem.
              </p>
              <div className="flex items-center gap-2 text-xs text-usc-text-muted">
                <span className="px-2 py-1 bg-usc-surface rounded">Chain ID: {CHAINS.etc.id}</span>
                <span className="px-2 py-1 bg-usc-surface rounded">{CHAINS.etc.symbol}</span>
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
              <h3 className="text-xl font-bold text-usc-text mb-2">{CHAINS.polygon.name}</h3>
              <p className="text-usc-text-secondary text-sm mb-4">
                Extended reach to the Polygon ecosystem for broader DeFi access.
              </p>
              <div className="flex items-center gap-2 text-xs text-usc-text-muted">
                <span className="px-2 py-1 bg-usc-surface rounded">Chain ID: {CHAINS.polygon.id}</span>
                <span className="px-2 py-1 bg-usc-surface rounded">{CHAINS.polygon.symbol}</span>
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
              <h3 className="text-xl font-bold text-usc-text mb-2">{CHAINS.mordor.name}</h3>
              <p className="text-usc-text-secondary text-sm mb-4">
                Test integrations safely before deploying to mainnet.
              </p>
              <div className="flex items-center gap-2 text-xs text-usc-text-muted">
                <span className="px-2 py-1 bg-usc-surface rounded">Chain ID: {CHAINS.mordor.id}</span>
                <span className="px-2 py-1 bg-usc-surface rounded">{CHAINS.mordor.symbol}</span>
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
                <h3 className="text-xl font-bold text-usc-text mb-6 text-center">
                  Redeem 1:1 For
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-usc-surface">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-400 font-bold">$</span>
                      </div>
                      <div>
                        <p className="text-usc-text font-semibold">US Dollar</p>
                        <p className="text-usc-text-muted text-xs">Traditional USD</p>
                      </div>
                    </div>
                    <span className="text-usc-green font-mono">1:1</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-usc-surface">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-sm">USDC</span>
                      </div>
                      <div>
                        <p className="text-usc-text font-semibold">USD Coin</p>
                        <p className="text-usc-text-muted text-xs">Circle</p>
                      </div>
                    </div>
                    <span className="text-usc-green font-mono">1:1</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-usc-surface">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-emerald-400 font-bold text-sm">USDP</span>
                      </div>
                      <div>
                        <p className="text-usc-text font-semibold">Pax Dollar</p>
                        <p className="text-usc-text-muted text-xs">Paxos</p>
                      </div>
                    </div>
                    <span className="text-usc-green font-mono">1:1</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2" variants={fadeInUp}>
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-usc-green/10 border border-usc-green/30">
                <span className="text-usc-green text-xs font-medium uppercase tracking-wider">
                  Bridge to EVM
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
                Interoperability Built In
              </h2>
              <p className="text-usc-text-secondary text-lg mb-6">
                Classic USD is the first interoperable bridge for Ethereum Classic to
                the greater EVM and Solana ecosystems. Seamlessly move value between
                chains through the Brale Platform.
              </p>
              <ul className="space-y-3 text-usc-text-secondary">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-usc-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No slippage on redemptions</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-usc-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Institutional-grade liquidity</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-usc-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-24 px-4 bg-usc-section-alt">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-4">
              DeFi on Ethereum Classic
            </h2>
            <p className="text-usc-text-secondary text-lg max-w-2xl mx-auto">
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
                <svg className="w-5 h-5 text-usc-text-muted group-hover:text-etc-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-usc-text mb-2">{INTEGRATIONS.etcswapV3.name}</h3>
              <p className="text-usc-text-secondary mb-4">
                {INTEGRATIONS.etcswapV3.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-etc-green/10 text-etc-green rounded-full">
                  Concentrated Liquidity
                </span>
                <span className="px-3 py-1 text-xs bg-etc-green/10 text-etc-green rounded-full">
                  $USC Pairs
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
                <svg className="w-5 h-5 text-usc-text-muted group-hover:text-etc-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-usc-text mb-2">{INTEGRATIONS.etcswapV2.name}</h3>
              <p className="text-usc-text-secondary mb-4">
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
            <p className="text-usc-text-muted text-sm mb-4">
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
            className="text-3xl md:text-4xl font-bold text-usc-text mb-4"
            variants={fadeInUp}
          >
            Built with Trust
          </motion.h2>
          <motion.p
            className="text-usc-text-secondary text-lg mb-12"
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
              className="p-8 rounded-2xl panel hover:border-usc-green transition-colors"
              variants={staggerItem}
            >
              <h3 className="text-2xl font-bold text-usc-text mb-2">Brale</h3>
              <p className="text-usc-green text-sm mb-4">NMLS #{PARTNERS.brale.nmls}</p>
              <p className="text-usc-text-secondary">
                {PARTNERS.brale.description}
              </p>
            </motion.a>

            {/* White B0x */}
            <motion.a
              href={PARTNERS.whitebox.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl panel hover:border-usc-green transition-colors"
              variants={staggerItem}
            >
              <h3 className="text-2xl font-bold text-usc-text mb-2">White B0x</h3>
              <p className="text-usc-green text-sm mb-4">Development Partner</p>
              <p className="text-usc-text-secondary">
                {PARTNERS.whitebox.description}
              </p>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-usc-section-alt">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-4">
              How It Works
            </h2>
            <p className="text-usc-text-secondary text-lg max-w-2xl mx-auto">
              Classic USD operates on a simple mint and redeem model, ensuring every token is fully backed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Mint */}
            <motion.div className="text-center" variants={staggerItem}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-usc-green/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-usc-green">1</span>
              </div>
              <h3 className="text-xl font-bold text-usc-text mb-3">Deposit USD</h3>
              <p className="text-usc-text-secondary">
                Send USD to Brale via bank transfer or wire. Your funds are held in segregated reserve accounts.
              </p>
            </motion.div>

            {/* Step 2: Receive */}
            <motion.div className="text-center" variants={staggerItem}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-usc-green/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-usc-green">2</span>
              </div>
              <h3 className="text-xl font-bold text-usc-text mb-3">Receive $USC</h3>
              <p className="text-usc-text-secondary">
                $USC tokens are minted 1:1 and sent to your wallet on Ethereum Classic or Polygon.
              </p>
            </motion.div>

            {/* Step 3: Use or Redeem */}
            <motion.div className="text-center" variants={staggerItem}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-usc-green/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-usc-green">3</span>
              </div>
              <h3 className="text-xl font-bold text-usc-text mb-3">Use or Redeem</h3>
              <p className="text-usc-text-secondary">
                Trade on DEXs, use in DeFi, or redeem back to USD, USDC, or USDP at any time.
              </p>
            </motion.div>
          </div>

          <motion.div className="mt-12 text-center" variants={fadeInUp}>
            <Button href={LINKS.braleDocs} variant="outline" external>
              Read Full Documentation
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Reserve Transparency Section */}
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
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-usc-green/10 border border-usc-green/30">
                <span className="text-usc-green text-xs font-medium uppercase tracking-wider">
                  Transparency
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
                Fully Reserved
              </h2>
              <p className="text-usc-text-secondary text-lg mb-6">
                Every $USC token is backed 1:1 by US dollars held in regulated financial institutions.
                Reserve attestations are provided by independent third parties.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-usc-text font-semibold mb-1">Monthly Attestations</p>
                    <p className="text-usc-text-secondary text-sm">Independent verification of reserve balances</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-usc-text font-semibold mb-1">Segregated Custody</p>
                    <p className="text-usc-text-secondary text-sm">Customer funds never commingled with operational funds</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-usc-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-usc-text font-semibold mb-1">US Banking Partners</p>
                    <p className="text-usc-text-secondary text-sm">Reserves held at FDIC-insured institutions</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div className="p-8 rounded-2xl panel" variants={staggerItem}>
              <h3 className="text-xl font-bold text-usc-text mb-6 text-center">
                Regulatory Compliance
              </h3>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-usc-surface">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-usc-text font-semibold">Money Transmitter License</span>
                  </div>
                  <p className="text-usc-text-secondary text-sm">
                    Brale holds state-by-state money transmission licenses
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-usc-surface">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    <span className="text-usc-text font-semibold">NMLS #{PARTNERS.brale.nmls}</span>
                  </div>
                  <p className="text-usc-text-secondary text-sm">
                    Registered with the Nationwide Multistate Licensing System
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-usc-surface">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span className="text-usc-text font-semibold">BSA/AML Compliance</span>
                  </div>
                  <p className="text-usc-text-secondary text-sm">
                    Full compliance with Bank Secrecy Act and anti-money laundering requirements
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href={LINKS.braleDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-usc-text-muted hover:text-usc-green transition-colors"
                >
                  View Attestation Reports →
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-usc-section-alt">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-usc-text-secondary text-lg">
              Common questions about Classic USD
            </p>
          </motion.div>

          <FAQAccordion items={faqItems} />
        </motion.div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-4">
              Security & Infrastructure
            </h2>
            <p className="text-usc-text-secondary text-lg max-w-2xl mx-auto">
              Classic USD is built on proven technology with multiple layers of protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Smart Contract */}
            <motion.div className="p-6 rounded-2xl panel" variants={staggerItem}>
              <div className="w-12 h-12 mb-4 rounded-xl bg-usc-green/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-usc-text mb-2">ERC-20 Standard</h3>
              <p className="text-usc-text-secondary text-sm">
                $USC follows the battle-tested ERC-20 token standard, ensuring compatibility with wallets, exchanges, and DeFi protocols.
              </p>
            </motion.div>

            {/* Upgradeable Proxy */}
            <motion.div className="p-6 rounded-2xl panel" variants={staggerItem}>
              <div className="w-12 h-12 mb-4 rounded-xl bg-usc-green/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-usc-text mb-2">Upgradeable Design</h3>
              <p className="text-usc-text-secondary text-sm">
                Contract uses a transparent proxy pattern, allowing security patches while preserving token balances and approvals.
              </p>
            </motion.div>

            {/* Multi-Sig */}
            <motion.div className="p-6 rounded-2xl panel" variants={staggerItem}>
              <div className="w-12 h-12 mb-4 rounded-xl bg-usc-green/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-usc-text mb-2">Multi-Signature Control</h3>
              <p className="text-usc-text-secondary text-sm">
                Admin operations require multiple signatures, preventing single points of failure and unauthorized actions.
              </p>
            </motion.div>

            {/* Custody */}
            <motion.div className="p-6 rounded-2xl panel" variants={staggerItem}>
              <div className="w-12 h-12 mb-4 rounded-xl bg-usc-green/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-usc-text mb-2">Institutional Custody</h3>
              <p className="text-usc-text-secondary text-sm">
                USD reserves held at regulated US banks with FDIC insurance coverage. Customer funds never commingled with operational capital.
              </p>
            </motion.div>

            {/* Monitoring */}
            <motion.div className="p-6 rounded-2xl panel" variants={staggerItem}>
              <div className="w-12 h-12 mb-4 rounded-xl bg-usc-green/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-usc-text mb-2">24/7 Monitoring</h3>
              <p className="text-usc-text-secondary text-sm">
                Automated systems monitor contract activity, reserve levels, and network health around the clock.
              </p>
            </motion.div>

            {/* Incident Response */}
            <motion.div className="p-6 rounded-2xl panel" variants={staggerItem}>
              <div className="w-12 h-12 mb-4 rounded-xl bg-usc-green/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-usc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-usc-text mb-2">Incident Response</h3>
              <p className="text-usc-text-secondary text-sm">
                Established procedures for security incidents including pause functionality and coordinated disclosure protocols.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 p-6 rounded-2xl panel-strong text-center"
            variants={fadeInUp}
          >
            <p className="text-usc-text-secondary">
              <span className="text-usc-green font-semibold">Brale</span> maintains SOC 2 compliance and undergoes regular security assessments.
              For security inquiries, contact{' '}
              <a href="mailto:security@brale.xyz" className="text-usc-green hover:underline">
                security@brale.xyz
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-usc-section-alt">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-usc-text-secondary text-lg mb-8">
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
      <footer className="py-12 px-4 border-t border-usc-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-usc-text font-bold text-lg mb-1">Classic USD</p>
              <p className="text-usc-text-muted text-sm">
                The US Dollar for Ethereum Classic
              </p>
            </div>
            <div className="flex gap-6 text-usc-text-secondary text-sm">
              <a href={LINKS.coingecko} target="_blank" rel="noopener noreferrer" className="hover:text-usc-green transition-colors">
                CoinGecko
              </a>
              <a href={LINKS.blockscout} target="_blank" rel="noopener noreferrer" className="hover:text-usc-green transition-colors">
                Explorer
              </a>
              <a href={LINKS.braleDocs} target="_blank" rel="noopener noreferrer" className="hover:text-usc-green transition-colors">
                Docs
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-usc-border text-center text-usc-text-muted text-xs">
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
