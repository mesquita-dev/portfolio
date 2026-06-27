import SiteHeader from '../SiteHeader.tsx'
import { LAYOUT_CLASSES } from '../../constants/site.ts'
import { useBrasiliaClock } from '../../hooks/useBrasiliaClock.ts'
import { usePageSetup } from '../../hooks/usePageSetup.ts'
import CaseStudyBackToTop from './CaseStudyBackToTop.tsx'
import CaseStudyMeta from './CaseStudyMeta.tsx'
import CaseStudySection from './CaseStudySection.tsx'
import { resolveSectionMedia } from './caseStudyMediaUtils.ts'
import type { CaseStudyConfig } from './types.ts'

export default function CaseStudyPage({
  title,
  meta,
  gallery,
  sections,
  showBackToTop = true,
}: CaseStudyConfig) {
  const brasiliaClock = useBrasiliaClock()

  usePageSetup(LAYOUT_CLASSES.about)

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-4 py-4 font-aileron text-sm">
      <SiteHeader clock={brasiliaClock} showBackLink />

      <main className="col-span-4 mt-32 flex flex-col gap-16 pb-16">
        <h1 className="m-0 font-bebas-neue text-9xl leading-[0.85]">{title}</h1>

        <div className="flex flex-col gap-6">
          <CaseStudyMeta meta={meta} />

          <div className="flex flex-col gap-6">
            {sections.map((section) => (
              <CaseStudySection
                key={section.id}
                label={section.label}
                content={section.content}
                media={resolveSectionMedia(section, gallery)}
                alwaysVisible={section.revealAt == null}
              />
            ))}
          </div>
        </div>

        {showBackToTop ? <CaseStudyBackToTop /> : null}
      </main>
    </div>
  )
}
