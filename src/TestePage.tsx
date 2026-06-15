import { useEffect, useState } from 'react'

/**
 * Playground em /teste — edite este arquivo livremente.
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

const previewImageClassName =
  'block aspect-[2/3] w-full object-contain object-center'

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
              href="/teste"
              className="transition-colors hover:text-[#EC3406]"
            >
              Lucas Mesquita
            </a>
          </h1>
          <p className="m-0 text-gray-400">designer</p>
        </div>
      </header>

      <main className="col-span-4 row-start-2 grid h-full grid-cols-4 items-end gap-6">
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
          className={`col-start-2 col-span-1 w-full min-w-0 self-end transition-opacity duration-300 ${
            previewImage ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          {previewImage === 'work' ? (
            <img
              src="/works.jpg"
              alt="Work preview"
              className={previewImageClassName}
            />
          ) : null}
          {previewImage === 'about' ? (
            <img
              src="/me.png"
              alt="Lucas Mesquita"
              className={previewImageClassName}
            />
          ) : null}
        </div>

        <nav
          aria-label="Main"
          className="col-span-2 col-start-3 flex min-w-0 flex-col self-end overflow-hidden font-bebas-neue"
        >
          <a
            href="/work"
            onMouseEnter={() => setPreviewImage('work')}
            onMouseLeave={() => setPreviewImage(null)}
            className="m-0 block w-full whitespace-nowrap text-9xl leading-[0.85] transition-colors hover:text-[#EC3406]"
          >
            Work
          </a>
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
