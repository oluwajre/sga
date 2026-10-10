export default function ProblemCard({ number, title, reality, opportunity, }) {
  return (
    <article className="h-full rounded-sga border border-slate-200 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-sga-emerald/30 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.12)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sga-emerald/10 font-sga-heading text-sm font-extrabold text-sga-emerald">
        {number}
      </div>
      <h3 className="font-sga-heading text-xl font-extrabold leading-tight text-sga-navy">
        {title}
      </h3>

      <div className="mt-5">
        <p className="font-sga-body text-xs font-bold uppercase tracking-[0.12em] text-sga-slate">
          The Reality
        </p>

        <p className="mt-2 font-sga-body text-[15px] leading-7 text-sga-slate">
          {reality}
        </p>
      </div>

      {opportunity && (
        <div className="mt-6 border-t border-slate-200 pt-6">
          <p className="font-sga-body text-xs font-bold uppercase tracking-[0.12em] text-sga-emerald">
            The Consultant Opportunity
          </p>
          
          <p className="mt-2 font-sga-body text-[15px] leading-7 text-sga-slate">
            {opportunity}
          </p>
        </div>
      )}
      
    </article>
  );
}