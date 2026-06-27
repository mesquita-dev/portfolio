export type BrasiliaClock = {
  time: string
  dateTime: string
}

const TIME_ZONE = 'America/Sao_Paulo'
const TIME_ZONE_OFFSET = '-03:00'

export function getBrasiliaClock(): BrasiliaClock {
  const now = new Date()

  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now)

  const dateTime = new Intl.DateTimeFormat('sv-SE', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
    .format(now)
    .replace(' ', 'T')

  return { time, dateTime: `${dateTime}${TIME_ZONE_OFFSET}` }
}
