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
  { id: 'p1', label: 'Projeto 1' },
  { id: 'p2', label: 'Projeto 2' },
  { id: 'p3', label: 'Projeto 3' },
] as const

export default function App() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-white font-sans text-black">
      <div className="flex min-h-0 w-full flex-1 flex-col p-3">
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-16 max-md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] md:grid-cols-[30%_70%] md:grid-rows-1 md:gap-4 md:overflow-hidden">
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
                Currently Product Designer (
                <em className="italic">studying to be a Design Engineer</em>
                {') at '}
                <span className="text-black">Edunext</span>
                {'. Founder at '}
                <span className="text-black">Admentum</span>
                {', the platform to connect lawyer to clients and make her meetings. Previously, I\'m Founding Product Designer at '}
                <span className="text-black">Granto Seguros</span>
                {
                  ' where I create some platforms and a design system from scratch.'
                }
              </p>
              <p className="text-sm leading-[140%] tracking-[-1%] text-[#757575]">
                Detail-oriented and a perfectionist, I spend a time to
                craft good experiences and more easier for the users and
                engineers code the interface.
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
                  className="aspect-696/515 w-full bg-[#d8d8d8] max-md:min-h-[240px]"
                >
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
