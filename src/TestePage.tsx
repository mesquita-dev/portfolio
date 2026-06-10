import { useEffect, useState } from 'react'

/**
 * Playground em /teste — edite este arquivo livremente.
 * Os estilos globais do portfolio são resetados enquanto esta rota está ativa.
 */
const HTML_TESTE_CLASSES = [
  'm-0',
  'p-0',
  'h-auto',
  'overflow-visible',
  'md:h-auto',
  'md:overflow-visible',
] as const

const BEBAS_NEUE_FONT_URL =
  'https://api.fontshare.com/v2/css?f[]=bebas-neue@400&display=swap'

const BODY_TESTE_CLASSES = [
  ...HTML_TESTE_CLASSES,
  'font-aileron',
] as const

const ROOT_TESTE_CLASSES = [
  'm-0',
  'p-0',
  'block',
  'h-auto',
  'min-h-0',
  'overflow-visible',
  'md:h-auto',
  'md:min-h-0',
  'md:overflow-visible',
] as const

function toggleTesteLayoutClasses(active: boolean) {
  const html = document.documentElement
  const body = document.body
  const root = document.getElementById('root')

  const action = active ? 'add' : 'remove'

  html.classList[action](...HTML_TESTE_CLASSES)
  body.classList[action](...BODY_TESTE_CLASSES)
  root?.classList[action](...ROOT_TESTE_CLASSES)
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

function AnimatedNameLink() {
  return (
    <h1 className="m-0">
      <a
        href="/about"
        className="group inline-block h-5 overflow-hidden leading-5"
        aria-label="Lucas Mesquita — About me"
      >
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-5">
          <span className="block h-5">Lucas Mesquita</span>
          <span className="block h-5">About me</span>
        </span>
      </a>
    </h1>
  )
}

function AnimatedHoverLink({
  href,
  label,
  hoverLabel,
  external = false,
}: {
  href: string
  label: string
  hoverLabel: string
  external?: boolean
}) {
  const externalProps = external
    ? { target: '_blank' as const, rel: 'noreferrer' }
    : {}

  return (
    <a
      href={href}
      {...externalProps}
      className="group m-0 inline-block h-4 overflow-hidden leading-4"
      aria-label={`${label} — ${hoverLabel}`}
    >
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
        <span className="block h-4 whitespace-nowrap leading-4">{label}</span>
        <span className="block h-4 whitespace-nowrap leading-4">{hoverLabel}</span>
      </span>
    </a>
  )
}

function AnimatedContactLink() {
  return (
    <a
      href="#contact"
      className="group m-0 block h-[0.85em] w-full overflow-hidden text-9xl leading-[0.85]"
      aria-label="Contact — In the left side"
    >
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
        <span className="block whitespace-nowrap leading-[0.85]">Contact</span>
        <span className="block whitespace-nowrap leading-[0.85]">
          Look left
        </span>
      </span>
    </a>
  )
}

export default function TestePage() {
  const [brasiliaClock, setBrasiliaClock] = useState(getBrasiliaClock)

  useEffect(() => {
    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href = BEBAS_NEUE_FONT_URL
    document.head.appendChild(fontLink)

    toggleTesteLayoutClasses(true)

    return () => {
      fontLink.remove()
      toggleTesteLayoutClasses(false)
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
      className="mx-auto grid min-h-dvh w-full max-w-[1240px] grid-cols-4 grid-rows-[auto_1fr] py-4 font-aileron text-sm"
    >
      <header className="col-span-4 grid grid-cols-4 items-center">
        <p className="m-0 text-gray-400">
          <time dateTime={brasiliaClock.dateTime} className="tabular-nums">
            {brasiliaClock.time}
          </time>
        </p>
        <div className="col-span-2 col-start-3 flex items-center justify-between">
          <AnimatedNameLink />
          <p className="m-0 text-gray-400">designer</p>
        </div>
      </header>

      <main className="col-span-4 row-start-2 grid h-full grid-cols-4 items-end">
        <div className="col-span-2 flex flex-col gap-1 text-xs text-gray-400">
          <AnimatedHoverLink
            href="https://www.linkedin.com/in/lucas-msqt/"
            label="/in/lucas-msqt/"
            hoverLabel="LinkedIn"
            external
          />
          <AnimatedHoverLink
            href="https://github.com/mesquita-dev"
            label="@mesquita-dev"
            hoverLabel="Github"
            external
          />
          <AnimatedHoverLink
            href="mailto:lmesquita2k@gmail.com?subject=Estou%20vindo%20pelo%20seu%20portf%C3%B3lio"
            label="lmesquita2k@gmail.com"
            hoverLabel="email"
          />
          <AnimatedHoverLink
            href="tel:+5534991456285"
            label="+55 (34) 99145-6285"
            hoverLabel="telefone"
          />
        </div>

        <nav
          aria-label="Main"
          className="col-span-2 col-start-3 flex min-w-0 flex-col overflow-hidden font-bebas-neue"
        >
          <a
            href="/teste"
            className="m-0 block w-full whitespace-nowrap text-9xl leading-[0.85] transition-colors hover:text-[#EC3406]"
          >
            Work
          </a>
          <a
            href="/about"
            className="m-0 block w-full whitespace-nowrap text-9xl leading-[0.85] transition-colors hover:text-[#EC3406]"
          >
            About
          </a>
          <AnimatedContactLink />
        </nav>
      </main>
    </div>
  )
}
