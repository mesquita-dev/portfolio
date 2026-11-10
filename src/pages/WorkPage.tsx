import SiteHeader from '../components/SiteHeader.tsx'
import LazyVideo from '../components/LazyVideo.tsx'
import WorkCard from '../components/work/WorkCard.tsx'
import { workProjectMediaBoxClassName } from '../components/work/WorkCardMedia.tsx'
import { LAYOUT_CLASSES } from '../constants/site.ts'
import {
  WORK_ADMENTUM_MEDIA,
  WORK_ANIMATIONS_MEDIA,
  WORK_GENETICA_MEDIA,
  WORK_GRANTO_ONE_MEDIA,
  WORK_PETSY_MEDIA,
} from '../constants/workProjects.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'

const phoneScreenshotClassName =
  'my-[40px] block h-auto max-h-[90%] w-auto max-w-[75%] rounded-xl object-contain'

const heroMediaBoxClassName =
  'relative aspect-video w-full overflow-hidden bg-[#11110f]'

const heroImageClassName = 'h-full w-full object-cover object-center'

export default function WorkPage() {
  usePageSetup(LAYOUT_CLASSES.about)

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-4 py-4 font-aileron text-sm">
      <SiteHeader showBackLink />

      <main id="main-content" className="col-span-4 mt-32 flex flex-col gap-16 pb-16">
        <h1 className="m-0 text-balance font-bebas-neue text-9xl leading-[0.85]">work</h1>

        <div className="grid grid-cols-4 items-start gap-x-6 gap-y-6">
          <WorkCard
            href="/genetica"
            title="E-commerce app for bovine embryos"
            className="col-span-2 col-start-1 row-start-1"
          >
            <div className={heroMediaBoxClassName}>
              <img
                src={WORK_GENETICA_MEDIA.heroSrc}
                alt={WORK_GENETICA_MEDIA.heroAlt}
                className={heroImageClassName}
                loading="lazy"
                decoding="async"
              />
            </div>
          </WorkCard>

          <WorkCard
            href="/admentum"
            title="Platform to find lawyers and an easy way to manage your meetings"
            className="col-span-2 col-start-3 row-start-1"
          >
            <div className={heroMediaBoxClassName}>
              <img
                src={WORK_ADMENTUM_MEDIA.heroSrc}
                alt={WORK_ADMENTUM_MEDIA.heroAlt}
                className={heroImageClassName}
                loading="lazy"
                decoding="async"
              />
            </div>
          </WorkCard>

          <WorkCard
            href="/petsy"
            title="Improving the petsitter work"
            className="col-span-2 col-start-1 row-start-2"
          >
            <div className={heroMediaBoxClassName}>
              <img
                src={WORK_PETSY_MEDIA.heroSrc}
                alt={WORK_PETSY_MEDIA.heroAlt}
                className={heroImageClassName}
                loading="lazy"
                decoding="async"
              />
            </div>
          </WorkCard>

          <WorkCard
            href="/granto-one"
            title="Built an internal platform for an insurance brokerage, reducing lead time by 70%."
            className="col-span-2 col-start-3 row-start-2"
          >
            <div className={heroMediaBoxClassName}>
              <img
                src={WORK_GRANTO_ONE_MEDIA.heroSrc}
                alt={WORK_GRANTO_ONE_MEDIA.heroAlt}
                className={heroImageClassName}
                loading="lazy"
                decoding="async"
              />
            </div>
          </WorkCard>

          <WorkCard
            href={WORK_ANIMATIONS_MEDIA.href}
            ctaLabel={WORK_ANIMATIONS_MEDIA.ctaLabel}
            title="Repository with microinteractions and UI motion"
            className="col-span-2 col-start-1 row-start-3"
          >
            <div
              className={`${workProjectMediaBoxClassName}`}
              style={{ backgroundColor: WORK_ANIMATIONS_MEDIA.backgroundColor }}
            >
              <LazyVideo
                src={WORK_ANIMATIONS_MEDIA.videoSrc}
                className={phoneScreenshotClassName}
                aria-label={WORK_ANIMATIONS_MEDIA.ariaLabel}
              />
            </div>
          </WorkCard>
        </div>
      </main>
    </div>
  )
}
