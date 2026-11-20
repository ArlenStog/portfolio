import Image from "next/image";
import {
  clientProjects,
  education,
  experience,
  featuredProject,
  profile,
  skills,
} from "@/data/profile";

// Links still set to "#" in profile.ts are hidden instead of rendering broken buttons.
const isSet = (href: string) => href && href !== "#";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-8 py-16 sm:py-20">
      <h2 className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">
        <span className="h-px w-8 bg-emerald-400/60" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

const nav = [
  ["#project", "Project"],
  ["#experience", "Experience"],
  ["#skills", "Skills"],
  ["#contact", "Contact"],
];

export default function Home() {
  const [first, last] = profile.name.split(" ");

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-zinc-800/60 bg-zinc-950/75 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center gap-5 px-4 py-3 text-sm sm:px-6">
          <a
            href="#top"
            className="mr-auto font-mono font-semibold text-zinc-100"
          >
            am<span className="text-emerald-400">.</span>
          </a>
          {nav.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="hidden text-zinc-400 transition hover:text-zinc-100 sm:block"
            >
              {label}
            </a>
          ))}
          <a
            href={profile.links.cv}
            download
            className="rounded-lg border border-zinc-700 px-3 py-1.5 text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            Download CV
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl overflow-x-clip px-4 sm:px-6">
        {/* Hero */}
        <section className="relative pb-12 pt-20 sm:pt-28">
          <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <p className="font-mono text-sm text-emerald-400">Hi, I’m</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-zinc-50 sm:text-7xl">
            {first}
            <br />
            <span className="text-zinc-500">{last}</span>
          </h1>
          <p className="mt-6 text-xl text-zinc-300 sm:text-2xl">
            {profile.role} <span className="text-zinc-600">/</span>{" "}
            <span className="font-mono text-lg text-emerald-300 sm:text-xl">
              {profile.stack}
            </span>
          </p>
          <p className="mt-3 text-zinc-500">{profile.location}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#project"
              className="rounded-lg bg-emerald-400 px-5 py-2.5 font-semibold text-zinc-950 transition hover:bg-emerald-300"
            >
              See my work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-zinc-700 px-5 py-2.5 font-semibold text-zinc-100 transition hover:border-zinc-500"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-16 grid gap-6 border-t border-zinc-800/80 pt-8 sm:grid-cols-3">
            {profile.highlights.map((h) => (
              <div key={h.label}>
                <dt className="font-mono text-3xl font-semibold text-zinc-50">
                  {h.value}
                </dt>
                <dd className="mt-1 text-sm text-zinc-500">{h.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="about" title="About">
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            {profile.summary}
          </p>
        </Section>

        <Section id="project" title="Featured project">
          <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50">
            <div className="grid gap-2 bg-zinc-950 p-2 sm:grid-cols-[2fr_1fr]">
              {featuredProject.images.map((img, i) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={2560}
                  height={1800}
                  priority={i === 0}
                  className="h-full w-full rounded-2xl border border-zinc-800 object-cover object-top"
                />
              ))}
            </div>
            <div className="space-y-6 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-2xl font-semibold text-zinc-50">
                  {featuredProject.name}
                </h3>
                <span className="font-mono text-sm text-zinc-500">
                  {featuredProject.year}
                </span>
              </div>
              <p className="max-w-3xl text-zinc-300">
                {featuredProject.description}
              </p>
              <ul className="grid gap-x-8 gap-y-2 text-sm text-zinc-400 sm:grid-cols-2">
                {featuredProject.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-emerald-400">▹</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Tags items={featuredProject.stack} />
              <div className="flex flex-wrap gap-3 pt-2">
                {isSet(featuredProject.links.live) && (
                  <a
                    href={featuredProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-emerald-300"
                  >
                    Live demo ↗
                  </a>
                )}
                {isSet(featuredProject.links.code) && (
                  <a
                    href={featuredProject.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
                  >
                    Source code ↗
                  </a>
                )}
              </div>
            </div>
          </article>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-semibold text-zinc-100">Client work</h3>
            <ul className="grid gap-4 sm:grid-cols-3">
              {clientProjects.map((p) => (
                <li
                  key={p.name}
                  className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
                >
                  <h4 className="font-semibold text-zinc-100">{p.name}</h4>
                  <p className="mt-2 flex-1 text-sm text-zinc-400">
                    {p.description}
                  </p>
                  <p className="mt-4 font-mono text-xs text-zinc-500">
                    {p.stack.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-500">
              Client names withheld. Demos and code walkthroughs available on
              request.
            </p>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-12">
            {experience.map((job) => (
              <li
                key={job.company}
                className="grid gap-4 sm:grid-cols-[180px_1fr]"
              >
                <div className="font-mono text-sm text-zinc-500">
                  <p>{job.period}</p>
                  {job.place && <p>{job.place}</p>}
                </div>
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-zinc-50">
                    {job.role}{" "}
                    <span className="text-emerald-400">· {job.company}</span>
                  </h3>
                  {job.projects.map((p, i) => (
                    <div key={p.name || i} className="space-y-2">
                      {p.name && (
                        <h4 className="font-medium text-zinc-200">{p.name}</h4>
                      )}
                      <ul className="space-y-1.5 text-zinc-400">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex gap-2">
                            <span className="text-emerald-400">▹</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {job.stack.length > 0 && <Tags items={job.stack} />}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="space-y-2">
                <dt className="text-sm font-medium text-zinc-200">{s.group}</dt>
                <dd>
                  <Tags items={s.items} />
                </dd>
              </div>
            ))}
          </dl>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
            <p className="font-medium text-zinc-100">{education.degree}</p>
            <p className="mt-1 text-sm text-zinc-400">
              {education.school} ·{" "}
              <span className="font-mono">{education.period}</span>
            </p>
            <p className="mt-3 text-sm text-zinc-400">{education.languages}</p>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="max-w-2xl space-y-6">
            <p className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              Looking for a React / Next.js developer? Let’s talk.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block font-mono text-lg text-emerald-300 underline decoration-emerald-400/40 underline-offset-8 hover:decoration-emerald-300"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="block font-mono text-lg text-zinc-300 hover:text-emerald-300"
            >
              {profile.phone}
            </a>
            <div className="flex flex-wrap gap-5 text-zinc-400">
              {isSet(profile.links.github) && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-100"
                >
                  GitHub ↗
                </a>
              )}
              {isSet(profile.links.linkedin) && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-100"
                >
                  LinkedIn ↗
                </a>
              )}
              <a
                href={profile.links.cv}
                download
                className="hover:text-zinc-100"
              >
                CV (PDF) ↓
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-zinc-800/60 py-8 text-center font-mono text-xs text-zinc-600">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp;
        Tailwind CSS
      </footer>
    </>
  );
}
