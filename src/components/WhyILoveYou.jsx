import { motion } from 'framer-motion'

const reasons = [
  {
    emoji: '\u2728',
    title: 'Your Confidence',
    desc: 'You walk into rooms like you own the building, the parking lot, and the land it\'s built on. Honestly, it\'s intimidating. And incredibly attractive.',
  },
  {
    emoji: '\u{1F60A}',
    title: 'That Killer Smile',
    desc: 'Your smile should be classified as a weapon. It\'s the reason I failed at least two exams at IIMK. Worth it.',
  },
  {
    emoji: '\u{1F4AA}',
    title: 'Mumbai to Gurgaon? For ME?',
    desc: 'You left Mumbai — MUMBAI — and moved to Gurgaon. For me. That\'s not love, that\'s sacrifice at a level that should qualify for a Nobel Prize.',
  },
  {
    emoji: '\u{1F46A}',
    title: 'My Family Loves You More Than Me',
    desc: 'You met my parents and within one visit, you became their favourite child. I\'ve been demoted to second place in my own family. Thanks for that.',
  },
  {
    emoji: '\u{1F30D}',
    title: 'Your Euro Trip Life',
    desc: 'You casually explored Europe through work while I tracked your location like an anxious GPS. "Oh I\'m in Paris." Cool. I\'m in a Zoom call. Living the dream.',
  },
  {
    emoji: '\u{1F9E0}',
    title: 'Smarter Than Me (Don\'t Tell Anyone)',
    desc: 'Two strategy consultants in one house means every argument turns into a case study. You win most of them. All of them. Fine, all of them.',
  },
  {
    emoji: '\u2615',
    title: 'You Make Everyone Love You',
    desc: 'It takes most people years to feel comfortable somewhere new. It takes you about 12 minutes. You have a superpower and you don\'t even charge for it.',
  },
  {
    emoji: '\u{1F496}',
    title: 'You Actually Said Yes',
    desc: 'After all the trying, the showing up, the "accidental" cafeteria meetings — you chose me. I\'m still not sure what happened. I\'m not asking questions.',
  },
  {
    emoji: '\u{1F389}',
    title: 'Life Is Never Boring With You',
    desc: 'Your energy could power a small city. Your laugh is contagious. And your ability to make me smile even when I\'m annoyed is honestly unfair.',
  },
]

export default function WhyILoveYou() {
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
      </motion.div>

      <div className="why-grid">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="why-emoji">{item.emoji}</div>
            <h3 className="why-title">{item.title}</h3>
            <p className="why-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
