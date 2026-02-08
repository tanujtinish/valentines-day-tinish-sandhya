import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = 0.4
    audio.currentTime = 30

    const onCanPlay = () => {
      setReady(true)
      audio.play().then(() => {
        setPlaying(true)
      }).catch(() => {
        // Autoplay blocked by browser — wait for first user click anywhere
        const onClick = () => {
          audio.currentTime = audio.currentTime < 30 ? 30 : audio.currentTime
          audio.play().then(() => setPlaying(true)).catch(() => {})
          document.removeEventListener('click', onClick)
        }
        document.addEventListener('click', onClick)
      })
    }
    const onEnded = () => {
      audio.currentTime = 30
      audio.play()
    }
    audio.addEventListener('canplaythrough', onCanPlay)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('canplaythrough', onCanPlay)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (playing) {
      audio.pause()
    } else {
      audio.currentTime = audio.currentTime < 30 ? 30 : audio.currentTime
      audio.play().catch(() => {})
    }
    setPlaying(!playing)
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
