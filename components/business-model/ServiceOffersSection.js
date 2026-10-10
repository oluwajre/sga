export default function ServiceOffersSection() {
  const services = [
    {
      number: "01",
      title: "Bad-Debt Recovery & Fee Restructuring",
      description:
        "Help schools improve fee collection, address outstanding balances, structure recovery plans, and strengthen revenue controls.",
    },
    {
      number: "02",
      title: "Student Enrolment & Parent Conversion",
      description:
        "Help schools strengthen admissions, parent acquisition, conversion, communication, and retention systems to support sustainable enrolment growth.",
    },
    {
      number: "03",
      title: "Teacher KPI & Payroll Models",
      description:
        "Help school leaders establish clearer performance expectations, teacher KPIs, compensation structures, and payroll models.",
    },
    {
      number: "04",
      title: "Digital Learning & CBT Deployment",
      description:
        "Support schools in adopting practical digital learning, analytics, and Computer-Based Testing solutions that improve educational and operational processes.",
    },
    {
      number: "05",
      title: "Governance & Multi-Campus Scaling",
      description:
        "Help growing school organisations strengthen governance, accountability, leadership structures, and systems for sustainable multi-campus expansion.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Potential Service Offers
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Five Ways to Create Value for Private Schools.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
            School growth professionals can build specialised offers around
            specific challenges faced by private schools. These service areas
            provide practical starting points for developing your consulting
            portfolio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-sga border border-slate-200 bg-sga-off-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)] md:p-7"
            >
              <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                {service.number}
              </span>

              <h3 className="mt-4 font-sga-heading text-xl font-bold text-sga-navy">
                {service.title}
              </h3>

              <p className="mt-3 font-sga-body leading-relaxed text-sga-slate">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-sga border border-sga-emerald/20 bg-sga-navy p-7 md:p-9">
          <p className="font-sga-heading text-xl font-bold text-white md:text-2xl">
            Start With the Problem You Can Solve Best.
          </p>

          <p className="mt-3 max-w-3xl font-sga-body leading-relaxed text-slate-300">
            You do not need to offer every service. Build your positioning
            around the problems you understand, develop a clear solution, and
            expand your service portfolio as your expertise and client base
            grow.
          </p>
        </div>
      </div>
    </section>
  );
}