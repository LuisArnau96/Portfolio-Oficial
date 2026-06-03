import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import s from '../styles/Home.module.css'

const isMobile = () => window.matchMedia('(max-width: 768px)').matches
const videoSrc = () => isMobile() ? './hero-mobile.mp4' : './hero-desktop.mp4'

function HeroMedia() {
  const videoRef = useRef(null)
  const [hasVideo, setHasVideo] = useState(false)
  const [src] = useState(videoSrc)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onCanPlay = () => setHasVideo(true)
    const onError = () => setHasVideo(false)
    v.addEventListener('canplay', onCanPlay)
    v.addEventListener('error', onError)
    return () => {
      v.removeEventListener('canplay', onCanPlay)
      v.removeEventListener('error', onError)
    }
  }, [])

  return (
    <>
      <video
        ref={videoRef}
        className={s.video}
        style={{ opacity: hasVideo ? 1 : 0 }}
        autoPlay muted playsInline loop
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={s.videoOverlay} />
    </>
  )
}

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Home() {
  const { t, lang, toggle } = useLang()

  return (
    <div className={s.hero}>
      <HeroMedia />

      <motion.div className={`${s.tl} ${s.role}`} {...fadeIn(0.2)}>
        <span className={s.roleTitle}>{t('hero.role')}</span>
        <span className={s.roleSkills}>{t('hero.skills')}</span>
        <span className={s.availability}>
          <span className={s.availDot} />
          {t('hero.available')}
        </span>
      </motion.div>

      <motion.div className={s.tr} {...fadeIn(0.2)}>
        <Link to="/work" className={s.navLink}>
          {t('nav.work')} <span className={s.arrow}>→</span>
        </Link>
      </motion.div>

      <div className={s.center}>
        <motion.span className={s.tagline2} {...fadeIn(0.5)}>
          {t('hero.tagline')}
        </motion.span>
        <motion.span className={s.tagline} {...fadeIn(0.65)}>
          {t('hero.tagline2')}
        </motion.span>
      </div>

      <motion.div className={`${s.bl} ${s.nameBlock}`} {...fadeIn(0.3)}>
        <span className={s.name}>LUIS ARNAU</span>
        <span className={s.nameSub}>{t('hero.location')}</span>
        <div className={s.nameLinks}>
          <a
            href="https://www.linkedin.com/in/luis-arnau"
            target="_blank"
            rel="noopener noreferrer"
            className={s.nameLink}
          >
            LINKEDIN <span className={s.arrow}>→</span>
          </a>
          <span className={s.nameDot}>·</span>
          <a href="mailto:luisarnau9@gmail.com" className={s.nameLink}>
            EMAIL <span className={s.arrow}>→</span>
          </a>
          <span className={`${s.nameDot} ${s.cvSep}`}>·</span>
          <a href="#/cv" className={`${s.nameLink} ${s.cvLink}`}>
            {t('hero.cv')} <span className={s.arrow}>↓</span>
          </a>
        </div>
      </motion.div>

      <motion.div className={s.br} {...fadeIn(0.3)}>
        <Link to="/contact" className={s.navLink}>
          {t('nav.contact')} <span className={s.arrow}>→</span>
        </Link>
      </motion.div>

      <motion.div className={s.langToggle} {...fadeIn(0.8)}>
        <button className={`${s.langBtn} ${lang === 'es' ? s.langBtnActive : ''}`} onClick={() => lang !== 'es' && toggle()}>ES</button>
        <span className={s.langSep}>/</span>
        <button className={`${s.langBtn} ${lang === 'en' ? s.langBtnActive : ''}`} onClick={() => lang !== 'en' && toggle()}>EN</button>
      </motion.div>
    </div>
  )
}
