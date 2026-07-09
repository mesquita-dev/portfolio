import type { ReactNode } from 'react'

type CaseStudySectionTitleProps = {
  children: ReactNode
}

export default function CaseStudySectionTitle({
  children,
}: CaseStudySectionTitleProps) {
  return (
    <h2 className="m-0 self-start text-balance font-bebas-neue text-5xl leading-none tracking-normal text-black">
      {children}
    </h2>
  )
}
