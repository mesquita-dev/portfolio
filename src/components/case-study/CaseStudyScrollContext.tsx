import { createContext, useContext, type ReactNode } from 'react'

type CaseStudyScrollContextValue = {
  maxProgress: number
  isDesktop: boolean
}

const CaseStudyScrollContext = createContext<CaseStudyScrollContextValue | null>(
  null,
)

export function CaseStudyScrollProvider({
  children,
  value,
}: {
  children: ReactNode
  value: CaseStudyScrollContextValue
}) {
  return (
    <CaseStudyScrollContext.Provider value={value}>
      {children}
    </CaseStudyScrollContext.Provider>
  )
}

export function useCaseStudyScroll() {
  const context = useContext(CaseStudyScrollContext)
  if (!context) {
    throw new Error(
      'useCaseStudyScroll must be used within CaseStudyScrollProvider',
    )
  }
  return context
}
