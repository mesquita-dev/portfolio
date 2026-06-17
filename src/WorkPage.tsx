import { useEffect, useState, type PointerEvent, type ReactNode } from 'react'
import BackToHomeLink from './BackToHomeLink.tsx'

const LAYOUT_ABOUT_CLASS = 'layout-about'

const BEBAS_NEUE_FONT_URL =
  'https://api.fontshare.com/v2/css?f[]=bebas-neue@400&display=swap'

const geneticaBackgroundUrl =
  'https://images.unsplash.com/photo-1569239591652-6cc3025b07fa?auto=format&fit=crop&q=85&w=1600'

const phoneScreenshotClassName =
  'my-[40px] block h-auto max-h-[90%] w-auto max-w-[75%] object-contain'

const workCardMediaClassName =
  'relative flex h-full min-h-[420px] w-full flex-1 overflow-hidden [&_img]:transition-transform [&_img]:duration-300 [&_img]:ease-out group-hover:[&_img]:scale-[1.02] [&_video]:transition-transform [&_video]:duration-300 [&_video]:ease-out group-hover:[&_video]:scale-[1.02]'

const workCardMediaDisabledClassName =
  'relative flex h-full min-h-[420px] w-full flex-1 overflow-hidden'

const workProjectMediaBoxClassName =
  'flex h-full min-h-[420px] w-full items-center justify-center overflow-hidden'

function toggleWorkLayout(active: boolean) {
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

function WorkCardMedia({
  href,
  disabled = false,
  children,
}: {
  href?: string
  disabled?: boolean
  children: ReactNode
}) {
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null)
  const isInteractive = Boolean(href || disabled)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()

    setPointer({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    })
  }

  function handlePointerLeave() {
    setPointer(null)
  }

  return (
    <div
      className={`${disabled ? workCardMediaDisabledClassName : workCardMediaClassName}${isInteractive ? ' cursor-none' : ''}`}
      onPointerMove={isInteractive ? handlePointerMove : undefined}
      onPointerLeave={isInteractive ? handlePointerLeave : undefined}
    >
      {children}
      {isInteractive && pointer ? (
        <span
          aria-hidden
          className={
            disabled
              ? 'pointer-events-none absolute z-10 flex size-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-center text-xs leading-tight text-gray-500'
              : 'pointer-events-none absolute z-10 flex size-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EC3406] text-center text-xs leading-tight text-white'
          }
          style={{ left: pointer.x, top: pointer.y }}
        >
          {disabled ? 'case soon' : 'Read case'}
        </span>
      ) : null}
    </div>
  )
}

function WorkCard({
  href,
  disabled = false,
  title,
  className,
  children,
}: {
  href?: string
  disabled?: boolean
  title: string
  className: string
  children: ReactNode
}) {
  const media = (
    <WorkCardMedia href={href} disabled={disabled}>
      {children}
    </WorkCardMedia>
  )

  const content = (
    <>
      <h2
        className={`m-0 transition-colors duration-300 ease-out${disabled ? '' : ' group-hover:text-[#EC3406]'}`}
      >
        {title}
      </h2>
      {media}
    </>
  )

  if (!href || disabled) {
    return (
      <div
        className={`${disabled ? '' : 'group '}flex h-full flex-col gap-2 self-stretch ${className}`}
      >
        {content}
      </div>
    )
  }

  return (
    <a
      href={href}
      className={`group flex h-full cursor-pointer flex-col gap-2 self-stretch ${className}`}
    >
      {content}
    </a>
  )
}

export default function WorkPage() {
  const [brasiliaClock, setBrasiliaClock] = useState(getBrasiliaClock)

  useEffect(() => {
    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href = BEBAS_NEUE_FONT_URL
    document.head.appendChild(fontLink)

    toggleWorkLayout(true)

    return () => {
      fontLink.remove()
      toggleWorkLayout(false)
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
        <h1 className="m-0 font-bebas-neue text-9xl leading-[0.85]">work</h1>

        <div className="grid grid-cols-4 items-stretch gap-x-6">
          <WorkCard
            href="/genetica"
            title="E-commerce app for bovine embryos"
            className="col-span-1 row-start-1"
          >
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
          </WorkCard>

          <WorkCard
            disabled
            title="E-commerce app for bovine embryos"
            className="col-span-2 col-start-2 row-start-1"
          >
            <img
              src="/works/A.jpg"
              alt="Admentum"
              className="block h-full min-h-[420px] w-full object-cover"
            />
          </WorkCard>

          <WorkCard
            title="Improving the petsitter work"
            className="col-span-1 col-start-4 row-start-1"
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
