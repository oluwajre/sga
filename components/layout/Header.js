"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { navigation } from "./navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  function isActiveRoute(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const isApplyPage = pathname === "/apply" || pathname.startsWith("/apply/");

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className={`font-sga-heading text-xl font-extrabold tracking-tight transition-colors ${
            pathname === "/"
              ? "text-sga-emerald"
              : "text-sga-navy hover:text-sga-emerald"
          }`}
        >
          <Image
            src="/images/logos/sga-logo.png"
            alt="School Growth Academy"
            width={220}
            height={60}
            loading="eager"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const isActive = isActiveRoute(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sga-body text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sga-emerald"
                    : "text-sga-slate hover:text-sga-emerald"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <Link
          href="/apply"
          className={`hidden rounded-sga px-5 py-2.5 font-sga-body text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 md:block ${
            isApplyPage
              ? "bg-sga-emerald text-white"
              : "bg-sga-amber text-sga-navy hover:bg-sga-amber-dark"
          }`}
        >
          Apply Now
        </Link>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}