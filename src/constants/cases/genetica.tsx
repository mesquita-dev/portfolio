import type { CaseStudyConfig } from '../../components/case-study/types.ts'

const geneticaGallery = [
  {
    type: 'phone-video' as const,
    src: '/genetica/geneticavideo2.mp4',
    label: 'Genetica Mais preview',
    backgroundColor: '#F2F2F2',
  },
  {
    type: 'phone-image' as const,
    src: '/genetica/components.png',
    alt: 'Genetica components',
    backgroundColor: '#F2F2F2',
  },
  {
    type: 'phone-image-group' as const,
    images: [
      { src: '/genetica/Start.png', alt: 'Genetica Start' },
      { src: '/genetica/Login.png', alt: 'Genetica Login' },
    ],
  },
  {
    type: 'phone-image-group' as const,
    images: [
      { src: '/genetica/Register%202.png', alt: 'Genetica Register 2' },
      { src: '/genetica/Register%203.png', alt: 'Genetica Register 3' },
    ],
  },
  {
    type: 'phone-video' as const,
    src: '/genetica/home.mp4',
    label: 'Genetica Mais home video',
    backgroundColor: '#F2F2F2',
  },
  {
    type: 'phone-image-group' as const,
    images: [
      { src: '/genetica/Mercado.png', alt: 'Genetica Mercado' },
      { src: '/genetica/Favoritos.png', alt: 'Genetica Favoritos' },
      { src: '/genetica/Carrinho.png', alt: 'Genetica Carrinho' },
    ],
  },
  {
    type: 'phone-video' as const,
    src: '/genetica/comprar-embryo.mp4',
    label: 'Genetica Mais comprar embryo video',
    backgroundColor: '#F2F2F2',
  },
]

export const geneticaCaseStudy = {
  title: 'genetica mais',
  meta: {
    role: 'Product Designer',
    team: ['Myself'],
    stacks: ['Figma', 'Motion'],
    year: '2024 — 2025',
  },
  gallery: geneticaGallery,
  sections: [
    {
      id: 'agro-market',
      label: 'Understanding the agro market',
      copyGroup: 'narrative',
      copyOnly: true,
      content: (
        <p className="m-0">
          Brazil is the world's largest exporter and producer of semen and embryos.
          In 2024, R$17.5 million was invested in semen doses for beef cattle. In
          that same year, Brazil exported more than 460,000 doses of semen
          worldwide. For producers, using selected semen and embryos leads to a 4%
          increase in herd utilization, meaning that in the long term, you have
          higher quality cattle. It's a market that moves billions, with each
          passing year seeing more investment and greater profits for producers.
        </p>
      ),
    },
    {
      id: 'overview',
      label: 'Where did the idea of ​​genetics come from?',
      copyGroup: 'narrative',
      mediaSlice: [0, 4] as const,
      content: (
        <p className="m-0">
          My first job was at ABS, the world's largest producer of genetics.
          There, I worked in the semen and embryo stock, and that's where I saw
          the possibility of doing something more technologically advanced.
          Excel spreadsheets, livestock magazines, and phone conversations are
          still widely used, and the idea arose to create an app to facilitate
          the commercialization of this semen and embryos.
        </p>
      ),
    },
    {
      id: 'process',
      label: 'process',
      copyGroup: 'narrative',
      revealAt: 0.4,
      mediaSlice: [4, 5] as const,
      content: (
        <>
          <p className="m-0">
            The first thing to do was research the market to see if there were any
            apps that could do this. To my surprise, there weren't many. So, in
            order to present it to potential users, I had to create it in Figma
            first and then present it.
          </p>
          <p className="m-0">
            Using my experience in the field and the research, I created a design
            in Figma using a component library I created myself and an interactive
            prototype so I could simulate the final version of this app if it were
            actually developed.
          </p>
        </>
      ),
    },
    {
      id: 'process-duplicate',
      label: 'field study with real users',
      copyGroup: 'narrative',
      copyOnly: true,
      revealAt: 0.4,
      content: (
        <>
          <p className="m-0">
            In 2025, the largest livestock exhibition in Brazil took place,
            providing an excellent opportunity to demonstrate the application to
            real users. At this event, I had the opportunity to speak with more
            than 5 users to understand their pain points, perspectives, doubts,
            and feedback.
          </p>
          <p className="m-0">
            It was very interesting, and they all said they would use it.
            However, two of them raised points not previously considered. The
            places that sell these products have contracts stipulating that they
            can only be sold by their sales representatives. This makes the
            product unviable because it would violate the contracts and could
            lead to legal problems.
          </p>
        </>
      ),
    },
    {
      id: 'result',
      label: 'result',
      copyGroup: 'narrative',
      revealAt: 0.8,
      mediaSlice: [5, 7] as const,
      content: (
        <p className="m-0">
          Although the result wasn't positive, and I did end up creating an app
          for it, it was very important for exercising my craft, conducting field
          research with real users, and attempting to build an app. Nobody creates
          anything without trying...
        </p>
      ),
    },
  ],
} satisfies CaseStudyConfig
