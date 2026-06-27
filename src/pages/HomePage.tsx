import { useCallback, useState } from 'react'
import AnimatedNavItem, { navLinkClassName } from '../components/AnimatedNavItem.tsx'
import PreviewPanel, { type PreviewType } from '../components/PreviewPanel.tsx'
import SiteHeader from '../components/SiteHeader.tsx'
import { ACCENT_HOVER_CLASS, LAYOUT_CLASSES, SOCIAL_LINKS } from '../constants/site.ts'
import { useBrasiliaClock } from '../hooks/useBrasiliaClock.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'

/**
 * Home em / — edite este arquivo livremente.
 * Os estilos globais do portfolio são resetados enquanto esta rota está ativa.
 */
export default function HomePage() {
  const brasiliaClock = useBrasiliaClock()
  const [activePreview, setActivePreview] = useState<PreviewType>(null)

  usePageSetup(LAYOUT_CLASSES.home)

  const showWorkPreview = useCallback(() => setActivePreview('work'), [])
  const showAboutPreview = useCallback(() => setActivePreview('about'), [])
  const hidePreview = useCallback(() => setActivePreview(null), [])

  return (
    <div
      id="home-canvas"
      className="mx-auto grid min-h-dvh w-full max-w-7xl grid-cols-4 grid-rows-[auto_1fr] py-4 font-aileron text-sm"
    >
      <SiteHeader clock={brasiliaClock} />

      <main className="col-span-4 row-start-2 grid h-full min-h-0 grid-cols-4 items-end gap-6">
        <div className="col-span-1 flex flex-col gap-1 self-end text-xs text-gray-400">
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
          <a
            href="/about"
            onMouseEnter={showAboutPreview}
            onMouseLeave={hidePreview}
            className={navLinkClassName}
          >
            About
          </a>
          <AnimatedNavItem
            primary="Contact"
            secondary="Look left"
            ariaLabel="Contact — Look left"
          />
        </nav>
      </main>
    </div>
  )
}
