import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ChevronRight, Clock } from "lucide-react";
import { useState } from "react";
import { tagToSlug } from "@/lib/posts";

const ENSAIOS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/ensaios-bg-WAg25f8JNsacXt3yywyAFo.webp";
const DIVA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/Div%C3%A3_d27d6338.jpeg";

type CategoryName = "Mitos e Símbolos" | "Psicologia e Realidade" | "Psicologia e Literatura";

interface Essay {
  title: string;
  href: string;
  available: boolean;
  tags: string[];
}

const categories: { title: CategoryName; essays: Essay[] }[] = [
  {
    title: "Mitos e Símbolos",
    essays: [
      {
        title: "Antígona — Sombras Disfarçadas de Luz",
        href: "/ensaios/antigona",
        available: true,
        tags: ["tragédia grega", "sófocles", "hamartia", "sabedoria"],
      },
      {
        title: "A Grande Conversação",
        href: "#",
        available: false,
        tags: ["tradição", "cultura"],
      },
      {
        title: "O que é um mito",
        href: "#",
        available: false,
        tags: ["mito", "símbolo"],
      },
    ],
  },
  {
    title: "Psicologia e Realidade",
    essays: [
      {
        title: "Percepção e Realidade",
        href: "#",
        available: false,
        tags: ["percepção", "realidade"],
      },
    ],
  },
  {
    title: "Psicologia e Literatura",
    essays: [
      {
        title: "O apanhador no campo de centeio — Salinger",
        href: "#",
        available: false,
        tags: ["literatura", "salinger", "adolescência"],
      },
    ],
  },
];

const filterOptions: { label: string; value: CategoryName | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Mitos e Símbolos", value: "Mitos e Símbolos" },
  { label: "Psicologia e Realidade", value: "Psicologia e Realidade" },
  { label: "Psicologia e Literatura", value: "Psicologia e Literatura" },
];

export default function Ensaios() {
  const [activeFilter, setActiveFilter] = useState<CategoryName | "todos">("todos");

  const visibleCategories =
    activeFilter === "todos"
      ? categories
      : categories.filter((c) => c.title === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex items-center">
        <div className="absolute inset-0">
          <img src={ENSAIOS_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/80 to-night/65" />
        </div>
        <div className="container relative z-10 pt-28 pb-12 lg:pt-32 lg:pb-16">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[1px] bg-bronze-light" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-warm-200">
                  Ensaios
                </span>
              </div>
              <blockquote>
                <p className="font-display text-base sm:text-lg lg:text-xl text-white italic leading-relaxed mb-3">
                  "Minha tarefa, aquela que estou tentando realizar, é, pelo poder da palavra escrita, levar você a ouvir, e a sentir — é, antes de tudo, levar você a ver. Nada mais além disso, e isso é tudo."
                </p>
                <footer className="font-sans text-xs text-warm-300">
                  — Joseph Conrad
                </footer>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introdução geral */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="font-body text-base lg:text-lg text-foreground/85 leading-[1.85] mb-6">
                Aqui me dedico, humildemente, a cumprir esta tarefa que define a função de um escritor — e por que não, à sua maneira, de um psicólogo.
              </p>
              <p className="font-body text-base lg:text-lg text-foreground/85 leading-[1.85]">
                Se cabe a cada ser humano o seu quinhão de contribuição neste tesouro comum chamado Tradição e Cultura, utilizarei também o poder da palavra escrita a fim de levar o leitor a ver algo do que há para ser visto, ouvido e sentido nos grandes mitos e símbolos a seguir.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Essays list */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">

            {/* Filtros por categoria */}
            <FadeIn>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-[1px] bg-bronze" />
                  <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                    Filtrar por categoria
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {filterOptions.map((opt) => {
                    const isActive = activeFilter === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => setActiveFilter(opt.value)}
                        className={`px-4 py-3 font-sans text-xs sm:text-sm tracking-wide rounded-sm border transition-all duration-300 ${
                          isActive
                            ? "bg-marsala text-primary-foreground border-marsala shadow-sm"
                            : "bg-ivory text-foreground/70 border-border/60 hover:border-marsala/40 hover:text-marsala"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {visibleCategories.map((cat, ci) => (
              <FadeIn key={cat.title} delay={ci * 0.1}>
                <div className="mb-14 last:mb-0" data-category={cat.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-[2px] bg-marsala" />
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {cat.essays.map((essay) => (
                      <div key={essay.title} data-category={cat.title}>
                        {essay.available ? (
                          <div className="relative p-6 bg-ivory border-l-4 border-l-marsala border border-border/60 rounded-sm hover:shadow-lg hover:border-l-marsala-light transition-all duration-300 group">
                            <Link
                              href={essay.href}
                              className="absolute inset-0 z-0"
                              aria-label={essay.title}
                            />
                            <div className="relative z-10 flex items-center justify-between mb-3 pointer-events-none">
                              <h4 className="font-display text-lg sm:text-xl font-semibold text-foreground group-hover:text-marsala transition-colors">
                                {essay.title}
                              </h4>
                              <ChevronRight className="w-5 h-5 text-marsala group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </div>
                            {essay.tags.length > 0 && (
                              <div className="relative z-10 flex flex-wrap gap-1.5">
                                {essay.tags.map((tag) => (
                                  <Link
                                    key={tag}
                                    href={`/tag/${tagToSlug(tag)}`}
                                    className="inline-block px-2.5 py-1 font-sans text-xs bg-bronze/10 text-bronze/80 hover:bg-marsala hover:text-primary-foreground rounded-sm transition-colors"
                                  >
                                    #{tag}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="p-6 bg-ivory/60 border-l-4 border-l-border/40 border border-border/30 rounded-sm">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-display text-lg sm:text-xl font-semibold text-foreground/50">
                                {essay.title}
                              </h4>
                              <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                                <Clock className="w-3.5 h-3.5" />
                                Em breve
                              </span>
                            </div>
                            {essay.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {essay.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="inline-block px-2.5 py-1 font-sans text-xs bg-bronze/5 text-bronze/50 rounded-sm"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative image */}
      <section className="relative h-64 lg:h-80">
        <img src={DIVA} alt="Divã de Freud" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent" />
      </section>
    </Layout>
  );
}
