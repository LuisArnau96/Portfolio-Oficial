import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'

const pageTransition = {
  initial:  { opacity: 0 },
  animate:  { opacity: 1 },
  exit:     { opacity: 0 },
  transition: { duration: 0.35, ease: 'easeInOut' },
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="page-wrapper"
        {...pageTransition}
      >
        <Routes location={location}>
          <Route path="/"                element={<Home />} />
          <Route path="/work"            element={<Work />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="/project/:id"     element={<ProjectDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AnimatedRoutes />
      </HashRouter>
    </LanguageProvider>
  )
}
