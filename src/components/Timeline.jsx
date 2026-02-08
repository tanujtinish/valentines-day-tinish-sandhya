import { motion } from 'framer-motion'

const events = [
  {
    year: '2021',
    event: 'Where It All Started',
    desc: 'Two strangers meet at IIM Kozhikode during their MBA. A boy from Delhi spots a girl from Mumbai and immediately forgets why he came to business school.',
  },
  {
    year: '2021-22',
    event: 'The "Strategy" Phase',
    desc: 'Tinish deploys every consulting framework he knows to win Sandhya over. SWOT analysis? Done. Stakeholder mapping? Her friends are covered. ROI on efforts? Negative. Does he stop? Never.',
  },
  {
    year: '2022',
    event: 'She Actually Said Yes',
    desc: 'In a plot twist nobody (including Tinish) saw coming, Sandhya says yes. Scientists are still studying what went wrong in her decision-making process. (Just kidding. Sort of.)',
  },
  {
    year: '2022-24',
    event: 'The Trip Era',
    desc: 'Turns out they actually like each other! Multiple trips, countless photos, and an alarming amount of money spent on food. The MBA was supposed to make them financially smart. It did not.',
  },
  {
    year: '2023-24',
    event: 'She Won Over the In-Laws',
    desc: 'Sandhya meets Tinish\'s parents and — in classic Sandhya fashion — has the whole family wrapped around her finger in approximately 4 minutes. His mom now calls her more than him. He\'s fine. Totally fine.',
  },
  {
    year: '2024',
    event: 'Sandhya Conquers Europe',
    desc: 'She goes on European work trips while Tinish sits in India refreshing her Instagram. She brings back stories, souvenirs, and a tan. He brings jealousy and a stronger Wi-Fi connection.',
  },
  {
    year: 'March 2025',
    event: 'The Wedding (He Did It!)',
    desc: 'Delhi boy officially locks down Mumbai girl. The wedding brings two families, two cities, and one extremely emotional Tinish together. The caterers were excellent. The baraat was loud. It was perfect.',
  },
  {
    year: '2025',
    event: 'Gurgaon Life Begins',
    desc: 'Sandhya changes her job and moves to Gurgaon because she loves Tinish. (Or because she wanted better restaurants. Either way, he\'s not complaining.) Both thriving in strategy consulting. Power couple unlocked.',
  },
]

export default function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Our Journey</p>
        <h2 className="section-title">A Timeline of Tinish's Persistence</h2>
      </motion.div>

      <div className="timeline">
        {events.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-event">{item.event}</div>
              <div className="timeline-desc">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
