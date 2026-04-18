import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { LogoMark } from '../components/Logo'
import s from '../styles/Contact.module.css'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Contact() {
  const { t, lang, toggle } = useLang()

  return (
    <div className={s.page}>
      {/* Marca decorativa grande en el fondo */}
      <div className={s.decoMark} aria-hidden="true">
        <LogoMark size={320} inverted />
      </div>

      <header className={s.header}>
        <Link to="/" aria-label="Home">
          <LogoMark size={36} inverted />
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

          <Link to="/work" className={s.navLink}>
            {t('nav.work')} <span className={s.arrow}>→</span>
          </Link>
        </div>
      </header>

      <main className={s.content}>
        <motion.h1 className={s.heading} {...fade(0.1)}>
          {t('contact.heading')}
        </motion.h1>

        <motion.p className={s.sub} {...fade(0.25)}>
          {t('contact.sub')}
        </motion.p>

        <motion.div className={s.links} {...fade(0.4)}>
          <a href="mailto:luisarnau9@gmail.com" className={s.contactLink}>
            {t('contact.email')} →
          </a>
          <a
            href="https://www.linkedin.com/in/luis-arnau/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.contactLink}
          >
            {t('contact.linkedin')} →
          </a>
        </motion.div>
      </main>

      <footer className={s.footer}>
        <motion.p className={s.copyright} {...fade(0.55)}>
          {t('contact.copyright')}
        </motion.p>
      </footer>
    </div>
  )
}
