/**
 * Edit this file to personalize your portfolio — no backend required.
 * Replace links with your real GitHub, LinkedIn, email, and project URLs.
 */
export const profile = {
  name: 'Shaidur Rahman',
  title: 'Software Engineer',
  tagline:
    'I design and build reliable web applications, APIs, and developer tooling — focused on clarity, performance, and maintainable code.',
  email: 'hello@example.com',
  location: 'Available worldwide · Remote-friendly',
  /** Public path: place srr.jpg in the /public folder */
  photoSrc: '/srr.jpg',
  photoAlt: 'Portrait of Shaidur Rahman, software engineer',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
}

export const aboutParagraphs = [
  'I am a software engineer who enjoys turning complex problems into simple, well-tested solutions. My work spans full-stack features, system design, and collaboration across product and design teams.',
  'Outside of shipping code, I care about documentation, code review culture, and mentoring — so the next feature is easier than the last.',
]

/** Grouped skills for the Expertise section */
export const expertise = [
  {
    category: 'Languages & runtime',
    items: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS'],
  },
  {
    category: 'Backend & data',
    items: ['Django', 'PostgreSQL', 'MySQL', 'Celery', 'Redis'],
  },
  {
    category: 'Platform & delivery',
    items: ['Git', 'cPanel', 'Docker'],
  },
]

export const experience = [
  {
    role: 'Backend Developer',
    company: 'Tech Company',
    period: '2025 — Present',
    summary:
      'Lead feature delivery for a high-traffic product; improve reliability and developer experience.',
    highlights: [
      'Owned end-to-end delivery of major releases with measurable impact on latency and error rates.',
      'Introduced testing and observability practices that shortened incident response time.',
      'Mentored engineers through design docs, pairing, and structured code review.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup / Product team',
    period: '2020 — 2023',
    summary:
      'Built customer-facing features and internal tools in a fast-moving environment.',
    highlights: [
      'Shipped responsive web experiences and API integrations with third-party services.',
      'Collaborated with designers on accessible UI patterns and design systems.',
      'Participated in on-call rotation and post-incident reviews.',
    ],
  },
]

export const projects = [
  {
    title: 'Developer dashboard',
    description:
      'A metrics and configuration dashboard for engineering teams — real-time charts, role-based access, and audit logs.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    links: { repo: 'https://github.com', live: 'https://example.com' },
  },
  {
    title: 'API service template',
    description:
      'Opinionated starter for REST services with validation, auth hooks, structured logging, and Docker-based local dev.',
    tech: ['Go', 'Docker', 'OpenAPI'],
    links: { repo: 'https://github.com', live: null },
  },
  {
    title: 'Open source CLI tool',
    description:
      'A small CLI that automates repetitive workflows for contributors — used internally and published for the community.',
    tech: ['Node.js', 'TypeScript'],
    links: { repo: 'https://github.com', live: null },
  },
]
