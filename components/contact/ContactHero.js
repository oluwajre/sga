import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-sga-navy py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              Get in Touch
            </p>

            <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s Start a Conversation About Your Growth.
            </h1>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              Whether you want to explore an SGA programme, discuss school
              growth consulting, explore a partnership, or simply ask a
              question, we&apos;re here to hear from you.
            </p>

            {/* Contact purposes */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Programmes",
                "Consulting",
                "Partnerships",
                "General Enquiries",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-sga-body text-sm font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-sga">
              <Image
                src="/images/contact/contact-hero.jpg"
                alt="Professionals having a focused advisory conversation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-sga-navy/45 via-transparent to-transparent" />
            </div>

            {/* Decorative communication cue */}
            <div className="absolute -bottom-3 -left-3 flex h-16 w-16 items-center justify-center rounded-sga border border-sga-emerald/30 bg-sga-emerald/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7 text-sga-emerald"
                aria-hidden="true"
              >
                <path
                  d="M7 10.5h10M7 14h6M20 11.5c0 4.694-4.477 8.5-10 8.5-1.15 0-2.25-.16-3.27-.46L3 21l1.46-3.73C3.54 15.89 3 13.77 3 11.5 3 6.806 7.477 3 13 3s10 3.806 10 8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}