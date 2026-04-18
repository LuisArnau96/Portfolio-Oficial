import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { projects } from '../data/projects'
import { LogoMark } from '../components/Logo'
import s from '../styles/Work.module.css'

const FILTERS = ['all', 'uxui', 'research', 'branding']

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const rowVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Work() {
  const { t, lang, toggle } = useLang()
  const [active, setActive] = useState('all')
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visible = active === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(active))

  return (
    <div className={s.page}>
      <header ref={headerRef} className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
        <Link to="/" aria-label="Home">
          <LogoMark size={36} />
        </Link>

        <div className={s.headerRight}>
          <div className={s.langToggle}>
            <button
              className={`${s.langBtn} ${lang === 'es' ? s.langBtnActive : ''}`}
              onClick={() => lang !== 'es' && toggle()}
            >ES</button>
            <span className={s.langSep}>/</span>
            <button
              className={`${s.langBtn} ${lang === 'en' ? s.langBtnActive : ''}`}
              onClick={() => lang !== 'en' && toggle()}
            >EN</button>
          </div>

          <Link to="/contact" className={s.navLink}>
            {t('nav.contact')} <span className={s.arrow}>→</span>
          </Link>
        </div>
      </header>

      <main className={s.content}>
        <motion.h1
          className={s.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {t('work.heading')}
        </motion.h1>

        <motion.div
          className={s.filters}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {FILTERS.map(f => (
            <button
              key={f}
              className={`${s.filterBtn} ${active === f ? s.active : ''}`}
              onClick={() => setActive(f)}
            >
              {t(`work.filters.${f}`)}
            </button>
          ))}
        </motion.div>

        <motion.div
          className={s.projectList}
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {visible.map(project => {
            const info = t(`projects.${project.id}`)
            return (
              <motion.div key={project.id} variants={rowVariants} layout>
                <Link to={`/project/${project.id}`} className={s.projectRow}>
                  <div className={s.projectLeft}>
                    <span className={s.projectTitle}>{info.title}</span>
                    <span className={s.projectDesc}>{info.desc}</span>
                  </div>
                  <span className={s.projectAction}>
                    {t('work.see')} <span className={s.arrow}>→</span>
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </main>
    </div>
  )
}
