export default function HowItWorksStep({ number, title, description }) {
  return (
    <div className="group relative">
        <div className="mb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sga-emerald font-sga-heading text-lg font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sga-emerald/20">
                {number}
            </div>

            <div
                aria-hidden="true"
                className="mt-3 h-1 w-8 rounded-full bg-sga-emerald/30 transition-all duration-300 group-hover:w-12 group-hover:bg-sga-emerald"
            />
        </div>

        <h3 className="mb-3 font-sga-heading text-xl font-bold text-sga-navy">
            {title}
        </h3>

        <p className="font-sga-body text-base leading-relaxed text-sga-slate">
            {description}
        </p>
    </div>
  );
}