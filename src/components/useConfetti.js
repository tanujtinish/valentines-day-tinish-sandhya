import { useCallback } from 'react'

export function useConfetti() {
  const burst = useCallback((x, y) => {
    const count = 40
    const colors = ['#ff6b8a', '#ff8fa3', '#ffb3c1', '#c45e6a', '#ffd700', '#ff69b4', '#fff']
    const container = document.createElement('div')
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10000'
    document.body.appendChild(container)

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div')
      const size = Math.random() * 8 + 4
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5)
      const velocity = Math.random() * 200 + 100
      const vx = Math.cos(angle) * velocity
      const vy = Math.sin(angle) * velocity - 150
      const rotation = Math.random() * 360
      const shape = Math.random() > 0.5

      el.style.cssText = `
        position:absolute;
        left:${x}px;top:${y}px;
        width:${shape ? size : size * 0.4}px;
        height:${shape ? size * 0.6 : size}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        border-radius:${shape ? '50%' : '2px'};
        transform:rotate(${rotation}deg);
        pointer-events:none;
      `
      container.appendChild(el)

      let startTime = null
      const duration = 1500 + Math.random() * 1000

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / duration
        if (progress >= 1) {
          el.remove()
          if (container.children.length === 0) container.remove()
          return
        }
        const px = x + vx * progress
        const py = y + vy * progress + 400 * progress * progress
        const opacity = 1 - progress
        const rot = rotation + progress * 360
        el.style.left = `${px}px`
        el.style.top = `${py}px`
        el.style.opacity = opacity
        el.style.transform = `rotate(${rot}deg)`
        requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [])

  return burst
}
