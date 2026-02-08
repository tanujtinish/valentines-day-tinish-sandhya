import { useState } from 'react'
import { motion } from 'framer-motion'
import { useConfetti } from './useConfetti'

const reasons = [
  {
    emoji: '\u2728',
    title: 'Your Confidence',
    desc: 'You walk into rooms like you own the building, the parking lot, and the land it\'s built on. Honestly, it\'s intimidating. And incredibly attractive.',
    back: 'Fun fact: The first time I saw you walk into a room, I literally forgot my own name for a second. A Delhi boy... speechless. That\'s your power.',
  },
  {
    emoji: '\u{1F60A}',
    title: 'That Killer Smile',
    desc: 'Your smile should be classified as a weapon. It\'s the reason I failed at least two exams at IIMK. Worth it.',
    back: 'I once tried to count how many times you smile in a day. I lost count at 247. And then you smiled at me and I forgot what numbers were.',
  },
  {
    emoji: '\u{1F4AA}',
    title: 'Mumbai to Gurgaon? For ME?',
    desc: 'You left Mumbai \u2014 MUMBAI \u2014 and moved to Gurgaon. For me. That\'s not love, that\'s sacrifice at a level that should qualify for a Nobel Prize.',
    back: 'I still can\'t believe you traded Marine Drive sunsets for Gurgaon traffic. I promise to make every honking-filled commute worth it.',
  },
  {
    emoji: '\u{1F46A}',
    title: 'My Family Loves You More Than Me',
    desc: 'You met my parents and within one visit, you became their favourite child. I\'ve been demoted to second place in my own family. Thanks for that.',
    back: 'My mom literally asked me last week: "Is Sandhya eating well?" She didn\'t ask about me. I\'m not hurt. (I\'m very hurt.)',
  },
  {
    emoji: '\u{1F30D}',
    title: 'Your Euro Trip Life',
    desc: 'You casually explored Europe through work while I tracked your location like an anxious GPS. "Oh I\'m in Paris." Cool. I\'m in a Zoom call. Living the dream.',
    back: 'You sent me a photo from the Eiffel Tower and I sent you a photo of my laptop screen. We are not the same. But somehow we work.',
  },
  {
    emoji: '\u{1F9E0}',
    title: 'Smarter Than Me (Don\'t Tell Anyone)',
    desc: 'Two strategy consultants in one house means every argument turns into a case study. You win most of them. All of them. Fine, all of them.',
    back: 'One time I tried to use a 2x2 matrix to prove why I should pick the restaurant. You dismantled my argument in 30 seconds. I love and fear you.',
  },
  {
    emoji: '\u2615',
    title: 'You Make Everyone Love You',
    desc: 'It takes most people years to feel comfortable somewhere new. It takes you about 12 minutes. You have a superpower and you don\'t even charge for it.',
    back: 'You made my most awkward uncle laugh within 5 minutes of meeting him. The man hasn\'t laughed since 2008. You are actually magic.',
  },
  {
    emoji: '\u{1F496}',
    title: 'You Actually Said Yes',
    desc: 'After all the trying, the showing up, the "accidental" cafeteria meetings \u2014 you chose me. I\'m still not sure what happened. I\'m not asking questions.',
    back: 'The day you said yes, I called my best friend and just screamed for 30 seconds. No words. Just joy. He hung up on me. Worth it.',
  },
  {
    emoji: '\u{1F389}',
    title: 'Life Is Never Boring With You',
    desc: 'Your energy could power a small city. Your laugh is contagious. And your ability to make me smile even when I\'m annoyed is honestly unfair.',
    back: 'You once made me laugh so hard I spilled chai on my laptop. That was a Rs 2000 repair. I\'d pay it again to hear that laugh.',
  },
]

export default function WhyILoveYou() {
  const [flipped, setFlipped] = useState(new Set())
  const confetti = useConfetti()

  const handleFlip = (i, e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    setFlipped(prev => {
      const next = new Set(prev)
      if (next.has(i)) {
        next.delete(i)
      } else {
        next.add(i)
        confetti(x, y)
      }
      return next
    })
  }

  return (
    <section className="why-section" id="why">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">From My Heart (and my bruised ego)</p>
        <h2 className="section-title">Why I Love You, Sandhya</h2>
        <p className="why-subtitle">Click each card to reveal the secret story behind it</p>
      </motion.div>

      <div className="why-grid">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            className={`why-card-flip ${flipped.has(i) ? 'is-flipped' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onClick={(e) => handleFlip(i, e)}
          >
            <div className="why-card-inner">
              <div className="why-card why-card-front">
                <div className="why-emoji">{item.emoji}</div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
                <span className="why-tap-hint">tap to reveal more</span>
              </div>
              <div className="why-card why-card-back">
                <div className="why-emoji">{item.emoji}</div>
                <p className="why-back-text">{item.back}</p>
                <span className="why-tap-hint">tap to flip back</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="why-flip-counter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {flipped.size} of {reasons.length} stories revealed {flipped.size === reasons.length ? '\u2014 You found every one!' : ''}
      </motion.p>
    </section>
  )
}
