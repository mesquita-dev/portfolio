import { useEffect } from 'react'

const HTML_TESTE_CLASSES = [
  'm-0',
  'p-0',
  'h-auto',
  'overflow-visible',
  'md:h-auto',
  'md:overflow-visible',
] as const

const BODY_TESTE_CLASSES = [...HTML_TESTE_CLASSES, 'font-aileron'] as const

const ROOT_TESTE_CLASSES = [
  'm-0',
  'p-0',
  'block',
  'h-auto',
  'min-h-0',
  'overflow-visible',
  'md:h-auto',
  'md:min-h-0',
  'md:overflow-visible',
] as const

function toggleTesteLayoutClasses(active: boolean) {
  const html = document.documentElement
  const body = document.body
  const root = document.getElementById('root')

  const action = active ? 'add' : 'remove'

  html.classList[action](...HTML_TESTE_CLASSES)
  body.classList[action](...BODY_TESTE_CLASSES)
  root?.classList[action](...ROOT_TESTE_CLASSES)
}

export default function AboutPage() {
  useEffect(() => {
    toggleTesteLayoutClasses(true)

    return () => {
      toggleTesteLayoutClasses(false)
    }
  }, [])

  return (
    <div className="mx-auto grid w-full max-w-[1240px] grid-cols-4 py-2 font-aileron text-sm">
      <a href="/teste" className="col-span-4 m-0 text-gray-400">
        Back
      </a>

      <div className="col-span-4 mt-16 grid grid-cols-4">
        <div className="col-span-2 col-start-3 flex flex-col gap-3">
          <p className="m-0">
            Growing up in Brasília — Brazil's architectural capital — meant
            living inside a design statement before I ever knew what design was.
            The city's shapes, grids, and intentionality left a mark.
          </p>
          <p className="m-0">
            In 2022, I turned that background into a practice. My approach has
            been consistent ever since: understand what the user actually needs,
            then get out of the way. The best design doesn't announce itself —
            it just works, quickly.
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
            across several projects simultaneously — each with its own deadline
            and stakeholders — forced me to become fast without becoming
            careless.
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
            . Joining as Founding Product Designer at a B2B insurance brokerage
            meant there was no playbook, no existing system, no handoff to
            reference. I built the internal productivity platform, the design
            system, and the autonomous policy issuance product entirely from
            scratch — and learned more in that role than anywhere else.
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
      </div>
    </div>
  )
}
