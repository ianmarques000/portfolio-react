import decor from '../assets/page3-decor.webp'
import stack from '../assets/waveforge-stack.webp'
import home from '../assets/waveforge-home.webp'
import detail from '../assets/waveforge-detail.webp'
import { waveforge } from '../data/waveforge.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function ProjectWaveforge() {
  const { lang } = useLang()
  const p = waveforge[lang]
  return (
    <div className="stage">
      <img className="decor" src={decor} alt="" aria-hidden="true" />

      <img
        className="p py py--stack"
        style={{ left: '42.031%', top: '10.2%', width: '5.6%' }}
        src={stack}
        alt={p.stackAlt}
        width="656"
        height="423"
      />
      <h3 className="p f-pname" style={{ left: '47.969%', top: '11.806%' }}>{p.name}</h3>
      <p className="p f-kind" style={{ left: '47.969%', top: '15.93%' }}>{p.kind}</p>
      <p className="p f-meta" style={{ left: '41.875%', top: '23.148%' }}>{p.meta}</p>
      <div className="p f-desc f-desc--paras" style={{ left: '41.875%', top: '29%', width: '52.5%' }}>
        {p.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      <img
        className="p shot shot--a"
        style={{ left: '6.5%', top: '8%', width: '29%' }}
        src={home}
        alt={p.homeAlt}
        width="1166"
        height="911"
        loading="lazy"
      />
      <img
        className="p shot shot--b"
        style={{ left: '10.5%', top: '48.5%', width: '29%' }}
        src={detail}
        alt={p.detailAlt}
        width="1169"
        height="838"
        loading="lazy"
      />

    </div>
  )
}
