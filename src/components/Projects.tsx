import { useState } from 'react'
import { Github, ChevronRight } from 'lucide-react'
import { projects } from '../data'

export default function Projects() {
  const [kind, setKind] = useState<string | null>(null)
  const kinds = projects.map(p => p.kind)
  const shown = projects.filter(p => !kind || p.kind === kind)
  return (
    <section id="projects" aria-labelledby="p-h" className="mx-auto max-w-6xl px-6 py-20">
      <h2 id="p-h" className="text-3xl font-bold">Projetos em destaque: laboratórios de cibersegurança e SOC</h2>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo">
        {kinds.map(k => (
          <button key={k} aria-pressed={kind === k} onClick={() => setKind(kind === k ? null : k)} className={`border px-3 py-1 font-mono text-xs ${kind === k ? 'border-bosch bg-bosch text-white' : 'border-line text-slate-300 hover:border-bosch'}`}>{k}</button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {shown.map(p => (
          <article key={p.id} className="flex flex-col border border-line bg-panel p-6 transition-colors hover:border-bosch">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-3 text-slate-300">{p.summary}</p>
            <ol aria-label="Etapas do projeto" className="mt-5 space-y-1 border-l-2 border-bosch pl-3 font-mono text-xs text-mute">
              {p.flow.map(f => <li key={f} className="flex items-center gap-1"><ChevronRight size={12} aria-hidden />{f}</li>)}
            </ol>
            <h4 className="mt-5 font-mono text-xs text-mute">Ferramentas</h4>
            <ul className="mt-2 flex flex-wrap gap-1.5">{p.tools.map(t => <li key={t} className="bg-ink px-2 py-0.5 font-mono text-xs text-slate-300">{t}</li>)}</ul>
            <h4 className="mt-4 font-mono text-xs text-mute">Competências</h4>
            <ul className="mt-2 flex-1 list-disc space-y-0.5 pl-5 text-sm text-slate-300">{p.skills.map(s => <li key={s}>{s}</li>)}</ul>
            <a href={p.repo} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-white underline decoration-bosch underline-offset-4"><Github size={16} aria-hidden />GitHub<span className="sr-only"> de {p.title} (abre em nova aba)</span></a>
          </article>
        ))}
      </div>
    </section>
  )
}
