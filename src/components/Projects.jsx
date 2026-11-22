import decor from '../assets/page3-decor.webp'
import bird from '../assets/deadmxne_logo.webp'
import '../css/projects.css'
import { useLang } from '../i18n/LanguageContext.jsx'
import ProjectPortugeses from './ProjectPortugeses.jsx'
import ProjectWaveforge from './ProjectWaveforge.jsx'
import ProjectCuida from './ProjectCuida.jsx'

export default function Projects() {
  const { t } = useLang()
  const p = t.projects
  return (
    <section className="page" id="projects">
      <div className="stage">
        <img className="decor" src={decor} alt="" aria-hidden="true" />
        <h2 className="p f-h" style={{ left: `${p.headingLeft}%`, top: '11.393%' }}>{p.heading}</h2>
        <img
          className="p bird"
          style={{ left: '16.354%', top: '21.852%', width: '15.573%' }}
          src={bird}
          alt={p.birdAlt}
          width="299"
          height="333"
        />
        <h3 className="p f-pname" style={{ left: '5.781%', top: '27.492%' }} data-cal="pname" data-tw="343">
          {p.name}
        </h3>
        <p className="p f-kind" style={{ left: '5.781%', top: '46.775%' }} data-cal="kind" data-tw="197">
          {p.kind}
        </p>
        <p className="p f-meta" style={{ left: '5.625%', top: '52.681%' }} data-cal="meta" data-tw="699">
          {p.meta}
        </p>
        <p
          className="p f-desc"
          style={{ left: '5.625%', top: '59.229%', width: '54.531%' }}
          data-cal="pdesc"
          data-tw="1040"
        >
          {p.desc}
        </p>
        <a
          className="p f-link"
          style={{ left: '5.625%', top: '70.174%' }}
          href="https://www.youtube.com/@DEADMXNE"
          target="_blank"
          rel="noopener"
          data-cal="link"
          data-tw="254"
        >
          {p.link}
        </a>
      </div>

      <ProjectPortugeses />

      <ProjectWaveforge />

      <ProjectCuida />
    </section>
  )
}
