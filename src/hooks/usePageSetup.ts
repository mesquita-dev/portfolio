import { useEffect } from 'react'

export function usePageSetup(layoutClass: string) {
  useEffect(() => {
    document.documentElement.classList.add(layoutClass)

    return () => {
      document.documentElement.classList.remove(layoutClass)
    }
  }, [layoutClass])
}
