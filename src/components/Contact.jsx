import star from '../assets/detail_asset7.webp'
import iconEmail from '../assets/icon-email.webp'
import iconYoutube from '../assets/icon-youtube.webp'
import iconLinkedin from '../assets/icon-linkedin.webp'
import iconGithub from '../assets/icon-github.webp'
import '../css/contact-icons.css'
import { contactLinks } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import ContactForm from './ContactForm.jsx'

const icons = {
  'E-mail': iconEmail,
  YouTube: iconYoutube,
  LinkedIn: iconLinkedin,
  GitHub: iconGithub,
}

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
            <ul className="contact__list contact__icons">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    aria-label={l.label}
                    title={l.label}
                    {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
                  >
                    <img src={icons[l.label]} alt="" width="512" height="512" />
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
