import { Suspense, lazy, useEffect } from 'react'
import SkipToContent from './components/SkipToContent.tsx'
import { GRANTO_ONE_VISIBLE } from './constants/site.ts'

const HomePage = lazy(() => import('./pages/HomePage.tsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'))
const WorkPage = lazy(() => import('./pages/WorkPage.tsx'))
const Genetica = lazy(() => import('./pages/Genetica.tsx'))
const Admentum = lazy(() => import('./pages/Admentum.tsx'))
const GrantoOne = lazy(() => import('./pages/GrantoOne.tsx'))

const DOCUMENT_TITLE = 'Lucas Mesquita — Designer'

export default function AppRouter() {
  useEffect(() => {
    document.title = DOCUMENT_TITLE
  }, [])

  let page

  switch (window.location.pathname) {
    case '/':
      page = <HomePage />
      break
    case '/about':
      page = <AboutPage />
      break
    case '/work':
      page = <WorkPage />
      break
    case '/genetica':
      page = <Genetica />
      break
    case '/admentum':
      page = <Admentum />
      break
    case '/granto-one':
      page = GRANTO_ONE_VISIBLE ? <GrantoOne /> : <WorkPage />
      break
    default:
      page = <HomePage />
  }

  return (
    <>
      <SkipToContent />
      <Suspense fallback={null}>{page}</Suspense>
    </>
  )
}
