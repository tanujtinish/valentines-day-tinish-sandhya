import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import WhyILoveYou from './components/WhyILoveYou'
import LoveNotes from './components/LoveNotes'
import LoveQuiz from './components/LoveQuiz'
import LoveCounter from './components/LoveCounter'
import Valentine from './components/Valentine'
import FloatingHearts from './components/FloatingHearts'
import CursorHearts from './components/CursorHearts'
import Navbar from './components/Navbar'
import MusicPlayer from './components/MusicPlayer'
import './App.css'

function App() {
  const [entered, setEntered] = useState(false)

  return (
    <div className="app">
      <MusicPlayer />
      <AnimatePresence>
        {!entered && <SplashScreen onEnter={() => setEntered(true)} />}
      </AnimatePresence>
      {entered && (
        <>
          <FloatingHearts />
          <CursorHearts />
          <Navbar />
          <Hero />
          <OurStory />
          <Timeline />
          <Gallery />
          <WhyILoveYou />
          <LoveNotes />
          <LoveQuiz />
          <LoveCounter />
          <Valentine />
        </>
      )}
    </div>
  )
}

export default App
