import SiteHeader from '../SiteHeader.tsx'
import { LAYOUT_CLASSES } from '../../constants/site.ts'
import { usePageSetup } from '../../hooks/usePageSetup.ts'
import CaseStudyBackToTop from './CaseStudyBackToTop.tsx'
import CaseStudyCopyGroup from './CaseStudyCopyGroup.tsx'
import CaseStudyMeta from './CaseStudyMeta.tsx'
import CaseStudySection from './CaseStudySection.tsx'
import { resolveSectionMedia } from './caseStudyMediaUtils.ts'
import { groupCaseStudySections } from './groupCaseStudySections.ts'
import type { CaseStudyConfig } from './types.ts'

export default function CaseStudyPage({
  title,
  meta,
  gallery,
  sections,
  showBackToTop = true,
}: CaseStudyConfig) {
  usePageSetup(LAYOUT_CLASSES.about)

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-4 py-4 font-aileron text-sm">
      <SiteHeader showBackLink />

      <main id="main-content" className="col-span-4 mt-32 flex flex-col gap-16 pb-16">
        <h1 className="m-0 text-balance font-bebas-neue text-9xl leading-[0.85]">{title}</h1>

        <div className="flex flex-col gap-6">
          <CaseStudyMeta meta={meta} />

          <div className="flex flex-col gap-6">
            {groupCaseStudySections(sections).map((chunk) =>
              chunk.type === 'group' ? (
                <CaseStudyCopyGroup
                  key={chunk.sections.map((section) => section.id).join('-')}
                  sections={chunk.sections}
                  gallery={gallery}
                />
              ) : (
                <CaseStudySection
                  key={chunk.section.id}
                  label={chunk.section.label}
                  content={chunk.section.content}
                  media={resolveSectionMedia(chunk.section, gallery)}
                  alwaysVisible={!chunk.section.revealOnScroll}
                />
              ),
            )}
          </div>
        </div>

        {showBackToTop ? <CaseStudyBackToTop /> : null}
      </main>
    </div>
  )
}
