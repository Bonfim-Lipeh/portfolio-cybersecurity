// TODO: replace every "#"/placeholder below with your real links and dates.
export const profile = {
  name: 'Felipe Bonfim Pontes',
  cvUrl: '/public/Felipe_Bonfim_Pontes_Curriculo_Cyberseguranca (1).pdf', // put your PDF at public/cv.pdf
  github: 'https://github.com/Bonfim-Lipeh',
  linkedin: 'https://www.linkedin.com/in/felipe-bonfim-pontes-b8807a178/',
  email: 'felipebonfimpontes@gmail.com',
  pgp: `-----BEGIN PGP PUBLIC KEY BLOCK-----\n(paste your public key here)\n-----END PGP PUBLIC KEY BLOCK-----`,
  formspreeId: import.meta.env.VITE_FORMSPREE_ID as string | undefined,
}
export const skills = ['SIEM log triage', 'PowerShell', 'Active Directory hardening', 'Wireshark', 'Python', 'Node.js / Express', 'GLPI (ITSM)', 'ISO 27001 basics', 'MITRE ATT&CK']

export type Certification = {
  name: string
  issuer: string
  status: 'Verified' | 'In progress'
  issued: string
  url: string
}

export const certs: Certification[] = [
  { name: 'Junior Cybersecurity Analyst', issuer: 'Portfolio', status: 'Verified', issued: '2026', url: 'dist/Introduction_to_Cybersecurity_certificate_2370.pdf' },
  { name: 'Ethical Hacker', issuer: 'Portfolio', status: 'In progress', issued: '2026', url: '#' },
  { name: 'ISO 27001 & Governance', issuer: 'Portfolio', status: 'In progress', issued: '2026', url: '#' },
  { name: 'Network Security Basics', issuer: 'Portfolio', status: 'Verified', issued: '2026', url: 'dist/Network_Security_Basics_certificate_2371.pdf' },
]

export type BoschValue = { k: string; v: string }

export const boschValues: BoschValue[] = [
  { k: 'Segurança por design', v: 'Priorizo controles e processos que reduzem riscos antes que eles se tornem incidentes.' },
  { k: 'Resiliência operacional', v: 'Busco soluções que mantenham disponibilidade, observabilidade e resposta em cenários reais.' },
  { k: 'Foco em pessoas', v: 'Trabalho com cultura, educação e governança para fortalecer a operação e a confiança.' },
  { k: 'Inovação com critério', v: 'A tecnologia precisa resolver problemas concretos de segurança, eficiência e continuidade.' },
]

export type FocusArea = { t: string; d: string }

export const focusAreas: FocusArea[] = [
  { t: 'SOC e triagem', d: 'Investigação de eventos, correlação de alertas e resposta coordenada de incidentes.' },
  { t: 'Red Team e pentest', d: 'Avaliação prática de infraestrutura, aplicações e fluxos de acesso com foco em risco.' },
  { t: 'Hardening e mitigação', d: 'Fortalecimento de controles, remoção de riscos e suporte à maturidade da segurança.' },
  { t: 'Automação e scripts', d: 'Uso de PowerShell, Python e automações para reduzir esforço manual e aumentar consistência.' },
]

export type Project = { id: string; title: string; summary: string; tags: string[]; flow: string[]; repo: string }

export const projects: Project[] = [
  {
    id: 'dvwa',
    title: 'DVWA — Web Penetration Testing Lab',
    summary: 'Laboratório de pentest web em ambiente controlado utilizando DVWA. Documentação prática de reconhecimento, interceptação de tráfego, exploração de vulnerabilidades OWASP Top 10 e recomendações de mitigação, incluindo SQL Injection, XSS, Command Injection, File Inclusion e força bruta.',
    tags: ['Web Pentest', 'OWASP Top 10', 'Burp Suite', 'OWASP ZAP', 'SQLmap', 'Linux'],
    flow: ['Reconnaissance', 'Traffic Analysis', 'Vulnerability Testing', 'Exploitation', 'Remediation Report'],
    repo: 'https://github.com/Bonfim-Lipeh/dvwa-pentest-lab'
  },
  {
    id: 'photographer',
    title: 'Photographer — VulnHub Pentest Lab',
    summary: 'Teste de invasão documentado em laboratório virtual da plataforma VulnHub. Exploração metódica da superfície de ataque, enumeração de serviços, descoberta de diretórios, investigação de vulnerabilidades e escalonamento de privilégios, com registro de evidências e relatório técnico.',
    tags: ['Ethical Hacking', 'Nmap', 'Gobuster', 'Netcat', 'Linux', 'Privilege Escalation'],
    flow: ['Reconnaissance', 'Port Scanning', 'Service Enumeration', 'Exploitation', 'Privilege Escalation'],
    repo: 'https://github.com/Bonfim-Lipeh/photographer-lab'
  },
  {
    id: 'prodesk',
    title: 'ProDesk — Mobile App & DevSecOps',
    summary: 'Aplicação mobile voltada à conexão entre profissionais, empresas e espaços de coworking. Projeto de desenvolvimento Android que busca integrar boas práticas de engenharia de software, automação de builds, integração contínua, testes e análise de segurança desde as primeiras etapas do ciclo de desenvolvimento.',
    tags: ['Android', 'Kotlin / Java', 'Gradle', 'GitHub', 'CI/CD', 'DevSecOps'],
    flow: ['Mobile Development', 'Version Control', 'Automated Builds', 'Security Analysis', 'Continuous Integration'],
    repo: 'https://github.com/Bonfim-Lipeh/AppProDesk_'
  },
]
