import AboutSection from '../components/about/AboutSection.tsx'
import PhotoWithCaption from '../components/about/PhotoWithCaption.tsx'
import TimelineEntry from '../components/about/TimelineEntry.tsx'
import SiteHeader from '../components/SiteHeader.tsx'
import {
  aboutPhotos,
  awardEntries,
  educationEntries,
  experienceEntries,
} from '../constants/aboutContent.ts'
import { LAYOUT_CLASSES } from '../constants/site.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'

export default function AboutPage() {
  usePageSetup(LAYOUT_CLASSES.about)

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-4 py-4 font-aileron text-sm">
      <SiteHeader showBackLink />

      <main id="main-content" className="col-span-4 mt-32 flex flex-col gap-16 pb-16">
        <h1 className="m-0 text-balance font-bebas-neue text-9xl leading-[0.85]">about</h1>

        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 flex w-full min-w-0 flex-col gap-16 self-start">
            {aboutPhotos.map((photo, index) => (
              <PhotoWithCaption
                key={photo.src}
                {...photo}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>

          <div className="col-span-2 col-start-3 flex flex-col gap-20 self-start">
            <AboutSection title="a little bit about me">
              <div className="flex flex-col gap-3">
                <p className="m-0">
                  Growing up in Brasília — Brazil's architectural capital — meant
                  living inside a design statement before I ever knew what design
                  was. The city's shapes, grids, and intentionality left a mark.
                </p>
                <p className="m-0">
                  In 2022, I turned that background into a practice. My approach has
                  been consistent ever since: understand what the user actually
                  needs, then get out of the way. The best design doesn't announce
                  itself — it just works, quickly.
                </p>
                <p className="m-0">
                  <a
                    href="https://agsix.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    SIX
                  </a>
                  , a marketing agency, was where I developed my rhythm. Working
                  across several projects simultaneously — each with its own
                  deadline and stakeholders — forced me to become fast without
                  becoming careless.
                </p>
                <p className="m-0">
                  Then came{' '}
                  <a
                    href="https://grantoseguros.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Granto Seguros
                  </a>
                  . Joining as Founding Product Designer at a B2B insurance
                  brokerage meant there was no playbook, no existing system, no
                  handoff to reference. I built the internal productivity platform,
                  the design system, and the autonomous policy issuance product
                  entirely from scratch — and learned more in that role than
                  anywhere else.
                </p>
                <p className="m-0">
                  Now, as a Senior Product Designer at{' '}
                  <a
                    href="https://edunext.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Edunext
                  </a>
                  , I'm working on a problem that matters at scale: modernizing how
                  colleges operate. The platform centralizes student management,
                  tuition, and institutional workflows — giving educators and
                  administrators tools that are actually worthy of the sector they
                  serve.
                </p>
              </div>
            </AboutSection>

            <AboutSection title="experience">
              <div className="flex flex-col gap-4">
                {experienceEntries.map((entry) => (
                  <TimelineEntry key={entry.title} {...entry} />
                ))}
              </div>
            </AboutSection>

            <AboutSection title="education">
              <div className="flex flex-col gap-4">
                {educationEntries.map((entry) => (
                  <TimelineEntry key={entry.title} {...entry} />
                ))}
              </div>
            </AboutSection>

            <AboutSection title="awards">
              <div className="flex flex-col gap-4">
                {awardEntries.map((entry) => (
                  <TimelineEntry key={entry.title} {...entry} />
                ))}
              </div>
            </AboutSection>
          </div>
        </div>
      </main>
    </div>
  )
}
