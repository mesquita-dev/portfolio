import type { ReactNode } from 'react'

type CaseStudySectionTitleProps = {
  children: ReactNode
}

export default function CaseStudySectionTitle({
  children,
}: CaseStudySectionTitleProps) {
  return (
    <h2 className="m-0 self-start text-balance text-[clamp(2rem,4vw,4.5rem)] font-normal leading-[0.95] tracking-[-0.05em] text-black">
      {children}
    </h2>
  )
}
