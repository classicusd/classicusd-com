'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';
import { PARTNERS, LINKS, INTEGRATIONS } from '@/lib/constants';

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
