import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import WhyILoveYou from './components/WhyILoveYou'
import Valentine from './components/Valentine'
import FloatingHearts from './components/FloatingHearts'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="app">
      <FloatingHearts />
      <Navbar />
      <Hero />
      <OurStory />
      <Timeline />
      <Gallery />
      <WhyILoveYou />
      <Valentine />
    </div>
  )
}

export default App
