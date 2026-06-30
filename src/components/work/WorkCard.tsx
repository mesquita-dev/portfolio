import type { ReactNode } from 'react'
import InternalLink from '../InternalLink.tsx'
import WorkCardMedia from './WorkCardMedia.tsx'

type WorkCardProps = {
  href?: string
  disabled?: boolean
  title: string
  className: string
  children: ReactNode
}

export default function WorkCard({
  href,
  disabled = false,
  title,
  className,
  children,
}: WorkCardProps) {
  const media = (
    <WorkCardMedia href={href} disabled={disabled}>
      {children}
    </WorkCardMedia>
  )

  const content = (
    <>
      <h2
        className={`m-0 transition-colors duration-300 ease-out${disabled ? '' : ' group-hover:text-[#EC3406]'}`}
      >
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

  return (
    <InternalLink
      href={href}
      className={`group flex cursor-pointer flex-col gap-2 self-start outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EC3406] ${className}`}
    >
      {content}
    </InternalLink>
  )
}
