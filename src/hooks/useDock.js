import { useEffect, useRef, useState } from 'react'

export default function useDock(sectionIds) {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(null)
  const ids = useRef(sectionIds)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const heroIO = new IntersectionObserver(
      (e) => setVisible(!e[0].isIntersecting),
      { threshold: 0.35 }
    )
    if (hero) heroIO.observe(hero)

    const sectionIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.current.forEach((id) => {
      const el = document.getElementById(id)
      if (el) sectionIO.observe(el)
    })

    return () => {
      heroIO.disconnect()
      sectionIO.disconnect()
    }
  }, [])

  return { visible, active }
}
