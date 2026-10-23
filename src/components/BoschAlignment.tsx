import { boschValues, focusAreas } from '../data'

export default function BoschAlignment() {
  return (
    <section id="bosch" aria-labelledby="bo-h" className="border-y border-line bg-panel py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="bo-h" className="text-3xl font-bold md:text-5xl">Por que a BOSCH? <span className="text-bosch">Invented for Life. Secure by Design.</span></h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-mono text-sm text-mute">Onde meu trabalho encontra os valores da BOSCH</h3>
            <dl className="space-y-5">{boschValues.map(b => <div key={b.k} className="border-l-2 border-bosch pl-4"><dt className="font-bold">{b.k}</dt><dd className="text-slate-300">{b.v}</dd></div>)}</dl>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-sm text-mute">Áreas de foco</h3>
            <ul className="space-y-4">{focusAreas.map(f => <li key={f.t} className="border border-line bg-ink p-4"><p className="font-bold">{f.t}</p><p className="text-slate-300">{f.d}</p></li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}
