import useDock from '../hooks/useDock.js'
import { sectionIds } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Dock() {
  const { t } = useLang()
  const { visible, active } = useDock(sectionIds)
  return (
    <nav className={`dock${visible ? ' on' : ''}`} aria-label={t.navLabel}>
      {sectionIds.map((id) => (
        <a key={id} href={`#${id}`} className={active === id ? 'active' : undefined}>
          {t.nav[id]}
        </a>
      ))}
    </nav>
  )
}
