import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ShieldCheck, Send, GraduationCap } from 'lucide-react'
import { profile } from '../data'

const TITLE = 'Analista de TI & Analista Jr. de Cibersegurança | Infraestrutura, SIEM & Threat Hunting'
const CHECKS = ['Baseline de patches verificado', 'Políticas de Active Directory em conformidade', 'Ingestão do SIEM saudável', 'Nenhum alerta crítico aberto']
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function useTypewriter(text: string) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (reduced()) return setN(text.length)
    const id = setInterval(() => setN(v => (v < text.length ? v + 1 : v)), 35)
    return () => clearInterval(id)
  }, [text])
  return text.slice(0, n)
}

export const goContact = () => {
  const s = document.getElementById('contact'); if (!s) return
  s.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' })
  setTimeout(() => document.getElementById('name')?.focus({ preventScroll: true }), reduced() ? 0 : 600)
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
        <div role="status" aria-label="Status do sistema" className="mb-8 inline-flex flex-wrap gap-x-5 gap-y-1 rounded border border-line bg-panel px-4 py-2 font-mono text-xs">
          <span>Sistema: <b className="text-ok">SEGURO</b></span>
          <span>Ameaça: <b className="text-ok">BAIXA</b></span>
          <span>SIEM: <b className="text-ok">ATIVO</b></span>
          <span className="text-mute">{eps} ev/s · {time.toLocaleTimeString('pt-BR')}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-4 inline-flex items-center gap-2 border-l-2 border-bosch pl-3 text-base text-slate-300 md:text-lg"><GraduationCap size={20} className="shrink-0 text-bosch" aria-hidden />{profile.course} · {profile.school}</p>
        <p className="mt-6 min-h-[4.5rem] max-w-xl font-mono text-base text-slate-300 md:text-lg" aria-label={TITLE}>
          <span aria-hidden="true"><span className="text-bosch">$ </span>{typed}<span className="animate-pulse text-bosch">▌</span></span>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.cvUrl} download className="inline-flex items-center gap-2 bg-bosch px-5 py-3 font-mono text-sm font-bold text-white hover:bg-red-700"><Download size={16} aria-hidden />Baixar CV (PDF)</a>
          <button onClick={runCheck} className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm hover:border-bosch"><ShieldCheck size={16} aria-hidden />Rodar verificação</button>
          <button onClick={goContact} className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm hover:border-bosch"><Send size={16} aria-hidden />Implantar contato</button>
        </div>
        <ul aria-live="polite" className="mt-6 space-y-1 font-mono text-sm">
          {CHECKS.slice(0, checks).map(c => <li key={c} className="text-ok">[OK] {c}</li>)}
          {checks === CHECKS.length && <li className="text-slate-300">Resultado: 4/4 verificações aprovadas.</li>}
        </ul>
      </div>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
        <div className="absolute -bottom-3 -left-3 right-6 top-10 border border-bosch" aria-hidden />
        <img src="/felipe.png" alt="Retrato de Felipe Bonfim Pontes, de blazer azul-marinho e braços cruzados" width={1024} height={733} className="relative w-full object-contain" fetchPriority="high" />
      </motion.div>
    </section>
  )
}
