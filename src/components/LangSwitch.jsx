import { useLang } from '../i18n/LanguageContext.jsx'

const options = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt', label: 'PT', name: 'Português (Brasil)' },
]

export default function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang" role="group" aria-label="Language / Idioma">
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          lang={o.code === 'pt' ? 'pt-BR' : 'en'}
          title={o.name}
          aria-label={o.name}
          aria-pressed={lang === o.code}
          onClick={() => setLang(o.code)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
