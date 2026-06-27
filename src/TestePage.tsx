import { useEffect, useState } from 'react'

/**
 * Home em / — edite este arquivo livremente.
 * Os estilos globais do portfolio são resetados enquanto esta rota está ativa.
 */
const LAYOUT_TESTE_CLASS = 'layout-teste'

const BEBAS_NEUE_FONT_URL =
  'https://api.fontshare.com/v2/css?f[]=bebas-neue@400&display=swap'

function toggleTesteLayout(active: boolean) {
  document.documentElement.classList.toggle(LAYOUT_TESTE_CLASS, active)
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

function AnimatedContactLabel() {
  return (
    <span
      className="group m-0 block h-[0.85em] w-full cursor-default overflow-hidden text-9xl leading-[0.85]"
      aria-label="Contact — Look left"
    >
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
        <span className="block whitespace-nowrap leading-[0.85]">Contact</span>
        <span className="block whitespace-nowrap leading-[0.85]">
          Look left
        </span>
      </span>
    </span>
  )
}

function AnimatedWorkLink({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <a
      href="/work"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group m-0 block h-[0.85em] w-full overflow-hidden text-9xl leading-[0.85] transition-colors hover:text-[#EC3406]"
      aria-label="Work — See all"
    >
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
        <span className="block whitespace-nowrap leading-[0.85]">Work</span>
        <span className="block whitespace-nowrap leading-[0.85]">see all</span>
      </span>
    </a>
  )
}

const previewImageClassName =
  'block aspect-[2/3] w-full object-contain object-center'

const geneticaBackgroundUrl =
  'https://images.unsplash.com/photo-1569239591652-6cc3025b07fa?auto=format&fit=crop&q=85&w=1600'

const workPreviewBlockClassName =
  'flex h-[calc((100%-1rem)/2)] min-h-0 w-full shrink-0 items-center justify-center overflow-hidden'

const admentumPreviewBlockClassName =
  'absolute inset-x-0 bottom-[calc(100%+1rem)] flex h-[calc((100%-1rem)/2)] items-center justify-center overflow-visible bg-black'

const geneticaPreviewPhoneClassName =
  'block h-auto max-h-[90%] w-auto max-w-[75%] object-contain'

const petsyPreviewPhoneClassName =
  'block h-auto max-h-[90%] w-auto max-w-[75%] rounded-xl object-contain'

const admentumPreviewImageClassName =
  'block h-auto w-full max-w-full object-contain object-center'

function WorkPreviewStack() {
  return (
    <div className="relative flex h-full min-h-0 w-full flex-col justify-end gap-4 overflow-visible">
      <div className={admentumPreviewBlockClassName}>
        <img
          src="/admentum/admentum1.jpg"
          alt="Admentum"
          className={admentumPreviewImageClassName}
        />
      </div>

      <div className={`${workPreviewBlockClassName} bg-[#89D4FF]`}>
        <video
          className={petsyPreviewPhoneClassName}
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

      <div
        className={`${workPreviewBlockClassName} bg-cover bg-center`}
        style={{ backgroundImage: `url(${geneticaBackgroundUrl})` }}
      >
        <img
          src="/genetica/Start.png"
          alt="Genetica Mais"
          className={geneticaPreviewPhoneClassName}
        />
      </div>
    </div>
  )
}

export default function TestePage() {
  const [brasiliaClock, setBrasiliaClock] = useState(getBrasiliaClock)
  const [previewImage, setPreviewImage] = useState<'work' | 'about' | null>(
    null,
  )

  useEffect(() => {
    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href = BEBAS_NEUE_FONT_URL
    document.head.appendChild(fontLink)

    toggleTesteLayout(true)

    return () => {
      fontLink.remove()
      toggleTesteLayout(false)
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
    <div
      id="teste-canvas"
      className="mx-auto grid min-h-dvh w-full max-w-7xl grid-cols-4 grid-rows-[auto_1fr] py-4 font-aileron text-sm"
    >
      <header className="col-span-4 grid grid-cols-4 items-center gap-6">
        <p className="m-0 text-gray-400">
          <time dateTime={brasiliaClock.dateTime} className="tabular-nums">
            {brasiliaClock.time}
          </time>
          {' '}— Brazil
        </p>
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
            href="https://drive.google.com/file/d/1EBZOzHky9Yuqwk0yUgwY3c1Ju5D-mryd/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="m-0 text-gray-400 transition-colors hover:text-[#EC3406]"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="col-span-4 row-start-2 grid h-full min-h-0 grid-cols-4 items-end gap-6">
        <div className="col-span-1 flex flex-col gap-1 self-end text-xs text-gray-400">
          <a
            href="https://www.linkedin.com/in/lucas-msqt/"
            target="_blank"
            rel="noreferrer"
            className="m-0 transition-colors hover:text-[#EC3406]"
          >
            /in/lucas-msqt/
          </a>
          <a
            href="https://github.com/mesquita-dev"
            target="_blank"
            rel="noreferrer"
            className="m-0 transition-colors hover:text-[#EC3406]"
          >
            @mesquita-dev
          </a>
          <a
            href="mailto:lmesquita2k@gmail.com?subject=Estou%20vindo%20pelo%20seu%20portf%C3%B3lio"
            className="m-0 transition-colors hover:text-[#EC3406]"
          >
            lmesquita2k@gmail.com
          </a>
          <a
            href="tel:+5534991456285"
            className="m-0 transition-colors hover:text-[#EC3406]"
          >
            +55 (34) 99145-6285
          </a>
        </div>

        <div
          className={`relative col-start-2 col-span-1 min-h-0 w-full self-stretch transition-opacity duration-300 ${
            previewImage === 'work' ? 'overflow-visible' : 'overflow-hidden'
          } ${previewImage ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          <div
            className={`absolute inset-x-0 bottom-0 top-0 min-h-0 ${
              previewImage === 'work' ? 'overflow-visible' : ''
            }`}
          >
            {previewImage === 'work' ? <WorkPreviewStack /> : null}
            {previewImage === 'about' ? (
              <div className="flex h-full min-h-0 flex-col justify-end">
                <img
                  src="/about/me.png"
                  alt="Lucas Mesquita"
                  className={previewImageClassName}
                />
              </div>
            ) : null}
          </div>
        </div>

        <nav
          aria-label="Main"
          className="col-span-2 col-start-3 flex min-w-0 flex-col self-end overflow-hidden font-bebas-neue"
        >
          <AnimatedWorkLink
            onMouseEnter={() => setPreviewImage('work')}
            onMouseLeave={() => setPreviewImage(null)}
          />
          <a
            href="/about"
            onMouseEnter={() => setPreviewImage('about')}
            onMouseLeave={() => setPreviewImage(null)}
            className="m-0 block w-full whitespace-nowrap text-9xl leading-[0.85] transition-colors hover:text-[#EC3406]"
          >
            About
          </a>
          <AnimatedContactLabel />
        </nav>
      </main>
    </div>
  )
}
