import { useEffect, useState } from 'react'
import { getBrasiliaClock, type BrasiliaClock } from '../lib/brasiliaClock.ts'

const CLOCK_TICK_MS = 1_000

export function useBrasiliaClock(): BrasiliaClock {
  const [clock, setClock] = useState(getBrasiliaClock)

  useEffect(() => {
    const tick = () => setClock(getBrasiliaClock())

    tick()
    const interval = window.setInterval(tick, CLOCK_TICK_MS)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return clock
}
