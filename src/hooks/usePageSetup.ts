import { useEffect } from 'react'
import { BEBAS_NEUE_FONT_URL } from '../constants/site.ts'

export function usePageSetup(layoutClass: string) {
  useEffect(() => {
    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href = BEBAS_NEUE_FONT_URL
    document.head.appendChild(fontLink)

    document.documentElement.classList.add(layoutClass)

    return () => {
      fontLink.remove()
      document.documentElement.classList.remove(layoutClass)
    }
  }, [layoutClass])
}
