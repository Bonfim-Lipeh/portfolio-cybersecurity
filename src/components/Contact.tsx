import { FormEvent, useState } from 'react'
import { Copy, Check, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data'
import { cleanText, validateEmail, validateName } from '../security'
import type { Visitor } from './Gatekeeper'

export default function Contact({ visitor }: { visitor: Visitor | null }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'mailto' | 'error'>('idle')
  const [msg, setMsg] = useState('')
  const [copied, setCopied] = useState(false)

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget, fd = new FormData(form)
    const name = cleanText(String(fd.get('name') ?? ''), 60), email = cleanText(String(fd.get('email') ?? ''), 254), message = cleanText(String(fd.get('message') ?? ''), 2000)
    if (!validateName(name)) { setMsg('Nome inválido.'); return setStatus('error') }
    if (!validateEmail(email)) { setMsg('E-mail inválido.'); return setStatus('error') }
    if (message.length < 5) { setMsg('Escreva uma mensagem com pelo menos 5 caracteres.'); return setStatus('error') }
    if (!profile.formspreeId) {
      const body = `${message}\n\n— ${name} (${email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Contato via portfólio: ' + name)}&body=${encodeURIComponent(body)}`
      return setStatus('mailto')
    }
    setStatus('sending')
    try {
      const r = await fetch(`https://formspree.io/f/${profile.formspreeId}`, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message }) })
      if (r.ok) { setStatus('ok'); form.reset() } else { setMsg('Falha no envio. Tente o e-mail direto.'); setStatus('error') }
    } catch { setMsg('Sem conexão. Tente o e-mail direto.'); setStatus('error') }
  }
  const copy = async () => { try { await navigator.clipboard.writeText(profile.pgp); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* clipboard bloqueado */ } }
  const f = 'w-full border border-line bg-ink px-3 py-2 font-mono text-sm placeholder:text-mute'

  return (
    <section id="contact" aria-labelledby="ct-h" className="mx-auto max-w-4xl px-6 py-20">
      <h2 id="ct-h" className="text-3xl font-bold">Implantar contato</h2>
      <p className="mt-2 text-slate-300">Prefere e-mail direto? <a href={`mailto:${profile.email}`} className="underline decoration-bosch underline-offset-4">{profile.email}</a></p>
      <form onSubmit={submit} noValidate className="mt-8 space-y-4">
        <div><label htmlFor="name" className="mb-1 block text-sm">Nome</label><input id="name" name="name" required maxLength={60} defaultValue={visitor?.name} autoComplete="name" className={f} /></div>
        <div><label htmlFor="email" className="mb-1 block text-sm">E-mail</label><input id="email" name="email" type="email" required maxLength={254} defaultValue={visitor?.email} autoComplete="email" className={f} /></div>
        <div><label htmlFor="msg" className="mb-1 block text-sm">Mensagem</label><textarea id="msg" name="message" rows={5} required maxLength={2000} className={f} /></div>
        <button disabled={status === 'sending'} className="bg-bosch px-6 py-3 font-mono text-sm font-bold text-white hover:bg-red-700 disabled:opacity-60">{status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}</button>
        <p role="status" className="font-mono text-sm">
          {status === 'ok' && <span className="text-ok">Mensagem enviada. Respondo em breve.</span>}
          {status === 'mailto' && <span className="text-ok">Abrindo seu aplicativo de e-mail com a mensagem pronta.</span>}
          {status === 'error' && <span className="text-threat">{msg}</span>}
        </p>
      </form>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button onClick={copy} className="inline-flex items-center gap-2 border border-line px-4 py-2 font-mono text-sm hover:border-bosch">{copied ? <Check size={16} className="text-ok" aria-hidden /> : <Copy size={16} aria-hidden />}{copied ? 'Copiada' : 'Copiar chave PGP pública'}</button>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 hover:text-bosch"><Linkedin /></a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 hover:text-bosch"><Github /></a>
        <a href={`mailto:${profile.email}`} aria-label="E-mail" className="p-2 hover:text-bosch"><Mail /></a>
      </div>
    </section>
  )
}
