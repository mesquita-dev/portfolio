import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

function SectionLabel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={`font-mono text-xs font-normal leading-[18px] tracking-[-0.42px] text-[#757575] ${className}`.trim()}
    >
      {children}
    </p>
  )
}

function ExperienceBlock({
  title,
  org,
  period,
}: {
  title: string
  org: string
  period: string
}) {
  return (
    <div className="space-y-[2px]">
      <h2 className="font-sans text-sm leading-5 tracking-[-1%] text-black">
        {title}
      </h2>
      <p className="font-sans text-xs leading-[18px] text-[#757575]">{org}</p>
      <p className="font-sans text-xs leading-[18px] text-[#757575]">
        {period}
      </p>
    </div>
  )
}

function StudyBlock({
  title,
  org,
  period,
}: {
  title: string
  org: string
  period: string
}) {
  return (
    <div className="space-y-[2px]">
      <h2 className="font-sans text-sm leading-5 tracking-[-1%] text-black">
        {title}
      </h2>
      <p className="font-sans text-xs leading-[18px] text-[#757575]">{org}</p>
      <p className="font-sans text-xs leading-[18px] text-[#757575]">
        {period}
      </p>
    </div>
  )
}

type PublishedProject = {
  id: string
  label: string
  src: string
  mediaType: 'image' | 'video'
  usePadding: boolean
  href?: string
}

const publishedProjects: PublishedProject[] = [
  {
    id: 'admentum',
    label: 'Admentum',
    src: '/admentum/AdvHome.jpg',
    mediaType: 'image',
    usePadding: true,
    href: '/admentum',
  },
  {
    id: 'genetica',
    label: 'Genetica',
    src: '/genetica/geneticavideo2.mp4',
    mediaType: 'video',
    usePadding: true,
    href: '/genetica-mais',
  },
]

const preloaderMessages = [
  'Product Designer',
  'Sometimes write code',
  'Brazilian',
  "Let's check out my work",
]

const PRELOADER_HOLD_MS = 1200
const PRELOADER_TRANSITION_MS = 520
const preloaderEnterAnimation =
  'preloader-roll-up-enter 520ms cubic-bezier(0.22, 1, 0.36, 1)'
const preloaderExitAnimation =
  'preloader-roll-up-exit 520ms cubic-bezier(0.22, 1, 0.36, 1)'

function AdmentumPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-black md:h-full md:min-h-0 md:overflow-hidden">
      <div className="flex w-full flex-col p-3 md:min-h-0 md:flex-1">
        <div className="grid grid-cols-1 gap-16 md:min-h-0 md:flex-1 md:grid-cols-[30%_70%] md:grid-rows-1 md:gap-6 md:overflow-hidden">
          <div className="scrollbar-none flex flex-col overflow-visible md:min-h-0 md:overflow-y-auto md:overscroll-y-contain">
            <header className="mb-20 flex items-center justify-between gap-4">
              <h1 className="whitespace-nowrap text-base font-normal leading-5 tracking-[-2%]">
                Admentum
              </h1>
              <a
                href="/"
                className="text-sm leading-[140%] tracking-[-1%] text-[#757575] underline-offset-4 transition-opacity hover:text-black hover:opacity-70 hover:underline"
              >
                Back
              </a>
            </header>

            <div className="space-y-2 mb-12">
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                Admentum was born from a real pain point: finding and hiring a trustworthy lawyer in Brazil is still a confusing, informal process — heavily reliant on personal referrals and WhatsApp conversations.
              </p>
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                After benchmarking competitors and conducting user interviews, it became clear the market lacked a direct, transparent, and digital solution to connect people with qualified lawyers. That insight pushed me to take the entrepreneurial leap.
              </p>
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                Drawing from my experience with digital products, I knew that building without a solid visual foundation would be costly down the road. Before designing a single product screen, I built Hades — a Design System from scratch using React, Tailwind, and Storybook. I defined primitive tokens, components, and variants to ensure consistency and speed throughout development.
              </p>
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                I invited a friend to co-found the company, and together we started building. I took the lead as a Design Engineer — designing interfaces in Figma and coding the front-end myself using React, Tailwind, TypeScript, and Motion. This overlap between design and engineering gave me full ownership over the final user experience.
              </p>
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                Admentum is currently in the validation phase. We're testing with early users, gathering feedback, and iterating quickly.
              </p>
            </div>

            <section className="mb-12">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <SectionLabel className="mb-2">Role</SectionLabel>
                  <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                    Founder / Design Engineer
                  </p>
                </div>
                <div>
                  <SectionLabel className="mb-2">Team</SectionLabel>
                  <div className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-[4px]">
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Me
                    </p>
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Bruno Silva — Co-founder
                    </p>
                  </div>
                </div>
                <div>
                  <SectionLabel className="mb-2">Stacks</SectionLabel>
                  <div className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-[4px]">
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Figma
                    </p>
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      React
                    </p>
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Tailwind
                    </p>
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      TypeScript
                    </p>
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Storybook
                    </p>
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Motion
                    </p>
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Cursor
                    </p>
                  </div>
                </div>
                <div>
                  <SectionLabel className="mb-2">Duration</SectionLabel>
                  <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                    2025 — Ongoing
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="scrollbar-none overflow-visible md:min-h-0 md:overflow-y-auto md:overscroll-y-contain">
            <div className="flex flex-col gap-4">
              <figure className="aspect-696/515 w-full bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-0">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/admentum1.jpg"
                      alt="Admentum capa"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/AdvHome.jpg"
                      alt="Admentum home"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/components-ad.png"
                      alt="Admentum components"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Login.jpg"
                      alt="Admentum login"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Cadastro%20advogado.jpg"
                      alt="Admentum cadastro advogado"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-0">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/A.jpg"
                      alt="Admentum A"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Adv%20-%20Perfil.jpg"
                      alt="Admentum perfil"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Adv%20-%20Reuni%C3%B5es.jpg"
                      alt="Admentum reunioes"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Adv%20-%20Config.jpg"
                      alt="Admentum config"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-0">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Awhite.jpg"
                      alt="Admentum Awhite"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Cliente%20-%20P%C3%A1gina%20inicial.jpg"
                      alt="Cliente pagina inicial"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Cliente%20-%20Advogados.jpg"
                      alt="Cliente advogados"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Cliente%20-%20Reuni%C3%B5es%20%28Agendadas%29.jpg"
                      alt="Cliente reunioes"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum/Cliente%20-%20Config.jpg"
                      alt="Cliente config"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

function GeneticaMaisPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-black md:h-full md:min-h-0 md:overflow-hidden">
      <div className="flex w-full flex-col p-3 md:min-h-0 md:flex-1">
        <div className="grid grid-cols-1 gap-16 md:min-h-0 md:flex-1 md:grid-cols-[30%_70%] md:grid-rows-1 md:gap-6 md:overflow-hidden">
          <div className="scrollbar-none flex flex-col overflow-visible md:min-h-0 md:overflow-y-auto md:overscroll-y-contain">
            <header className="mb-20 flex items-center justify-between gap-4">
              <h1 className="whitespace-nowrap text-base font-normal leading-5 tracking-[-2%]">
                Genetica Mais
              </h1>
              <a
                href="/"
                className="text-sm leading-[140%] tracking-[-1%] text-[#757575] underline-offset-4 transition-opacity hover:text-black hover:opacity-70 hover:underline"
              >
                Back
              </a>
            </header>

            <div className="mb-12 space-y-2">
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                Genética Mais was born from my first professional experience at ABS, the world's largest livestock company, where I worked in the bovine semen and embryo storage department. There, I noticed the sector was extremely outdated and technology-poor — and I saw an opportunity.
              </p>
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                The idea was an e-commerce platform where genetics producers could list bovine semen and embryos, and buyers could select the desired quantity and have it delivered directly to their farm — simple, direct, and digital.
              </p>
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                To validate the concept, I attended livestock events where I conducted field research, presented an interactive prototype, and spoke with genetics producers, buyers, veterinarians, and genetics center employees. The results were encouraging — most people found the idea relevant and said they would use the product.
              </p>
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                However, an unavoidable contractual barrier emerged: genetics centers require that all commercialization be handled exclusively through their sales representatives, which made the business model unviable. The project never moved into development.
              </p>
              <p className="text-sm leading-[140%] tracking-[-1%] text-[#757575]">
                Even so, it was one of the most valuable experiences of my career. I learned firsthand that validating an idea with real users — before writing a single line of code — is essential to avoid wasting time and money. Figma and a clickable prototype were enough to reach a clear conclusion, and that alone made the entire process worthwhile.
              </p>
            </div>

            <section className="mb-12">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <SectionLabel className="mb-2">Role</SectionLabel>
                  <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                    Product Designer
                  </p>
                </div>
                <div>
                  <SectionLabel className="mb-2">Team</SectionLabel>
                  <div className="flex flex-col gap-[4px]">
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Myself
                    </p>
                  </div>
                </div>
                <div>
                  <SectionLabel className="mb-2">Stacks</SectionLabel>
                  <div className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-[4px]">
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Figma
                    </p>
                    <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                      Motion
                    </p>
                  </div>
                </div>
                <div>
                  <SectionLabel className="mb-2">Duration</SectionLabel>
                  <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                    2024 — 2025
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="scrollbar-none overflow-visible md:min-h-0 md:overflow-y-auto md:overscroll-y-contain">
            <div className="flex flex-col gap-4">
              <figure className="h-[clamp(260px,40vw,560px)] w-full rounded-md bg-[#f2f2f2]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <video
                      className="h-full w-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      aria-label="Genetica Mais preview"
                    >
                      <source src="/genetica/geneticavideo2.mp4" type="video/mp4" />
                      Seu navegador nao suporta video HTML5.
                    </video>
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-md bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/genetica/components.png"
                      alt="Genetica components"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-md bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/genetica/Start.png"
                      alt="Genetica Start"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-md bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/genetica/Login.png"
                      alt="Genetica Login"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-md bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/genetica/Register.png"
                      alt="Genetica Register"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="h-[clamp(260px,40vw,560px)] w-full rounded-md bg-[#f2f2f2]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <video
                      className="h-full w-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      aria-label="Genetica Mais home video"
                    >
                      <source src="/genetica/home.mp4" type="video/mp4" />
                      Seu navegador nao suporta video HTML5.
                    </video>
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-md bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/genetica/mfc.png"
                      alt="Genetica MFC"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
              <figure className="h-[clamp(260px,40vw,560px)] w-full rounded-md bg-[#f2f2f2]">
                <div className="flex h-full w-full items-center justify-center p-4 md:p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <video
                      className="h-full w-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      aria-label="Genetica Mais comprar embryo video"
                    >
                      <source src="/genetica/comprar-embryo.mp4" type="video/mp4" />
                      Seu navegador nao suporta video HTML5.
                    </video>
                  </div>
                </div>
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const isHomePage = window.location.pathname === '/'
  const [preloaderIndex, setPreloaderIndex] = useState(0)
  const [showPreloader, setShowPreloader] = useState(isHomePage)
  const [isPreloaderExiting, setIsPreloaderExiting] = useState(false)

  useEffect(() => {
    const pathname = window.location.pathname

    if (pathname === '/admentum') {
      document.title = 'Admentum'
      return
    }

    if (pathname === '/genetica-mais') {
      document.title = 'Genetica Mais'
      return
    }

    document.title = 'Lucas Mesquita | Product Designer'
  }, [])

  useEffect(() => {
    if (!showPreloader) {
      return
    }

    const isLastMessage = preloaderIndex === preloaderMessages.length - 1
    const timeout = window.setTimeout(() => {
      if (!isPreloaderExiting) {
        setIsPreloaderExiting(true)
        return
      }

      if (isLastMessage) {
        setShowPreloader(false)
        return
      }

      setPreloaderIndex((current) => current + 1)
      setIsPreloaderExiting(false)
    }, isPreloaderExiting ? PRELOADER_TRANSITION_MS : PRELOADER_HOLD_MS)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [isPreloaderExiting, preloaderIndex, showPreloader])

  useEffect(() => {
    if (!showPreloader) {
      return
    }

    if (preloaderIndex === 0) {
      return
    }

    setIsPreloaderExiting(false)
  }, [preloaderIndex, showPreloader])

  if (window.location.pathname === '/admentum') {
    return <AdmentumPage />
  }

  if (window.location.pathname === '/genetica-mais') {
    return <GeneticaMaisPage />
  }

  if (showPreloader) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
        <div className="h-5 overflow-hidden">
          <h1
            key={preloaderIndex}
            className="whitespace-nowrap text-base font-normal leading-5 tracking-[-2%] text-black will-change-transform"
            style={{
              animation: isPreloaderExiting
                ? preloaderExitAnimation
                : preloaderEnterAnimation,
            }}
          >
            {preloaderMessages[preloaderIndex]}
          </h1>
        </div>
        <style>
          {`
            @keyframes preloader-roll-up-enter {
              0% {
                transform: translateY(130%);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }

            @keyframes preloader-roll-up-exit {
              0% {
                transform: translateY(0);
                opacity: 1;
              }
              100% {
                transform: translateY(-130%);
                opacity: 0;
              }
            }
          `}
        </style>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-black md:h-full md:min-h-0 md:overflow-hidden">
      <div className="flex w-full flex-col p-3 md:min-h-0 md:flex-1">
        <div className="grid grid-cols-1 gap-16 md:min-h-0 md:flex-1 md:grid-cols-[30%_70%] md:grid-rows-1 md:gap-6 md:overflow-hidden">
          {/* 30% — conteúdo (scroll interno, barra oculta) */}
          <div className="scrollbar-none flex flex-col overflow-visible md:min-h-0 md:overflow-y-auto md:overscroll-y-contain">
            <header className="mb-20 flex items-center justify-between gap-4">
              <h1 className="whitespace-nowrap text-base font-normal leading-5 tracking-[-2%]">
                Lucas Mesquita
              </h1>
              <div className="flex shrink-0 items-center gap-4">
                <a
                  className="text-sm leading-[140%] tracking-[-1%] text-black underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
                  href="https://www.linkedin.com/in/lucas-msqt/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IN
                </a>
                <a
                  className="text-sm leading-[140%] tracking-[-1%] text-black underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
                  href="https://github.com/mesquita-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  GT
                </a>
                <a
                  className="text-sm leading-[140%] tracking-[-1%] text-black underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
                  href="/resume.pdf"
                >
                  CV
                </a>
              </div>
            </header>

            <div className="space-y-2 mb-12">
              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                Product Designer with 3+ years of experience building digital products from the ground up — often as the only designer on the team, which taught me to move quickly, make decisions, and collaborate closely with engineers and stakeholders.
              </p>

              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                As the founding designer at Granto Seguros, one of Brazil's emerging insurtech startups, I led the creation of their design system, drove alignment with stakeholders, and embedded user research into the product culture from day one.
              </p>

              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                Beyond my design work, I'm also the co-founder of a legaltech startup, where I wear two hats as both founder and design engineer.
              </p>

              <p className="text-sm leading-[150%] tracking-[-1%] text-[#757575]">
                I believe great design isn't just about aesthetics — it's about making complex experiences feel simple for real people.
              </p>
            </div>

            <section className="mb-12" aria-labelledby="experiences-heading">
              <h2 id="experiences-heading" className="sr-only">
                Experiences
              </h2>
              <SectionLabel className="mb-2">Experiences</SectionLabel>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <ExperienceBlock
                  title="Senior Product Designer"
                  org="Edunext"
                  period="2026 — Current"
                />
                <ExperienceBlock
                  title="Founding Product Designer"
                  org="Granto Seguros"
                  period="2023 — 2026"
                />
                <div className="sm:col-span-2">
                  <ExperienceBlock
                    title="Web Designer"
                    org="Granto Seguros"
                    period="2022 — 2023"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-5" aria-labelledby="education-heading">
              <h2 id="education-heading" className="sr-only">
                Education
              </h2>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <SectionLabel className="mb-2">What I studied</SectionLabel>
                  <div className="space-y-6">
                    <StudyBlock
                      title="Bachelor Information Systems"
                      org="Universidade de Uberaba"
                      period="2021 — 2025"
                    />
                    <StudyBlock
                      title="Design Visual para Produtos Digitais"
                      org="Aprender Design"
                      period="2025"
                    />
                    <StudyBlock
                      title="UX Design"
                      org="Design Circuit"
                      period="2024"
                    />
                  </div>
                </div>
                <div>
                  <SectionLabel className="mb-2">
                    What I&apos;m studying
                  </SectionLabel>
                  <div className="space-y-6">
                    <StudyBlock
                      title="React"
                      org="Rocketseat"
                      period="2025 — Ongoing"
                    />
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* 70% — imagens (scroll interno, barra oculta) */}
          <aside className="scrollbar-none overflow-visible md:min-h-0 md:overflow-y-auto md:overscroll-y-contain">
            <div className="flex flex-col gap-4">
              {publishedProjects.map((p) => (
                <figure
                  key={p.id}
                  className={`w-full bg-[#f2f2f2] rounded-md ${
                    p.mediaType === 'video'
                      ? 'h-[clamp(260px,40vw,560px)]'
                      : 'aspect-696/515 max-md:min-h-[240px]'
                  }`}
                >
                  <div
                    className={`flex h-full w-full items-center justify-center ${
                      p.usePadding ? 'p-4 md:p-16' : 'p-0'
                    }`}
                  >
                    {p.href ? (
                      <a
                        href={p.href}
                        className="block h-full w-full overflow-hidden rounded-lg"
                        aria-label={`Abrir ${p.label}`}
                      >
                        {p.mediaType === 'video' ? (
                          <video
                            className="h-full w-full object-contain"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            aria-label={p.label}
                          >
                            <source src={p.src} type="video/mp4" />
                            Seu navegador nao suporta video HTML5.
                          </video>
                        ) : (
                          <img
                            src={p.src}
                            alt={p.label}
                            className="h-full w-full object-contain"
                          />
                        )}
                      </a>
                    ) : (
                      <div className="h-full w-full overflow-hidden rounded-lg">
                        <video
                          className="h-full w-full object-contain"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          aria-label={p.label}
                        >
                          <source src={p.src} type="video/mp4" />
                          Seu navegador nao suporta video HTML5.
                        </video>
                      </div>
                    )}
                  </div>
                  <figcaption className="sr-only">{p.label}</figcaption>
                </figure>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
