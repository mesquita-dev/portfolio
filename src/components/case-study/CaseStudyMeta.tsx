import type { CaseStudyMeta as CaseStudyMetaData } from './types.ts'

type CaseStudyMetaProps = {
  meta: CaseStudyMetaData
}

function MetaField({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="m-0 self-start text-gray-400">{label}</h2>
      {children}
    </div>
  )
}

export default function CaseStudyMeta({ meta }: CaseStudyMetaProps) {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-2 flex justify-between gap-2">
        <MetaField label="role">
          <p className="m-0">{meta.role}</p>
        </MetaField>

        <MetaField label="team">
          <div className="flex flex-col">
            {meta.team.map((member) => (
              <p key={member} className="m-0">
                {member}
              </p>
            ))}
          </div>
        </MetaField>

        <MetaField label="stacks">
          <div className="flex flex-col">
            {meta.stacks.map((stack) => (
              <p key={stack} className="m-0">
                {stack}
              </p>
            ))}
          </div>
        </MetaField>

        <MetaField label="year">
          <p className="m-0">{meta.year}</p>
        </MetaField>
      </div>
    </div>
  )
}
