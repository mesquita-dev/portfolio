import { useEffect, useState, type RefObject } from 'react'

export function useCaseStudyScrollProgress(
  anchorRef: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  const [maxProgress, setMaxProgress] = useState(0)

  useEffect(() => {
    if (!enabled) {
      setMaxProgress(1)
      return
    }

    const update = () => {
      const anchor = anchorRef.current
      if (!anchor) return

      const rect = anchor.getBoundingClientRect()
      const anchorTop = window.scrollY + rect.top
      const anchorHeight = anchor.offsetHeight
      const range = anchorHeight - window.innerHeight

      let progress = 0
      if (range <= 0) {
        progress = window.scrollY >= anchorTop ? 1 : 0
      } else {
        const scrolled = window.scrollY - anchorTop
        progress = Math.min(Math.max(scrolled / range, 0), 1)
      }

      setMaxProgress((current) => Math.max(current, progress))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    const anchor = anchorRef.current
    const resizeObserver =
      anchor && typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(update)
        : null
    if (anchor) resizeObserver?.observe(anchor)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      resizeObserver?.disconnect()
    }
  }, [anchorRef, enabled])

  return enabled ? maxProgress : 1
}
