import type { CaseStudyConfig } from '../../components/case-study/types.ts'

export const grantoOneCaseStudy = {
  title: 'granto one',
  meta: {
    role: 'Product Designer',
    team: ['Myself'],
    stacks: ['Figma'],
    year: '2026 — Ongoing',
  },
  sections: [
    {
      id: 'overview',
      label: 'overview',
      media: [{ type: 'placeholder' as const }],
      content: <p className="m-0">Writing the next case study.</p>,
    },
  ],
} satisfies CaseStudyConfig
