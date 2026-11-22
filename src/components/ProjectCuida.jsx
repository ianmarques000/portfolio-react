import react from '../assets/cuida-react.webp'
import spring from '../assets/cuida-spring.webp'
import { cuida } from '../data/cuida.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function ProjectCuida() {
  const { lang } = useLang()
  const p = cuida[lang]
  return (
    <div className="stage">
      <div className="p tech-row" style={{ left: '5.781%', top: '9.33%' }}>
        <img src={react} alt={p.reactAlt} width="640" height="570" />
        <img src={spring} alt={p.springAlt} width="309" height="222" />
      </div>
      <h3 className="p f-pname" style={{ left: '19%', top: '11.806%' }}>{p.name}</h3>
      <p className="p f-kind" style={{ left: '19%', top: '15.93%' }}>{p.kind}</p>
      <p className="p f-meta" style={{ left: '5.625%', top: '23.148%' }}>{p.meta}</p>
      <div className="p f-desc f-desc--paras" style={{ left: '5.625%', top: '29%', width: '52.5%' }}>
        {p.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  )
}
