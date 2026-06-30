import type { CaseStudyConfig } from '../../components/case-study/types.ts'

const admentumGallery = [
  { type: 'screen-image' as const, src: '/admentum/admentum1.jpg', alt: 'Admentum capa', variant: 'cover' as const },
  { type: 'screen-image' as const, src: '/admentum/AdvHome.webp', alt: 'Admentum home', variant: 'contain' as const, laptop: true },
  { type: 'screen-image' as const, src: '/admentum/components-ad.png', alt: 'Admentum components', variant: 'contain' as const },
  { type: 'screen-image' as const, src: '/admentum/Login.webp', alt: 'Admentum login', variant: 'contain' as const, laptop: true },
  { type: 'screen-image' as const, src: '/admentum/Cadastro%20advogado.webp', alt: 'Admentum cadastro advogado', variant: 'contain' as const, laptop: true },
  { type: 'screen-image' as const, src: '/admentum/A.jpg', alt: 'Admentum A', variant: 'cover' as const },
  { type: 'screen-image' as const, src: '/admentum/Adv%20-%20Perfil.webp', alt: 'Admentum perfil', variant: 'contain' as const, laptop: true },
  { type: 'screen-image' as const, src: '/admentum/Adv%20-%20Reunioes.webp', alt: 'Admentum reunioes', variant: 'contain' as const, laptop: true },
  { type: 'screen-image' as const, src: '/admentum/Adv%20-%20Config.webp', alt: 'Admentum config', variant: 'contain' as const, laptop: true },
  { type: 'screen-image' as const, src: '/admentum/Awhite.jpg', alt: 'Admentum Awhite', variant: 'cover' as const },
  { type: 'screen-image' as const, src: '/admentum/Cliente%20-%20Pagina%20inicial.webp', alt: 'Cliente pagina inicial', variant: 'contain' as const, laptop: true },
  { type: 'screen-image' as const, src: '/admentum/Cliente%20-%20Advogados.webp', alt: 'Cliente advogados', variant: 'contain' as const, laptop: true },
  { type: 'screen-image' as const, src: '/admentum/Cliente%20-%20Reunioes%20%28Agendadas%29.webp', alt: 'Cliente reunioes', variant: 'contain' as const, laptop: true },
  { type: 'screen-image' as const, src: '/admentum/Cliente%20-%20Config.webp', alt: 'Cliente config', variant: 'contain' as const, laptop: true },
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
      copyGroup: 'narrative',
      mediaSlice: [0, 5] as const,
      content: (
        <>
          <p className="m-0">
            The idea came about during an informal conversation with a cousin who
            is a lawyer. I realized that it's still a manual and slow process,
            with much done through personal contact, like WhatsApp. Sometimes
            there's not much scheduling organization, and it's difficult to find
            new clients.
          </p>
          <p className="m-0">
            The OAB (Brazilian Bar Association) prohibits self-promotion, meaning
            paid traffic and excessive media use; in a way, it's illegal. What we
            propose is a way to find a lawyer from anywhere in the country and hold
            meetings directly through Admentum, without needing Google Meet, Zoom,
            or third-party platforms.
          </p>
        </>
      ),
    },
    {
      id: 'process',
      label: 'understanding the problem',
      copyGroup: 'narrative',
      revealOnScroll: true,
      mediaSlice: [5, 10] as const,
      content: (
        <>
          <p className="m-0">
            Talking mainly with this cousin and other lawyer friends, I realized
            that the issue of scheduling was very recurrent, and they all found it
            interesting to have scheduling automations and improvements.
            Furthermore, practically all of them said they were interested in the
            remote work model. Admentum came to give more visibility and freedom to
            these lawyers.
          </p>
        </>
      ),
    },
    {
      id: 'building',
      label: 'Admentum creation process',
      copyGroup: 'narrative',
      copyOnly: true,
      revealOnScroll: true,
      content: (
        <>
          <p className="m-0">
            Having worked with digital products for quite some time, the most
            important thing is to have a solid foundation to avoid future rework.
            With that in mind, my first action was to create Hades, a design system
            for Admentum. It includes colors, typographic scale, atomic components,
            and uses primitive tokens for ease of use.
          </p>
          <p className="m-0">
            For development, I chose Cursor because, having front-end experience,
            it was the tool that best fit my process. I used it to code my design
            system, upload it to Storybook, and also release the npm package.
          </p>
          <p className="m-0">
            Because I have good front-end experience but not so much back-end
            experience, I decided to call a friend to code Admentum together.
            Today I am responsible for design, front-end, finding users, and
            searching for new features.
          </p>
        </>
      ),
    },
    {
      id: 'status',
      label: 'next steps of the admentum',
      copyGroup: 'narrative',
      revealOnScroll: true,
      mediaSlice: [10, 14] as const,
      content: (
        <p className="m-0">
          Today Admentum is up and running with a test user. We are currently
          making the final refinements and preparing for its launch. I am promoting
          it so that people can find lawyers and schedule meetings, and I am also
          looking for lawyers to register on the platform.
        </p>
      ),
    },
  ],
} satisfies CaseStudyConfig
