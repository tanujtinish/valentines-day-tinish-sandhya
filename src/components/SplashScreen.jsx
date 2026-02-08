import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen({ onEnter }) {
  const handleClick = () => {
    if (window.__startMusic) window.__startMusic()
    onEnter()
  }

  return (
    <motion.div
      className="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="splash-content" onClick={handleClick}>
        <motion.div
          className="splash-heart"
          animate={{ scale: [1, 1.15, 1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          {'\u2764\uFE0F'}
        </motion.div>
        <h1 className="splash-title">Tinish & Sandhya</h1>
        <p className="splash-date">Valentine's Day 2026</p>
        <motion.button
          className="splash-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          Open Our Story
        </motion.button>
        <p className="splash-hint">click anywhere</p>
      </div>
    </motion.div>
  )
}
