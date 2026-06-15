import { useEffect, useState } from 'react'
import BackToHomeLink from './BackToHomeLink.tsx'

const LAYOUT_ABOUT_CLASS = 'layout-about'

const BEBAS_NEUE_FONT_URL =
  'https://api.fontshare.com/v2/css?f[]=bebas-neue@400&display=swap'

const geneticaBackgroundUrl =
  'https://images.unsplash.com/photo-1569239591652-6cc3025b07fa?auto=format&fit=crop&q=85&w=1600'

const phoneScreenshotClassName =
  'my-[40px] block h-auto max-h-[90%] w-auto max-w-[75%] object-contain'

const workProjectMediaBoxClassName =
  'flex h-full min-h-[420px] w-full items-center justify-center overflow-hidden'

function toggleGeneticaTesteLayout(active: boolean) {
  document.documentElement.classList.toggle(LAYOUT_ABOUT_CLASS, active)
}

function getBrasiliaClock() {
  const now = new Date()

  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now)

  const dateTime = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
    .format(now)
    .replace(' ', 'T')

  return { time, dateTime: `${dateTime}-03:00` }
}

export default function GeneticaTestePage() {
  const [brasiliaClock, setBrasiliaClock] = useState(getBrasiliaClock)

  useEffect(() => {
    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href = BEBAS_NEUE_FONT_URL
    document.head.appendChild(fontLink)

    toggleGeneticaTesteLayout(true)

    return () => {
      fontLink.remove()
      toggleGeneticaTesteLayout(false)
    }
  }, [])

  useEffect(() => {
    const tick = () => setBrasiliaClock(getBrasiliaClock())

    tick()
    const interval = window.setInterval(tick, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-4 py-4 font-aileron text-sm">
      <header className="col-span-4 grid grid-cols-4 items-center gap-6">
        <p className="m-0 text-gray-400">
          <time dateTime={brasiliaClock.dateTime} className="tabular-nums">
            {brasiliaClock.time}
          </time>
          {' '}— Brazil
        </p>
        <div className="col-span-1 col-start-2">
          <BackToHomeLink />
        </div>
        <div className="col-span-2 col-start-3 flex items-center justify-between">
          <h1 className="m-0">
            <a
              href="/teste"
              className="transition-colors hover:text-[#EC3406]"
            >
              Lucas Mesquita
            </a>
          </h1>
          <a
            href="https://drive.google.com/file/d/1AdXMVQ2_PYs5CKkdogCMS-zm19XZqS9g/view"
            target="_blank"
            rel="noreferrer"
            className="m-0 text-gray-400 transition-colors hover:text-[#EC3406]"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="col-span-4 mt-32 flex flex-col gap-16 pb-16">
        <h1 className="m-0 font-bebas-neue text-9xl leading-[0.85]">
          genetica mais
        </h1>

        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 flex flex-col gap-2 self-start">
            <h2 className="m-0">E-commerce app for bovine embryos</h2>
            <div
              className={`${workProjectMediaBoxClassName} bg-cover bg-center`}
              style={{ backgroundImage: `url(${geneticaBackgroundUrl})` }}
            >
              <img
                src="/genetica/Start.png"
                alt="Genetica Mais"
                className={phoneScreenshotClassName}
              />
            </div>
          </div>

          <div className="col-span-2 col-start-3 flex flex-col gap-16 self-start">
            <div className="grid grid-cols-2 gap-6">
              <h2 className="m-0 self-start text-gray-400">overview</h2>
              <div className="flex flex-col gap-3">
                <p className="m-0">
                  Genética Mais was born from my first professional experience at
                  ABS, the world&apos;s largest livestock company, where I worked in
                  the bovine semen and embryo storage department.
                </p>
                <p className="m-0">
                  The idea was an e-commerce platform where genetics producers
                  could list bovine semen and embryos, and buyers could select
                  the desired quantity and have it delivered directly to their
                  farm — simple, direct, and digital.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <h2 className="m-0 self-start text-gray-400">role</h2>
              <div className="flex flex-col gap-3">
                <p className="m-0">Product Designer</p>
                <p className="m-0 text-gray-400">2024 — 2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
