export default function TechnologyStackSection() {
  const categories = [
    {
      number: "01",
      title: "NoVance EdMetrics AI",
      subtitle: "School Performance Intelligence",
      description:
        "A planned AI-powered platform designed to turn school data into actionable growth intelligence and support better strategic decisions.",
      areas: [
        "Enrolment and admissions",
        "Student retention",
        "Revenue and financial performance",
        "Academic and operational performance",
      ],
      flow: "Data → Insight → Strategy → Action → Growth",
      status: "Planned solution",
      accent: "emerald",
    },
    {
      number: "02",
      title: "AI Growth Tools",
      subtitle: "Intelligence & Productivity",
      description:
        "Learn to apply AI responsibly to research, analysis, strategy, communication, problem-solving, and everyday consulting work.",
      areas: [
        "Market and competitor research",
        "School performance analysis",
        "Growth strategies and marketing content",
        "Proposals, reports, and training resources",
        "Repetitive task automation",
      ],
      flow: "AI → Productivity → Better Delivery",
      accent: "amber",
    },
    {
      number: "03",
      title: "Digital Marketing & Lead Generation",
      subtitle: "Attract the Right Parents",
      description:
        "Use digital marketing capabilities to improve school visibility, reach prospective parents, and generate enquiries.",
      areas: [
        "Google Search and advertising",
        "Meta advertising and social media",
        "Content marketing and search visibility",
        "Campaign management",
        "Lead generation and conversion tracking",
      ],
      flow: "Visibility → Traffic → Leads",
      accent: "blue",
    },
    {
      number: "04",
      title: "CRM & Sales Conversion",
      subtitle: "Turn Enquiries into Enrolments",
      description:
        "Understand how structured customer relationship management supports prospective parents from first contact through enrolment.",
      areas: [
        "Capture and organise enquiries",
        "Qualify prospective parents",
        "Track follow-ups",
        "Manage the admissions pipeline",
        "Monitor sales and conversion performance",
      ],
      flow: "Lead → Nurture → Convert → Enrol",
      accent: "violet",
    },
    {
      number: "05",
      title: "Marketing & Sales Automation",
      subtitle: "Do More. Follow Up Better. Scale Faster.",
      description:
        "Apply automation to reduce repetitive work and improve consistency across marketing, admissions, sales, and customer engagement.",
      areas: [
        "Lead capture and qualification",
        "Follow-up and email communication",
        "Appointment scheduling and notifications",
        "Task assignment and customer nurturing",
        "Reporting workflows",
      ],
      flow: "Capture → Automate → Follow Up → Convert",
      accent: "orange",
    },
    {
      number: "06",
      title: "Digital Learning & Engagement",
      subtitle: "Extend Learning Beyond the Classroom",
      description:
        "Explore learning technologies that support learning continuity, student engagement, assessment, and communication beyond the classroom.",
      areas: [
        "Digital classrooms and home learning",
        "Assessments and CBT",
        "Digital learning resources",
        "Student engagement",
        "Parent access and learning analytics",
      ],
      flow: "Learn → Engage → Measure → Improve",
      accent: "teal",
    },
    {
      number: "07",
      title: "Business Intelligence & Analytics",
      subtitle: "Measure What Matters",
      description:
        "Use analytics and dashboards to understand performance, identify gaps, and evaluate whether growth initiatives are working.",
      areas: [
        "Enrolment and admissions conversion",
        "Student retention",
        "Revenue and customer acquisition",
        "Marketing performance",
        "Academic performance and operational efficiency",
      ],
      flow: "Measure → Understand → Improve",
      accent: "indigo",
    },
    {
      number: "08",
      title: "Productivity & Collaboration",
      subtitle: "Work Smarter. Deliver Better.",
      description:
        "Apply practical productivity and collaboration tools to organise consulting work, coordinate projects, and deliver recommendations consistently.",
      areas: [
        "Organise work and collaborate",
        "Manage client projects",
        "Document recommendations",
        "Present insights and findings",
        "Track implementation and client delivery",
      ],
      flow: "Organise → Collaborate → Deliver",
      accent: "slate",
    },
  ];

  const accentStyles = {
    emerald: {
      top: "border-t-emerald-500",
      number: "bg-emerald-50 text-emerald-700",
      flow: "bg-emerald-50 text-emerald-800",
    },
    amber: {
      top: "border-t-amber-500",
      number: "bg-amber-50 text-amber-700",
      flow: "bg-amber-50 text-amber-800",
    },
    blue: {
      top: "border-t-blue-500",
      number: "bg-blue-50 text-blue-700",
      flow: "bg-blue-50 text-blue-800",
    },
    violet: {
      top: "border-t-violet-500",
      number: "bg-violet-50 text-violet-700",
      flow: "bg-violet-50 text-violet-800",
    },
    orange: {
      top: "border-t-orange-500",
      number: "bg-orange-50 text-orange-700",
      flow: "bg-orange-50 text-orange-800",
    },
    teal: {
      top: "border-t-teal-500",
      number: "bg-teal-50 text-teal-700",
      flow: "bg-teal-50 text-teal-800",
    },
    indigo: {
      top: "border-t-indigo-500",
      number: "bg-indigo-50 text-indigo-700",
      flow: "bg-indigo-50 text-indigo-800",
    },
    slate: {
      top: "border-t-slate-500",
      number: "bg-slate-100 text-slate-700",
      flow: "bg-slate-100 text-slate-800",
    },
  };

  return (
    <section className="bg-sga-off-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-[0.18em] text-sga-emerald">
            The SGA Technology Stack
          </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            The Right Technology. The Right Data. The Right Actions.
            </h2>

          <p className="mt-6 font-sga-body text-base leading-8 text-slate-600 md:text-lg">
            SGA connects AI, data intelligence, digital marketing, CRM,
            automation, learning technology, and productivity tools to help
            School Growth Mentors and Educational Business Consultants work
            smarter, make better decisions, deliver practical solutions, and
            help schools achieve measurable growth.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const styles = accentStyles[category.accent];

            return (
              <article
                key={category.number}
                className={`flex h-full flex-col rounded-sga border border-slate-200 border-t-4 ${styles.top} bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-sga-heading text-sm font-bold ${styles.number}`}
                  >
                    {category.number}
                  </span>

                  {category.status && (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {category.status}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-sga-heading text-xl font-bold leading-snug text-sga-navy">
                  {category.title}
                </h3>

                <h4 className="mt-2 font-sga-body text-sm font-semibold leading-6 text-sga-emerald">
                  {category.subtitle}
                </h4>

                <p className="mt-4 font-sga-body text-sm leading-7 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-5">
                  <p className="font-sga-body text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key areas
                  </p>

                  <ul className="mt-3 space-y-2.5">
                    {category.areas.map((area) => (
                      <li
                        key={area}
                        className="flex items-start gap-2 font-sga-body text-sm leading-6 text-slate-700"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sga-emerald"
                        />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <div
                    className={`rounded-xl p-3 ${styles.flow}`}
                  >
                    <p className="font-sga-body text-xs font-bold uppercase tracking-wider opacity-80">
                      Growth pathway
                    </p>
                    <p className="mt-2 font-sga-heading text-sm font-semibold leading-6">
                      {category.flow}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-sga bg-sga-navy p-6 text-center sm:p-8 md:p-10">
          <p className="font-sga-heading text-xl font-bold text-white sm:text-2xl">
            Technology Should Work Together, Not in Isolation.
          </p>
          <p className="mx-auto mt-3 max-w-3xl font-sga-body text-sm leading-7 text-slate-300 sm:text-base">
            The goal is not to use more tools for their own sake. It is to
            connect the right capabilities to real school-growth challenges,
            practical decisions, consistent implementation, and measurable
            outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}