import SiteHeader from '../components/SiteHeader.tsx'
import LazyVideo from '../components/LazyVideo.tsx'
import WorkCard from '../components/work/WorkCard.tsx'
import { workProjectMediaBoxClassName } from '../components/work/WorkCardMedia.tsx'
import {
  laptopFrameClassName,
  laptopFrameWorkWideClassName,
  laptopMediaWrapperClassName,
  laptopScreenClassName,
  laptopScreenWorkWideClassName,
} from '../components/case-study/laptopFrameClassNames.ts'
import { GRANTO_ONE_VISIBLE, LAYOUT_CLASSES } from '../constants/site.ts'
import {
  WORK_ADMENTUM_MEDIA,
  WORK_GENETICA_MEDIA,
  WORK_GRANTO_ONE_MEDIA,
  WORK_PETSY_MEDIA,
} from '../constants/workProjects.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'

const phoneScreenshotClassName =
  'my-[40px] block h-auto max-h-[90%] w-auto max-w-[75%] object-contain'

export default function WorkPage() {
  usePageSetup(LAYOUT_CLASSES.about)

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-4 py-4 font-aileron text-sm">
      <SiteHeader showBackLink />

      <main id="main-content" className="col-span-4 mt-32 flex flex-col gap-16 pb-16">
        <h1 className="m-0 font-bebas-neue text-9xl leading-[0.85]">work</h1>

        <div className="grid grid-cols-4 items-start gap-x-6 gap-y-6">
          <WorkCard
            href="/genetica"
            title="E-commerce app for bovine embryos"
            className="col-span-2 col-start-1 row-start-1"
          >
            <div
              className={`${workProjectMediaBoxClassName} bg-cover bg-center`}
              style={{ backgroundImage: `url(${WORK_GENETICA_MEDIA.backgroundUrl})` }}
            >
              <img
                src={WORK_GENETICA_MEDIA.phoneImageSrc}
                alt={WORK_GENETICA_MEDIA.phoneImageAlt}
                className={phoneScreenshotClassName}
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
            <div className={`${workProjectMediaBoxClassName} bg-[#F2F2F2]`}>
              <div className={laptopMediaWrapperClassName}>
                <div className={laptopFrameClassName}>
                  <img
                    src={WORK_ADMENTUM_MEDIA.cardImageSrc}
                    alt={WORK_ADMENTUM_MEDIA.cardImageAlt}
                    className={laptopScreenClassName}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </WorkCard>

          <WorkCard
            title="Improving the petsitter work"
            className="col-span-1 col-start-1 row-start-2"
          >
            <div
              className={`${workProjectMediaBoxClassName}`}
              style={{ backgroundColor: WORK_PETSY_MEDIA.backgroundColor }}
            >
              <LazyVideo
                src={WORK_PETSY_MEDIA.videoSrc}
                className={`${phoneScreenshotClassName} rounded-xl`}
                aria-label={WORK_PETSY_MEDIA.ariaLabel}
              />
            </div>
          </WorkCard>

          <WorkCard
            href="/granto-one"
            title="Internal platform for insurance brokers"
            className={`col-span-3 col-start-2 row-start-2${GRANTO_ONE_VISIBLE ? '' : ' hidden'}`}
          >
            <div
              className={`${workProjectMediaBoxClassName} items-stretch`}
              style={{ backgroundColor: WORK_GRANTO_ONE_MEDIA.backgroundColor }}
            >
              <div className={laptopMediaWrapperClassName}>
                <div className={laptopFrameWorkWideClassName}>
                  <img
                    src={WORK_GRANTO_ONE_MEDIA.imageSrc}
                    alt={WORK_GRANTO_ONE_MEDIA.imageAlt}
                    className={laptopScreenWorkWideClassName}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </WorkCard>
        </div>
      </main>
    </div>
  )
}
