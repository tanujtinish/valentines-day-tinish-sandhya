import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photoList = Array.from({ length: 15 }, (_, i) => ({
  src: `/photos/${i + 1}.jpeg`,
  id: i + 1,
}))

const captions = [
  'Where it all started',
  'Our favourite moments',
  'Together is our favourite place',
  'Making memories',
  'Adventures with you',
  'Love in every frame',
  'My favourite person',
  'Always smiling with you',
  'Our happy place',
  'Better together',
  'Every moment matters',
  'You and me',
  'My forever',
  'The best chapter',
  'Our love story',
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevPhoto = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev > 0 ? prev - 1 : photoList.length - 1))
  }
  const nextPhoto = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev < photoList.length - 1 ? prev + 1 : 0))
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') setLightbox((prev) => (prev > 0 ? prev - 1 : photoList.length - 1))
      if (e.key === 'ArrowRight') setLightbox((prev) => (prev < photoList.length - 1 ? prev + 1 : 0))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  return (
    <section className="gallery-section" id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Our Memories</p>
        <h2 className="section-title">Moments We Treasure</h2>
      </motion.div>

      <div className="gallery-grid">
        {photoList.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="gallery-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onClick={() => openLightbox(i)}
          >
            <img src={photo.src} alt={captions[i]} loading="lazy" />
            <div className="gallery-item-overlay">
              <p className="gallery-item-caption">{captions[i]}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>&#10005;</button>
            <button className="lightbox-nav lightbox-prev" onClick={prevPhoto}>&#8249;</button>
            <motion.img
              key={lightbox}
              src={photoList[lightbox].src}
              alt="Photo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lightbox-nav lightbox-next" onClick={nextPhoto}>&#8250;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
