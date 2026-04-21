import type { ReactNode } from 'react'

interface CarouselSlideProps {
  backgroundImage: string
  children: ReactNode
  /** Optional dark overlay opacity 0-1 */
  overlayOpacity?: number
}

export function CarouselSlide({
  backgroundImage,
  children,
  overlayOpacity = 0.25,
}: CarouselSlideProps) {
  return (
    <div
      id="carousel-slide"
      style={{
        width: 1080,
        height: 1350,
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark overlay for contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      />

      {/* Content layer */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 48px',
        }}
      >
        {children}
      </div>
    </div>
  )
}
