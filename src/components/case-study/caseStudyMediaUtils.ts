import type { CaseStudyMediaItem, CaseStudySectionData } from './types.ts'

export function resolveSectionMedia(
  section: Pick<CaseStudySectionData, 'media' | 'mediaSlice'>,
  gallery?: CaseStudyMediaItem[],
): CaseStudyMediaItem[] {
  if (section.media) return section.media

  if (section.mediaSlice && gallery) {
    return gallery.slice(section.mediaSlice[0], section.mediaSlice[1])
  }

  return []
}

export function getMediaKey(item: CaseStudyMediaItem, index: number): string {
  if (item.type === 'placeholder') return `placeholder-${index}`
  if (item.type === 'phone-video') return item.label ?? item.src
  return item.src
}
