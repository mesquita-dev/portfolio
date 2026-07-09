import BrasiliaClock from './BrasiliaClock.tsx'
import InternalLink from './InternalLink.tsx'
import { ACCENT_HOVER_CLASS, RESUME_URL } from '../constants/site.ts'
import BackToHomeLink from './BackToHomeLink.tsx'

type SiteHeaderProps = {
  showBackLink?: boolean
}

export default function SiteHeader({ showBackLink = false }: SiteHeaderProps) {
  return (
    <header className="col-span-4 grid grid-cols-4 items-center gap-6">
      <p className="m-0 text-gray-400">
        <BrasiliaClock /> — Brazil
      </p>

      {showBackLink ? (
        <div className="col-span-1 col-start-2">
          <BackToHomeLink />
        </div>
      ) : null}

      <div className="col-span-2 col-start-3 flex items-center justify-between">
        <p className="m-0">
          <InternalLink href="/" className={`hit-area-40 ${ACCENT_HOVER_CLASS}`}>
            Lucas Mesquita
          </InternalLink>
        </p>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className={`hit-area-40 m-0 text-gray-400 ${ACCENT_HOVER_CLASS}`}
        >
          Resume
        </a>
      </div>
    </header>
  )
}
