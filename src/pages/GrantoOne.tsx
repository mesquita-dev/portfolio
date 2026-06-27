import CaseStudyPage from '../components/case-study/CaseStudyPage.tsx'
import { grantoOneCaseStudy } from '../constants/cases/grantoOne.tsx'

export default function GrantoOne() {
  return <CaseStudyPage {...grantoOneCaseStudy} />
}
