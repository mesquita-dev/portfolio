import type { CSSProperties, ReactNode } from 'react'
import AboutDrawer from '../components/AboutDrawer.tsx'
import InternalLink from '../components/InternalLink.tsx'
import LazyVideo from '../components/LazyVideo.tsx'
import { isInternalHref } from '../lib/isInternalHref.ts'
import { LAYOUT_CLASSES, SOCIAL_LINKS } from '../constants/site.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'

type Project = {
  title: string
  href: string
  span: number
  objectFit?: 'contain' | 'cover'
  objectPosition?: string
  mediaWidth?: number
  mediaHeight?: number
  aspectRatio?: string
  imageSrc?: string
  imageAlt?: string
  videoSrc?: string
  videoLabel?: string
}

const projects: Project[] = [
  {
    title: 'ProRapport',
    href: 'https://prorapport.com',
    imageSrc: '/prorapport.png?v=2',
    imageAlt: 'Interface da plataforma ProRapport',
    span: 6,
    aspectRatio: '16 / 9',
    objectFit: 'cover',
  },
  {
    title: 'Genética Mais',
    href: '/genetica',
    imageSrc: '/genetica-case.png',
    imageAlt: 'App Genética Mais em celular',
    span: 3,
    mediaWidth: 224,
    mediaHeight: 441,
    objectFit: 'cover',
  },
  {
    title: 'Animations',
    href: 'https://mesquita-dev.github.io/animation-practice/',
    videoSrc: '/animations-case.mp4',
    videoLabel: 'Microinterações e motion de UI',
    span: 3,
    aspectRatio: '1 / 1',
    objectFit: 'cover',
    objectPosition: '63% center',
  },
]

function ProjectLink({
  href,
  className,
  style,
  children,
}: {
  href: string
  className: string
  style?: CSSProperties
  children: ReactNode
}) {
  if (isInternalHref(href)) {
    return (
      <InternalLink href={href} className={className} style={style}>
        {children}
      </InternalLink>
    )
  }

  return (
    <a href={href} className={className} style={style} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default function HomePage() {
  usePageSetup(LAYOUT_CLASSES.editorial)

  return (
    <div className="dark-home">
      <div className="dark-shell">
        <header className="dark-header">
          <img className="dark-avatar" src="/about/me.png" alt="Lucas Mesquita" />
          <nav className="dark-nav" aria-label="Principal">
            <AboutDrawer
              trigger={
                <button type="button" className="dark-btn dark-btn-secondary">
                  Sobre
                </button>
              }
            />
            <a href={SOCIAL_LINKS[2].href} className="dark-btn dark-btn-primary">
              Contato
            </a>
          </nav>
        </header>

        <main id="main-content" className="dark-main">
          <section className="dark-intro" aria-labelledby="home-title">
            <h1 id="home-title">
              Designer engineer que constrói produtos 0 → 1
            </h1>
            <p>
              O design é a realização de uma sensação e o código a tradução
              dessa sensação
            </p>
          </section>

          <div className="dark-filters" role="tablist" aria-label="Filtros">
            <button type="button" className="dark-btn dark-btn-primary is-active" aria-pressed="true">
              <span className="dark-filter-dot" aria-hidden="true" />
              Tudo
            </button>
            <button type="button" className="dark-btn dark-btn-secondary" aria-pressed="false">
              Case study
            </button>
            <button type="button" className="dark-btn dark-btn-secondary" aria-pressed="false">
              Experimentos
            </button>
          </div>

          <section className="dark-grid" aria-label="Projetos selecionados">
            {projects.map((project) => {
              const isFixed = Boolean(project.mediaWidth && project.mediaHeight)
              return (
                <ProjectLink
                  key={project.title}
                  href={project.href}
                  className={`dark-card${isFixed ? ' is-fixed-media' : ' is-fluid-media'}`}
                  style={{
                    gridColumn: `span ${project.span}`,
                    ...(isFixed
                      ? {
                          ['--media-w' as string]: `${project.mediaWidth}px`,
                          ['--media-h' as string]: `${project.mediaHeight}px`,
                        }
                      : {
                          ['--media-ar' as string]: project.aspectRatio,
                        }),
                    ['--media-fit' as string]: project.objectFit ?? 'contain',
                    ['--media-pos' as string]: project.objectPosition ?? 'center center',
                  }}
                >
                  {project.videoSrc ? (
                    <LazyVideo
                      src={project.videoSrc}
                      className="dark-card-media"
                      aria-label={project.videoLabel ?? project.title}
                    />
                  ) : (
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="dark-card-media"
                      width={project.mediaWidth}
                      height={project.mediaHeight}
                      loading="lazy"
                    />
                  )}
                  <span className="sr-only">{project.title}</span>
                </ProjectLink>
              )
            })}

            <InternalLink
              href="/about"
              className="dark-card dark-card-panel"
              style={{ gridColumn: 'span 2' }}
            >
              Sobre
            </InternalLink>
          </section>
        </main>
      </div>
    </div>
  )
}
