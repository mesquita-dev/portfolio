import CaseStudyMedia from './CaseStudyMedia.tsx'
import CaseStudySectionCopy from './CaseStudySectionCopy.tsx'
import { getMediaKey } from './caseStudyMediaUtils.ts'
import type { CaseStudyMediaItem } from './types.ts'
import type { ReactNode } from 'react'

type CaseStudySectionProps = {
  index: number
  label: string
  content: ReactNode
  media: CaseStudyMediaItem[]
  /** Show copy immediately without scroll reveal */
  alwaysVisible?: boolean
}

export default function CaseStudySection({
  index,
  label,
  content,
  media,
  alwaysVisible = false,
}: CaseStudySectionProps) {
  return (
    <section className="grid grid-cols-2 items-start gap-x-6 gap-y-12 py-16 first:pt-4 md:grid-cols-4 md:py-28">
      <p className="m-0 text-[0.65rem] uppercase tracking-[0.08em] opacity-40">
        {String(index).padStart(2, '0')}
      </p>

      <div className="col-span-2 col-start-1 self-start md:col-start-3">
        <CaseStudySectionCopy
          label={label}
          content={content}
          alwaysVisible={alwaysVisible}
        />
      </div>

      {media.length > 0 ? (
        <div className="col-span-2 col-start-1 mt-4 grid gap-4 md:col-span-4 md:grid-cols-2 md:gap-6">
          {media.map((item, mediaIndex) => (
            <div
              key={getMediaKey(item, mediaIndex)}
              className={
                media.length === 1 || mediaIndex === media.length - 1 && media.length % 2 === 1
                  ? 'md:col-span-2'
                  : ''
              }
            >
              <CaseStudyMedia item={item} />
            </div>
          ))}
        </div>
      ) : null}
    </section>
  )
}
