import { motion } from 'framer-motion'

export default function OurStory() {
  return (
    <section className="our-story" id="story">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Our Story</p>
        <h2 className="section-title">How This Poor Boy Got Lucky</h2>
      </motion.div>

      <motion.div
        className="story-text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>
          It was <span className="story-highlight">2021</span>, and the halls of
          <span className="story-highlight"> IIM Kozhikode</span> became the backdrop
          to something far more important than any MBA lecture (sorry, professors).
          A boy from <span className="story-highlight"> Delhi</span> — who thought he was
          hot stuff — crossed paths with a girl from
          <span className="story-highlight"> Mumbai</span> who was ACTUALLY hot stuff.
          And nothing was ever the same again.
        </p>
        <p>
          Sandhya walked into every room like she owned it — confident, radiant, and with a smile
          that made Tinish forget everything he'd learned in class (not that he remembered much anyway).
          He knew from the very beginning
          that she was out of his league. But did that stop him? Absolutely not. Delhi boys
          don't know the meaning of "giving up." Or "taking a hint."
        </p>
        <p>
          And so he tried. And tried. And tried some more. He showed up like a subscription she never
          signed up for. Through late-night conversations, campus walks,
          and probably too many "accidental" run-ins at the cafeteria, Tinish slowly worked his way
          from "who is this guy?" to "okay fine, he's kind of sweet." And one beautiful
          day, <span className="story-highlight">she said yes</span>.
          (Tinish is still not sure why. He's choosing not to question it.)
        </p>
        <p>
          From that moment, their story became one of adventures — trips across cities, journeys through
          Europe (she's fancy like that), and ultimately, a wedding in <span className="story-highlight">March 2025</span> that
          brought two families, two cities, and one very relieved Tinish together forever.
        </p>
      </motion.div>
    </section>
  )
}
