import type { CaseStudyConfig } from '../../components/case-study/types.ts'
import { WORK_GRANTO_ONE_MEDIA } from '../workProjects.ts'

export const grantoOneCaseStudy = {
  title: 'Granto One',
  eyebrow: 'Internal insurance platform',
  summary:
    'A zero-to-one internal platform that turned a fragmented brokerage operation into a clearer, faster workflow.',
  accentColor: '#dcd2ef',
  hero: {
    src: WORK_GRANTO_ONE_MEDIA.heroSrc,
    alt: WORK_GRANTO_ONE_MEDIA.heroAlt,
  },
  meta: {
    role: 'Founding Product Designer',
    team: ['Myself'],
    stacks: ['Research', 'Figma', 'Design system'],
    year: '2023 — 2026',
  },
  sections: [
    {
      id: 'context',
      label: 'Context',
      media: [
        {
          type: 'screen-image' as const,
          src: '/granto-one/interna-oportunidade.webp',
          alt: 'Granto One — Interna Oportunidade',
          variant: 'contain' as const,
        },
      ],
      content: (
        <p className="m-0">
          Granto is a B2B insurance brokerage. I joined as its founding product
          designer, at a point when the operational knowledge lived across people,
          conversations and disconnected tools. There was no existing product or
          design system to build from.
        </p>
      ),
    },
    {
      id: 'challenge',
      label: 'The challenge',
      revealOnScroll: true,
      content: (
        <p className="m-0">
          The challenge was to translate a complex insurance operation into a
          system teams could understand and use quickly, while keeping enough
          flexibility for workflows that were still evolving.
        </p>
      ),
    },
    {
      id: 'approach',
      label: 'From workflows to a system',
      revealOnScroll: true,
      content: (
        <>
          <p className="m-0">
            I mapped the internal workflows with the people running them, defined
            the product structure and designed the productivity platform from
            scratch.
          </p>
          <p className="m-0">
            In parallel, I created the design system that supported the product
            and shaped an autonomous policy-issuance experience, giving the team
            reusable foundations instead of isolated screens.
          </p>
        </>
      ),
    },
    {
      id: 'outcome',
      label: 'Outcome',
      revealOnScroll: true,
      content: (
        <p className="m-0">
          The platform reduced lead time by 70%. More importantly, it established
          a shared operational model the team could improve as the brokerage
          scaled.
        </p>
      ),
    },
  ],
  nextProject: {
    title: 'Petsy',
    href: '/petsy',
  },
} satisfies CaseStudyConfig
