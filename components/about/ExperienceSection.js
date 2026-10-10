import { whyChooseData } from "../home/whyChooseData";

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-sga-navy py-20 md:py-28">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-40"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 400 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M400 40C320 90 350 180 270 240C190 300 240 390 150 450C90 490 80 570 20 660"
            stroke="currentColor"
            className="text-sga-emerald/20"
            strokeWidth="1"
          />
          <path
            d="M400 140C340 170 350 250 300 300C230 370 270 430 190 500C130 550 130 610 80 700"
            stroke="currentColor"
            className="text-sga-emerald/10"
            strokeWidth="1"
          />
          <circle
            cx="270"
            cy="240"
            r="4"
            className="fill-sga-emerald/50"
          />
          <circle
            cx="150"
            cy="450"
            r="4"
            className="fill-sga-amber/50"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          {/* Credibility statement */}
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Experience Behind the Academy
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              25+ Years of Experience Behind a Practical Growth Approach.
            </h2>

            <div className="mt-8 flex items-end gap-4">
              <span className="font-sga-heading text-7xl font-extrabold leading-none tracking-tight text-sga-amber md:text-8xl">
                25+
              </span>

              <span className="mb-2 max-w-37.5 font-sga-body text-sm font-medium leading-relaxed text-slate-300">
                years of post-qualification professional experience
              </span>
            </div>
          </div>

          {/* Experience profile */}
          <div>
            <div className="space-y-5">
              <p className="font-sga-body text-lg leading-relaxed text-slate-300">
                School Growth Academy was developed under NoVance Ltd and draws
                on more than 25 years of post-qualification experience across
                financial auditing, institutional tax compliance, corporate
                restructuring, and educational growth advisory.
              </p>

              <p className="font-sga-body text-lg leading-relaxed text-slate-300">
                This experience informs a practical approach that brings
                financial discipline, business strategy, institutional
                improvement, technology, and execution together to address the
                realities of private school growth.
              </p>
            </div>

            {/* Areas of experience */}
            <div className="mt-10 border-t border-white/10">
              <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="py-5 sm:pr-6">
                  <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                    Experience
                  </p>
                  <p className="mt-2 font-sga-heading text-lg font-bold text-white">
                    Financial & Tax
                  </p>
                </div>

                <div className="py-5 sm:px-6">
                  <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                    Experience
                  </p>
                  <p className="mt-2 font-sga-heading text-lg font-bold text-white">
                    Restructuring
                  </p>
                </div>

                <div className="py-5 sm:pl-6">
                  <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                    Experience
                  </p>
                  <p className="mt-2 font-sga-heading text-lg font-bold text-white">
                    Education Growth
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting facts */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
              <div>
                <span className="font-sga-heading text-2xl font-extrabold text-white">
                  {whyChooseData.length}
                </span>
                <span className="ml-2 font-sga-body text-sm text-slate-400">
                  framework stages
                </span>
              </div>

              <div>
                <span className="font-sga-heading text-2xl font-extrabold text-white">
                  3
                </span>
                <span className="ml-2 font-sga-body text-sm text-slate-400">
                  professional programme levels
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}