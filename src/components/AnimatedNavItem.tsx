import { ACCENT_HOVER_CLASS } from '../constants/site.ts'

const navItemBaseClassName =
  'group m-0 block h-[0.85em] w-full overflow-hidden text-9xl leading-[0.85]'

const navItemInnerClassName =
  'block transition-transform duration-300 ease-out group-hover:-translate-y-1/2'

const navItemLineClassName = 'block whitespace-nowrap leading-[0.85]'

type AnimatedNavItemProps = {
  primary: string
  secondary: string
  href?: string
  onClick?: () => void
  ariaLabel: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function AnimatedNavItem({
  primary,
  secondary,
  href,
  onClick,
  ariaLabel,
  onMouseEnter,
  onMouseLeave,
}: AnimatedNavItemProps) {
  const content = (
    <span className={navItemInnerClassName}>
      <span className={navItemLineClassName}>{primary}</span>
      <span className={navItemLineClassName}>{secondary}</span>
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`${navItemBaseClassName} ${ACCENT_HOVER_CLASS}`}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`${navItemBaseClassName} cursor-pointer border-0 bg-transparent p-0 text-left font-inherit ${ACCENT_HOVER_CLASS}`}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    )
  }

  return (
    <span
      className={`${navItemBaseClassName} cursor-default`}
      aria-label={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </span>
  )
}

export const navLinkClassName = `m-0 block w-full whitespace-nowrap text-9xl leading-[0.85] ${ACCENT_HOVER_CLASS}`
