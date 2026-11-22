import star from '../assets/detail_asset7.webp'
import { contactLinks } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import ContactForm from './ContactForm.jsx'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  return (
    <section className="page contact" id="contact">
      <div className="stage stage--flow">
        <img className="deco-star" src={star} alt="" aria-hidden="true" />
        <h2 className="f-h contact__h"><span>{c.heading}</span></h2>
        <div className="contact__body">
          <div className="contact__info">
            <p className="contact__lead">{c.lead}</p>
            <ul className="contact__list">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
        <footer className="foot">
          © <span id="y">{new Date().getFullYear()}</span> {c.footer}
        </footer>
      </div>
    </section>
  )
}
