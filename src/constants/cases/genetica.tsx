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
    type: 'phone-image' as const,
    src: '/genetica/Start.png',
    alt: 'Genetica Start',
  },
  {
    type: 'phone-image' as const,
    src: '/genetica/Login.png',
    alt: 'Genetica Login',
  },
  {
    type: 'phone-image' as const,
    src: '/genetica/Register.png',
    alt: 'Genetica Register',
  },
  {
    type: 'phone-video' as const,
    src: '/genetica/home.mp4',
    label: 'Genetica Mais home video',
    backgroundColor: '#F2F2F2',
  },
  {
    type: 'phone-image' as const,
    src: '/genetica/mfc.png',
    alt: 'Genetica MFC',
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
      id: 'overview',
      label: 'overview',
      mediaSlice: [0, 3] as const,
      content: (
        <>
          <p className="m-0">
            Genética Mais was born from my first professional experience at ABS,
            the world's largest livestock company, where I worked in the bovine
            semen and embryo storage department. There, I noticed the sector was
            extremely outdated and technology-poor — and I saw an opportunity.
          </p>
          <p className="m-0">
            The idea was an e-commerce platform where genetics producers could
            list bovine semen and embryos, and buyers could select the desired
            quantity and have it delivered directly to their farm — simple,
            direct, and digital.
          </p>
        </>
      ),
    },
    {
      id: 'process',
      label: 'process',
      mediaSlice: [3, 6] as const,
      content: (
        <>
          <p className="m-0">
            To validate the concept, I attended livestock events where I conducted
            field research, presented an interactive prototype, and spoke with
            genetics producers, buyers, veterinarians, and genetics center
            employees. The results were encouraging — most people found the idea
            relevant and said they would use the product.
          </p>
          <p className="m-0">
            However, an unavoidable contractual barrier emerged: genetics centers
            require that all commercialization be handled exclusively through their
            sales representatives, which made the business model unviable. The
            project never moved into development.
          </p>
        </>
      ),
    },
    {
      id: 'result',
      label: 'result',
      mediaSlice: [6, 8] as const,
      content: (
        <p className="m-0">
          Even so, it was one of the most valuable experiences of my career. I
          learned firsthand that validating an idea with real users — before
          writing a single line of code — is essential to avoid wasting time and
          money. Figma and a clickable prototype were enough to reach a clear
          conclusion, and that alone made the entire process worthwhile.
        </p>
      ),
    },
  ],
} satisfies CaseStudyConfig
