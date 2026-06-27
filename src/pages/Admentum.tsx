/**
 * Case study draft — rota desabilitada em router.tsx até publicação.
 */
import CaseStudyPage from '../components/case-study/CaseStudyPage.tsx'
import { admentumCaseStudy } from '../constants/cases/admentum.tsx'

export default function Admentum() {
  return <CaseStudyPage {...admentumCaseStudy} />
}
