// TODO: replace every "#"/placeholder below with your real links and dates.
export const profile = {
  name: 'Felipe',
  cvUrl: '/cv.pdf', // put your PDF at public/cv.pdf
  github: 'https://github.com/your-user',
  linkedin: 'https://www.linkedin.com/in/your-user',
  email: 'you@example.com',
  pgp: `-----BEGIN PGP PUBLIC KEY BLOCK-----\n(paste your public key here)\n-----END PGP PUBLIC KEY BLOCK-----`,
  formspreeId: import.meta.env.VITE_FORMSPREE_ID as string | undefined,
}
export const skills = ['SIEM log triage', 'PowerShell', 'Active Directory hardening', 'Wireshark', 'Python', 'Node.js / Express', 'GLPI (ITSM)', 'ISO 27001 basics', 'MITRE ATT&CK']
export type Project = { id: string; title: string; summary: string; tags: string[]; flow: string[]; repo: string }
export const projects: Project[] = [
  { id: 'audit', title: 'Network & Printer Audit Automation', summary: 'Node.js/Express system that collects device telemetry and log metrics, and fires alerts when thresholds are crossed.', tags: ['Node.js', 'Python', 'ISO 27001'], flow: ['Devices', 'Collector API', 'Metrics store', 'Alert rules', 'Dashboard'], repo: 'https://github.com/your-user/network-audit' },
  { id: 'booking', title: 'Enterprise Equipment Booking Platform', summary: 'Firebase + Outlook API platform with Zero-Trust RBAC and automated access control.', tags: ['Firebase', 'Zero Trust', 'ISO 27001'], flow: ['User', 'Auth + RBAC', 'Booking API', 'Outlook Calendar', 'Audit log'], repo: 'https://github.com/your-user/equipment-booking' },
  { id: 'labs', title: 'Cybersecurity & SOC Labs', summary: 'SIEM log triage, PowerShell scripts for incident detection, Active Directory hardening and Wireshark traffic analysis.', tags: ['SIEM', 'PowerShell', 'Active Directory', 'MITRE ATT&CK'], flow: ['Log source', 'SIEM', 'Triage', 'ATT&CK mapping', 'Incident report'], repo: 'https://github.com/your-user/soc-labs' },
]
export const certs = [
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', issued: 'MM/YYYY', url: '#', status: 'Verified' },
  { name: 'Network Infrastructure & Security Fundamentals', issuer: 'Issuer', issued: 'MM/YYYY', url: '#', status: 'Verified' },
  { name: 'SOC Analyst track', issuer: 'Provider', issued: 'In progress', url: '#', status: 'Ongoing' },
  { name: 'Security Audit track', issuer: 'Provider', issued: 'In progress', url: '#', status: 'Ongoing' },
]
export const boschValues = [
  { k: 'IoT Security', v: 'Telemetry pipelines and alert rules for connected devices, from collection to triage.' },
  { k: 'Automotive Cyber Defense', v: 'Threat modeling mindset with MITRE ATT&CK, applied to connected-vehicle style attack paths.' },
  { k: 'Zero Trust', v: 'RBAC and least privilege built into the booking platform and Active Directory hardening labs.' },
  { k: 'Incident Response', v: 'Daily ticket handling for ~1,500 users in GLPI, plus SIEM triage and PowerShell detection labs.' },
]
export const focusAreas = [
  { t: 'Embedded Systems & IoT Security', d: 'Securing the device edge: firmware exposure, telemetry integrity and network segmentation.' },
  { t: 'Human Behavior & Social Engineering Defense', d: 'Behavioral analysis applied to phishing, awareness and user-centered support.' },
  { t: 'Operational Technology (OT) Security', d: 'Network visibility and monitoring habits carried over from infrastructure audits.' },
]
