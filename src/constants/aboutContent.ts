export const aboutPhotos = [
  {
    src: '/about/me.png',
    alt: 'Lucas Mesquita',
    caption: 'professional photo to use in social medias',
  },
  {
    src: '/about/hacka.jpeg',
    alt: 'Hackathon',
    caption:
      'hackathon replit + resend in sp where we are the winners of this hackathon',
  },
  {
    src: '/about/bu.jpeg',
    alt: 'Bu',
    caption: 'me and Bu Kinoshita the co-founder and CTO at Resend',
  },
] as const

export const experienceEntries: {
  title: string
  org: string
  period: string
  logo?: string
}[] = [
  {
    title: 'Founder and Design Engineer',
    org: 'ProRapport',
    period: '2026 — Actually',
    logo: '/about/logos/prorapport.png',
  },
  {
    title: 'Senior Product Designer',
    org: 'Edunext',
    period: '2026 — Actually',
    logo: '/about/logos/edunext.png',
  },
  {
    title: 'Founding Product Designer',
    org: 'Granto Seguros',
    period: '2023 — 2026',
    logo: '/about/logos/granto.png',
  },
  {
    title: 'Design Engineer',
    org: 'SIX',
    period: '2023 — 2023',
    logo: '/about/logos/six.png',
  },
]

export const educationEntries = [
  {
    title: "Bachelor's Information Systems",
    org: 'UNIUBE',
    period: '2021 — 2025',
  },
  {
    title: 'Design Visual para Produtos Digitais',
    org: 'Aprender Design',
    period: '2025',
  },
  {
    title: 'UX Design',
    org: 'Design Circuit',
    period: '2024',
  },
  {
    title: 'React',
    org: 'Rocketseat',
    period: 'Ongoing',
  },
] as const

export const awardEntries = [
  {
    title: 'Campeão do Hackathon da Resend + Replit',
    period: '2026',
  },
  {
    title: 'Campeão do Hackathon Ubyfol',
    period: '2024',
  },
] as const
