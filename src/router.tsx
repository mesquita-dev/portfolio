import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.tsx'
import SkipToContent from './components/SkipToContent.tsx'

const HomePage = lazy(() => import('./pages/HomePage.tsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'))
const WorkPage = lazy(() => import('./pages/WorkPage.tsx'))
const Genetica = lazy(() => import('./pages/Genetica.tsx'))
const Admentum = lazy(() => import('./pages/Admentum.tsx'))
const GrantoOne = lazy(() => import('./pages/GrantoOne.tsx'))
const Petsy = lazy(() => import('./pages/Petsy.tsx'))

const DOCUMENT_TITLE = 'Lucas Mesquita — Designer'

export default function AppRouter() {
  useEffect(() => {
    document.title = DOCUMENT_TITLE
  }, [])

  return (
    <BrowserRouter>
      <SkipToContent />
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/genetica" element={<Genetica />} />
          <Route path="/admentum" element={<Admentum />} />
          <Route path="/granto-one" element={<GrantoOne />} />
          <Route path="/petsy" element={<Petsy />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
