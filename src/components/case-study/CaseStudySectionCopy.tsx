import ScrollRevealBlock from '../project/ScrollRevealBlock.tsx'
import CaseStudySectionTitle from './CaseStudySectionTitle.tsx'
import type { ReactNode } from 'react'

type CaseStudySectionCopyProps = {
  label: string
  content: ReactNode
  alwaysVisible?: boolean
}

export default function CaseStudySectionCopy({
  label,
  content,
  alwaysVisible = false,
}: CaseStudySectionCopyProps) {
  const copy = (
    <>
      <CaseStudySectionTitle>{label}</CaseStudySectionTitle>
      <div className="mt-8 flex max-w-xl flex-col gap-4 text-pretty text-sm leading-relaxed text-black/65">
        {content}
      </div>
    </>
  )

  if (alwaysVisible) {
    return <div>{copy}</div>
  }

  return <ScrollRevealBlock>{copy}</ScrollRevealBlock>
}
