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

const projectPlaceholders = [
  {
    id: 'p1',
    label: 'Projeto 1',
    src: '/admentum1.jpg',
    usePadding: true,
    href: '/admentum',
  },
  { id: 'p2', label: 'Projeto 2', src: '/AdvHome.jpg', usePadding: true },
  { id: 'p3', label: 'Projeto 3' },
] as const

function AdmentumPage() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-white font-sans text-black">
      <div className="flex min-h-0 w-full flex-1 flex-col p-3">
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-16 max-md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] md:grid-cols-[30%_70%] md:grid-rows-1 md:gap-6 md:overflow-hidden">
          <div className="scrollbar-none flex min-h-0 flex-col overflow-y-auto overscroll-y-contain">
            <header className="mb-20 flex items-center justify-between gap-4">
              <h1 className="whitespace-nowrap text-base font-normal leading-5 tracking-[-2%]">
                Admentum
              </h1>
              <a
                href="/"
                className="text-sm leading-[140%] tracking-[-1%] text-black underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              >
                Voltar
              </a>
            </header>

            <div className="space-y-2 mb-12">
              <p className="text-sm leading-[140%] tracking-[-1%] text-[#757575]">
                Case do produto Admentum. Aqui vamos manter a mesma estrutura de
                portfolio com descrição do projeto, contexto, desafios e
                resultados.
              </p>
              <p className="text-sm leading-[140%] tracking-[-1%] text-[#757575]">
                Podemos trocar estes textos depois pelos conteúdos finais deste
                projeto.
              </p>
            </div>

            <section className="mb-12">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <SectionLabel className="mb-2">Role</SectionLabel>
                  <p className="font-sans text-sm leading-5 tracking-[-1%] text-black">
                    Founder / Design Engineer
                  </p>
                </div>
                <div>
                  <SectionLabel className="mb-2">Team</SectionLabel>
                  <div className="flex flex-col gap-[4px]">
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
                  <div className="flex flex-col gap-[4px]">
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

          <aside className="scrollbar-none min-h-0 overflow-y-auto overscroll-y-contain">
            <div className="flex flex-col gap-4">
              <figure className="aspect-696/515 w-full bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-0">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src="/admentum1.jpg"
                      alt="Admentum capa"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </figure>
              <figure className="aspect-696/515 w-full overflow-hidden rounded-lg bg-[#f2f2f2] max-md:min-h-[240px]">
                <div className="flex h-full w-full items-center justify-center p-16">
                  <div className="h-full w-full overflow-hidden rounded-lg bg-white">
                    <img
                      src="/AdvHome.jpg"
                      alt="Admentum home"
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

export default function App() {
  if (window.location.pathname === '/admentum') {
    return <AdmentumPage />
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-white font-sans text-black">
      <div className="flex min-h-0 w-full flex-1 flex-col p-3">
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-16 max-md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] md:grid-cols-[30%_70%] md:grid-rows-1 md:gap-6 md:overflow-hidden">
          {/* 30% — conteúdo (scroll interno, barra oculta) */}
          <div className="scrollbar-none flex min-h-0 flex-col overflow-y-auto overscroll-y-contain">
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
              <p className="text-sm leading-[140%] tracking-[-1%] text-[#757575]">
                Product Designer with 3+ years of experience building digital products from the ground up — often as the only designer on the team, which taught me to move quickly, make decisions, and collaborate closely with engineers and stakeholders.
              </p>

              <p className="text-sm leading-[140%] tracking-[-1%] text-[#757575]">
                As the founding designer at Granto Seguros, one of Brazil's emerging insurtech startups, I led the creation of their design system, drove alignment with stakeholders, and embedded user research into the product culture from day one.
              </p>

              <p className="text-sm leading-[140%] tracking-[-1%] text-[#757575]">
                Beyond my design work, I'm also the co-founder of a legaltech startup, where I wear two hats as both founder and design engineer.
              </p>

              <p className="text-sm leading-[140%] tracking-[-1%] text-[#757575]">
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
          <aside className="scrollbar-none min-h-0 overflow-y-auto overscroll-y-contain">
            <div className="flex flex-col gap-4">
              {projectPlaceholders.map((p) => (
                <figure
                  key={p.id}
                  className="aspect-696/515 w-full bg-[#f2f2f2] max-md:min-h-[240px] rounded-md"
                >
                  {'src' in p ? (
                    <div
                      className={`flex h-full w-full items-center justify-center ${
                        p.usePadding ? 'p-16' : 'p-0'
                      }`}
                    >
                      {'href' in p ? (
                        <a
                          href={p.href}
                          className="block h-full w-full overflow-hidden rounded-lg"
                          aria-label={`Abrir ${p.label}`}
                        >
                          <img
                            src={p.src}
                            alt={p.label}
                            className="h-full w-full object-contain"
                          />
                        </a>
                      ) : (
                        <div className="h-full w-full overflow-hidden rounded-lg">
                          <img
                            src={p.src}
                            alt={p.label}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  ) : null}
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
