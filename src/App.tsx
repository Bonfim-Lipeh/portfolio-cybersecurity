import Hero from './components/Hero'
import Terminal from './components/Terminal'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import BoschAlignment from './components/BoschAlignment'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className="scan" aria-hidden="true" />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:bg-bosch focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <main id="main">
        <Hero />
        <Terminal />
        <Projects />
        <Certifications />
        <BoschAlignment />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center font-mono text-sm text-mute">© {new Date().getFullYear()} Felipe · Built with React, Vite & Tailwind</footer>
    </>
  )
}
