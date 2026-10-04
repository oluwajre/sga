export default function EducationMarketSection() {
  return (
    <section className="bg-sga-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Market narrative */}
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              The Education Market
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              A Large Private School Market With Significant Growth Gaps.
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
              Nigeria alone has more than 80,000 private schools, creating a
              substantial market for professionals who can help school owners
              improve financial performance, enrolment, operations, and
              technology adoption.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-sga-slate">
              Yet many schools still operate without the formal business
              planning and financial systems needed to support sustainable
              growth. This creates a clear need for practical school growth
              expertise.
            </p>

            <div className="mt-8 h-px w-16 bg-sga-emerald" />
          </div>

          {/* Market snapshot */}
          <div className="relative overflow-hidden rounded-sga bg-sga-navy p-6 shadow-[0_16px_40px_-12px_rgba(10,25,47,0.25)] sm:p-8 md:p-10">
            {/* Subtle data-grid decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
            >
              <svg
                className="absolute right-0 top-0 h-full w-full"
                viewBox="0 0 700 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 390C120 350 160 370 250 300C340 230 400 270 470 190C540 110 600 130 700 50"
                  stroke="currentColor"
                  className="text-sga-emerald/20"
                  strokeWidth="1"
                />
                <path
                  d="M0 450C130 410 190 430 280 350C370 270 430 310 510 230C580 160 630 170 700 110"
                  stroke="currentColor"
                  className="text-sga-emerald/10"
                  strokeWidth="1"
                />

                <circle
                  cx="470"
                  cy="190"
                  r="4"
                  className="fill-sga-emerald/50"
                />
                <circle
                  cx="600"
                  cy="130"
                  r="4"
                  className="fill-sga-amber/50"
                />
                <circle
                  cx="250"
                  cy="300"
                  r="3"
                  className="fill-sga-emerald/40"
                />
              </svg>
            </div>

            <div className="relative">
              <p className="font-sga-body text-xs font-bold uppercase tracking-[0.2em] text-sga-emerald">
                Market Snapshot
              </p>

              {/* Primary market figure */}
              <div className="mt-6 border-b border-white/10 pb-7">
                <p className="font-sga-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                  80,000+
                </p>

                <p className="mt-2 font-sga-body text-sm font-medium text-slate-300">
                  Private schools in Nigeria
                </p>
              </div>

              {/* Secondary metrics */}
              <div className="grid gap-6 pt-7 sm:grid-cols-2">
                <div>
                  <p className="font-sga-heading text-3xl font-extrabold text-sga-amber">
                    80%
                  </p>

                  <p className="mt-2 font-sga-body text-sm leading-relaxed text-slate-300">
                    Reported gap in formal business planning and financial
                    systems
                  </p>
                </div>

                <div>
                  <p className="font-sga-heading text-2xl font-extrabold text-white">
                    ₦299,997–₦449,850
                  </p>

                  <p className="mt-2 font-sga-body text-sm leading-relaxed text-slate-300">
                    Potential annual EdTech and growth fee per partner school
                  </p>
                </div>
              </div>

              {/* Growth needs */}
              <div className="mt-8 rounded-xl border border-white/10 bg-white/4 p-5">
                <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-slate-400">
                  Common Growth Needs
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Enrolment",
                    "Revenue",
                    "Staffing",
                    "Governance",
                    "Technology",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 font-sga-body text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}