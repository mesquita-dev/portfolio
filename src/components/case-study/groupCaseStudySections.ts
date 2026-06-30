import type { CaseStudySectionData } from './types.ts'

export type CaseStudySectionChunk =
  | { type: 'single'; section: CaseStudySectionData }
  | { type: 'group'; sections: CaseStudySectionData[] }

export function groupCaseStudySections(
  sections: CaseStudySectionData[],
): CaseStudySectionChunk[] {
  const chunks: CaseStudySectionChunk[] = []
  let currentGroup: CaseStudySectionData[] = []

  function flushGroup() {
    if (currentGroup.length === 0) return
    chunks.push({ type: 'group', sections: currentGroup })
    currentGroup = []
  }

  for (const section of sections) {
    if (!section.copyGroup) {
      flushGroup()
      chunks.push({ type: 'single', section })
      continue
    }

    if (
      currentGroup.length > 0 &&
      currentGroup[0].copyGroup !== section.copyGroup
    ) {
      flushGroup()
    }

    currentGroup.push(section)
  }

  flushGroup()
  return chunks
}
