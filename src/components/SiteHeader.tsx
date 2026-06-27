import type { BrasiliaClock } from '../lib/brasiliaClock.ts'
import { ACCENT_HOVER_CLASS, RESUME_URL } from '../constants/site.ts'
import BackToHomeLink from './BackToHomeLink.tsx'

type SiteHeaderProps = {
  clock: BrasiliaClock
  showBackLink?: boolean
}

export default function SiteHeader({ clock, showBackLink = false }: SiteHeaderProps) {
  return (
    <header className="col-span-4 grid grid-cols-4 items-center gap-6">
      <p className="m-0 text-gray-400">
        <time dateTime={clock.dateTime} className="tabular-nums">
          {clock.time}
        </time>
        {' '}— Brazil
      </p>

      {showBackLink ? (
        <div className="col-span-1 col-start-2">
          <BackToHomeLink />
        </div>
      ) : null}

      <div className="col-span-2 col-start-3 flex items-center justify-between">
        <h1 className="m-0">
          <a href="/" className={ACCENT_HOVER_CLASS}>
            Lucas Mesquita
          </a>
        </h1>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className={`m-0 text-gray-400 ${ACCENT_HOVER_CLASS}`}
        >
          Resume
        </a>
      </div>
    </header>
  )
}
