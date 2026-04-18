"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, WHATSAPP_LINK } from "@/lib/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const location = usePathname();

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const heroSection = main.querySelector(":scope > section");
    if (!heroSection) return;

    const header = document.querySelector("header");
    const headerHeight = header?.offsetHeight ?? 0;

    const handleScroll = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      setScrolled(heroBottom <= headerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    setIsOpen(false);
    setExpandedSubmenu(null);
  }, [location]);

  const isDarkPage =
    location === "/" ||
    location === "/ensaios" ||
    location.startsWith("/ensaios/") ||
    location.startsWith("/area/") ||
    location === "/servicos" ||
    location === "/psicologia-cientifica" ||
    location.startsWith("/psicologia-cientifica/");
  const isDepoimentos = location === "/depoimentos";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_oklch(0.88_0.02_75)]"
          : isDepoimentos
            ? "bg-cream"
            : isDarkPage
              ? "bg-night/60 backdrop-blur-sm"
              : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4 lg:py-5">
        <Link href="/" className="group">
          <div className="flex flex-col">
            <span
              className={`font-display text-xl lg:text-2xl font-semibold tracking-wide transition-colors duration-500 ${
                scrolled
                  ? "text-foreground"
                  : isDarkPage
                    ? "text-warm-100"
                    : "text-foreground"
              }`}
            >
              Israel Machado
            </span>
            <span
              className={`font-sans text-[10px] lg:text-xs tracking-[0.25em] uppercase transition-colors duration-500 ${
                scrolled
                  ? "text-muted-foreground"
                  : isDarkPage
                    ? "text-warm-400"
                    : "text-muted-foreground"
              }`}
            >
              Psicólogo Clínico
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive =
              location === item.href ||
              (item.children?.some((c) => c.href === location) ?? false);

            const baseLinkClasses = `font-sans text-sm tracking-wide transition-colors duration-300 hover:text-marsala flex items-center gap-1 ${
              isActive
                ? scrolled
                  ? "text-marsala font-medium"
                  : isDarkPage
                    ? "text-bronze-light font-medium"
                    : "text-marsala font-medium"
                : scrolled
                  ? "text-foreground/70"
                  : isDarkPage
                    ? "text-warm-200 hover:text-warm-100"
                    : "text-foreground/70"
            }`;

            if (item.children) {
              return (
                <div key={item.label} className="relative group">
                  <Link href={item.href} className={baseLinkClasses}>
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-ivory border border-border/50 rounded-sm shadow-lg py-2 min-w-[240px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-5 py-2.5 font-sans text-sm transition-colors hover:bg-cream hover:text-marsala ${
                            location === child.href
                              ? "text-marsala font-medium bg-cream/60"
                              : "text-foreground/75"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={baseLinkClasses}>
                {item.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-marsala text-primary-foreground font-sans text-sm tracking-wide rounded-sm hover:bg-marsala-light transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2.5 transition-colors duration-500 ${
            scrolled
              ? "text-foreground"
              : isDarkPage
                ? "text-warm-100"
                : "text-foreground"
          }`}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ivory/98 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item) => {
                if (item.children) {
                  const isExpanded = expandedSubmenu === item.label;
                  return (
                    <div
                      key={item.label}
                      className="border-b border-border/40 last:border-b-0"
                    >
                      <button
                        onClick={() =>
                          setExpandedSubmenu(isExpanded ? null : item.label)
                        }
                        className="w-full flex items-center justify-between font-sans text-base py-3.5 text-foreground/80"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-3 flex flex-col gap-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`font-sans text-sm py-3 transition-colors ${
                                    location === child.href
                                      ? "text-marsala font-medium"
                                      : "text-foreground/65 hover:text-marsala"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-sans text-base py-3.5 border-b border-border/40 last:border-b-0 transition-colors ${
                      location === item.href
                        ? "text-marsala font-medium"
                        : "text-foreground/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-marsala text-primary-foreground font-sans text-sm tracking-wide rounded-sm mt-4"
              >
                <Phone className="w-4 h-4" />
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
