import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Instagram, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  {
    label: "Principais Áreas",
    href: "/#areas",
    children: [
      { label: "Depressão", href: "/area/depressao" },
      { label: "Ansiedade", href: "/area/ansiedade" },
      { label: "Luto Prolongado e Perdas", href: "/area/luto" },
      { label: "Quando a dor não tem nome", href: "/area/dor-sem-nome" },
    ],
  },
  { label: "Serviços", href: "/servicos" },
  { label: "Psicologia Científica", href: "/psicologia-cientifica" },
  { label: "Ensaios", href: "/ensaios" },
  { label: "Depoimentos", href: "/depoimentos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const heroSection = main.querySelector(":scope > section");
    if (!heroSection) return;

    const header = document.querySelector("header");
    const headerHeight = header?.offsetHeight ?? 0;

    // The header changes style when its bottom edge passes the hero's bottom edge,
    // i.e. when the header "touches" the second section.
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

  // Determine if we're on a dark-hero page (ensaios and area detail pages have dark backgrounds)
  const isDarkPage = location === "/" || location === "/ensaios" || location.startsWith("/ensaios/") || location.startsWith("/area/") || location === "/servicos" || location === "/psicologia-cientifica";
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
            <span className={`font-display text-xl lg:text-2xl font-semibold tracking-wide transition-colors duration-500 ${
              scrolled ? "text-foreground" : isDarkPage ? "text-warm-100" : "text-foreground"
            }`}>
              Israel Machado
            </span>
            <span className={`font-sans text-[10px] lg:text-xs tracking-[0.25em] uppercase transition-colors duration-500 ${
              scrolled ? "text-muted-foreground" : isDarkPage ? "text-warm-400" : "text-muted-foreground"
            }`}>
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
                  {/* Dropdown */}
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
            scrolled ? "text-foreground" : isDarkPage ? "text-warm-100" : "text-foreground"
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
                    <div key={item.label} className="border-b border-border/40 last:border-b-0">
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

export function Footer() {
  return (
    <footer className="bg-night text-warm-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-warm-100 mb-3">
              Israel Machado
            </h3>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-warm-400 mb-4">
              Psicólogo Clínico &middot; CRP 07/43950
            </p>
            <p className="font-body text-sm text-warm-300 leading-relaxed">
              Psicoterapia psicanalítica. Atendimento presencial e online.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-bronze mb-4">
              Navegação
            </h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-warm-300 hover:text-warm-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-bronze mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-warm-300">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                (54) 99914-1101
              </a>
              <a
                href="https://www.instagram.com/israelkmachado"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-100 transition-colors flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5" />
                @israelkmachado
              </a>
              <p className="text-warm-400 text-xs mt-2">Passo Fundo, RS</p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-warm-500">
            &copy; {new Date().getFullYear()} Israel Machado. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-warm-600">
            CRP 07/43950
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
