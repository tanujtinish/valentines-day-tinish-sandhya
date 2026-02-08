import { useEffect, useRef } from 'react'

export default function CursorHearts() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let mouseX = 0
    let mouseY = 0
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#ff6b8a', '#ff8fa3', '#ffb3c1', '#c45e6a', '#e8a0b0']

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (Math.random() > 0.6) {
        particles.push({
          x: mouseX,
          y: mouseY,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
        })
      }
    }

    const drawHeart = (x, y, size, color, alpha) => {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = color
      ctx.beginPath()
      const s = size / 2
      ctx.moveTo(x, y + s * 0.3)
      ctx.bezierCurveTo(x, y - s * 0.5, x - s, y - s * 0.5, x - s, y + s * 0.1)
      ctx.bezierCurveTo(x - s, y + s * 0.6, x, y + s, x, y + s * 1.2)
      ctx.bezierCurveTo(x, y + s, x + s, y + s * 0.6, x + s, y + s * 0.1)
      ctx.bezierCurveTo(x + s, y - s * 0.5, x, y - s * 0.5, x, y + s * 0.3)
      ctx.fill()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles = particles.filter(p => p.life > 0)
      particles.forEach(p => {
        drawHeart(p.x, p.y, p.size, p.color, p.life)
        p.x += p.vx
        p.y += p.vy
        p.life -= p.decay
        p.size *= 0.99
      })
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
