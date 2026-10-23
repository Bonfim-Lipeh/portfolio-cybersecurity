// Front-end input hygiene. This is UX-level defense only: real validation MUST be repeated server-side.
export const cleanText = (s: string, max = 500) =>
  s.normalize('NFKC').replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/[<>`]/g, '').replace(/[ \t]+/g, ' ').trim().slice(0, max)

const PAYLOAD = /(\bunion\b[\s\S]{0,20}\bselect\b|\bselect\b[\s\S]{0,40}\bfrom\b|\bdrop\s+table\b|\binsert\s+into\b|\bor\b\s+['"]?\d+['"]?\s*=\s*['"]?\d+|--|\/\*|;\s*(drop|delete|update)\b|<\s*script|javascript:|\bon\w+\s*=|\$\{|\{\{|\.\.\/|%3c|%27)/i
export const looksMalicious = (s: string) => PAYLOAD.test(s)

export const validateName = (s: string) => /^[\p{L}][\p{L} '.\-]{1,59}$/u.test(s)
export const validateEmail = (s: string) => s.length <= 254 && /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/.test(s)
