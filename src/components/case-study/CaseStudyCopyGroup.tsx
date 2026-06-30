import CaseStudyMedia from './CaseStudyMedia.tsx'
import CaseStudySectionCopy from './CaseStudySectionCopy.tsx'
import { getMediaKey, resolveSectionMedia } from './caseStudyMediaUtils.ts'
import type { CaseStudyMediaItem, CaseStudySectionData } from './types.ts'

type CaseStudyCopyGroupProps = {
  sections: CaseStudySectionData[]
  gallery?: CaseStudyMediaItem[]
}

export default function CaseStudyCopyGroup({
  sections,
  gallery,
}: CaseStudyCopyGroupProps) {
  const mediaSections = sections.filter((section) => !section.copyOnly)
  const rowCount = mediaSections.length

  return (
    <div className="grid grid-cols-4 items-stretch gap-x-6 gap-y-6">
      <div
        className="col-span-2 flex h-full flex-col justify-between"
        style={{ gridRow: `1 / span ${rowCount}` }}
      >
        {sections.map((section) => (
          <CaseStudySectionCopy
            key={section.id}
            label={section.label}
            content={section.content}
            alwaysVisible={section.revealAt == null}
          />
        ))}
      </div>

      {mediaSections.map((section, index) => {
        const media = resolveSectionMedia(section, gallery)

        return (
          <div
            key={section.id}
            className={`col-span-2 col-start-3 ${media.length > 1 ? 'flex flex-col gap-6' : ''}`}
            style={{ gridRow: index + 1 }}
          >
            {media.map((item, mediaIndex) => (
              <CaseStudyMedia key={getMediaKey(item, mediaIndex)} item={item} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
