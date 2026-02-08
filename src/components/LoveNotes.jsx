import { useState } from 'react'
import { motion } from 'framer-motion'

const frontMessages = [
  { emoji: '\u{1F48C}', text: 'Click to open...' },
  { emoji: '\u{1F48C}', text: 'Another one...' },
  { emoji: '\u{1F48C}', text: 'One more...' },
  { emoji: '\u{1F48C}', text: 'Keep going...' },
  { emoji: '\u{1F48C}', text: 'Almost there...' },
  { emoji: '\u{1F48C}', text: 'Last one!' },
]

const loveNotes = [
  "Remember our first chai together at IIMK? I pretended to like the campus canteen chai just to sit with you. It was terrible. You were not.",
  "You once told me I was 'persistent'. I choose to believe that was a compliment. My therapist agrees.",
  "The day you met my parents, my mom whispered to me: 'Don't mess this up.' Thanks for the vote of confidence, Mom.",
  "When you got your Europe posting, I googled 'how to survive long distance' approximately 47 times. The answer was: badly.",
  "You moved from Mumbai to Gurgaon for me. I promise to never make you regret it. (I will try to keep the house clean. No guarantees.)",
  "Every strategy deck I make is good. But my best strategy was not giving up on you. McKinsey could never.",
]

export default function LoveNotes() {
  const [revealed, setRevealed] = useState(new Set())

  const toggleNote = (index) => {
    setRevealed(prev => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <section className="notes-section" id="notes">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Secret Messages</p>
        <h2 className="section-title">Love Notes For You</h2>
        <p className="notes-subtitle">Click each envelope to reveal a secret message</p>
      </motion.div>

      <div className="notes-grid">
        {loveNotes.map((note, i) => (
          <motion.div
            key={i}
            className={`note-card ${revealed.has(i) ? 'opened' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => toggleNote(i)}
          >
            <div className="note-front">
              <span className="note-envelope">{frontMessages[i].emoji}</span>
              <span className="note-prompt">{frontMessages[i].text}</span>
            </div>
            <div className="note-back">
              <p className="note-text">{note}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="notes-counter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {revealed.size} of {loveNotes.length} notes opened {revealed.size === loveNotes.length ? ' \u2014 You found them all!' : ''}
      </motion.p>
    </section>
  )
}
