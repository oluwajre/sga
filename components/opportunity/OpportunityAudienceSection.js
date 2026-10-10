import { whoShouldJoinData } from "@/components/home/whoShouldJoinData";

const audienceAdvantages = {
  "Fresh Graduates (NYSC) & Career Transitioners":
    "A practical pathway to build consulting and education-business experience.",
  "Classroom Teachers & School Administrators":
    "Existing education experience becomes a strong foundation for school-growth work.",
  "Independent Business Consultants & Trainers":
    "Add specialised school-growth services to an existing consulting practice.",
  "EdTech Enthusiasts & Sales Professionals":
    "Apply technology, marketing, and sales skills to real school-growth opportunities.",
  "School Owners & Leaders":
    "Understand growth systems that can be applied directly within your own institution.",
};

export default function OpportunityAudienceSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Who Can Pursue This Opportunity
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Different Backgrounds. One Opportunity to Build in Education.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
            Your existing skills and experience can become a foundation for
            developing specialised school-growth expertise and creating value
            for private schools.
          </p>
        </div>

        {/* Audience pathways */}
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-sga border border-slate-200 bg-sga-off-white">
          {whoShouldJoinData.map((audience, index) => (
            <article
              key={audience.title}
              className="group border-b border-slate-200 last:border-b-0"
            >
              <div className="grid gap-5 p-6 md:grid-cols-[80px_1fr_1fr] md:items-center md:p-7">
                {/* Number */}
                <div className="flex items-center gap-4 md:block">
                  <span className="font-sga-heading text-3xl font-extrabold text-sga-emerald/30 transition-colors duration-300 group-hover:text-sga-emerald">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-sga-body text-xs font-bold uppercase tracking-widest text-slate-400 md:hidden">
                    Audience
                  </span>
                </div>

                {/* Audience */}
                <div>
                  <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                    {audience.title}
                  </h3>

                  <p className="mt-2 font-sga-body text-sm leading-relaxed text-sga-slate">
                    {audience.description}
                  </p>
                </div>

                {/* Opportunity */}
                <div className="relative border-l-0 pt-4 md:border-l md:border-slate-200 md:pl-7 md:pt-0">
                  <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                    Your Advantage
                  </p>

                  <p className="mt-2 font-sga-body leading-relaxed text-sga-slate">
                    {audienceAdvantages[audience.title]}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Link */}
        <div className="mt-10 text-center">
          <a
            href="/who-should-join"
            className="inline-flex items-center gap-2 rounded-full border border-sga-emerald/30 px-5 py-2.5 font-sga-body text-sm font-bold text-sga-emerald transition-all duration-200 hover:border-sga-emerald hover:bg-sga-emerald hover:text-white"
          >
            See Who SGA Is Designed For
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}