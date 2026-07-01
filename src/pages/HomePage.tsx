import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedNavItem, { navLinkClassName } from '../components/AnimatedNavItem.tsx'
import PreviewPanel, { type PreviewType } from '../components/PreviewPanel.tsx'
import SiteHeader from '../components/SiteHeader.tsx'
import { ACCENT_HOVER_CLASS, ACCENT_TEXT_CLASS, LAYOUT_CLASSES, SOCIAL_LINKS } from '../constants/site.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'

/**
 * Home em / — edite este arquivo livremente.
 * Os estilos globais do portfolio são resetados enquanto esta rota está ativa.
 */
export default function HomePage() {
  const [activePreview, setActivePreview] = useState<PreviewType>(null)
  const [contactHintActive, setContactHintActive] = useState(false)

  usePageSetup(LAYOUT_CLASSES.home)

  const showWorkPreview = useCallback(() => setActivePreview('work'), [])
  const showAboutPreview = useCallback(() => setActivePreview('about'), [])
  const hidePreview = useCallback(() => setActivePreview(null), [])
  const showContactHint = useCallback(() => setContactHintActive(true), [])
  const hideContactHint = useCallback(() => setContactHintActive(false), [])

  return (
    <div
      id="home-canvas"
      className="mx-auto grid min-h-dvh w-full max-w-7xl grid-cols-4 grid-rows-[auto_1fr] py-4 font-aileron text-sm"
    >
      <SiteHeader />

      <main
        id="main-content"
        className="col-span-4 row-start-2 grid h-full min-h-0 grid-cols-4 items-end gap-6"
      >
        <h1 className="sr-only">Lucas Mesquita — Product Designer</h1>

        <div
          id="contact-links"
          aria-label="Contact links"
          className={`col-span-1 flex flex-col gap-1 self-end text-xs text-gray-400 transition-colors duration-300 focus-within-text-accent${contactHintActive ? ` ${ACCENT_TEXT_CLASS}` : ''}`}
        >
          {SOCIAL_LINKS.map(({ href, label, external }) => (
            <a
              key={href}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className={`m-0 ${ACCENT_HOVER_CLASS}`}
            >
              {label}
            </a>
          ))}
        </div>

        <PreviewPanel activePreview={activePreview} />

        <nav
          aria-label="Main"
          className="col-span-2 col-start-3 flex min-w-0 flex-col self-end overflow-hidden font-bebas-neue"
        >
          <AnimatedNavItem
            href="/work"
            primary="Work"
            secondary="see all"
            ariaLabel="Work — See all"
            onMouseEnter={showWorkPreview}
            onMouseLeave={hidePreview}
          />
          <Link
            to="/about"
            aria-label="About"
            onMouseEnter={showAboutPreview}
            onMouseLeave={hidePreview}
            onFocus={showAboutPreview}
            onBlur={hidePreview}
            className={navLinkClassName}
          >
            About
          </Link>
          <AnimatedNavItem
            primary="Contact"
            secondary="Look left"
            ariaLabel="Contact — social links on the left"
            ariaDescribedBy="contact-links"
            onMouseEnter={showContactHint}
            onMouseLeave={hideContactHint}
          />
        </nav>
      </main>
    </div>
  )
}
