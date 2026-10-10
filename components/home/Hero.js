import Image from "next/image";
import Link from "next/link";
import { UsersIcon, ArrowUpIcon, ReportIcon } from "../common/Icons";
import { journeyStages } from "../common/journeyStages";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sga-navy">
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-105 w-105 rounded-full border border-sga-emerald/20 bg-sga-emerald/5 blur-[1px] sm:h-140 sm:w-140"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-40 h-75 w-75 rounded-full border border-sga-amber/20 bg-sga-amber/5 blur-[1px] sm:h-105 sm:w-105"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Text content */}
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex max-w-full rounded-full border border-sga-emerald/30 bg-sga-emerald/10 px-4 py-2">
              <span className="font-sga-body text-[10px] font-semibold uppercase tracking-wide text-sga-emerald-light sm:text-sm">
                Beyond Employment
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-sga-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl">
              Build a Career Helping Schools Grow—and Get Paid for Your Expertise
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl font-sga-body text-base leading-8 text-slate-300 sm:text-[16px]">
              Turn your knowledge, experience, and interest in education and business
              growth into a professional career in School Growth Mentorship and
              Educational Business Consulting. Learn practical frameworks, develop
              your expertise, and build the skills to help schools attract learners,
              improve performance, increase revenue, and achieve sustainable growth.
            </p>

            {/* Journey Stages */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
              {journeyStages.map((stage, index) => (
                <div key={stage} className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sga-emerald/50 font-sga-body text-xs font-bold text-sga-emerald">
                      {index + 1}
                    </span>

                    <span className="font-sga-body text-sm font-medium text-slate-200">
                      {stage}
                    </span>
                  </div>

                  {index < journeyStages.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden text-sga-emerald sm:inline"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/programmes#opportunity-discovery-day"
                className="group inline-flex items-center justify-center gap-2 rounded-sga bg-sga-amber px-6 py-4 font-sga-body text-[14px] font-bold text-sga-navy transition-all duration-200 hover:-translate-y-1 hover:bg-sga-amber-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-sga-amber focus:ring-offset-2 focus:ring-offset-sga-navy"
              >
                Explore Our Free Masterclass Programme
                <ArrowUpIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="#opportunity-report"
                className="inline-flex items-center justify-center gap-2 rounded-sga border border-white/25 px-6 py-4 font-sga-body text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sga-navy"
              >
                <ReportIcon />
                Download Free Opportunity Report
              </a>
            </div>
          </div>

          {/* Visual content */}
          <div className="relative mx-auto w-full max-w-100 lg:max-w-none">
            {/* Main image frame */}
            <div className="relative overflow-hidden rounded-4xl border border-sga-emerald/30 bg-sga-midnight-slate p-2 shadow-2xl shadow-sga-emerald/10">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero/sga-hero-consultant.jpeg"
                  alt="Professional school-growth consultant working with a tablet"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-sga-navy/80 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-sga-navy/70 p-4 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="font-sga-body text-xs font-semibold uppercase tracking-widest text-sga-emerald-light">
                    School Growth Professional
                  </p>

                  <p className="mt-2 max-w-xs font-sga-heading text-xl font-bold leading-tight text-white sm:text-2xl">
                    Build expertise that creates value for schools.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating impact card */}
            <div className="absolute -bottom-5 right-2 w-52 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:-right-5 sm:w-60">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sga-emerald/10 text-sga-emerald">
                  <UsersIcon className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="font-sga-heading text-sm font-bold text-sga-navy">
                    More Students
                  </p>

                  <p className="mt-1 font-sga-body text-xs leading-relaxed text-sga-slate">
                    Support better enrolment, revenue, and school performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative amber accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 left-8 h-16 w-16 rounded-full bg-sga-amber/20 blur-2xl"
            />
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-20 w-full overflow-hidden border-y border-white/10 py-4">
          <div className="flex w-max animate-marquee">
            {/* First set */}
            <div className="flex shrink-0 items-center gap-10 pr-10">
              <span className="whitespace-nowrap font-sga-body text-sm font-medium text-slate-300">
                500 Certified Mentors Target by 2030
              </span>

              <span className="text-sga-emerald-light">•</span>

              <span className="whitespace-nowrap font-sga-body text-sm font-medium text-slate-300">
                15,000+ Partner Schools Network
              </span>

              <span className="text-sga-emerald-light">•</span>

              <span className="whitespace-nowrap font-sga-body text-sm font-medium text-slate-300">
                Powered by NoVance Technology
              </span>

              <span className="text-sga-emerald-light">•</span>
            </div>

            {/* Duplicate set */}
            <div className="flex shrink-0 items-center gap-10 pr-10">
              <span className="whitespace-nowrap font-sga-body text-sm font-medium text-slate-300">
                500 Certified Mentors Target by 2030
              </span>

              <span className="text-sga-emerald-light">•</span>

              <span className="whitespace-nowrap font-sga-body text-sm font-medium text-slate-300">
                15,000+ Partner Schools Network
              </span>

              <span className="text-sga-emerald-light">•</span>

              <span className="whitespace-nowrap font-sga-body text-sm font-medium text-slate-300">
                Powered by NoVance Technology
              </span>

              <span className="text-sga-emerald-light">•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}