import Image from "next/image";

export default function WhoShouldJoinCard({
  title,
  description,
  icon,
  image,
}) {
  return (
    <article className="group overflow-hidden rounded-sga border border-slate-100 bg-white shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)] transition-[box-shadow,transform] duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-[0_12px_30px_-4px_rgba(10,25,47,0.14)] motion-reduce:hover:translate-y-0">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 motion-reduce:transition-none motion-reduce:transform-none group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />

        {/* Image overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-sga-navy/70 via-sga-navy/10 to-transparent"
        />

        {/* Icon */}
        <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-sga-emerald shadow-lg backdrop-blur-sm">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-sga-heading text-xl font-bold leading-snug text-sga-navy">
          {title}
        </h3>

        <p className="mt-3 font-sga-body text-base leading-relaxed text-sga-slate">
          {description}
        </p>
      </div>
    </article>
  );
}