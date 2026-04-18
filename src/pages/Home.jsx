import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TreeCanvas from '../components/TreeCanvas'
import { useLang } from '../context/LanguageContext'
import s from '../styles/Home.module.css'

function HeroMedia() {
  const videoARef = useRef(null)
  const videoBRef = useRef(null)
  const [hasVideo, setHasVideo] = useState(false)
  const [activeVideo, setActiveVideo] = useState('a') // 'a' | 'b'

  useEffect(() => {
    const v = videoARef.current
    if (!v) return

    const onCanPlay = () => setHasVideo(true)
    const onError = () => setHasVideo(false)

    // Crossfade seamless loop: when video A is near its end,
    // we start video B from 0 and swap visibility
    const onTimeUpdate = () => {
      const video = videoARef.current
      if (!video || !video.duration) return
      const timeLeft = video.duration - video.currentTime

      if (timeLeft < 0.6) {
        const vb = videoBRef.current
        if (vb && vb.paused) {
          vb.currentTime = 0
          vb.play().catch(() => {})
        }
      }
      if (timeLeft < 0.3) {
        setActiveVideo('b')
      }
    }

    const onEndedB = () => {
      // When B finishes: restart B from 0, keep going
      const vb = videoBRef.current
      if (vb) { vb.currentTime = 0; vb.play().catch(() => {}) }
    }

    v.addEventListener('canplay', onCanPlay)
    v.addEventListener('error', onError)
    v.addEventListener('timeupdate', onTimeUpdate)
    videoBRef.current?.addEventListener('ended', onEndedB)

    return () => {
      v.removeEventListener('canplay', onCanPlay)
      v.removeEventListener('error', onError)
      v.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  // When we swap to B, restart A silently so next swap is ready
  useEffect(() => {
    if (activeVideo === 'b') {
      const va = videoARef.current
      if (va) { va.currentTime = 0 }
    }
  }, [activeVideo])

  return (
    <>
      {/* Canvas always visible as base — shows while video loads */}
      <TreeCanvas />

      {/* Video A */}
      <video
        ref={videoARef}
        className={s.video}
        style={{ opacity: hasVideo && activeVideo === 'a' ? 1 : 0 }}
        autoPlay muted playsInline
      >
        <source src="./hero.mp4" type="video/mp4" />
      </video>

      {/* Video B — crossfade target */}
      <video
        ref={videoBRef}
        className={s.video}
        style={{ opacity: hasVideo && activeVideo === 'b' ? 1 : 0 }}
        muted playsInline
      >
        <source src="./hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay: gradient en todas las esquinas para textos + centro leve */}
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

      {/* Top-left: role */}
      <motion.div className={`${s.tl} ${s.role}`} {...fadeIn(0.2)}>
        <span className={s.roleTitle}>{t('hero.role')}</span>
        <span className={s.roleSkills}>{t('hero.skills')}</span>
      </motion.div>

      {/* Top-right: work link */}
      <motion.div className={s.tr} {...fadeIn(0.2)}>
        <Link to="/work" className={s.navLink}>
          {t('nav.work')} <span className={s.arrow}>→</span>
        </Link>
      </motion.div>

      {/* Center: tagline */}
      <div className={s.center}>
        <motion.span className={s.tagline} {...fadeIn(0.5)}>
          {t('hero.tagline')}
        </motion.span>
        <motion.span className={s.tagline2} {...fadeIn(0.65)}>
          {t('hero.tagline2')}
        </motion.span>
      </div>

      {/* Bottom-left: name */}
      <motion.div className={`${s.bl} ${s.name}`} {...fadeIn(0.3)}>
        LUIS ARNAU
      </motion.div>

      {/* Bottom-right: contact link */}
      <motion.div className={s.br} {...fadeIn(0.3)}>
        <Link to="/contact" className={s.navLink}>
          {t('nav.contact')} <span className={s.arrow}>→</span>
        </Link>
      </motion.div>

      {/* Language toggle */}
      <motion.div className={s.langToggle} {...fadeIn(0.8)}>
        <button
          className={`${s.langBtn} ${lang === 'es' ? s.langBtnActive : ''}`}
          onClick={() => lang !== 'es' && toggle()}
        >ES</button>
        <span className={s.langSep}>/</span>
        <button
          className={`${s.langBtn} ${lang === 'en' ? s.langBtnActive : ''}`}
          onClick={() => lang !== 'en' && toggle()}
        >EN</button>
      </motion.div>
    </div>
  )
}
