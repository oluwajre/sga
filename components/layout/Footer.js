import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sga-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/sga-logo-white.png"
                alt="School Growth Academy"
                width={220}
                height={60}
                loading="eager"
                className="h-15 w-auto"
              />
            </Link>

            <p className="mt-5 font-sga-body text-sm leading-relaxed text-slate-300">
              Equipping professionals with the frameworks, tools, and
              strategies to help private schools grow and build sustainable
              educational consulting practices.
            </p>

            <p className="mt-5 font-sga-body text-sm text-slate-400">
              Powered by NoVance Ltd.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-sga-heading text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  About SGA
                </Link>
              </li>

              <li>
                <Link
                  href="/programmes"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Programmes
                </Link>
              </li>

              <li>
                <Link
                  href="/methodology"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Methodology
                </Link>
              </li>

              <li>
                <Link
                  href="/technology"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Technology
                </Link>
              </li>

              <li>
                <Link
                  href="/business-model"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Business Model
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-sga-heading text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/opportunity"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Opportunity Report
                </Link>
              </li>

              <li>
                <Link
                  href="/who-should-join"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Who Should Join
                </Link>
              </li>

              <li>
                <Link
                  href="/why-choose-us"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Why Choose SGA
                </Link>
              </li>

              <li>
                <Link
                  href="/success-stories"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Success Stories
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="font-sga-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-sga-heading text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Get Started
            </h3>

            <p className="mt-5 font-sga-body text-sm leading-relaxed text-slate-300">
              Ready to develop your expertise and build a school growth
              consulting practice?
            </p>

            <div className="mt-6 flex flex-col items-start gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center rounded-sga bg-sga-amber px-5 py-3 font-sga-body text-sm font-bold text-sga-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-sga-amber-dark"
              >
                Apply for the Next Cohort →
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-sga border border-white/30 px-5 py-3 font-sga-body text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-sga-navy"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
            <p className="font-sga-body text-slate-400">
              © {new Date().getFullYear()} School Growth Academy. All rights
              reserved.
            </p>

            {/* <div className="flex gap-6">
              <span className="font-sga-body text-slate-500">
                Privacy Policy
              </span>

              <span className="font-sga-body text-slate-500">
                Terms & Conditions
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}