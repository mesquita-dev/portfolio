import SiteHeader from '../components/SiteHeader.tsx'
import WorkCard from '../components/work/WorkCard.tsx'
import { workProjectMediaBoxClassName } from '../components/work/WorkCardMedia.tsx'
import {
  laptopFrameClassName,
  laptopFrameWorkWideClassName,
  laptopMediaWrapperClassName,
  laptopScreenClassName,
  laptopScreenWorkWideClassName,
} from '../components/case-study/laptopFrameClassNames.ts'
import { GENETICA_BACKGROUND_URL, GRANTO_ONE_VISIBLE, LAYOUT_CLASSES } from '../constants/site.ts'
import { useBrasiliaClock } from '../hooks/useBrasiliaClock.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'

const phoneScreenshotClassName =
  'my-[40px] block h-auto max-h-[90%] w-auto max-w-[75%] object-contain'

export default function WorkPage() {
  const brasiliaClock = useBrasiliaClock()

  usePageSetup(LAYOUT_CLASSES.about)

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-4 py-4 font-aileron text-sm">
      <SiteHeader clock={brasiliaClock} showBackLink />

      <main className="col-span-4 mt-32 flex flex-col gap-16 pb-16">
        <h1 className="m-0 font-bebas-neue text-9xl leading-[0.85]">work</h1>

        <div className="grid grid-cols-4 items-start gap-x-6 gap-y-6">
          <WorkCard
            href="/genetica"
            title="E-commerce app for bovine embryos"
            className="col-span-2 col-start-1 row-start-1"
          >
            <div
              className={`${workProjectMediaBoxClassName} bg-cover bg-center`}
              style={{ backgroundImage: `url(${GENETICA_BACKGROUND_URL})` }}
            >
              <img
                src="/genetica/Start.png"
                alt="Genetica Mais"
                className={phoneScreenshotClassName}
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
                    src="/admentum/Adv%20-%20Perfil.jpg"
                    alt="Admentum"
                    className={laptopScreenClassName}
                  />
                </div>
              </div>
            </div>
          </WorkCard>

          <WorkCard
            title="Improving the petsitter work"
            className="col-span-1 col-start-1 row-start-2"
          >
            <div className={`${workProjectMediaBoxClassName} bg-[#89D4FF]`}>
              <video
                className={`${phoneScreenshotClassName} rounded-xl`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Petsy"
              >
                <source src="/works/petsy.mp4" type="video/mp4" />
              </video>
            </div>
          </WorkCard>

          <WorkCard
            href="/granto-one"
            title="Internal platform for insurance brokers"
            className={`col-span-3 col-start-2 row-start-2${GRANTO_ONE_VISIBLE ? '' : ' hidden'}`}
          >
            <div className={`${workProjectMediaBoxClassName} items-stretch bg-[#f4edff]`}>
              <div className={laptopMediaWrapperClassName}>
                <div className={laptopFrameWorkWideClassName}>
                  <img
                    src="/granto-one/interna-oportunidade.webp"
                    alt="Granto One"
                    className={laptopScreenWorkWideClassName}
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
