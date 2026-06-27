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
  | CaseStudyScreenMedia
  | CaseStudyPlaceholderMedia

export type CaseStudySectionData = {
  id: string
  label: string
  content: ReactNode
  media?: CaseStudyMediaItem[]
  mediaSlice?: readonly [number, number]
}

export type CaseStudyConfig = {
  title: string
  meta: CaseStudyMeta
  gallery?: CaseStudyMediaItem[]
  sections: CaseStudySectionData[]
  showBackToTop?: boolean
}
