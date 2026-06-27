import { useEffect } from 'react'
import { GRANTO_ONE_VISIBLE } from './constants/site.ts'
import AboutPage from './pages/AboutPage.tsx'
import Admentum from './pages/Admentum.tsx'
import Genetica from './pages/Genetica.tsx'
import GrantoOne from './pages/GrantoOne.tsx'
import HomePage from './pages/HomePage.tsx'
import WorkPage from './pages/WorkPage.tsx'

const DOCUMENT_TITLE = 'Lucas Mesquita — Designer'

export default function AppRouter() {
  useEffect(() => {
    document.title = DOCUMENT_TITLE
  }, [])

  switch (window.location.pathname) {
    case '/':
      return <HomePage />
    case '/about':
      return <AboutPage />
    case '/work':
      return <WorkPage />
    case '/genetica':
      return <Genetica />
    case '/admentum':
      return <Admentum />
    case '/granto-one':
      return GRANTO_ONE_VISIBLE ? <GrantoOne /> : <WorkPage />
    default:
      return <HomePage />
  }
}
