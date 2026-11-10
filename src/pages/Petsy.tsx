import CaseStudyPage from '../components/case-study/CaseStudyPage.tsx'
import { petsyCaseStudy } from '../constants/cases/petsy.tsx'

export default function Petsy() {
  return <CaseStudyPage {...petsyCaseStudy} />
}
