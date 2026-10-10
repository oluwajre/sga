import Link from "next/link";

export default function CTASection({
  className,
  eyebrow,
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}) {
  return (
    <section className={className || "bg-sga-off-white py-20 md:py-24"}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-sga bg-sga-navy px-8 py-12 text-center md:px-12 md:py-16">
          {eyebrow && (
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-5 max-w-2xl font-sga-body text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryText && primaryHref && (
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-sga bg-sga-amber px-7 py-3.5 font-sga-body text-sm font-bold text-sga-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-sga-amber-dark hover:text-white"
              >
                {primaryText}
              </Link>
            )}

            {secondaryText && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-sga border border-slate-500 px-7 py-3.5 font-sga-body text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-sga-navy"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}