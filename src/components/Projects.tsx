import { useState } from 'react'
import { Github, ChevronRight } from 'lucide-react'
import { projects } from '../data'

export default function Projects() {
  const [tag, setTag] = useState<string | null>(null)
  const all = [...new Set(projects.flatMap(p => p.tags))]
  const shown = projects.filter(p => !tag || p.tags.includes(tag))
  return (
    <section id="projects" aria-labelledby="p-h" className="mx-auto max-w-6xl px-6 py-20">
      <h2 id="p-h" className="text-3xl font-bold">Featured security projects</h2>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
        {all.map(t => (
          <button key={t} aria-pressed={tag === t} onClick={() => setTag(tag === t ? null : t)} className={`border px-3 py-1 font-mono text-xs ${tag === t ? 'border-bosch bg-bosch text-white' : 'border-line text-slate-300 hover:border-bosch'}`}>{t}</button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {shown.map(p => (
          <article key={p.id} className="flex flex-col border border-line bg-panel p-6 transition-colors hover:border-bosch">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-3 flex-1 text-slate-300">{p.summary}</p>
            <ol aria-label="Architecture" className="mt-5 space-y-1 border-l-2 border-bosch pl-3 font-mono text-xs text-mute">
              {p.flow.map(f => <li key={f} className="flex items-center gap-1"><ChevronRight size={12} aria-hidden />{f}</li>)}
            </ol>
            <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map(t => <span key={t} className="bg-ink px-2 py-0.5 font-mono text-xs text-slate-300">{t}</span>)}</div>
            <a href={p.repo} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-white underline decoration-bosch underline-offset-4"><Github size={16} aria-hidden />GitHub<span className="sr-only"> — {p.title} (opens in new tab)</span></a>
          </article>
        ))}
      </div>
    </section>
  )
}
