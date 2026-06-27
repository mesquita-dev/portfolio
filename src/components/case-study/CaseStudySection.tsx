import ScrollRevealBlock from '../project/ScrollRevealBlock.tsx'
import CaseStudyMedia from './CaseStudyMedia.tsx'
import { getMediaKey } from './caseStudyMediaUtils.ts'
import CaseStudySectionTitle from './CaseStudySectionTitle.tsx'
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
  const copy = (
    <>
      <CaseStudySectionTitle>{label}</CaseStudySectionTitle>
      <div className="flex flex-col gap-3">{content}</div>
    </>
  )

  return (
    <div className="grid grid-cols-4 items-start gap-6">
      {alwaysVisible ? (
        <div className="col-span-2 flex flex-col gap-1 self-start">{copy}</div>
      ) : (
        <ScrollRevealBlock className="col-span-2 self-start">{copy}</ScrollRevealBlock>
      )}

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
