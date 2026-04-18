import { createContext, useContext, useState } from 'react'
import es from '../i18n/es'
import en from '../i18n/en'

const LanguageContext = createContext(null)

const translations = { es, en }

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      value = value?.[k]
    }
    return value ?? key
  }

  const toggle = () => setLang(l => l === 'es' ? 'en' : 'es')

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
