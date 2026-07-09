import type { ReactNode } from 'react'
import InternalLink from '../InternalLink.tsx'
import { GROUP_HOVER_ACCENT_CLASS } from '../../constants/site.ts'
import WorkCardMedia from './WorkCardMedia.tsx'

type WorkCardProps = {
  href?: string
  disabled?: boolean
  ctaLabel?: string
  title: string
  className: string
  children: ReactNode
}

const linkClassName =
  'group flex cursor-pointer flex-col gap-2 self-start outline-none press-scale focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export default function WorkCard({
  href,
  disabled = false,
  ctaLabel,
  title,
  className,
  children,
}: WorkCardProps) {
  const media = (
    <WorkCardMedia href={href} disabled={disabled} ctaLabel={ctaLabel}>
      {children}
    </WorkCardMedia>
  )

  const content = (
    <>
      <h2 className={`m-0 text-balance ${GROUP_HOVER_ACCENT_CLASS}`}>
        {title}
      </h2>
      {media}
    </>
  )

  if (!href || disabled) {
    return (
      <div className={`group flex flex-col gap-2 self-start ${className}`}>
        {content}
      </div>
    )
  }

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClassName} ${className}`}
      >
        {content}
      </a>
    )
  }

  return (
    <InternalLink
      href={href}
      className={`${linkClassName} ${className}`}
    >
      {content}
    </InternalLink>
  )
}
