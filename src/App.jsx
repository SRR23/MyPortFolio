import { useState } from 'react'
import {
  profile,
  aboutParagraphs,
  expertise,
  experience,
  projects,
} from './data/portfolio.js'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function MenuIcon({ open }) {
  return (
    <span className="relative block h-3.5 w-5" aria-hidden>
      <span
        className={`absolute left-0 top-0 block h-0.5 w-full rounded bg-current transition ${
          open ? 'translate-y-1.5 rotate-45' : ''
        }`}
      />
      <span
        className={`absolute left-0 top-1.5 block h-0.5 w-full rounded bg-current transition ${
          open ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`absolute left-0 top-3 block h-0.5 w-full rounded bg-current transition ${
          open ? '-translate-y-1.5 -rotate-45' : ''
        }`}
      />
    </span>
  )
}

/**
 * Shows the profile photo from /public, or initials if the file is missing or fails to load.
 */
function ProfilePhoto({ src, alt, displayName }) {
  const [loadFailed, setLoadFailed] = useState(false)
  const initials = displayName
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (loadFailed) {
    return (
      <div
        className="flex aspect-[4/5] w-full items-center justify-center bg-slate-800 text-5xl font-semibold tracking-tight text-teal-300"
        aria-label={alt}
      >
        {initials || '?'}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={480}
      height={600}
      className="aspect-[4/5] w-full object-cover"
      loading="eager"
      onError={() => setLoadFailed(true)}
    />
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 opacity-70"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* Subtle background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(15,23,42,0.4))]"
        aria-hidden
      />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a
            href="#top"
            className="font-semibold tracking-tight text-white transition hover:text-teal-300"
          >
            {profile.name}
            <span className="ml-2 font-normal text-slate-500">· {profile.title}</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            <MenuIcon open={mobileOpen} />
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`border-t border-white/5 bg-slate-950/95 md:hidden ${
            mobileOpen ? 'block' : 'hidden'
          }`}
        >
          <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center lg:gap-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-teal-300/90">
                Open to opportunities
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
                .
                <br />
                {profile.title}.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                {profile.tagline}
              </p>
              <p className="mt-2 text-sm text-slate-500">{profile.location}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-400"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-500/40 hover:bg-white/[0.07]"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-500/20 via-transparent to-cyan-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl ring-1 ring-white/10">
                <ProfilePhoto
                  src={profile.photoSrc}
                  alt={profile.photoAlt}
                  displayName={profile.name}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              About
            </h2>
            <p className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Building software that lasts.
            </p>
            <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-slate-400">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section
          id="expertise"
          className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              Expertise
            </h2>
            <p className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Skills across the stack.
            </p>
            <p className="mt-4 max-w-2xl text-slate-400">
              A snapshot of technologies and practices I use regularly. Adjust the list in{' '}
              <code className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-sm text-teal-200/90">
                src/data/portfolio.js
              </code>
              .
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {expertise.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 shadow-lg shadow-black/20"
                >
                  <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/5 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              Experience
            </h2>
            <p className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Where I&apos;ve made an impact.
            </p>
            <ol className="relative mt-14 space-y-12 border-l border-white/10 pl-8">
              {experience.map((job) => (
                <li key={`${job.company}-${job.period}`} className="relative">
                  <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-teal-400 bg-slate-950" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                      <p className="text-teal-400/90">{job.company}</p>
                    </div>
                    <p className="text-sm text-slate-500">{job.period}</p>
                  </div>
                  <p className="mt-3 text-slate-400">{job.summary}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-400 marker:text-teal-500/80">
                    {job.highlights.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              Projects
            </h2>
            <p className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Selected work & side projects.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col rounded-2xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-6 shadow-lg transition hover:border-teal-500/20 hover:shadow-teal-500/5"
                >
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-800/80 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-white/5 pt-4">
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-400 transition hover:text-teal-300"
                      >
                        Code
                        <ExternalLinkIcon />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition hover:text-white"
                      >
                        Live demo
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950 p-8 sm:p-12">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
                Contact
              </h2>
              <p className="mt-3 max-w-xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Let&apos;s build something great.
              </p>
              <p className="mt-4 max-w-xl text-slate-400">
                Prefer email? Reach out anytime — I typically respond within a few business days.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
              >
                {profile.email}
              </a>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-teal-500/40 hover:bg-white/5"
                >
                  GitHub
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-teal-500/40 hover:bg-white/5"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-teal-500/40 hover:bg-white/5"
                >
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-600">
            Built with React & Tailwind CSS · No backend
          </p>
        </div>
      </footer>
    </div>
  )
}
