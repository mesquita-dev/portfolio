import CaseStudyMedia from './CaseStudyMedia.tsx'
import CaseStudySectionCopy from './CaseStudySectionCopy.tsx'
import { getMediaKey } from './caseStudyMediaUtils.ts'
import type { CaseStudyMediaItem } from './types.ts'
import type { ReactNode } from 'react'

type CaseStudySectionProps = {
  label: string
  content: ReactNode
  media: CaseStudyMediaItem[]
  /** Show copy immediately without scroll reveal */
  alwaysVisible?: boolean
}

export default function CaseStudySection({
  label,
  content,
  media,
  alwaysVisible = false,
}: CaseStudySectionProps) {
  return (
    <div className="grid grid-cols-4 items-start gap-6">
      <div className="col-span-2 self-start">
        <CaseStudySectionCopy
          label={label}
          content={content}
          alwaysVisible={alwaysVisible}
        />
      </div>

      <div
        className={`col-span-2 col-start-3 ${media.length > 1 ? 'flex flex-col gap-6' : ''}`}
      >
        {media.map((item, index) => (
          <CaseStudyMedia key={getMediaKey(item, index)} item={item} />
        ))}
      </div>
    </div>
  )
}
