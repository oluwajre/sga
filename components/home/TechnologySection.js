import Link from "next/link";
import { AnalyticsIcon, LearningIcon, ToolsIcon } from "../common/Icons";

const technologies = [
  {
    name: "EdMetrics AI Integration",
    category: "Planned AI & Analytics",
    icon: <AnalyticsIcon className="h-6 w-6 text-sga-emerald transition-transform duration-300 group-hover:scale-105" />,
    description:
      "A planned AI-powered school performance and analytics solution designed to help school leaders interpret data, identify improvement opportunities, and make more informed decisions.",
  },
  {
    name: "LearnNova Deployment",
    category: "Digital Learning & CBT",
    icon: <LearningIcon className="h-6 w-6 text-sga-emerald transition-transform duration-300 group-hover:scale-105" />,
    description:
      "Deploy LearnNova's digital learning and Computer-Based Testing tools to support teaching, assessments, and learning in African school environments, including settings with limited internet connectivity.",
  },
  {
    name: "Mentorship & Consulting Toolkit",
    category: "Practical Consulting Tools",
    icon: <ToolsIcon className="h-6 w-6 text-sga-emerald transition-transform duration-300 group-hover:scale-105" />,
    description:
      "Use practical consulting resources, diagnostic templates, enrolment-planning tools, and other materials to structure school assessments, develop recommendations, and support client engagements.",
  },
];

export default function TechnologySection() {
  return (
    <section className="bg-sga-off-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Technology & Tools
          </p>

          <h2 className="mt-3 font-sga-heading text-3xl font-extrabold tracking-tight text-sga-navy sm:text-4xl">
            Technology That Turns School Growth Strategy into Action
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-8 text-sga-slate">
            At SGA, technology is not for its own sake. We combine school
            performance data, AI-powered insights, digital learning, and practical
            productivity tools to help School Growth Mentors and Educational
            Business Consultants understand challenges, make informed decisions,
            implement solutions, and support measurable school growth.
          </p>
        </div>

        {/* Technology cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {technologies.map((technology) => (
            <article
              key={technology.name}
              className="group relative overflow-hidden rounded-sga border border-slate-100 bg-white p-7 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sga-emerald/30 hover:shadow-[0_12px_30px_-4px_rgba(10,25,47,0.14)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sga bg-sga-emerald/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-sga-emerald/15">
                {technology.icon}
              </div>

              <p className="mt-6 inline-flex rounded-full bg-sga-emerald/10 px-3 py-1 font-sga-body text-xs font-bold uppercase tracking-wider text-sga-emerald">
                {technology.category}
              </p>

              <h3 className="mt-2 font-sga-heading text-xl font-bold text-sga-navy">
                {technology.name}
              </h3>

              <p className="mt-3 font-sga-body text-base leading-7 text-sga-slate">
                {technology.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/technology"
            className="group inline-flex items-center gap-2 font-sga-body text-base font-bold text-sga-emerald transition-colors duration-200 hover:text-sga-navy focus:outline-none focus:ring-2 focus:ring-sga-emerald focus:ring-offset-4 focus:ring-offset-sga-off-white"
          >
            Explore the Technology
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}