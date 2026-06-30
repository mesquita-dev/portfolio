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
      <div className="flex flex-col gap-3">{content}</div>
    </>
  )

  if (alwaysVisible) {
    return <div className="flex flex-col gap-1">{copy}</div>
  }

  return <ScrollRevealBlock className="flex flex-col gap-1">{copy}</ScrollRevealBlock>
}
