import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ShieldCheck, Send } from 'lucide-react'
import { profile } from '../data'

const TITLE = 'IT Analyst & Junior Cybersecurity Analyst | Infrastructure, SIEM & Threat Hunting'
const CHECKS = ['Patch baseline verified', 'Active Directory policies compliant', 'SIEM ingestion healthy', 'No critical alerts open']

function useTypewriter(text: string) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(text.length)
    const id = setInterval(() => setN(v => (v < text.length ? v + 1 : v)), 35)
    return () => clearInterval(id)
  }, [text])
  return text.slice(0, n)
}

export default function Hero() {
  const typed = useTypewriter(TITLE)
  const [eps, setEps] = useState(1240)
  const [time, setTime] = useState(new Date())
  const [checks, setChecks] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    const id = setInterval(() => { setEps(v => Math.max(900, Math.min(1600, v + Math.round((Math.random() - 0.5) * 80)))); setTime(new Date()) }, 1000)
    return () => clearInterval(id)
  }, [])

  const runCheck = () => {
    if (running) return
    setRunning(true); setChecks(0)
    CHECKS.forEach((_, i) => setTimeout(() => { setChecks(i + 1); if (i === CHECKS.length - 1) setRunning(false) }, 600 * (i + 1)))
  }

  return (
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr]">
      <div>
        <div role="status" aria-label="System status" className="mb-8 inline-flex flex-wrap gap-x-5 gap-y-1 rounded border border-line bg-panel px-4 py-2 font-mono text-xs">
          <span>System Status: <b className="text-ok">SECURE</b></span>
          <span>Threat Level: <b className="text-ok">LOW</b></span>
          <span>SIEM Engine: <b className="text-ok">ACTIVE</b></span>
          <span className="text-mute">{eps} ev/s · {time.toLocaleTimeString('en-GB')}</span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Felipe</h1>
        <p className="mt-6 min-h-[4.5rem] max-w-xl font-mono text-base text-slate-300 md:text-lg" aria-label={TITLE}>
          <span aria-hidden="true"><span className="text-bosch">$ </span>{typed}<span className="animate-pulse text-bosch">▌</span></span>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.cvUrl} download className="inline-flex items-center gap-2 bg-bosch px-5 py-3 font-mono text-sm font-bold text-white hover:bg-red-700"><Download size={16} aria-hidden />Download CV (PDF)</a>
          <button onClick={runCheck} className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm hover:border-bosch"><ShieldCheck size={16} aria-hidden />Run Security Check</button>
          <a href="#contact" className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm hover:border-bosch"><Send size={16} aria-hidden />Deploy Contact</a>
        </div>
        <ul aria-live="polite" className="mt-6 space-y-1 font-mono text-sm">
          {CHECKS.slice(0, checks).map(c => <li key={c} className="text-ok">[PASS] {c}</li>)}
          {checks === CHECKS.length && <li className="text-slate-300">Result: 4/4 checks passed. Hire-ready.</li>}
        </ul>
      </div>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
        <div className="absolute -bottom-3 -left-3 right-6 top-10 border border-bosch" aria-hidden />
        <img src="/felipe.png" alt="Portrait of Felipe in a navy blazer, arms crossed" width={1024} height={733} className="relative w-full object-contain" fetchPriority="high" />
      </motion.div>
    </section>
  )
}
