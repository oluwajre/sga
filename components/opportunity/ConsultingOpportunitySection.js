export default function ConsultingOpportunitySection() {
  const services = [
    {
      number: "01",
      title: "Bad-Debt Recovery & Fee Restructuring",
      description:
        "Help schools strengthen fee collection, recover outstanding revenue, and build better fee-management systems.",
    },
    {
      number: "02",
      title: "Student Enrolment & Parent Conversion",
      description:
        "Improve school marketing, admissions processes, front-desk conversion, and parent retention.",
    },
    {
      number: "03",
      title: "Teacher KPI & Payroll Models",
      description:
        "Help schools align staff performance, accountability, productivity, and payroll with institutional goals.",
    },
    {
      number: "04",
      title: "Digital Learning & CBT Deployment",
      description:
        "Deploy EdMetrics AI and LearnNova to support analytics, digital learning, CBT, and better school operations.",
    },
    {
      number: "05",
      title: "Governance & Multi-Campus Scaling",
      description:
        "Support school leaders with governance structures, performance controls, and strategies for sustainable expansion.",
    },
  ];

  return (
    <section className="bg-sga-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            The Consulting Opportunity
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Five Ways to Create Value for Private Schools.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-slate-300">
            School Growth Mentors can help school owners solve practical
            problems across revenue, enrolment, staffing, technology, and
            institutional growth.
          </p>
        </div>

        {/* Consulting pathway */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          {/* Vertical connector */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 hidden w-px bg-linear-to-b from-sga-emerald/60 via-sga-emerald/20 to-transparent md:block"
          />

          <div className="space-y-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-sga border border-slate-700/80 bg-slate-900/60 p-6 transition-all duration-300 hover:border-sga-emerald/40 hover:bg-slate-900 md:p-7"
              >
                <div className="flex gap-5 md:gap-7">
                  {/* Service number */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sga-emerald/30 bg-sga-navy font-sga-heading text-sm font-extrabold text-sga-emerald transition-all duration-300 group-hover:border-sga-emerald group-hover:bg-sga-emerald group-hover:text-white">
                    {service.number}
                  </div>

                  {/* Service content */}
                  <div className="min-w-0">
                    <h3 className="font-sga-heading text-xl font-bold text-white md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-3xl font-sga-body leading-relaxed text-slate-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing message */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div className="mx-auto mb-5 h-px w-12 bg-sga-emerald/60" />

          <p className="font-sga-heading text-xl font-bold text-white md:text-2xl">
            Build Expertise Around Real School Needs.
          </p>

          <p className="mt-3 font-sga-body leading-relaxed text-slate-300">
            Develop the frameworks, tools, and practical capabilities to turn
            school challenges into structured consulting opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}