export const RESUME_URL =
  'https://drive.google.com/file/d/1EBZOzHky9Yuqwk0yUgwY3c1Ju5D-mryd/view?usp=sharing'

export const GENETICA_BACKGROUND_URL =
  'https://images.unsplash.com/photo-1569239591652-6cc3025b07fa?auto=format&fit=crop&q=85&w=1600'

export const LAYOUT_CLASSES = {
  home: 'layout-home',
  about: 'layout-about',
} as const

/**
 * Granto One — controle de publicação.
 * false: card visível na /work com bolinha cinza "case soon"; rota /granto-one só em dev.
 * true:  card clicável com "Read case"; rota /granto-one ativa em produção.
 */
export const GRANTO_ONE_PUBLISHED = false

/** Rota /granto-one acessível (produção só quando publicado). */
export const GRANTO_ONE_ROUTE_ENABLED =
  GRANTO_ONE_PUBLISHED || import.meta.env.DEV

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/lucas-msqt/',
    label: '/in/lucas-msqt/',
    external: true,
  },
  {
    href: 'https://github.com/mesquita-dev',
    label: '@mesquita-dev',
    external: true,
  },
  {
    href: 'mailto:lmesquita2k@gmail.com?subject=Estou%20vindo%20pelo%20seu%20portf%C3%B3lio',
    label: 'lmesquita2k@gmail.com',
    external: false,
  },
  {
    href: 'tel:+5534991456285',
    label: '+55 (34) 99145-6285',
    external: false,
  },
] as const

/** Laranja de destaque — mesma cor da bolinha "Read case". */
export const ACCENT_COLOR = '#EC3406'

export const ACCENT_TEXT_CLASS = 'text-accent'

export const ACCENT_HOVER_CLASS = 'hover-text-accent'

export const GROUP_HOVER_ACCENT_CLASS = 'group-hover-text-accent'
