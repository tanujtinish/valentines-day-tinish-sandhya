import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.p
          className="hero-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          14th February 2026
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Happy Valentine's Day
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          A love story powered by desperation & charm
        </motion.p>

        <motion.div
          className="hero-names"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <span>Tinish</span>
          <span className="hero-ampersand">&</span>
          <span>Sandhya</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <button className="scroll-indicator" onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}>
          <span>Scroll</span>
          <div className="scroll-arrow" />
        </button>
      </motion.div>
    </section>
  )
}
