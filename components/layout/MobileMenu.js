"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "./navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function isActiveRoute(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const isApplyPage = pathname === "/apply" || pathname.startsWith("/apply/");

  return (
    <div className="relative md:hidden">
      {/* Menu Button */}
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="rounded-md p-2 text-sga-navy transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sga-emerald focus:ring-offset-2"
      >
        <span aria-hidden="true" className="text-xl leading-none">
          {isOpen ? "✕" : "☰"}
        </span>
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute right-0 top-14 z-50 w-[calc(100vw-3rem)] max-w-sm rounded-sga border border-slate-200 bg-white px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sga-body text-base font-medium transition-colors ${
                    isActive
                      ? "text-sga-emerald"
                      : "text-sga-slate hover:text-sga-emerald"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className={`mt-2 rounded-sga px-5 py-3 text-center font-sga-body text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                isApplyPage
                  ? "bg-sga-emerald text-white"
                  : "bg-sga-amber text-sga-navy hover:bg-sga-amber-dark"
              }`}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}