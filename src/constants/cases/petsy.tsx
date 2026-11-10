import type { CaseStudyConfig } from '../../components/case-study/types.ts'
import { WORK_PETSY_MEDIA } from '../workProjects.ts'

export const petsyCaseStudy = {
  title: 'Petsy',
  eyebrow: 'Mobile product concept',
  summary:
    'An interaction-focused exploration of a simpler mobile workflow for the everyday work of pet sitters.',
  accentColor: '#89d4ff',
  hero: {
    src: WORK_PETSY_MEDIA.heroSrc,
    alt: WORK_PETSY_MEDIA.heroAlt,
  },
  meta: {
    role: 'Product Designer',
    team: ['Independent project'],
    stacks: ['Figma', 'Prototype', 'Motion'],
    year: 'Concept study',
  },
  sections: [
    {
      id: 'context',
      label: 'Context',
      media: [
        {
          type: 'phone-video' as const,
          src: '/works/petsy.mp4',
          label: 'Petsy mobile product interaction prototype',
          backgroundColor: '#89d4ff',
        },
      ],
      content: (
        <p className="m-0">
          Petsy is an independent product concept exploring how a focused mobile
          interface could support the routine of pet sitters. The available
          artifact is an interaction prototype, not a shipped product.
        </p>
      ),
    },
    {
      id: 'challenge',
      label: 'The design challenge',
      revealOnScroll: true,
      content: (
        <p className="m-0">
          The goal was to make the experience easy to scan and operate while on
          the move. That meant reducing visual noise, establishing a direct
          hierarchy and making the next action apparent without extra explanation.
        </p>
      ),
    },
    {
      id: 'approach',
      label: 'Interaction direction',
      revealOnScroll: true,
      content: (
        <p className="m-0">
          The concept prioritizes thumb-friendly controls, clear status changes
          and motion that explains what happened after an action. The prototype
          was used to test pacing and interaction clarity before any engineering
          investment.
        </p>
      ),
    },
    {
      id: 'outcome',
      label: 'What this case represents',
      revealOnScroll: true,
      content: (
        <p className="m-0">
          This is a craft study rather than a results case. It documents the
          interaction direction and demonstrates how I use prototyping to make a
          product idea tangible. No production or business metrics are claimed.
        </p>
      ),
    },
  ],
  nextProject: {
    title: 'Genética Mais',
    href: '/genetica',
  },
} satisfies CaseStudyConfig
