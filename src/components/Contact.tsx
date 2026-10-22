import { FormEvent, useState } from 'react'
import { Copy, Check, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!profile.formspreeId) return setStatus('error')
    setStatus('sending')
    try {
      const r = await fetch(`https://formspree.io/f/${profile.formspreeId}`, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(e.currentTarget) })
      if (r.ok) { setStatus('ok'); e.currentTarget.reset() } else setStatus('error')
    } catch { setStatus('error') }
  }
  const copy = async () => { try { await navigator.clipboard.writeText(profile.pgp); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* clipboard blocked */ } }
  const f = 'w-full border border-line bg-ink px-3 py-2 font-mono text-sm placeholder:text-mute'

  return (
    <section id="contact" aria-labelledby="ct-h" className="mx-auto max-w-4xl px-6 py-20">
      <h2 id="ct-h" className="text-3xl font-bold">Deploy contact</h2>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <div><label htmlFor="name" className="mb-1 block text-sm">Name</label><input id="name" name="name" required className={f} /></div>
        <div><label htmlFor="email" className="mb-1 block text-sm">Email</label><input id="email" name="email" type="email" required className={f} /></div>
        <div><label htmlFor="msg" className="mb-1 block text-sm">Message</label><textarea id="msg" name="message" rows={5} required className={f} /></div>
        <button disabled={status === 'sending'} className="bg-bosch px-6 py-3 font-mono text-sm font-bold text-white hover:bg-red-700 disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
        <p role="status" className="font-mono text-sm">
          {status === 'ok' && <span className="text-ok">Message sent. I will reply soon.</span>}
          {status === 'error' && <span className="text-threat">Could not send. Set VITE_FORMSPREE_ID or email me directly.</span>}
        </p>
      </form>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button onClick={copy} className="inline-flex items-center gap-2 border border-line px-4 py-2 font-mono text-sm hover:border-bosch">{copied ? <Check size={16} className="text-ok" aria-hidden /> : <Copy size={16} aria-hidden />}{copied ? 'Copied' : 'Copy Public PGP Key'}</button>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 hover:text-bosch"><Linkedin /></a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 hover:text-bosch"><Github /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 hover:text-bosch"><Mail /></a>
      </div>
    </section>
  )
}
