import SiteHeader from '../components/SiteHeader.tsx'
import WorkCard from '../components/work/WorkCard.tsx'
import { workProjectMediaBoxClassName } from '../components/work/WorkCardMedia.tsx'
import { GENETICA_BACKGROUND_URL, LAYOUT_CLASSES } from '../constants/site.ts'
import { useBrasiliaClock } from '../hooks/useBrasiliaClock.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'

const phoneScreenshotClassName =
  'my-[40px] block h-auto max-h-[90%] w-auto max-w-[75%] object-contain'

const admentumLaptopFrameClassName =
  'overflow-hidden rounded-xl border-2 border-[#404040] bg-[#1c1c1c] p-2 shadow-[0_12px_32px_rgba(0,0,0,0.12)]'

const admentumLaptopScreenClassName =
  'block w-full rounded-md border border-[#2f2f2f] object-contain'

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
            disabled
            title="Platform to find lawyers and an easy way to manage your meetings"
            className="col-span-2 col-start-3 row-start-1"
          >
            <div className={`${workProjectMediaBoxClassName} bg-[#F2F2F2]`}>
              <div className="flex max-h-[85%] max-w-[90%] flex-col items-center">
                <div className={admentumLaptopFrameClassName}>
                  <img
                    src="/admentum/Adv%20-%20Perfil.jpg"
                    alt="Admentum"
                    className={admentumLaptopScreenClassName}
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
        </div>
      </main>
    </div>
  )
}
