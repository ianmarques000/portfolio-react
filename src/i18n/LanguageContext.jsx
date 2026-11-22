import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { content } from '../data/content.js'

const STORAGE_KEY = 'portfolio-lang'
const LanguageContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && content[saved]) return saved
  } catch { }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.docTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.description)
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { }
  }, [lang, t])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang deve ser usado dentro de <LanguageProvider>')
  return ctx
}
