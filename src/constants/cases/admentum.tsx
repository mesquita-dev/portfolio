import type { CaseStudyConfig } from '../../components/case-study/types.ts'

const admentumGallery = [
  { type: 'screen-image' as const, src: '/admentum/admentum1.jpg', alt: 'Admentum capa', variant: 'cover' as const },
  { type: 'screen-image' as const, src: '/admentum/AdvHome.jpg', alt: 'Admentum home', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/components-ad.png', alt: 'Admentum components', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/Login.jpg', alt: 'Admentum login', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/Cadastro%20advogado.jpg', alt: 'Admentum cadastro advogado', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/A.jpg', alt: 'Admentum A', variant: 'cover' as const },
  { type: 'screen-image' as const, src: '/admentum/Adv%20-%20Perfil.jpg', alt: 'Admentum perfil', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/Adv%20-%20Reuni%C3%B5es.jpg', alt: 'Admentum reunioes', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/Adv%20-%20Config.jpg', alt: 'Admentum config', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/Awhite.jpg', alt: 'Admentum Awhite', variant: 'cover' as const },
  { type: 'screen-image' as const, src: '/admentum/Cliente%20-%20P%C3%A1gina%20inicial.jpg', alt: 'Cliente pagina inicial', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/Cliente%20-%20Advogados.jpg', alt: 'Cliente advogados', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/Cliente%20-%20Reuni%C3%B5es%20%28Agendadas%29.jpg', alt: 'Cliente reunioes', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/Cliente%20-%20Config.jpg', alt: 'Cliente config', variant: 'contain' as const },
]

export const admentumCaseStudy = {
  title: 'admentum',
  meta: {
    role: 'Founder / Design Engineer',
    team: ['Me', 'Bruno Silva — Co-founder'],
    stacks: ['Figma', 'React', 'Tailwind', 'TypeScript', 'Storybook', 'Motion', 'Cursor'],
    year: '2025 — Ongoing',
  },
  gallery: admentumGallery,
  sections: [
    {
      id: 'overview',
      label: 'overview',
      mediaSlice: [0, 5] as const,
      content: (
        <>
          <p className="m-0">
            Admentum was born from a real pain point: finding and hiring a
            trustworthy lawyer in Brazil is still a confusing, informal process —
            heavily reliant on personal referrals and WhatsApp conversations.
          </p>
          <p className="m-0">
            After benchmarking competitors and conducting user interviews, it
            became clear the market lacked a direct, transparent, and digital
            solution to connect people with qualified lawyers. That insight pushed
            me to take the entrepreneurial leap.
          </p>
        </>
      ),
    },
    {
      id: 'process',
      label: 'process',
      mediaSlice: [5, 10] as const,
      content: (
        <>
          <p className="m-0">
            Drawing from my experience with digital products, I knew that building
            without a solid visual foundation would be costly down the road. Before
            designing a single product screen, I built Hades — a Design System from
            scratch using React, Tailwind, and Storybook. I defined primitive
            tokens, components, and variants to ensure consistency and speed
            throughout development.
          </p>
          <p className="m-0">
            I invited a friend to co-found the company, and together we started
            building. I took the lead as a Design Engineer — designing interfaces
            in Figma and coding the front-end myself using React, Tailwind,
            TypeScript, and Motion. This overlap between design and engineering gave
            me full ownership over the final user experience.
          </p>
        </>
      ),
    },
    {
      id: 'status',
      label: 'status',
      mediaSlice: [10, 14] as const,
      content: (
        <p className="m-0">
          Admentum is currently in the validation phase. We're testing with early
          users, gathering feedback, and iterating quickly.
        </p>
      ),
    },
  ],
} satisfies CaseStudyConfig
