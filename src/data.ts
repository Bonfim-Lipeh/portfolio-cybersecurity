// TODO: troque os links/placeholders pelos seus.
export const profile = {
  name: 'Felipe Bonfim Pontes',
  course: 'Análise e Desenvolvimento de Sistemas',
  school: 'Facens',
  cvUrl: '/cv.pdf', // coloque seu PDF em public/cv.pdf
  github: 'https://github.com/your-user',
  linkedin: 'https://www.linkedin.com/in/your-user',
  email: 'felipebonfimpontes@gmail.com',
  pgp: `-----BEGIN PGP PUBLIC KEY BLOCK-----\n(cole sua chave pública aqui)\n-----END PGP PUBLIC KEY BLOCK-----`,
  formspreeId: import.meta.env.VITE_FORMSPREE_ID as string | undefined,
}
export const skills = ['Web Pentest (OWASP Top 10)', 'Burp Suite / OWASP ZAP / SQLmap', 'Nmap / Gobuster / Netcat', 'Triagem de logs em SIEM', 'PowerShell', 'Active Directory', 'DevSecOps (SAST/SCA, CI/CD)', 'GLPI (ITSM)', 'ISO 27001', 'MITRE ATT&CK']
export type Project = { id: string; title: string; kind: string; summary: string; tools: string[]; skills: string[]; flow: string[]; repo: string }
export const projects: Project[] = [
  { id: 'dvwa', title: 'Laboratório de Pentest DVWA', kind: 'Pentest Web', summary: 'Simulação do ciclo de vida completo de um teste de invasão web em ambiente controlado, do reconhecimento e interceptação de tráfego à exploração prática de vulnerabilidades críticas do OWASP Top 10 e elaboração de mitigações.', tools: ['Linux (DVWA)', 'Burp Suite', 'OWASP ZAP', 'SQLmap', 'DevTools'], skills: ['Web Penetration Testing', 'OWASP Top 10 (SQLi, XSS, Command Injection, LFI/RFI)', 'Força Bruta', 'Remediação de Código Seguro', 'Documentação Técnica'], flow: ['Reconhecimento', 'Interceptação de tráfego', 'Exploração', 'Mitigação', 'Relatório'], repo: 'https://github.com/your-user/dvwa-pentest-lab' },
  { id: 'photographer', title: 'Fotógrafo - Guia do VulnHub', kind: 'Pentest de máquina', summary: 'Penetration test completo em ambiente controlado contra a máquina virtual Photographer (VulnHub), cobrindo reconhecimento, enumeração de serviços e escalonamento de privilégios para obtenção de acesso administrativo total.', tools: ['VulnHub (VirtualBox/VMware)', 'Nmap', 'Gobuster', 'Netcat', 'Markdown/PDF'], skills: ['Hacking Ético', 'Enumeração de Portas e Diretórios', 'Análise de Vulnerabilidades', 'Escalonamento de Privilégios em Linux', 'Hardening', 'Relatórios Executivos'], flow: ['Reconhecimento', 'Enumeração', 'Acesso inicial', 'Escalonamento', 'Relatório executivo'], repo: 'https://github.com/your-user/vulnhub-photographer' },
  { id: 'prodesk', title: 'ProDesk (Mobile, DevOps e DevSecOps)', kind: 'Projeto mobile', summary: 'Aplicação mobile de reservas e aluguel de espaços corporativos sob demanda, estruturada para consolidar práticas modernas de DevOps e segurança desde a concepção (Shift-Left Security).', tools: ['Android Native (Kotlin/Java)', 'Gradle', 'Git/GitHub', 'CI/CD', 'SAST/SCA', 'AndroidManifest hardening'], skills: ['Arquitetura Mobile', 'Cultura DevSecOps', 'Automação de Builds', 'Gestão de Vulnerabilidades em Software', 'SDLC seguro'], flow: ['Commit', 'Build Gradle', 'SAST/SCA', 'Testes', 'Release'], repo: 'https://github.com/your-user/prodesk' },
]
export const certs = [
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', issued: 'MM/AAAA', url: '#', status: 'Verified' },
  { name: 'Network Infrastructure & Security Fundamentals', issuer: 'Emissor', issued: 'MM/AAAA', url: '#', status: 'Verified' },
  { name: 'Trilha SOC Analyst', issuer: 'Plataforma', issued: 'Em andamento', url: '#', status: 'Ongoing' },
  { name: 'Trilha de Auditoria de Segurança', issuer: 'Plataforma', issued: 'Em andamento', url: '#', status: 'Ongoing' },
]
export const boschValues = [
  { k: 'IoT Security', v: 'Enumeração de serviços e superfície de ataque (Nmap, Gobuster) aplicada a dispositivos e redes conectadas.' },
  { k: 'Automotive Cyber Defense', v: 'Mentalidade de modelagem de ameaças com MITRE ATT&CK e escalonamento de privilégios em laboratório.' },
  { k: 'Zero Trust', v: 'Menor privilégio, baselines de Active Directory e hardening de AndroidManifest no ProDesk.' },
  { k: 'Incident Response', v: 'Atendimento diário de ~1.500 usuários no GLPI, triagem de logs em SIEM e relatórios executivos.' },
]
export const focusAreas = [
  { t: 'Embedded Systems & IoT Security', d: 'Proteção da borda: exposição de serviços, integridade de telemetria e segmentação de rede.' },
  { t: 'Engenharia Social e fator humano', d: 'Análise comportamental aplicada a phishing, conscientização e suporte centrado no usuário.' },
  { t: 'Operational Technology (OT) Security', d: 'Visibilidade e monitoramento de rede herdados da rotina de infraestrutura.' },
]
