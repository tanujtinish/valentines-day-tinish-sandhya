import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LoveCounter() {
  const startDate = new Date('2022-06-01T00:00:00')
  const [elapsed, setElapsed] = useState(getElapsed())

  function getElapsed() {
    const now = new Date()
    const diff = now - startDate
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const timer = setInterval(() => setElapsed(getElapsed()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="counter-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <p className="section-label">And Counting</p>
      <h2 className="section-title">Loving You For</h2>

      <div className="counter-grid">
        <div className="counter-box">
          <span className="counter-number">{elapsed.days.toLocaleString()}</span>
          <span className="counter-label">Days</span>
        </div>
        <div className="counter-box">
          <span className="counter-number">{String(elapsed.hours).padStart(2, '0')}</span>
          <span className="counter-label">Hours</span>
        </div>
        <div className="counter-box">
          <span className="counter-number">{String(elapsed.minutes).padStart(2, '0')}</span>
          <span className="counter-label">Minutes</span>
        </div>
        <div className="counter-box">
          <span className="counter-number">{String(elapsed.seconds).padStart(2, '0')}</span>
          <span className="counter-label">Seconds</span>
        </div>
      </div>

      <p className="counter-subtext">
        (And every second has been worth it. Even the ones where you stole the blanket.)
      </p>
    </motion.div>
  )
}
