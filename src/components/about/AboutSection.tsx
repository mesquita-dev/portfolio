import type { ReactNode } from 'react'

type AboutSectionProps = {
  title: string
  children: ReactNode
}

export default function AboutSection({ title, children }: AboutSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <h2 className="m-0 self-start text-gray-400">{title}</h2>
      {children}
    </div>
  )
}
