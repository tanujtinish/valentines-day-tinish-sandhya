import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    q: "Where did Tinish & Sandhya first meet?",
    options: ["Tinder (lol no)", "IIM Kozhikode", "A Delhi wedding", "Mumbai local train"],
    correct: 1,
    response: "Correct! IIM Kozhikode, 2021. Where Tinish's MBA ROI went from 'career growth' to 'finding a wife'."
  },
  {
    q: "How long did Tinish have to try before Sandhya said yes?",
    options: ["She said yes immediately", "A few weeks", "Months of strategic effort", "He's still waiting"],
    correct: 2,
    response: "Months of showing up like a subscription she never ordered. Persistence level: Delhi boy."
  },
  {
    q: "What happened when Sandhya met Tinish's parents?",
    options: ["Awkward silence", "They liked her more than Tinish", "She was nervous", "They asked her to leave"],
    correct: 1,
    response: "She walked in, smiled, and within minutes became their favourite child. Tinish has been demoted ever since."
  },
  {
    q: "Where did Sandhya travel for work?",
    options: ["Chandigarh", "Europe", "Antarctica", "She worked from bed"],
    correct: 1,
    response: "Europe! While Tinish sat in India refreshing her Instagram like a human GPS tracker."
  },
  {
    q: "What did Sandhya do after marriage to be with Tinish?",
    options: ["Nothing, he moved", "Changed her job & moved to Gurgaon", "Made him move to Mumbai", "Filed a complaint"],
    correct: 1,
    response: "She left MUMBAI for GURGAON. If that's not love, nothing is. (Or maybe she just wanted better parking.)"
  },
  {
    q: "What are both Tinish & Sandhya's profession?",
    options: ["Doctors", "Strategy Consultants", "YouTubers", "Professional foodies"],
    correct: 1,
    response: "Both strategy consultants! Every dinner argument is now a structured case study with a 2x2 matrix."
  },
  {
    q: "What is Sandhya's superpower?",
    options: ["Flying", "Making everyone comfortable instantly", "Cooking Maggi", "Reading minds"],
    correct: 1,
    response: "She makes everyone feel at ease in approximately 4 minutes. Scientists are still studying this phenomenon."
  },
]

export default function LoveQuiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [finished, setFinished] = useState(false)

  const handleSelect = (index) => {
    if (selected !== null) return
    setSelected(index)
    if (index === questions[current].correct) {
      setScore(s => s + 1)
    }
    setShowResult(true)
  }

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1)
      setSelected(null)
      setShowResult(false)
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setShowResult(false)
    setFinished(false)
  }

  const getVerdict = () => {
    const pct = score / questions.length
    if (pct === 1) return "Perfect score! Are you Sandhya? Because only she'd know all this. (Or Tinish, who literally built this website.)"
    if (pct >= 0.7) return "Impressive! You clearly pay attention to this love story. Tinish approves."
    if (pct >= 0.4) return "Not bad! You know the basics. But there's clearly room for improvement. Maybe read the website again?"
    return "Oof. Did you skip straight to the quiz? Go back and read the story first, you rebel."
  }

  return (
    <section className="quiz-section" id="quiz">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Test Your Knowledge</p>
        <h2 className="section-title">The T & S Love Quiz</h2>
        <p className="quiz-subtitle">How well do you know this love story? (Sandhya, this means you too.)</p>
      </motion.div>

      <div className="quiz-container">
        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={current}
              className="quiz-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="quiz-progress">
                Question {current + 1} of {questions.length}
              </div>
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="quiz-question">{questions[current].q}</h3>

              <div className="quiz-options">
                {questions[current].options.map((opt, i) => (
                  <button
                    key={i}
                    className={`quiz-option ${
                      selected === null ? '' :
                      i === questions[current].correct ? 'correct' :
                      i === selected ? 'wrong' : 'dimmed'
                    }`}
                    onClick={() => handleSelect(i)}
                    disabled={selected !== null}
                  >
                    <span className="quiz-option-letter">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {showResult && (
                  <motion.div
                    className="quiz-response"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{selected === questions[current].correct ? '\u2705' : '\u274C'} {questions[current].response}</p>
                    <button className="quiz-next" onClick={nextQuestion}>
                      {current < questions.length - 1 ? 'Next Question \u2192' : 'See Results \u2192'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              className="quiz-card quiz-final"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="quiz-score-circle">
                <span className="quiz-score-number">{score}</span>
                <span className="quiz-score-total">/ {questions.length}</span>
              </div>
              <p className="quiz-verdict">{getVerdict()}</p>
              <button className="quiz-restart" onClick={restart}>Try Again</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
