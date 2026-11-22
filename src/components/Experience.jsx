import decor from '../assets/page4-decor.webp'
import { jobsLayout } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Experience() {
  const { t } = useLang()
  const e = t.experience
  return (
    <section className="page" id="experience">
      <div className="stage">
        <img className="decor" src={decor} alt="" aria-hidden="true" />
        <h2 className="p f-h" style={{ left: `${e.headingLeft}%`, top: '11.393%' }} data-cal="h" data-tw="360">
          {e.heading}
        </h2>
        {jobsLayout.map((layout, i) => (
          <Job key={layout.n} layout={layout} job={e.jobs[i]} />
        ))}
      </div>
    </section>
  )
}

function Job({ layout: l, job: j }) {
  const t = l.top
  return (
    <>
      <h3
        className="p j-title"
        style={{ left: '8.542%', top: `${t.title}%` }}
        data-cal={l.cal?.title}
        data-tw={l.tw?.title}
      >
        <span>{l.n}</span> {j.title}
      </h3>
      <em className="p j-tag" style={{ right: '11.146%', top: `${t.tag}%` }}>{j.tag}</em>
      <p className="p j-meta" style={{ left: '8.646%', top: `${t.meta}%` }} data-cal={l.cal?.meta} data-tw={l.tw?.meta}>
        {j.meta}
      </p>
      <p
        className="p j-desc"
        style={{ left: '8.542%', top: `${t.desc}%`, width: '80.208%' }}
        data-cal={l.cal?.desc}
        data-tw={l.tw?.desc}
      >
        {j.desc}
      </p>
    </>
  )
}
