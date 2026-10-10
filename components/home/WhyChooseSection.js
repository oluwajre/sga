import { whyChooseData } from "./whyChooseData";

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Why Choose SGA
            </p>

            <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
               More Than Training. A Complete System for Building Your Practice.
            </h2>

            <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
                SGA combines practical African frameworks, supervised field experience,
                technology, consulting resources, and an ongoing professional ecosystem
                to equip you for school growth mentorship and educational business
                consulting.
            </p>

            <div className="mt-8 space-y-7">
                {whyChooseData.map((item) => (
                    <div
                    key={item.title}
                    className="group flex gap-4"
                    >
                    <div className="shrink-0 pt-1">
                        <span className="font-sga-heading text-sm font-extrabold tracking-wide text-sga-emerald/60 transition-colors duration-200 group-hover:text-sga-emerald">
                        {item.number}
                        </span>
                    </div>

                    <div className="border-l border-slate-200 pl-4 transition-colors duration-200 group-hover:border-sga-emerald/40">
                        <h3 className="font-sga-heading text-lg font-bold text-sga-navy">
                        {item.title}
                        </h3>

                        <p className="mt-1 font-sga-body text-base leading-relaxed text-sga-slate">
                        {item.description}
                        </p>
                    </div>
                    </div>
                ))}
            </div>

            <a
              href="/apply"
              className="mt-9 inline-flex items-center rounded-sga bg-sga-amber px-6 py-3.5 font-sga-body text-base font-bold text-sga-navy transition-colors hover:bg-sga-amber-dark"
            >
              Apply for the Next Cohort →
            </a>
          </div>

          {/* Visual */}
          <div className="relative lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden rounded-sga bg-sga-navy p-8 shadow-[0_20px_50px_-12px_rgba(10,25,47,0.25)] md:p-10">
                <div
                    aria-hidden="true"
                    className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-sga-emerald/20"
                />

                <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-sga-emerald/10"
                />

                <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-32 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-sga-emerald/10 blur-2xl"
                />

                {/* existing content stays here */}
                <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
                    The SGA Advantage
                </p>

                <div className="mt-5">
                    <div
                        aria-hidden="true"
                        className="mb-5 h-1 w-12 rounded-full bg-sga-amber"
                    />

                    <h3 className="max-w-lg font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
                        Turn expertise into measurable school growth.
                    </h3>

                    <p className="mt-5 max-w-xl font-sga-body text-base leading-relaxed text-slate-300">
                        Develop the skills, systems, and confidence to move from
                        simply knowing about education to creating measurable value
                        for schools.
                    </p>
                </div>

                <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-7">
                    <div>
                        <p className="font-sga-heading text-3xl font-extrabold text-sga-amber md:text-4xl">
                        {whyChooseData.length}
                        </p>
                        <p className="mt-1 font-sga-body text-sm leading-relaxed text-slate-300">
                        Growth Framework Stages
                        </p>
                    </div>

                    <div>
                        <p className="font-sga-heading text-3xl font-extrabold text-sga-amber md:text-4xl">
                        25+
                        </p>
                        <p className="mt-1 font-sga-body text-sm leading-relaxed text-slate-300">
                        Years Leadership Experience
                        </p>
                    </div>

                    <div>
                        <p className="font-sga-heading text-3xl font-extrabold text-sga-amber md:text-4xl">
                        15K+
                        </p>
                        <p className="mt-1 font-sga-body text-sm leading-relaxed text-slate-300">
                        Target Schools
                        </p>
                    </div>

                    <div>
                        <p className="font-sga-heading text-3xl font-extrabold text-sga-amber md:text-4xl">
                        1
                        </p>
                        <p className="mt-1 font-sga-body text-sm leading-relaxed text-slate-300">
                        Clear Path to Growth
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}