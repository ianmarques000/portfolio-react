import decor from '../assets/page3-decor.webp'
import python from '../assets/python-logo.webp'
import map from '../assets/portugeses-map.webp'
import dice from '../assets/portugeses-dice.webp'
import { portugeses, portugesesRepo } from '../data/portugeses.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function ProjectPortugeses() {
  const { lang } = useLang()
  const p = portugeses[lang]
  return (
    <div className="stage">
      <img className="decor decor--flip" src={decor} alt="" aria-hidden="true" />

      <img
        className="p py"
        style={{ left: '5.781%', top: '9.259%', width: '4.688%' }}
        src={python}
        alt={p.pythonAlt}
        width="256"
        height="256"
      />
      <h3 className="p f-pname" style={{ left: '11.719%', top: '11.806%' }}>{p.name}</h3>
      <p className="p f-kind" style={{ left: '11.719%', top: '15.93%' }}>{p.kind}</p>
      <p className="p f-meta" style={{ left: '5.625%', top: '23.148%' }}>{p.meta}</p>
      <div className="p f-desc f-desc--paras" style={{ left: '5.625%', top: '29%', width: '52.5%' }}>
        {p.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      <img
        className="p shot shot--a"
        style={{ left: '64.5%', top: '8%', width: '29%' }}
        src={map}
        alt={p.mapAlt}
        width="799"
        height="604"
        loading="lazy"
      />
      <img
        className="p shot shot--b"
        style={{ left: '60.5%', top: '48.5%', width: '29%' }}
        src={dice}
        alt={p.diceAlt}
        width="801"
        height="593"
        loading="lazy"
      />

      <a
        className="p f-link"
        style={{ left: '5.625%', top: '84%' }}
        href={portugesesRepo}
        target="_blank"
        rel="noopener"
      >
        {p.link}
      </a>
    </div>
  )
}
