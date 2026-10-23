import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { skills, certs, projects, boschValues } from '../data'

type Line = { cmd?: string; out?: string[] }
const HELP = ['Comandos disponíveis:', '  ajuda - lista de comandos', '  habilidades técnicas', '  certificações', '  projetos', '  para bosch', '  limpar terminal']

const normalizeCommand = (raw: string) => raw
  .trim()
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/\s+/g, ' ')

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([{ out: ['Terminal de Segurança pronto. Digite "ajuda" para começar.'] }])
  const [val, setVal] = useState('')
  const [modal, setModal] = useState(false)
  const end = useRef<HTMLDivElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => { end.current?.scrollIntoView({ block: 'nearest' }) }, [lines])
  useEffect(() => {
    if (!modal) return
    closeBtn.current?.focus()
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setModal(false)
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc)
  }, [modal])

  const run = (raw: string) => {
    const cmd = normalizeCommand(raw)
    let out: string[]

    switch (cmd) {
      case 'ajuda':
      case 'help':
        out = HELP
        break
      case 'habilidades':
      case 'habilidades tecnicas':
        out = skills.map(s => `  • ${s}`)
        break
      case 'certificacoes':
      case 'certificações':
        out = certs.map(c => `  • ${c.name} (${c.issuer}) — ${c.status}`)
        break
      case 'projetos':
        out = projects.map(p => `  • ${p.title}`)
        break
      case 'para bosch':
      case 'para: bosch':
        out = ['Abrindo relatório de alinhamento...']
        setModal(true)
        break
      case 'limpar':
      case 'limpar terminal':
      case 'clear':
        setLines([])
        return
      case '':
        return
      default:
        out = [`comando não encontrado: "${raw.trim() || 'vazio'}". Digite "ajuda".`]
    }

    setLines(l => [...l, { cmd: raw, out }])
  }

  return (
    <section id="terminal" aria-labelledby="t-h" className="mx-auto max-w-6xl px-6 py-20">
      <h2 id="t-h" className="mb-6 text-3xl font-bold">Interactive terminal</h2>
      <div className="border border-line bg-black/40 font-mono text-sm" onClick={() => document.getElementById('term-in')?.focus()}>
        <div className="flex items-center gap-2 border-b border-line bg-panel px-4 py-2 text-mute"><span className="h-2.5 w-2.5 rounded-full bg-bosch" aria-hidden />felipe@sec:~</div>
        <div role="log" aria-live="polite" className="h-72 overflow-y-auto p-4">
          {lines.map((l, i) => (
            <div key={i} className="mb-2">
              {l.cmd !== undefined && <div><span className="text-bosch">$</span> {l.cmd}</div>}
              {l.out?.map((o, j) => <div key={j} className="whitespace-pre-wrap text-slate-300">{o}</div>)}
            </div>
          ))}
          <div ref={end} />
        </div>
        <form onSubmit={e => { e.preventDefault(); run(val); setVal('') }} className="flex items-center gap-2 border-t border-line px-4 py-3">
          <label htmlFor="term-in" className="text-bosch">$</label>
          <input id="term-in" value={val} onChange={e => setVal(e.target.value)} autoComplete="off" spellCheck={false} placeholder="digite um comando" className="w-full bg-transparent outline-none placeholder:text-mute focus-visible:outline-none" />
        </form>
      </div>
      {modal && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4" onClick={() => setModal(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="b-h" onClick={e => e.stopPropagation()} className="relative w-full max-w-lg border-t-4 border-bosch bg-panel p-8">
            <button ref={closeBtn} onClick={() => setModal(false)} aria-label="Close" className="absolute right-3 top-3 p-2 text-mute hover:text-white"><X size={18} /></button>
            <h3 id="b-h" className="text-2xl font-bold">Invented for Life. Secure by Design.</h3>
            <dl className="mt-5 space-y-4">
              {boschValues.map(b => <div key={b.k}><dt className="font-mono text-sm font-bold text-bosch">{b.k}</dt><dd className="text-slate-300">{b.v}</dd></div>)}
            </dl>
          </div>
        </div>
      )}
    </section>
  )
}
