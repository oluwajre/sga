"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ApplyIcon, MenuIcon, WhatsAppIcon } from "../common/Icons";

export default function QuickActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 400);
        ticking = false;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setIsOpen(false);
    }
  }, [isVisible]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 h-36 w-40">
          {/* Scroll to top */}
          <button
            type="button"
            onClick={scrollToTop}
            title="Scroll to top"
            aria-label="Scroll to top"
            className={`absolute left-[58%] top-0 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-sga-emerald text-xl font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sga-emerald/90 focus:outline-none focus:ring-2 focus:ring-sga-emerald focus:ring-offset-2 ${
              isOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none translate-y-7 scale-50 opacity-0"
            }`}
          >
            ↑
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2347044086794"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            aria-label="Message us on WhatsApp"
            onClick={() => setIsOpen(false)}
            className={`absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-x-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 ${
              isOpen
                ? "translate-x-0 scale-100 opacity-100"
                : "pointer-events-none translate-x-7 scale-50 opacity-0"
            }`}
          >
            <WhatsAppIcon />
          </a>

          {/* Apply */}
          <Link
            href="/apply"
            title="Apply"
            aria-label="Apply to School Growth Academy"
            onClick={() => setIsOpen(false)}
            className={`absolute bottom-0 left-[58%] flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-sga-amber text-sga-navy shadow-lg transition-all duration-300 hover:translate-y-1 hover:scale-105 hover:bg-sga-amber-dark focus:outline-none focus:ring-2 focus:ring-sga-amber focus:ring-offset-2 ${
              isOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-7 scale-50 opacity-0"
            }`}
          >
            <ApplyIcon />
          </Link>

          {/* Main menu button */}
          <button
            type="button"
            onClick={toggleMenu}
            title={isOpen ? "Close quick actions" : "Quick actions"}
            aria-label={
              isOpen ? "Close quick actions" : "Open quick actions"
            }
            aria-expanded={isOpen}
            className={`absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sga-navy focus:ring-offset-2 animate-bounce ${
              isOpen
                ? "rotate-90 bg-sga-navy"
                : "bg-sga-emerald hover:-translate-y-[calc(50%+3px)] hover:bg-sga-emerald/90"
            }`}
          >
            <MenuIcon />
          </button>
        </div>
      )}
    </>
  );
}