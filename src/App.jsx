import Dock from './components/Dock.jsx'
import LangSwitch from './components/LangSwitch.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="bg" aria-hidden="true"></div>
      <div className="grain" aria-hidden="true"></div>
      <LangSwitch />
      <Dock />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
