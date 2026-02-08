import { useMemo } from 'react'

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${12 + Math.random() * 16}px`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 15}s`,
      symbol: ['\u2665', '\u2764\uFE0F', '\u{1F497}', '\u{1F495}'][Math.floor(Math.random() * 4)],
    }))
  }, [])

  return (
    <div className="floating-hearts">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDelay: h.delay,
            animationDuration: h.duration,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  )
}
