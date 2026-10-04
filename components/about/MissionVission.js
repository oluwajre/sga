export default function MissionVision() {
  return (
    <section className="bg-sga-off-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            What Drives Us
          </p>

          <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            A Clear Purpose. A Bigger Vision.
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
            We are building the people, capabilities, and professional network
            needed to support stronger and more sustainable private schools
            across Africa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <div className="rounded-sga bg-sga-navy p-8 md:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sga-emerald text-xl font-bold text-white">
              M
            </div>

            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Our Mission
            </p>

            <h3 className="mt-4 font-sga-heading text-2xl font-extrabold leading-tight text-white md:text-3xl">
              To empower ambitious professionals to build sustainable
              mentorship and consulting practices while transforming African
              education.
            </h3>

            <p className="mt-5 font-sga-body text-base leading-relaxed text-slate-300">
              We empower ambitious graduates, young adults, professionals,
              educators, and school leaders with field-tested business acumen,
              growth frameworks, and EdTech tools to build sustainable
              mentorship and consulting practices while transforming African
              education.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-sga bg-white p-8 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)] md:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sga-amber text-xl font-bold text-sga-navy">
              V
            </div>

            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-amber-dark">
              Our Vision
            </p>

            <h3 className="mt-4 font-sga-heading text-2xl font-extrabold leading-tight text-sga-navy md:text-3xl">
              To build Africa&apos;s largest network of certified school growth
              mentors and educational business consultants.
            </h3>

            <p className="mt-5 font-sga-body text-base leading-relaxed text-sga-slate">
              Our vision is to build a professional network capable of driving
              operational excellence across 15,000+ private schools and
              contributing to sustainable growth across the African education
              sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}