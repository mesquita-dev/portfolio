import type { ReactNode } from 'react'

export type CaseStudyMeta = {
  role: string
  team: string[]
  stacks: string[]
  year: string
}

export type CaseStudyPhoneMedia = {
  type: 'phone-image' | 'phone-video'
  src: string
  alt?: string
  label?: string
  backgroundColor?: string
}

export type CaseStudyPhoneGroupMedia = {
  type: 'phone-image-group'
  images: { src: string; alt: string }[]
  backgroundColor?: string
}

export type CaseStudyScreenMedia = {
  type: 'screen-image'
  src: string
  alt: string
  variant: 'cover' | 'contain'
  laptop?: boolean
}

export type CaseStudyPlaceholderMedia = {
  type: 'placeholder'
  message?: string
}

export type CaseStudyMediaItem =
  | CaseStudyPhoneMedia
  | CaseStudyPhoneGroupMedia
  | CaseStudyScreenMedia
  | CaseStudyPlaceholderMedia

export type CaseStudySectionData = {
  id: string
  label: string
  content: ReactNode
  media?: CaseStudyMediaItem[]
  mediaSlice?: readonly [number, number]
  /** Renders copy in the group without a matching media row */
  copyOnly?: boolean
  /** Sections with the same id share one copy column wrapper */
  copyGroup?: string
  /** 0–1 scroll progress to reveal section text; omit to show immediately */
  revealAt?: number
}

export type CaseStudyConfig = {
  title: string
  meta: CaseStudyMeta
  gallery?: CaseStudyMediaItem[]
  sections: CaseStudySectionData[]
  showBackToTop?: boolean
}
