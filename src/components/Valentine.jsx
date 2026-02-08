import { motion } from 'framer-motion'

export default function Valentine() {
  return (
    <section className="valentine-section" id="valentine">
      <motion.div
        className="valentine-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
      >
        <div className="valentine-letter">
          <p className="letter-greeting">My Dearest Sandhya,</p>
          <p>
            From the moment I saw you at IIM Kozhikode, I knew two things: (1) my life was
            about to change, and (2) I was absolutely, hopelessly out of my league.
            You were this force of nature — confident, radiant, and impossibly magnetic.
            I was... well, I was a guy from Delhi with a lot of enthusiasm and questionable
            fashion sense.
          </p>
          <p>
            But I showed up anyway. Every. Single. Day. Like a human pop-up ad you couldn't
            close. And somehow, miraculously, you didn't block me. And then — in what I can
            only describe as a glitch in the matrix — you said yes.
          </p>
          <p>
            Since that day, you've made my life richer in every way. You won over
            my family so hard that my mom now asks "How is Sandhya?" before she asks about me.
            I'm the supporting character in my own family WhatsApp group.
            Your confidence fills a room without ever making anyone feel small —
            except maybe me, but I've made peace with that.
          </p>
          <p>
            You've explored Europe while I stalked your Instagram stories. You've conquered
            boardrooms in strategy consulting while I pretended to also be important.
            And then — in the most incredible act of love (or temporary insanity) — you left
            Mumbai and moved to Gurgaon. FOR ME. Mumbai to Gurgaon, Sandhya. I know what
            you sacrificed. I will never forget it.
          </p>
          <p>
            Marrying you in March 2025 was the greatest achievement of my life. Greater than
            the MBA. Greater than any promotion. You, with your smile that lights up everything,
            your laugh that's dangerously contagious, and your energy that makes me wonder if
            you secretly have a charger plugged in somewhere.
          </p>
          <p>
            This Valentine's Day, I want you to know: I would do it all again. Every
            awkward attempt, every "accidental" cafeteria encounter, every moment of
            being spectacularly out of my depth — because at the end of it all, I got you.
            And you, my love, are worth every bit of it.
          </p>
          <p>
            (Also, I'm sorry for all the times I'll inevitably leave my socks on the floor.
            Consider this letter a pre-apology.)
          </p>
          <p className="letter-sign">Forever yours (and slightly out of his league), Tinish</p>
        </div>

        <motion.div
          className="valentine-question"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Happy Valentine's Day, My Love
        </motion.div>

        <motion.div
          className="valentine-heart"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {'\u2764\uFE0F'}
        </motion.div>

        <motion.p
          className="valentine-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          Tinish & Sandhya  &middot;  Forever & Always  &middot;  (She's still the better half)
        </motion.p>
      </motion.div>
    </section>
  )
}
