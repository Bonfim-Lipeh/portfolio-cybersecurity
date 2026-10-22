import { BadgeCheck, Loader } from 'lucide-react'
import { certs } from '../data'

export default function Certifications() {
  return (
    <section id="certs" aria-labelledby="c-h" className="mx-auto max-w-6xl px-6 py-20">
      <h2 id="c-h" className="text-3xl font-bold">Certifications & compliance</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {certs.map(c => (
          <li key={c.name} className="group border border-line bg-panel p-5 focus-within:border-bosch hover:border-bosch">
            <div className="flex items-start gap-3">
              {c.status === 'Verified' ? <BadgeCheck className="mt-1 shrink-0 text-ok" aria-hidden /> : <Loader className="mt-1 shrink-0 text-mute" aria-hidden />}
              <div>
                <h3 className="font-bold">{c.name}</h3>
                <p className="font-mono text-xs text-mute">{c.issuer} · {c.status}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-xs text-slate-300 sm:opacity-0 sm:transition-opacity sm:group-focus-within:opacity-100 sm:group-hover:opacity-100">
              <span>Issued: {c.issued}</span>
              <a href={c.url} target="_blank" rel="noreferrer" className="underline decoration-bosch underline-offset-4">Verify<span className="sr-only"> {c.name}</span></a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
