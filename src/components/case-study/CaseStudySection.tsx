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
}

export default function CaseStudySection({
  label,
  content,
  media,
}: CaseStudySectionProps) {
  return (
    <div className="grid grid-cols-4 items-start gap-6">
      <ScrollRevealBlock className="col-span-2 self-start">
        <CaseStudySectionTitle>{label}</CaseStudySectionTitle>
        <div className="flex flex-col gap-3">{content}</div>
      </ScrollRevealBlock>

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
