import decor from '../assets/page2-decor.webp'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLang()
  const a = t.about
  return (
    <section className="page" id="about">
      <div className="stage">
        <img className="decor" src={decor} alt="" aria-hidden="true" />
        <h2 className="p f-h" style={{ left: `${a.headingLeft}%`, top: '10.004%' }} data-cal="h">
          {a.heading}
        </h2>
        <div
          className="p f-about"
          style={{ left: '5.625%', top: '19.594%', width: '78.125%' }}
          data-cal="about"
          data-tw="1428"
        >
          {a.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
