import { useState, useEffect } from 'react'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setHidden(y > 100 && y > lastY)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <a href="#story">Our Story</a>
      <a href="#timeline">Journey</a>
      <a href="#gallery">Memories</a>
      <a href="#why">Why You</a>
      <a href="#valentine">Valentine</a>
    </nav>
  )
}
