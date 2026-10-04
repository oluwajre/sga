import Image from "next/image";

export default function WhoShouldJoinHero() {
  const audiences = [
    "Graduates",
    "Educators",
    "Consultants",
    "Professionals",
    "School Leaders",
  ];

  return (
    <section className="relative overflow-hidden bg-sga-navy py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              Who Should Join SGA
            </p>

            <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Built for Professionals Ready to Build in the Education Sector.
            </h1>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              School Growth Academy is designed for ambitious graduates, young
              adults, professionals, educators, consultants, and school leaders
              who want to develop practical school-growth expertise and create
              meaningful opportunities in the education sector.
            </p>

            {/* Audience groups */}
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
              {audiences.map((audience, index) => (
                <div key={audience} className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sga-emerald/40 font-sga-body text-xs font-bold text-sga-emerald">
                    {index + 1}
                  </span>

                  <span className="font-sga-body text-sm font-medium text-slate-300">
                    {audience}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-sga">
              <Image
                src="/images/who-should-join/who-should-join-hero.jpg"
                alt="Professionals and educators collaborating in a school growth environment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-sga-navy/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-sga border border-sga-emerald/30 bg-sga-emerald/10" />
          </div>
        </div>
      </div>
    </section>
  );
}