import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const loadPhotos = async () => {
      const photoFiles = []
      for (let i = 1; i <= 20; i++) {
        for (const ext of ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'HEIC']) {
          const path = `/photos/${i}.${ext}`
          try {
            const res = await fetch(path, { method: 'HEAD' })
            if (res.ok) {
              photoFiles.push({ src: path, id: i })
              break
            }
          } catch {
            // continue
          }
        }
      }
      setPhotos(photoFiles)
    }
    loadPhotos()
  }, [])

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
    'Soulmates',
    'Heart full of you',
    'My sunshine',
    'Us against the world',
    'Endlessly in love',
  ]

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevPhoto = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev > 0 ? prev - 1 : photos.length - 1))
  }
  const nextPhoto = (e) => {
    e.stopPropagation()
    setLightbox((prev) => (prev < photos.length - 1 ? prev + 1 : 0))
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') setLightbox((prev) => (prev > 0 ? prev - 1 : photos.length - 1))
      if (e.key === 'ArrowRight') setLightbox((prev) => (prev < photos.length - 1 ? prev + 1 : 0))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, photos.length])

  if (photos.length === 0) {
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
        <p style={{
          textAlign: 'center',
          color: '#b08090',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: '1rem',
          marginTop: '2rem',
          lineHeight: 2,
        }}>
          Add your photos as 1.jpg, 2.jpg, 3.jpg, ... in the <code>public/photos/</code> folder
          <br />
          (supports .jpg, .jpeg, .png, .webp formats)
        </p>
      </section>
    )
  }

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
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="gallery-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onClick={() => openLightbox(i)}
          >
            <img src={photo.src} alt={captions[i % captions.length]} loading="lazy" />
            <div className="gallery-item-overlay">
              <p className="gallery-item-caption">{captions[i % captions.length]}</p>
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
              src={photos[lightbox].src}
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
