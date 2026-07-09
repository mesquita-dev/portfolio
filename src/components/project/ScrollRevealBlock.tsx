import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery.ts'

type ScrollRevealBlockProps = {
  children: ReactNode
  className?: string
}

export default function ScrollRevealBlock({
  children,
  className = '',
}: ScrollRevealBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (!isDesktop) return

    const el = blockRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isDesktop])

  const isVisible = !isDesktop || revealed

  return (
    <div
      ref={blockRef}
      className={[
        'flex flex-col gap-1',
        prefersReducedMotion
          ? ''
          : 'transition-[opacity,transform] duration-700 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
