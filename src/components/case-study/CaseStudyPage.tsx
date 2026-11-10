import InternalLink from '../InternalLink.tsx'
import { LAYOUT_CLASSES } from '../../constants/site.ts'
import { usePageSetup } from '../../hooks/usePageSetup.ts'
import CaseStudyMeta from './CaseStudyMeta.tsx'
import CaseStudySection from './CaseStudySection.tsx'
import { resolveSectionMedia } from './caseStudyMediaUtils.ts'
import type { CaseStudyConfig } from './types.ts'

export default function CaseStudyPage({
  title,
  summary,
  eyebrow = 'Selected case study',
  hero,
  meta,
  gallery,
  sections,
  nextProject,
}: CaseStudyConfig) {
  usePageSetup(LAYOUT_CLASSES.editorial)

  return (
    <div className="min-h-dvh bg-[#f5f5f2] font-aileron text-[#11110f]">
      <header className="fixed inset-x-0 top-0 z-50 grid grid-cols-2 px-4 py-4 text-[0.65rem] uppercase leading-tight tracking-[0.08em] text-[#11110f] md:grid-cols-4 md:px-7">
        <InternalLink href="/" className="hit-area-40 w-fit hover-text-accent">
          Lucas Mesquita
        </InternalLink>
        <span className="hidden opacity-60 md:block">{eyebrow}</span>
        <nav className="col-start-2 flex justify-end gap-5 md:col-start-4">
          <a href="/#work" className="hit-area-40 hover-text-accent">
            All work
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="grid min-h-[72svh] grid-cols-2 content-end gap-x-6 gap-y-12 px-4 pb-8 pt-28 md:grid-cols-4 md:px-7 md:pb-12">
          <p className="col-span-2 m-0 self-start text-[0.65rem] uppercase leading-tight tracking-[0.08em] opacity-50 md:col-span-1">
            {eyebrow}
            <br />
            {meta.year}
          </p>

          <h1 className="col-span-2 m-0 text-balance text-[clamp(4rem,12vw,11rem)] font-normal leading-[0.76] tracking-[-0.085em] md:col-span-4">
            {title}
          </h1>

          {summary ? (
            <p className="col-span-2 col-start-1 m-0 max-w-2xl text-balance text-[clamp(1.5rem,3vw,3.25rem)] leading-[1.02] tracking-[-0.045em] md:col-start-3">
              {summary}
            </p>
          ) : null}
        </section>

        {hero ? (
          <section className="px-4 md:px-7" aria-label="Project preview">
            <img
              src={hero.src}
              alt={hero.alt}
              className="image-outline aspect-video h-auto w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </section>
        ) : null}

        <section
          className="bg-[#f5f5f2] px-4 py-8 text-[#11110f] md:px-7 md:py-10"
          aria-label="Project information"
        >
          <CaseStudyMeta meta={meta} />
        </section>

        <div className="px-4 py-24 md:px-7 md:py-36">
          {sections.map((section, index) => (
            <CaseStudySection
              key={section.id}
              index={index + 1}
              label={section.label}
              content={section.content}
              media={resolveSectionMedia(section, gallery)}
              alwaysVisible={!section.revealOnScroll}
            />
          ))}
        </div>

        <footer className="bg-[#11110f] px-4 py-24 text-[#f5f5f2] md:px-7 md:py-32">
          {nextProject ? (
            <InternalLink
              href={nextProject.href}
              className="group block outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span className="text-[0.65rem] uppercase tracking-[0.08em] opacity-50">
                Next case
              </span>
              <span className="mt-16 flex items-end justify-between gap-6 text-[clamp(3.5rem,10vw,9rem)] leading-[0.8] tracking-[-0.075em] transition-[color] duration-200 group-hover:text-[#ff4d00] group-focus-visible:text-[#ff4d00]">
                {nextProject.title}
                <span aria-hidden className="text-[0.45em]">
                  ↗
                </span>
              </span>
            </InternalLink>
          ) : (
            <a
              href="/#work"
              className="inline-flex min-h-10 items-center text-[0.65rem] uppercase tracking-[0.08em] hover:text-[#ff4d00]"
            >
              Back to selected work
            </a>
          )}
        </footer>
      </main>
    </div>
  )
}
