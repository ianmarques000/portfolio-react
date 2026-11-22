import decor from '../assets/page1-decor.webp'
import titleEn from '../assets/portfolio-title.png'
import titlePt from '../assets/portfolio-title-pt.png'
import { sectionIds } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const titles = { en: titleEn, pt: titlePt }

export default function Hero() {
  const { lang, t } = useLang()
  return (
    <section className="page hero" id="top">
      <div className="stage">
        <img className="decor" src={decor} alt="" aria-hidden="true" />
        <h1 className="p title" style={{ left: '4.896%', top: '12.407%', width: '50.938%' }}>
          <img src={titles[lang]} alt={t.hero.titleAlt} width="1616" height="576" />
        </h1>
        <p className="p f-name hero-name" style={{ left: '8.646%', top: '38.155%' }} data-cal="name" data-tw="831">
          Ian Poty Arandu de Albuquerque Marques
        </p>
        <p
          className="p f-role"
          style={{ left: '54.792%', top: '48.595%', width: '32.656%' }}
          data-cal="role"
          data-tw="627"
        >
          {t.hero.role[0]}<br />{t.hero.role[1]}
        </p>
        <ul
          className="p f-menu menu"
          style={{ left: '9.167%', top: '60.651%', width: '15.625%' }}
          data-cal="menu"
          data-tw="189"
        >
          {sectionIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`}>{t.nav[id]}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
