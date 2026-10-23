import { FormEvent, useEffect, useRef, useState } from 'react'
import { ShieldCheck, ShieldAlert } from 'lucide-react'
import { cleanText, looksMalicious, validateEmail, validateName } from '../security'

export type Visitor = { name: string; email: string }
const STEPS: [string, string][] = [
  ['NIST SP 800-53', 'Controles de acesso AC-2/AC-3 e menor privilégio'],
  ['OWASP Top 10', 'A03 Injection: validação e sanitização de entrada'],
  ['ISO/IEC 27001', 'Controles do Anexo A aplicados à sessão'],
  ['Active Directory Baselines', 'GPOs e contas privilegiadas conforme baseline'],
  ['SIEM Log Ingestion', 'Fontes de log recebidas e normalizadas'],
  ['Endpoint Protection', 'Proteção de endpoint ativa e assinaturas atualizadas'],
  ['TLS Hardening', 'TLS 1.2+ exigido e cifras fracas desabilitadas'],
]

export default function Gatekeeper({ onPass }: { onPass: (v: Visitor) => void }) {
  const [phase, setPhase] = useState<'form' | 'scan' | 'done'>('form')
  const [step, setStep] = useState(0)
  const [err, setErr] = useState('')
  const [v, setV] = useState<Visitor>({ name: '', email: '' })
  const nameRef = useRef<HTMLInputElement>(null)
  const goRef = useRef<HTMLButtonElement>(null)
  useEffect(() => nameRef.current?.focus(), [])
  useEffect(() => { if (phase === 'done') goRef.current?.focus() }, [phase])

  useEffect(() => {
    if (phase !== 'scan') return
    const id = setInterval(() => setStep(s => {
      if (s + 1 >= STEPS.length) { clearInterval(id); setPhase('done') }
      return s + 1
    }), 800)
    return () => clearInterval(id)
  }, [phase])

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const raw = new FormData(e.currentTarget as HTMLFormElement)
    const name = String(raw.get('name') ?? ''), email = String(raw.get('email') ?? '')
    if (looksMalicious(name) || looksMalicious(email)) return setErr('Entrada bloqueada: padrão de payload (SQLi/XSS) detectado.')
    const clean = { name: cleanText(name, 60), email: cleanText(email, 254).toLowerCase() }
    if (!validateName(clean.name)) return setErr('Nome inválido. Use apenas letras, espaços, apóstrofo, ponto ou hífen (2 a 60 caracteres).')
    if (!validateEmail(clean.email)) return setErr('E-mail inválido. Exemplo: nome@empresa.com')
    setErr(''); setV(clean); setStep(0); setPhase('scan')
  }

  const f = 'w-full border border-line bg-ink px-3 py-2 font-mono text-sm placeholder:text-mute'
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-ink/95 p-4">
      <div role="dialog" aria-modal="true" aria-labelledby="g-h" className="w-full max-w-xl border-t-4 border-bosch bg-panel p-6 md:p-8">
        <h2 id="g-h" className="flex items-center gap-2 text-2xl font-bold"><ShieldCheck className="text-bosch" aria-hidden />Verificação de acesso</h2>
        <p className="mt-2 text-sm text-slate-300">Simulação de auditoria. Seus dados ficam apenas neste navegador.</p>
        {phase === 'form' && (
          <form onSubmit={submit} noValidate className="mt-6 space-y-4">
            <div><label htmlFor="g-name" className="mb-1 block text-sm">Nome</label><input ref={nameRef} id="g-name" name="name" required maxLength={60} autoComplete="name" className={f} aria-describedby="g-err" /></div>
            <div><label htmlFor="g-email" className="mb-1 block text-sm">E-mail</label><input id="g-email" name="email" type="email" required maxLength={254} autoComplete="email" className={f} aria-describedby="g-err" /></div>
            <p id="g-err" role="alert" className="flex min-h-5 items-center gap-2 font-mono text-sm text-threat">{err && <><ShieldAlert size={16} aria-hidden />{err}</>}</p>
            <button className="bg-bosch px-6 py-3 font-mono text-sm font-bold text-white hover:bg-red-700">Iniciar verificação</button>
          </form>
        )}
        {phase !== 'form' && (
          <div className="mt-6">
            <div role="progressbar" aria-valuemin={0} aria-valuemax={STEPS.length} aria-valuenow={Math.min(step, STEPS.length)} aria-label="Progresso da verificação" className="h-1 bg-ink"><div className="h-1 bg-bosch transition-all" style={{ width: `${(Math.min(step, STEPS.length) / STEPS.length) * 100}%` }} /></div>
            <ol aria-live="polite" className="mt-4 space-y-2 font-mono text-sm">
              {STEPS.map(([k, d], i) => (
                <li key={k} className={i < step ? 'text-slate-200' : i === step ? 'text-mute' : 'text-line'}>
                  <span className={i < step ? 'text-ok' : ''}>[{i < step ? ' OK ' : i === step ? ' .. ' : '    '}]</span> {k}: {d}
                </li>
              ))}
            </ol>
            {phase === 'done' && (
              <div className="mt-6 border border-ok/40 p-4">
                <p className="font-mono font-bold text-ok">Verificação concluída · 7/7 etapas aprovadas · #besafe</p>
                <p className="mt-1 text-sm text-slate-300">Bem-vindo, {v.name}.</p>
                <button ref={goRef} onClick={() => onPass(v)} className="mt-4 bg-bosch px-6 py-3 font-mono text-sm font-bold text-white hover:bg-red-700">Acessar portfólio</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
