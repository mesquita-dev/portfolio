import { ACCENT_HOVER_CLASS } from '../constants/site.ts'
import { isInternalHref } from '../lib/isInternalHref.ts'
import InternalLink from './InternalLink.tsx'

const navItemBaseClassName =
  'group m-0 block h-[0.85em] w-full overflow-hidden text-9xl leading-[0.85]'

const navItemInnerClassName =
  'block transition-transform duration-300 ease-out group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2'

const navItemLineClassName = 'block whitespace-nowrap leading-[0.85]'

type AnimatedNavItemProps = {
  primary: string
  secondary: string
  href?: string
  onClick?: () => void
  ariaLabel: string
  ariaDescribedBy?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function NavItemContent({ primary, secondary }: { primary: string; secondary: string }) {
  return (
    <span className={navItemInnerClassName} aria-hidden="true">
      <span className={navItemLineClassName}>{primary}</span>
      <span className={navItemLineClassName}>{secondary}</span>
    </span>
  )
}

function useHoverHandlers(
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
) {
  return {
    onMouseEnter,
    onMouseLeave,
    onFocus: onMouseEnter,
    onBlur: onMouseLeave,
  }
}

export default function AnimatedNavItem({
  primary,
  secondary,
  href,
  onClick,
  ariaLabel,
  ariaDescribedBy,
  onMouseEnter,
  onMouseLeave,
}: AnimatedNavItemProps) {
  const hoverHandlers = useHoverHandlers(onMouseEnter, onMouseLeave)
  const describedBy = ariaDescribedBy ? { 'aria-describedby': ariaDescribedBy } : {}

  if (href) {
    const linkClassName = `${navItemBaseClassName} ${ACCENT_HOVER_CLASS}`

    if (isInternalHref(href)) {
      return (
        <InternalLink
          href={href}
          {...hoverHandlers}
          className={linkClassName}
          aria-label={ariaLabel}
          {...describedBy}
        >
          <NavItemContent primary={primary} secondary={secondary} />
        </InternalLink>
      )
    }

    return (
      <a
        href={href}
        {...hoverHandlers}
        className={linkClassName}
        aria-label={ariaLabel}
        {...describedBy}
      >
        <NavItemContent primary={primary} secondary={secondary} />
      </a>
    )
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        {...hoverHandlers}
        className={`${navItemBaseClassName} cursor-pointer border-0 bg-transparent p-0 text-left font-inherit ${ACCENT_HOVER_CLASS}`}
        aria-label={ariaLabel}
        {...describedBy}
      >
        <NavItemContent primary={primary} secondary={secondary} />
      </button>
    )
  }

  if (onMouseEnter || onMouseLeave) {
    return (
      <button
        type="button"
        {...hoverHandlers}
        className={`${navItemBaseClassName} cursor-default border-0 bg-transparent p-0 text-left font-inherit ${ACCENT_HOVER_CLASS}`}
        aria-label={ariaLabel}
        {...describedBy}
      >
        <NavItemContent primary={primary} secondary={secondary} />
      </button>
    )
  }

  return (
    <span className={`${navItemBaseClassName} cursor-default`} aria-label={ariaLabel}>
      <NavItemContent primary={primary} secondary={secondary} />
    </span>
  )
}

export const navLinkClassName = `m-0 block w-full whitespace-nowrap text-9xl leading-[0.85] ${ACCENT_HOVER_CLASS}`
