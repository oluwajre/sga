import GrowthChart from "./GrowthChart";

export default function SolutionSection() {
  const benefits = [
    {
      number: "01",
      title: "Identify school growth bottlenecks",
      description:
        "Position yourself as an indispensable growth partner to school proprietors, helping them make better decisions across enrolment, finance, operations, and technology.",
    },
    {
      number: "02",
      title: "Build practical enrolment and revenue systems",
      description:
        "Use corporate-grade diagnostic tools and audit templates to uncover operational inefficiencies, financial leakage, and growth opportunities inside private schools.",
    },
    {
      number: "03",
      title: "Deploy modern education technology",
      description:
        "Implement practical EdTech tools, enrolment systems, revenue engines, and operational frameworks that create measurable value for the schools you serve.",
    },
    {
      number: "04",
      title: "Track performance and improve outcomes",
      description:
        "Implement data-driven approaches to monitor and enhance school performance, ensuring sustainable growth and development.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Introduction */}
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Your Opportunity
            </p>

            <h2 className="mt-3 font-sga-heading text-3xl font-extrabold tracking-tight text-sga-navy sm:text-4xl">
              Build a Sustainable Professional Practice
            </h2>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-8 text-sga-slate">
              Through a progressive professional pathway, NoVance equips ambitious African professionals, educators, 
              school leaders, and aspiring consultants with school-growth expertise, proven consulting frameworks, 
              AI-powered tools, client-acquisition strategies, and practical experience to help schools attract more 
              learners, improve performance, increase revenue, and achieve sustainable growth.
            </p>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-8 text-sga-slate">
              Develop the skills, confidence, credentials, tools, and practical experience to diagnose school-growth 
              challenges, develop solutions, mentor school leaders, deliver measurable results, and build a sustainable 
              consulting practice.
            </p>

            <a
              href="/apply"
              className="group mt-8 inline-flex items-center gap-2 rounded-sga bg-sga-amber px-7 py-4 font-sga-body text-base font-bold text-sga-navy transition-all duration-200 hover:-translate-y-1 hover:bg-sga-amber-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-sga-amber focus:ring-offset-2"
            >
              Explore the Programme
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* Benefits */}
          {/* <div className="space-y-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="rounded-sga border border-slate-100 bg-sga-off-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)]"
              >
                <div className="flex gap-5">
                  <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                    {benefit.number}
                  </span>

                  <div>
                    <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 font-sga-body text-base leading-7 text-sga-slate">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-sga bg-sga-navy p-6 shadow-xl sm:p-8">
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sga-emerald/20 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sga-amber/10 blur-3xl"
              />

              <div className="relative">
                <p className="font-sga-body text-sm font-semibold uppercase tracking-[0.18em] text-sga-emerald">
                  Your New Professional Role
                </p>

                <h3 className="mt-4 max-w-md font-sga-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
                  From Education Professional to School Growth Partner
                </h3>

                {/* Growth visual */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <GrowthChart />
                </div>

                <div className="relative mt-8 space-y-5">
                  <div
                    aria-hidden="true"
                    className="absolute left-2.5 top-3 bottom-3 w-px bg-sga-emerald/20"
                  />
                  {benefits.map((item) => (
                    <div key={item.number} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sga-emerald text-xs font-bold text-white">
                        ✓
                      </span>

                      <p className="font-sga-body text-base leading-7 text-slate-200">
                        {item.title}
                      </p>
                    </div>
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