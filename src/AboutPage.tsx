import { useEffect, useState } from 'react'
import BackToHomeLink from './BackToHomeLink.tsx'

const LAYOUT_ABOUT_CLASS = 'layout-about'

const BEBAS_NEUE_FONT_URL =
  'https://api.fontshare.com/v2/css?f[]=bebas-neue@400&display=swap'

const aboutImageClassName = 'block w-full h-auto'

function toggleAboutLayout(active: boolean) {
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

export default function AboutPage() {
  const [brasiliaClock, setBrasiliaClock] = useState(getBrasiliaClock)

  useEffect(() => {
    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href = BEBAS_NEUE_FONT_URL
    document.head.appendChild(fontLink)

    toggleAboutLayout(true)

    return () => {
      fontLink.remove()
      toggleAboutLayout(false)
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
        <h1 className="m-0 font-bebas-neue text-9xl leading-[0.85]">about</h1>

        <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 flex w-full min-w-0 flex-col gap-16 self-start">
          <div className="flex flex-col gap-1">
            <img
              src="/about/me.png"
              alt="Lucas Mesquita"
              className={aboutImageClassName}
            />
            <p className="m-0 text-xs text-gray-400">
              professional photo to use in social medias
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <img
              src="/about/hacka.jpeg"
              alt="Hackathon"
              className={aboutImageClassName}
            />
            <p className="m-0 text-xs text-gray-400">hackathon replit + resend in sp where we are the winners of this hackathon</p>
          </div>

          <div className="flex flex-col gap-1">
            <img
              src="/about/bu.jpeg"
              alt="Bu"
              className={aboutImageClassName}
            />
            <p className="m-0 text-xs text-gray-400">me and Bu Kinoshita the co-founder and CTO at Resend</p>
          </div>

          </div>

        <div className="col-span-2 col-start-3 flex flex-col gap-20 self-start">
          <div className="grid grid-cols-2 gap-6">
            <h2 className="m-0 self-start text-gray-400">
              a little bit about me
            </h2>

            <div className="flex flex-col gap-3">
              <p className="m-0">
                Growing up in Brasília — Brazil's architectural capital — meant
                living inside a design statement before I ever knew what design
                was. The city's shapes, grids, and intentionality left a mark.
              </p>
              <p className="m-0">
                In 2022, I turned that background into a practice. My approach has
                been consistent ever since: understand what the user actually
                needs, then get out of the way. The best design doesn't announce
                itself — it just works, quickly.
              </p>
              <p className="m-0">
                <a
                  href="https://agsix.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  SIX
                </a>
                , a marketing agency, was where I developed my rhythm. Working
                across several projects simultaneously — each with its own
                deadline and stakeholders — forced me to become fast without
                becoming careless.
              </p>
              <p className="m-0">
                Then came{' '}
                <a
                  href="https://grantoseguros.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Granto Seguros
                </a>
                . Joining as Founding Product Designer at a B2B insurance
                brokerage meant there was no playbook, no existing system, no
                handoff to reference. I built the internal productivity platform,
                the design system, and the autonomous policy issuance product
                entirely from scratch — and learned more in that role than
                anywhere else.
              </p>
              <p className="m-0">
                Now, as a Senior Product Designer at{' '}
                <a
                  href="https://edunext.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Edunext
                </a>
                , I'm working on a problem that matters at scale: modernizing how
                colleges operate. The platform centralizes student management,
                tuition, and institutional workflows — giving educators and
                administrators tools that are actually worthy of the sector they
                serve.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <h2 className="m-0 self-start text-gray-400">
              experience
            </h2>

            <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h3 className="m-0">Founder and Design Engineer</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">Admentum</p>
                  <p className="m-0 text-gray-400">2025 — Actually</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="m-0">Senior Product Designer</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">Edunext</p>
                  <p className="m-0 text-gray-400">2026 — Actually</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="m-0">Founding Product Designer</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">Granto Seguros</p>
                  <p className="m-0 text-gray-400">2023 — 2026</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="m-0">Design Engineer</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">SIX</p>
                  <p className="m-0 text-gray-400">2023 — 2023</p>
                </div>
              </div>
            </div>
          </div>

           <div className="grid grid-cols-2 gap-6">
            <h2 className="m-0 self-start text-gray-400">
              education
            </h2>

            <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h3 className="m-0">Bachelor's Information Systems</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">UNIUBE</p>
                  <p className="m-0 text-gray-400">2021 — 2025</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="m-0">Design Visual para Produtos Digitais</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">Aprender Design</p>
                  <p className="m-0 text-gray-400">2025</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="m-0">UX Design</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">Design Circuit</p>
                  <p className="m-0 text-gray-400">2024</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="m-0">React</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">Rocketseat</p>
                  <p className="m-0 text-gray-400">Ongoing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <h2 className="m-0 self-start text-gray-400">
              awards
            </h2>

            <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h3 className="m-0">Winner Hackathon Replit + Resend</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">São Paulo</p>
                  <p className="m-0 text-gray-400">2026</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="m-0">Winner Hackathon UBYFOL</h3>
                <div className="flex justify-between gap-6">
                  <p className="m-0 text-gray-400">Uberaba</p>
                  <p className="m-0 text-gray-400">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
