import { useState, useRef, useEffect, useCallback } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const startMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.4
    if (audio.currentTime < 30) audio.currentTime = 30
    audio.play().then(() => setPlaying(true)).catch(() => {})
  }, [])

  // Expose startMusic globally so the splash screen can call it
  useEffect(() => {
    window.__startMusic = startMusic
    const audio = audioRef.current
    const onEnded = () => {
      audio.currentTime = 30
      audio.play()
    }
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('ended', onEnded)
      delete window.__startMusic
    }
  }, [startMusic])

  const toggle = () => {
    const audio = audioRef.current
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      if (audio.currentTime < 30) audio.currentTime = 30
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" preload="auto" />
      <button
        className={`music-btn ${playing ? 'playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play music'}
      >
        <div className="music-icon">
          {playing ? (
            <div className="music-bars">
              <span /><span /><span /><span />
            </div>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </button>
    </>
  )
}
