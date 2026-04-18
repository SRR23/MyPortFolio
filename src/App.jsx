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

function GitHubIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function LinkedInIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function WhatsAppIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.123 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
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

/**
 * Experience bullet: plain string, or { projectLink: { label, href }, detail } for a linked product name.
 */
function ExperienceHighlight({ point }) {
  if (typeof point === 'string') {
    return <>{point}</>
  }

  return (
    <>
      <a
        href={point.projectLink.href}
        target="_blank"
        rel="noreferrer noopener"
        className="font-medium text-teal-400 underline decoration-teal-500/30 underline-offset-2 transition hover:text-teal-300 hover:decoration-teal-400/50"
      >
        {point.projectLink.label}
      </a>
      <span className="text-slate-500"> — </span>
      {point.detail}
    </>
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

  useEffect(() => {
    const root = document.documentElement
    if (mobileOpen) {
      root.style.overflow = 'hidden'
    } else {
      root.style.overflow = ''
    }
    return () => {
      root.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    if (!mobileOpen) return
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

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

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/90 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 pb-3 sm:gap-4 sm:px-6 sm:pb-4">
          <a
            href="#top"
            className="group min-w-0 max-w-[72%] cursor-pointer sm:max-w-none"
          >
            <span className="block sm:hidden">
              <span className="block truncate text-sm font-semibold text-white group-hover:text-teal-300">
                {profile.name}
              </span>
              <span className="mt-0.5 block truncate text-xs text-slate-500">{profile.title}</span>
            </span>
            <span className="hidden font-semibold tracking-tight text-white group-hover:text-teal-300 sm:inline">
              {profile.name}
              <span className="ml-2 font-normal text-slate-500 group-hover:text-slate-400">
                · {profile.title}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="-mr-1 inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </header>

      {/* Mobile: slide-in panel from the right */}
      <div
        className={`fixed inset-0 z-[100] md:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <aside
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute right-0 top-0 flex h-full max-h-[100dvh] w-[min(88vw,20rem)] flex-col border-l border-white/10 bg-slate-950 shadow-[-12px_0_48px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-white/5 px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-400/90">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <MenuIcon open />
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col overflow-y-auto px-3 py-2 pb-[max(1rem,env(safe-area-inset-bottom))]"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer rounded-xl px-4 py-3.5 text-base text-slate-300 transition hover:bg-teal-500/10 hover:text-white active:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-20 lg:pt-24">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center lg:gap-16">
            <div className="lg:order-1">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-teal-300/90 sm:mb-4 sm:text-xs">
                Open to opportunities
              </p>
              <h1 className="text-[1.7rem] font-semibold leading-snug tracking-tight text-white sm:text-4xl sm:leading-tight lg:text-[3.25rem] lg:leading-[1.1]">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
                .
                <br />
                {profile.title}.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
                {profile.tagline}
              </p>
              <p className="mt-2 text-xs text-slate-500 sm:text-sm">{profile.location}</p>
              <div className="mt-8 flex flex-row flex-wrap gap-2 sm:mt-10 sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex min-h-[44px] flex-1 basis-0 items-center justify-center rounded-xl bg-teal-500 px-2 py-2.5 text-center text-[11px] font-semibold leading-tight text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-400 active:bg-teal-400/90 sm:min-h-0 sm:flex-none sm:px-6 sm:py-3 sm:text-sm"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] flex-1 basis-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-2.5 text-center text-[11px] font-semibold leading-tight text-white transition hover:border-teal-500/40 hover:bg-white/[0.07] active:bg-white/10 sm:min-h-0 sm:flex-none sm:px-6 sm:py-3 sm:text-sm"
                >
                  Get in touch
                </a>
                <a
                  href={profile.resume.publicPath}
                  download={profile.resume.downloadFileName}
                  className="inline-flex min-h-[44px] flex-1 basis-0 items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 px-1.5 py-2.5 text-center text-[10px] font-semibold leading-tight text-white transition hover:border-teal-500/40 hover:bg-white/[0.07] active:bg-white/10 sm:min-h-0 sm:flex-none sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
                >
                  <DownloadIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                  Download resume
                </a>
              </div>
            </div>

            <div className="relative mx-auto hidden w-full max-w-[16.5rem] sm:max-w-xs lg:order-2 lg:block lg:max-w-none lg:justify-self-end">
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
          className="scroll-mt-20 border-b border-white/5 px-4 py-14 sm:scroll-mt-24 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              About
            </h2>
            <p className="mt-3 max-w-2xl text-xl font-medium tracking-tight text-white sm:text-2xl lg:text-3xl">
              Building software that lasts.
            </p>
            <div className="mt-6 max-w-3xl space-y-4 text-[0.9375rem] leading-relaxed text-slate-400 sm:mt-8 sm:text-base">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="scroll-mt-20 border-b border-white/5 px-4 py-14 sm:scroll-mt-24 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              Education
            </h2>
            <p className="mt-3 max-w-2xl text-xl font-medium tracking-tight text-white sm:text-2xl lg:text-3xl">
              Academic qualifications.
            </p>
            <ul className="mt-10 space-y-6">
              {education.map((entry, index) => (
                <li
                  key={index}
                  className="rounded-2xl border border-white/5 bg-slate-900/40 p-5 shadow-lg shadow-black/20 sm:p-6"
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
          className="scroll-mt-20 border-b border-white/5 px-4 py-14 sm:scroll-mt-24 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              Expertise
            </h2>
            <p className="mt-3 max-w-2xl text-xl font-medium tracking-tight text-white sm:text-2xl lg:text-3xl">
              Skills across the stack.
            </p>
            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
              {expertise.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-white/5 bg-slate-900/40 p-5 shadow-lg shadow-black/20 sm:p-6"
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
          className="scroll-mt-20 border-b border-white/5 px-4 py-14 sm:scroll-mt-24 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              Experience
            </h2>
            <p className="mt-3 max-w-2xl text-xl font-medium tracking-tight text-white sm:text-2xl lg:text-3xl">
              Where I&apos;ve made an impact.
            </p>
            <ol className="relative mt-10 border-l border-white/10 pl-6 sm:mt-14 sm:pl-8">
              {experience.map((job) => (
                <li
                  key={`${job.company}-${job.period}`}
                  className="relative pb-10 last:pb-0 sm:pb-12"
                >
                  <span className="absolute -left-[7px] top-2 z-[1] h-3.5 w-3.5 rounded-full border-2 border-teal-400 bg-slate-950 ring-2 ring-slate-950 sm:-left-[9px] sm:h-4 sm:w-4 sm:ring-4" />
                  <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5 shadow-lg shadow-black/10 sm:p-6">
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
                    <ul className="mt-4 list-outside list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-slate-400 marker:text-teal-500/80 sm:pl-5">
                      {job.highlights.map((point, index) => (
                        <li key={index}>
                          <ExperienceHighlight point={point} />
                        </li>
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
          className="scroll-mt-20 border-b border-white/5 px-4 py-14 sm:scroll-mt-24 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
              Projects
            </h2>
            <p className="mt-3 max-w-2xl text-xl font-medium tracking-tight text-white sm:text-2xl lg:text-3xl">
              Selected work & side projects.
            </p>
            <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-3 lg:gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col rounded-2xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-5 shadow-lg transition active:border-teal-500/30 sm:p-6 sm:hover:border-teal-500/20 sm:hover:shadow-teal-500/5"
                >
                  <h3 className="text-base font-semibold text-white sm:text-lg">{project.title}</h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slate-400 sm:text-sm">
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
        <section
          id="contact"
          className="scroll-mt-20 px-4 py-14 sm:scroll-mt-24 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950 p-6 sm:rounded-3xl sm:p-12">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400/90">
                Contact
              </h2>
              <p className="mt-3 max-w-xl text-xl font-medium tracking-tight text-white sm:text-2xl lg:text-3xl">
                Let&apos;s build something great.
              </p>
              <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-slate-400 sm:text-base">
                Prefer email? Reach out anytime — I typically respond within a few business days.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-[44px] w-full items-center justify-center break-all rounded-xl bg-teal-500 px-4 py-3 text-center text-xs font-semibold text-slate-950 transition hover:bg-teal-400 active:bg-teal-400/90 sm:w-auto sm:min-h-0 sm:justify-start sm:px-6 sm:text-sm"
                >
                  {profile.email}
                </a>
                <a
                  href={profile.resume.publicPath}
                  download={profile.resume.downloadFileName}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-500/40 hover:bg-white/[0.07] active:bg-white/10 sm:w-auto sm:min-h-0"
                >
                  <DownloadIcon />
                  Download resume
                </a>
              </div>
              <div className="mt-8 flex flex-row flex-wrap gap-2 sm:mt-10 sm:gap-4">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-[44px] flex-1 basis-0 items-center justify-center gap-1.5 rounded-xl border border-white/10 px-2 py-2.5 text-[11px] font-medium leading-tight text-slate-200 transition hover:border-teal-500/40 hover:bg-white/5 active:bg-white/10 sm:min-h-0 sm:flex-none sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  <GitHubIcon className="h-3.5 w-3.5 shrink-0 text-slate-300 sm:h-4 sm:w-4" />
                  GitHub
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-[44px] flex-1 basis-0 items-center justify-center gap-1.5 rounded-xl border border-white/10 px-2 py-2.5 text-[11px] font-medium leading-tight text-slate-200 transition hover:border-teal-500/40 hover:bg-white/5 active:bg-white/10 sm:min-h-0 sm:flex-none sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  <LinkedInIcon className="h-3.5 w-3.5 shrink-0 text-[#0A66C2] sm:h-4 sm:w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.social.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-[44px] flex-1 basis-0 items-center justify-center gap-1.5 rounded-xl border border-white/10 px-2 py-2.5 text-[11px] font-medium leading-tight text-slate-200 transition hover:border-teal-500/40 hover:bg-white/5 active:bg-white/10 sm:min-h-0 sm:flex-none sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 text-emerald-400/90 sm:h-4 sm:w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-5xl text-center text-sm text-slate-500 sm:text-left">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
