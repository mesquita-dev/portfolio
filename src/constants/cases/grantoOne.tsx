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
      copyGroup: 'narrative',
      media: [
        {
          type: 'screen-image' as const,
          src: '/granto-one/interna-oportunidade.webp',
          alt: 'Granto One — Interna Oportunidade',
          variant: 'contain' as const,
        },
      ],
      content: <p className="m-0">Writing the next case study.</p>,
    },
  ],
} satisfies CaseStudyConfig
