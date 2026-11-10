import type { ReactNode } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { Drawer } from 'vaul'
import { awardEntries, experienceEntries } from '@/constants/aboutContent'

type AboutDrawerProps = {
  trigger: ReactNode
}

const socials = [
  {
    href: 'https://github.com/mesquita-dev',
    label: 'GitHub',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/lucas-msqt/',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://x.com/mesquita-dev',
    label: 'X',
    external: true,
  },
  {
    href: 'mailto:lmesquita2k@gmail.com?subject=Estou%20vindo%20pelo%20seu%20portf%C3%B3lio',
    label: 'Email',
    external: false,
  },
] as const

const stacks = [
  'Figma',
  'React',
  'TypeScript',
  'Tailwind',
  'Motion',
  'Design systems',
  'Cursor',
  'Claude',
  'Prototype',
] as const

export default function AboutDrawer({ trigger }: AboutDrawerProps) {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="about-drawer-overlay" />
        <Drawer.Content className="about-drawer-content" aria-describedby={undefined}>
          <Drawer.Title className="sr-only">Sobre</Drawer.Title>
          <div className="about-drawer-layout">
            <div className="about-drawer-side about-drawer-side-left">
              <div className="about-drawer-copy">
                <h2>Lucas Mesquita</h2>
                <p>
                  Brasiliense morando em Uberaba, a terra do Zebu no triângulo
                  mineiro. Desde a minha infância observava as obras de Oscar
                  Niemayer e achava interessante mas sem a menor ideia do design
                  e como isso o inspirava. Com o passar do tempo, descobri que
                  era possível juntar o útil ao agradável, unir tecnologia com
                  arte, foi então que descobri o frontend.
                </p>
                <p>
                  Na faculdade de Sistemas de Informações, consegui o meu
                  primeiro estágio na SIX, onde criei diversos designs e também
                  codei eles. Entendi que trabalhava melhor na área do design e
                  comecei a me aprofundar com vários cursos, artigos e
                  comunidades.
                </p>
                <p>
                  Fora o mundo do trabalho, gosto de praticar esporte, assistir
                  filmes e passar um tempo com as pessoas que eu gosto.
                </p>
              </div>

              <div className="about-drawer-calendar">
                <p className="about-drawer-eyebrow">Contribuições até o momento</p>
                <GitHubCalendar
                  username="mesquita-dev"
                  colorScheme="dark"
                  fontSize={12}
                  blockSize={10}
                  blockMargin={3}
                />
              </div>

              <nav className="about-drawer-socials" aria-label="Redes sociais">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(social.external
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                  >
                    {social.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="about-drawer-side about-drawer-side-right">
              <section className="about-drawer-section" aria-labelledby="drawer-experience">
                <h3 id="drawer-experience">Experiências</h3>
                <ul className="about-drawer-experience">
                  {experienceEntries.map((entry) => (
                    <li key={`${entry.org}-${entry.title}`}>
                      <div className="about-drawer-experience-main">
                        {entry.logo ? (
                          <img
                            className="about-drawer-experience-logo"
                            src={entry.logo}
                            alt=""
                            width={32}
                            height={32}
                          />
                        ) : null}
                        <div>
                          <strong>{entry.org}</strong>
                          <span>{entry.title}</span>
                        </div>
                      </div>
                      <time>{entry.period.replace('Actually', 'Atualmente')}</time>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="about-drawer-section" aria-labelledby="drawer-awards">
                <h3 id="drawer-awards">Premiações</h3>
                <ul className="about-drawer-awards">
                  {awardEntries.map((entry) => (
                    <li key={`${entry.title}-${entry.period}`}>
                      <span>{entry.title}</span>
                      <time>{entry.period}</time>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="about-drawer-section" aria-labelledby="drawer-stacks">
                <h3 id="drawer-stacks">Stacks</h3>
                <ul className="about-drawer-stacks">
                  {stacks.map((stack) => (
                    <li key={stack}>{stack}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
