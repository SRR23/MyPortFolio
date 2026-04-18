/**
 * Edit this file to personalize your portfolio — no backend required.
 * Replace links with your real GitHub, LinkedIn, WhatsApp, email, and project URLs.
 */
export const profile = {
  name: 'Shaidur Rahman',
  title: 'Software Engineer',
  tagline:
    'I design and build reliable web applications, APIs, and developer tooling — focused on clarity, performance, and maintainable code.',
  email: 'srrimon267@gmail.com',
  location: 'Available worldwide · Remote-friendly',
  /** Public path: place srr.jpg in the /public folder */
  photoSrc: '/srr.jpg',
  photoAlt: 'Portrait of Shaidur Rahman, software engineer',
  social: {
    github: 'https://github.com/SRR23',
    linkedin: 'https://www.linkedin.com/in/shaidur-rahman-09475b2b3',
    /** WhatsApp chat link (wa.link short URL). */
    whatsapp: 'https://wa.link/19gx1s',
  },
  /**
   * Resume file in the /public folder. Set publicPath to match your filename
   * (e.g. /resume.pdf, /CV.pdf). downloadFileName is the name suggested when saving.
   */
  resume: {
    publicPath: '/resume.pdf',
    downloadFileName: 'Shaidur_Rahman_Resume.pdf',
  },
}

/** Academic qualifications */
export const education = [
  {
    degree: 'B.Sc.(Engg.) in Information and Communication Technology',
    institution: 'Islamic University',
    location: 'Kushtia, Bangladesh',
  },
]

export const aboutParagraphs = [
  'I am a software engineer who enjoys turning complex problems into simple, well-tested solutions. My work spans full-stack features, system design, and collaboration across product and design teams.',
  'Outside of shipping code, I care about documentation, code review culture, and mentoring — so the next feature is easier than the last.',
]

/** Grouped skills for the Expertise section */
export const expertise = [
  {
    category: 'Languages & runtime',
    items: ['C', 'C++', 'Python', 'JavaScript', 'OOP', "DSA"],
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS'],
  },
  {
    category: 'Backend & data',
    items: ['Django', 'PostgreSQL', 'MySQL', 'Signal', 'Celery', 'Redis', 'Cron jobs', 'Stripe', 'Rapyd', 'SSLCommerz'],
  },
  {
    category: 'Platform & delivery',
    items: ['Cloudflare', 'Git', 'cPanel', 'Docker', 'Netlify', 'Vercel', 'Render'],
  },
]

export const experience = [
  {
    role: 'Backend Developer (Remote)',
    company: 'DevsStream Ltd.',
    /** Company website — shown as a link next to the role. Omit or set null for plain text. */
    companyUrl: 'https://www.linkedin.com/company/devsstream/',
    period: 'Oct 2025 — Present',
    summary:
      'Backend team member building APIs and business logic for client platforms — including Kaaruj and Nanis — plus SaaS-style products.',
    highlights: [
      {
        projectLink: {
          label: 'Kaaruj',
          /** Live site — update if different */
          href: 'https://kaaruj.com/',
        },
        detail:
          'Delivered backend for voucher system, sales reporting, role management, dynamic banners, corporate slider, blog, and related features.',
      },
      {
        projectLink: {
          label: 'Nanis',
          href: 'https://nanis.co.uk/',
        },
        detail:
          'Built voucher flows with strong server-side validation and contributed to broader SaaS functionality.',
      },
    ],
  },
  {
    role: 'Full Stack Developer (Remote-part-time)',
    company: 'Janata WiFi',
    companyUrl: 'https://www.linkedin.com/company/janatawifi/',
    period: 'Mar 2025 — Sep 2025',
    summary:
      'Full stack development across the Janata WiFi SaaS platform and client-facing projects — owning features end to end from UI and APIs to integration and delivery.',
    highlights: [
      'SaaS — Contributed to the core product: new features, refinements, and reliable behavior across the stack so the platform scales for operators and end users.',
      'Client projects — Delivered tailored solutions for partner needs, working on both frontend experiences and backend services, APIs, and data flows.',
      'Worked across the full stack: responsive interfaces, business logic, validation, integrations, and shipping changes in coordination with the team.',
    ],
  },
]

export const projects = [
  {
    title: 'InvoiceFlow',
    description:
      'SaaS-style invoicing and billing app: Django REST Framework APIs with async jobs (Celery + Redis), PostgreSQL for data, and a React front end. Supports real payment flows via Stripe and SSLCommerz so businesses can create invoices, track status, and get paid online.',
    tech: ['Django', 'React', 'PostgreSQL', 'JWT', 'Celery', 'Redis', 'Stripe', 'SSLCommerz', 'Google OAuth'],
    links: { repo: 'https://github.com/SRR23/InvoiceFlow.git', live: 'https://invoiceflow-v1.netlify.app/' },
  },
  {
    title: 'Blogtopia',
    description:
      'Full-stack blog platform backed by a Django REST API and a React client. Authors can publish and manage posts; MySQL stores content and metadata. Focused on clean CRUD, auth-aware routes, and a simple reading experience on the live site.',
    tech: ['Django', 'React', 'MySQL', 'JWT'],
    links: { repo: 'https://github.com/SRR23/Blog-Website-API', live: 'https://blogtopia.netlify.app/' },
  },
  {
    title: 'EasyRent',
    description:
      'Rental marketplace for listing and discovering flats: Django + PostgreSQL for listings, users, and bookings, React for the UI, and Cloudinary for optimized property images. Built to showcase search-friendly listings and a straightforward renter flow in the Kushtia deployment.',
    tech: ['Django', 'React', 'PostgreSQL', 'JWT', 'Cloudinary'],
    links: { repo: 'https://github.com/SRR23/Flat-Rent-API.git', live: 'https://easyrent-kushtia.netlify.app/' },
  },
]
