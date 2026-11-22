import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../css/contact-form.css'
import { useLang } from '../i18n/LanguageContext.jsx'
import { formText } from '../data/contactForm.js'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MAX = { name: 80, email: 120, message: 1500 }
const MIN_MESSAGE = 10
const EMPTY = { name: '', email: '', message: '' }

function validate(v) {
  const errors = {}
  const name = v.name.trim()
  const email = v.email.trim()
  const message = v.message.trim()
  if (!name) errors.name = 'required'
  else if (name.length < 2) errors.name = 'short'
  if (!email) errors.email = 'required'
  else if (!EMAIL_RE.test(email)) errors.email = 'invalid'
  if (!message) errors.message = 'required'
  else if (message.length < MIN_MESSAGE) errors.message = 'short'
  return errors
}

export default function ContactForm() {
  const { lang } = useLang()
  const tx = formText[lang]
  const formRef = useRef(null)
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')

  const sending = status === 'sending'

  function handleChange(e) {
    const { name, value } = e.target
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors(validate(next))
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (sending) return

    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(found).length) {
      requestAnimationFrame(() => formRef.current?.querySelector('[aria-invalid="true"]')?.focus())
      return
    }

    if (formRef.current.elements.company.value) {
      setValues(EMPTY)
      setTouched({})
      setStatus('success')
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('EmailJS não configurado: defina VITE_EMAILJS_* no arquivo .env (veja .env.example).')
      setStatus('config')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          message: values.message.trim(),
          lang,
        },
        { publicKey: PUBLIC_KEY }
      )
      setValues(EMPTY)
      setErrors({})
      setTouched({})
      setStatus('success')
    } catch (err) {
      console.error('EmailJS:', err)
      setStatus('error')
    }
  }

  const fieldError = (field) => (touched[field] && errors[field] ? tx.errors[field][errors[field]] : null)

  return (
    <form className="cf" ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="cf__field">
        <label htmlFor="cf-name">{tx.name}</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={MAX.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!fieldError('name')}
          aria-describedby={fieldError('name') ? 'cf-name-err' : undefined}
          disabled={sending}
        />
        {fieldError('name') && <p className="cf__err" id="cf-name-err" role="alert">{fieldError('name')}</p>}
      </div>

      <div className="cf__field">
        <label htmlFor="cf-email">{tx.email}</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={MAX.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!fieldError('email')}
          aria-describedby={fieldError('email') ? 'cf-email-err' : undefined}
          disabled={sending}
        />
        {fieldError('email') && <p className="cf__err" id="cf-email-err" role="alert">{fieldError('email')}</p>}
      </div>

      <div className="cf__field">
        <label htmlFor="cf-message">{tx.message}</label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          maxLength={MAX.message}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!fieldError('message')}
          aria-describedby={fieldError('message') ? 'cf-message-err' : undefined}
          disabled={sending}
        />
        {fieldError('message') && <p className="cf__err" id="cf-message-err" role="alert">{fieldError('message')}</p>}
      </div>

      <div className="cf__hp" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="cf__actions">
        <button type="submit" className="cf__btn" disabled={sending}>
          {sending ? tx.sending : tx.send}
        </button>
        <p className={`cf__status cf__status--${status}`} role="status" aria-live="polite">
          {status === 'success' && tx.success}
          {status === 'error' && tx.error}
          {status === 'config' && tx.config}
        </p>
      </div>
    </form>
  )
}
