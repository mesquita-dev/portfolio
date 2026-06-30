import { useEffect, useRef } from 'react'

type LazyVideoProps = {
  src: string
  className?: string
  'aria-label'?: string
}

export default function LazyVideo({
  src,
  className,
  'aria-label': ariaLabel,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
