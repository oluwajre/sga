import { whoShouldJoinData } from "@/components/home/whoShouldJoinData";

export default function AudienceSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <div className="max-w-3xl">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Find Your Place at SGA
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Different Backgrounds. One Opportunity to Build in Education.
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
            SGA brings together people with different experiences, skills, and
            professional backgrounds. Whether you are starting your career,
            transitioning into education, or expanding an existing practice,
            the programme gives you a pathway to develop practical school-growth
            expertise.
          </p>
        </div>

        {/* Audience List */}
        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {whoShouldJoinData.map((audience, index) => (
            <article
              key={audience.title}
              className="group grid gap-6 py-8 md:grid-cols-[80px_1fr] md:items-start md:py-10"
            >
              {/* Number */}
              <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                <h3 className="font-sga-heading text-xl font-bold text-sga-navy transition-colors group-hover:text-sga-emerald md:text-2xl">
                  {audience.title}
                </h3>

                <p className="font-sga-body leading-relaxed text-sga-slate">
                  {audience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}