import { useEffect, useState } from 'react'
import {
  profile,
  aboutParagraphs,
  education,
  expertise,
  experience,
  projects,
} from './data/portfolio.js'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
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
 * Hero portrait: framed for dark UI — soft vignette helps white studio backgrounds
 * blend into the page without editing the source image.
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
        className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-5xl font-semibold tracking-tight text-teal-300"
        aria-label={alt}
      >
        {initials || '?'}
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
      {/* Slight zoom hides thin light borders; object-top keeps focus on upper portrait */}
      <img
        src={src}
        alt={alt}
        width={480}
        height={600}
        className="h-full w-full scale-[1.04] object-cover object-top transition duration-500 ease-out hover:scale-[1.06] motion-reduce:transition-none motion-reduce:hover:scale-[1.04]"
        loading="eager"
        onError={() => setLoadFailed(true)}
      />
      {/* Edge vignette: corners / white bleed merge into slate */}
      <div
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_50px_rgba(2,6,23,0.45)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_85%_at_50%_38%,transparent_25%,rgba(15,23,42,0.5)_65%,rgba(2,6,23,0.92)_100%)]"
        aria-hidden
      />
      {/* Bottom wash so any lower white fades into the card */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"
        aria-hidden
      />
    </div>
  )
}

function DownloadIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
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

  useEffect(() => {
    document.title = `${profile.name} · ${profile.title}`
  }, [])

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
                <a
                  href={profile.resume.publicPath}
                  download={profile.resume.downloadFileName}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-500/40 hover:bg-white/[0.07]"
                >
                  <DownloadIcon />
                  Download resume
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[min(100%,20rem)] lg:max-w-none lg:justify-self-end">
              {/* Ambient glow behind portrait */}
              <div
                className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-teal-500/25 via-teal-600/5 to-cyan-500/15 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-tr from-teal-400/10 to-transparent opacity-70 blur-2xl"
                aria-hidden
              />

              {/* Gradient “mat” frame — reads intentional on dark pages */}
              <div className="relative rounded-[2rem] bg-gradient-to-br from-teal-400/35 via-slate-500/25 to-cyan-400/25 p-[2px] shadow-[0_25px_80px_-12px_rgba(0,0,0,0.65)]">
                <div className="overflow-hidden rounded-[1.875rem] bg-slate-950 ring-1 ring-white/10">
                  <ProfilePhoto
                    src={profile.photoSrc}
                    alt={profile.photoAlt}
                    displayName={profile.name}
                  />
                </div>
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

        {/* Education */}
        <section
          id="education"
          className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              Education
            </h2>
            <p className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Academic qualifications.
            </p>
            <ul className="mt-10 space-y-6">
              {education.map((entry, index) => (
                <li
                  key={index}
                  className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 shadow-lg shadow-black/20"
                >
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {entry.degree}
                  </h3>
                  <p className="mt-2 text-teal-400/90">{entry.institution}</p>
                  <p className="mt-1 text-sm text-slate-500">{entry.location}</p>
                </li>
              ))}
            </ul>
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
            <ol className="relative mt-14 border-l border-white/10 pl-8">
              {experience.map((job) => (
                <li
                  key={`${job.company}-${job.period}`}
                  className="relative pb-12 last:pb-0"
                >
                  <span className="absolute -left-[9px] top-2 z-[1] h-4 w-4 rounded-full border-2 border-teal-400 bg-slate-950 ring-4 ring-slate-950" />
                  <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 shadow-lg shadow-black/10">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold leading-snug text-white">
                          {job.role}
                        </h3>
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mt-2 inline-flex max-w-full items-center gap-1.5 text-base font-medium text-teal-400 transition hover:text-teal-300"
                          >
                            <span className="truncate">{job.company}</span>
                            <ExternalLinkIcon />
                          </a>
                        ) : (
                          <p className="mt-2 text-base font-medium text-teal-400/90">
                            {job.company}
                          </p>
                        )}
                      </div>
                      <p className="shrink-0 text-sm tabular-nums text-slate-500 sm:pt-0.5">
                        {job.period}
                      </p>
                    </div>
                    <p className="mt-4 text-slate-400 leading-relaxed">{job.summary}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-400 marker:text-teal-500/80">
                      {job.highlights.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
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
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex justify-center rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 sm:justify-start"
                >
                  {profile.email}
                </a>
                <a
                  href={profile.resume.publicPath}
                  download={profile.resume.downloadFileName}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-500/40 hover:bg-white/[0.07]"
                >
                  <DownloadIcon />
                  Download resume
                </a>
              </div>
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
        <div className="mx-auto max-w-5xl text-center text-sm text-slate-500 sm:text-left">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
