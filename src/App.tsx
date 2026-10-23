import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import Terminal from './components/Terminal'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import BoschAlignment from './components/BoschAlignment'
import Contact from './components/Contact'
import Gatekeeper, { Visitor } from './components/Gatekeeper'

const KEY = 'visitor'
const load = (): Visitor | null => { try { const s = sessionStorage.getItem(KEY); return s ? JSON.parse(s) : null } catch { return null } }

export default function App() {
  const [visitor, setVisitor] = useState<Visitor | null>(load)
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = root.current; if (!el) return
    if (visitor) el.removeAttribute('inert'); else el.setAttribute('inert', '')
    document.body.style.overflow = visitor ? '' : 'hidden'
  }, [visitor])
  const pass = (v: Visitor) => { try { sessionStorage.setItem(KEY, JSON.stringify(v)) } catch { /* storage bloqueado */ } setVisitor(v) }

  return (
    <>
      <div className="scan" aria-hidden="true" />
      {!visitor && <Gatekeeper onPass={pass} />}
      <div ref={root} aria-hidden={!visitor}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:bg-bosch focus:px-3 focus:py-2 focus:text-white">Ir para o conteúdo</a>
        <main id="main">
          <Hero />
          <Terminal />
          <Projects />
          <Certifications />
          <BoschAlignment />
          <Contact visitor={visitor} />
        </main>
        <footer className="border-t border-line py-8 text-center font-mono text-sm text-mute">© {new Date().getFullYear()} Felipe Bonfim Pontes · React, Vite & Tailwind · #besafe</footer>
      </div>
    </>
  )
}
