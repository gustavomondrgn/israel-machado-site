"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface ShowcaseItem {
  type: "ensaio" | "artigo";
  title: string;
  excerpt: string;
  category: string;
  slug: string;
}

const leftContent = {
  ensaio: {
    badge: "ENSAIOS",
    title: "Mitos, Símbolos e Psicologia",
    quote:
      "“Minha tarefa, aquela que estou tentando realizar, é, pelo poder da palavra escrita, levar você a ouvir, e a sentir — é, antes de tudo, levar você a ver.”",
    attribution: "— Joseph Conrad",
    description:
      "Ensaios sobre mitos, literatura e psicologia. Textos que buscam revelar, não ocultar — escritos por uma voz que deseja se fazer entender.",
    linkText: "Ler os Ensaios",
    linkHref: "/ensaios",
  },
  artigo: {
    badge: "PSICOLOGIA CIENTÍFICA",
    title: "Aplicações para a vida cotidiana",
    quote:
      "A psicologia é uma ciência — mas não do mesmo tipo que a física ou a química, e entender essa diferença é fundamental para quem busca tratamento.",
    attribution: "Baseado em evidências",
    description: "",
    linkText: "Ler os Artigos",
    linkHref: "/psicologia-cientifica",
  },
};

export default function Showcase({ items }: { items?: ShowcaseItem[] }) {
  const showcaseItems = items ?? [];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const total = showcaseItems.length;

  if (total === 0) return null;

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % total);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setFade(false);
    setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, 300);
  };

  const prev = () => goTo(current === 0 ? total - 1 : current - 1);
  const next = () => goTo((current + 1) % total);

  const item = showcaseItems[current];
  const left = leftContent[item.type];
  const itemHref =
    item.type === "ensaio"
      ? `/ensaios/${item.slug}`
      : `/psicologia-cientifica/${item.slug}`;
  const itemLinkText =
    item.type === "ensaio" ? "Ler ensaio" : "Ler artigo";

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-night" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <FadeIn direction="left">
            <div
              className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-bronze-light" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-warm-400">
                  {left.badge}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-100 mb-6 leading-tight">
                {left.title}
              </h2>
              <blockquote className="mb-6">
                <p className="font-display text-lg text-warm-200 italic leading-relaxed">
                  {left.quote}
                </p>
                <footer className="mt-2 font-sans text-xs text-warm-500">
                  {left.attribution}
                </footer>
              </blockquote>
              {left.description && (
                <p className="font-body text-base text-warm-300 leading-relaxed mb-8">
                  {left.description}
                </p>
              )}
              <Link
                href={left.linkHref}
                className="inline-flex items-center gap-2 font-sans text-sm text-bronze-light hover:text-warm-100 transition-colors tracking-wide"
              >
                {left.linkText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Right column — card */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <Link href={itemHref} className="group block">
                <div
                  className={`bg-night-light/50 border border-warm-800/50 rounded-sm p-8 hover:border-bronze/30 transition-all duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
                  style={{ transition: "opacity 300ms, border-color 500ms" }}
                >
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-warm-500 mb-3 block">
                    {item.category}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-warm-100 mb-3 group-hover:text-bronze-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-warm-400 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs text-bronze-light tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                    {itemLinkText}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>

              {/* Navigation — below card */}
              {total > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={prev}
                    className="w-8 h-8 rounded-full border border-warm-700 flex items-center justify-center text-warm-400 hover:text-warm-100 hover:border-warm-500 transition-colors"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    {showcaseItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === current
                            ? "bg-bronze-light scale-125"
                            : "bg-warm-700 hover:bg-warm-500"
                        }`}
                        aria-label={`Item ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-8 h-8 rounded-full border border-warm-700 flex items-center justify-center text-warm-400 hover:text-warm-100 hover:border-warm-500 transition-colors"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
