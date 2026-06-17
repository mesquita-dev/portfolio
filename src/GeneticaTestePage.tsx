import { useEffect, useState } from 'react'
import BackToHomeLink from './BackToHomeLink.tsx'

const LAYOUT_ABOUT_CLASS = 'layout-about'

const BEBAS_NEUE_FONT_URL =
  'https://api.fontshare.com/v2/css?f[]=bebas-neue@400&display=swap'

const geneticaBackgroundUrl =
  'https://images.unsplash.com/photo-1569239591652-6cc3025b07fa?auto=format&fit=crop&q=85&w=1600'

const phoneScreenshotClassName =
  'block h-auto max-h-[380px] w-auto max-w-[65%] object-contain'

const geneticaCaseMediaBoxClassName =
  'flex h-[480px] w-full items-center justify-center overflow-hidden'

const geneticaMediaItems = [
  {
    type: 'video' as const,
    src: '/genetica/geneticavideo2.mp4',
    label: 'Genetica Mais preview',
  },
  {
    type: 'image' as const,
    src: '/genetica/components.png',
    alt: 'Genetica components',
  },
  {
    type: 'image' as const,
    src: '/genetica/Start.png',
    alt: 'Genetica Start',
  },
  {
    type: 'image' as const,
    src: '/genetica/Login.png',
    alt: 'Genetica Login',
  },
  {
    type: 'image' as const,
    src: '/genetica/Register.png',
    alt: 'Genetica Register',
  },
  {
    type: 'video' as const,
    src: '/genetica/home.mp4',
    label: 'Genetica Mais home video',
  },
  {
    type: 'image' as const,
    src: '/genetica/mfc.png',
    alt: 'Genetica MFC',
  },
  {
    type: 'video' as const,
    src: '/genetica/comprar-embryo.mp4',
    label: 'Genetica Mais comprar embryo video',
  },
]

function GeneticaCaseMedia({
  item,
}: {
  item: (typeof geneticaMediaItems)[number]
}) {
  return (
    <div
      className={`${geneticaCaseMediaBoxClassName} bg-cover bg-center`}
      style={{ backgroundImage: `url(${geneticaBackgroundUrl})` }}
    >
      {item.type === 'video' ? (
        <video
          className={`${phoneScreenshotClassName} rounded-xl`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={item.label}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className={phoneScreenshotClassName}
        />
      )}
    </div>
  )
}

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
              href="/"
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
          <div className="col-span-1 flex flex-col gap-6 self-start">
            <div className="flex justify-between gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="m-0 self-start text-gray-400">role</h2>
                <p className="m-0">Product Designer</p>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="m-0 self-start text-gray-400">team</h2>
                <p className="m-0">Myself</p>
              </div>
            </div>

            <div className="flex justify-between gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="m-0 self-start text-gray-400">stacks</h2>
                <div className="flex flex-col">
                  <p className="m-0">Figma</p>
                  <p className="m-0">Motion</p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="m-0 self-start text-gray-400">year</h2>
                <p className="m-0">2024 — 2025</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="m-0 self-start text-gray-400">overview</h2>
              <div className="flex flex-col gap-3">
                <p className="m-0">
                  Genética Mais was born from my first professional experience at ABS, the world's largest livestock company, where I worked in the bovine semen and embryo storage department. There, I noticed the sector was extremely outdated and technology-poor — and I saw an opportunity.
                </p>
                <p className="m-0">
                  The idea was an e-commerce platform where genetics producers could list bovine semen and embryos, and buyers could select the desired quantity and have it delivered directly to their farm — simple, direct, and digital.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="m-0 self-start text-gray-400">process</h2>
              <p className="m-0">
                  To validate the concept, I attended livestock events where I conducted field research, presented an interactive prototype, and spoke with genetics producers, buyers, veterinarians, and genetics center employees. The results were encouraging — most people found the idea relevant and said they would use the product.
                </p>
                <p className="m-0">
                  However, an unavoidable contractual barrier emerged: genetics centers require that all commercialization be handled exclusively through their sales representatives, which made the business model unviable. The project never moved into development.
                </p>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="m-0 self-start text-gray-400">result</h2>
              <p className="m-0">
                  Even so, it was one of the most valuable experiences of my career. I learned firsthand that validating an idea with real users — before writing a single line of code — is essential to avoid wasting time and money. Figma and a clickable prototype were enough to reach a clear conclusion, and that alone made the entire process worthwhile.
                </p>
            </div>
          </div>

          <div className="col-span-2 col-start-3 flex flex-col gap-6 self-start">
            {geneticaMediaItems.map((item) => (
              <GeneticaCaseMedia key={item.src} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
