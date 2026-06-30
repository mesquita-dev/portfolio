import { useBrasiliaClock } from '../hooks/useBrasiliaClock.ts'

export default function BrasiliaClock() {
  const clock = useBrasiliaClock()

  return (
    <time dateTime={clock.dateTime} className="tabular-nums">
      {clock.time}
    </time>
  )
}
