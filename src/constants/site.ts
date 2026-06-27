export const BEBAS_NEUE_FONT_URL =
  'https://api.fontshare.com/v2/css?f[]=bebas-neue@400&display=swap'

export const RESUME_URL =
  'https://drive.google.com/file/d/1EBZOzHky9Yuqwk0yUgwY3c1Ju5D-mryd/view?usp=sharing'

export const GENETICA_BACKGROUND_URL =
  'https://images.unsplash.com/photo-1569239591652-6cc3025b07fa?auto=format&fit=crop&q=85&w=1600'

export const LAYOUT_CLASSES = {
  home: 'layout-home',
  about: 'layout-about',
} as const

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

export const ACCENT_HOVER_CLASS = 'transition-colors hover:text-[#EC3406]'
