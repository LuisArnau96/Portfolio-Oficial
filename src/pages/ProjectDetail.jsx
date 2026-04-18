import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { projects } from '../data/projects'
import { projectDetails } from '../data/projectDetails'
import { LogoMark } from '../components/Logo'
import s from '../styles/ProjectDetail.module.css'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function ProjectDetail() {
  const { id } = useParams()
  const { t, lang, toggle } = useLang()

  const project = projects.find(p => p.id === id)
  const detail = projectDetails[id]

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!project || !detail) return <Navigate to="/work" replace />

  const info = t(`projects.${id}`)
  const currentIndex = projects.findIndex(p => p.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  const prevInfo = prevProject ? t(`projects.${prevProject.id}`) : null
  const nextInfo = nextProject ? t(`projects.${nextProject.id}`) : null

  return (
    <div className={s.page}>
      {/* Header */}
      <header className={s.header}>
        <Link to="/" aria-label="Home">
          <LogoMark size={28} />
        </Link>
        <div className={s.headerRight}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button
              style={{ fontFamily: 'var(--font)', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', color: lang === 'es' ? 'var(--black)' : 'var(--gray-mid)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}
              onClick={() => lang !== 'es' && toggle()}
            >ES</button>
            <span style={{ color: 'var(--gray-light)', fontSize: 10 }}>/</span>
            <button
              style={{ fontFamily: 'var(--font)', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', color: lang === 'en' ? 'var(--black)' : 'var(--gray-mid)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}
              onClick={() => lang !== 'en' && toggle()}
            >EN</button>
          </div>
          <Link to="/work" className={s.backLink}>
            ← {t('nav.work')}
          </Link>
        </div>
      </header>

      <div className={s.content}>
        {/* Title + subtitle */}
        <motion.div {...fade(0.05)}>
          <h1 className={s.projectTitle}>{info.title}</h1>
          <p className={s.projectSubtitle}>{detail.subtitle[lang]}</p>
        </motion.div>

        {/* Cover image 16/9 */}
        <motion.img
          src={detail.cover}
          alt={info.title}
          className={s.coverImg}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Meta + tags */}
        <motion.div {...fade(0.1)}>
          <div className={s.meta}>
            <div className={s.metaItem}>
              <span className={s.metaLabel}>{lang === 'es' ? 'Año' : 'Year'}</span>
              <span className={s.metaValue}>{detail.year}</span>
            </div>
            <div className={s.metaItem}>
              <span className={s.metaLabel}>{lang === 'es' ? 'Rol' : 'Role'}</span>
              <span className={s.metaValue}>{detail.role[lang]}</span>
            </div>
          </div>
          <div className={s.tags}>
            {info.tags.map(tag => (
              <span key={tag} className={s.tag}>{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Context */}
        <motion.div className={s.section} {...fade(0.12)}>
          <h2>{lang === 'es' ? 'Contexto' : 'Context'}</h2>
          <p>{detail.context[lang]}</p>
        </motion.div>

        {/* Problem */}
        <motion.div className={s.section} {...fade(0.14)}>
          <h2>{lang === 'es' ? 'Problema' : 'Problem'}</h2>
          <p>{detail.problem[lang]}</p>
        </motion.div>

        {/* Objectives */}
        <motion.div className={s.section} {...fade(0.16)}>
          <h2>{lang === 'es' ? 'Objetivos' : 'Objectives'}</h2>
          <ul className={s.objectivesList}>
            {detail.objectives[lang].map((obj, i) => (
              <li key={i} className={s.objectiveItem}>
                <span className={s.objCheck}>✓</span>
                {obj}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Role */}
        <motion.div className={s.section} {...fade(0.18)}>
          <h2>{lang === 'es' ? 'Mi rol' : 'My role'}</h2>
          <p>{detail.roleText[lang]}</p>
        </motion.div>

        {/* Process */}
        <motion.div className={s.section} {...fade(0.2)}>
          <h2>{lang === 'es' ? 'Proceso' : 'Process'}</h2>
          <div className={s.processGrid}>
            {detail.process[lang].map((step, i) => (
              <div key={i} className={s.processStep}>
                <span className={s.stepNum}>{i + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gallery sections — each image with its own h2 title */}
        {detail.gallery.map((item, i) => (
          <motion.div
            key={i}
            className={s.galSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2>{item.title[lang]}</h2>
            {item.desc && <p>{item.desc[lang]}</p>}
            <img src={item.image} alt={item.title[lang]} className={s.sectionImg} />
          </motion.div>
        ))}

        {/* Result callout */}
        <motion.div
          className={s.resultCallout}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>{lang === 'es' ? 'Resultado' : 'Result'}</h2>
          <p>{detail.result[lang]}</p>
        </motion.div>

        {/* Prototype button */}
        {detail.prototype && (
          <a
            href={detail.prototype}
            target="_blank"
            rel="noopener noreferrer"
            className={s.protoBtn}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {lang === 'es' ? 'Ver prototipo interactivo' : 'View interactive prototype'}
          </a>
        )}

        {/* Reflection */}
        <div className={s.section}>
          <h2>{lang === 'es' ? 'Reflexión' : 'Reflection'}</h2>
          <p className={s.reflection}>{detail.reflection[lang]}</p>
        </div>

        {/* Prev / Next nav */}
        <nav className={s.nav}>
          {prevProject ? (
            <Link to={`/project/${prevProject.id}`} className={s.navBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
              </svg>
              <div className={s.navText}>
                <span className={s.navLabel}>{lang === 'es' ? 'Proyecto anterior' : 'Previous project'}</span>
                <span className={s.navName}>{prevInfo.title}</span>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link to={`/project/${nextProject.id}`} className={s.navBtn}>
              <div className={`${s.navText} ${s.navRight}`}>
                <span className={s.navLabel}>{lang === 'es' ? 'Proyecto siguiente' : 'Next project'}</span>
                <span className={s.navName}>{nextInfo.title}</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          ) : <div />}
        </nav>
      </div>
    </div>
  )
}
