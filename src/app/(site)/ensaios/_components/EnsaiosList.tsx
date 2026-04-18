"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { tagToSlug } from "@/lib/posts";

export type EnsaioListItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  available: boolean;
  tags: string[];
};

export default function EnsaiosList({ ensaios }: { ensaios: EnsaioListItem[] }) {
  const categories = useMemo(() => {
    const map = new Map<string, EnsaioListItem[]>();
    for (const e of ensaios) {
      const arr = map.get(e.category) ?? [];
      arr.push(e);
      map.set(e.category, arr);
    }
    return Array.from(map.entries()).map(([title, essays]) => ({ title, essays }));
  }, [ensaios]);

  const filterOptions = useMemo(
    () => [
      { label: "Todos", value: "todos" as const },
      ...categories.map((c) => ({ label: c.title, value: c.title })),
    ],
    [categories],
  );

  const [activeFilter, setActiveFilter] = useState<string>("todos");

  const visibleCategories =
    activeFilter === "todos"
      ? categories
      : categories.filter((c) => c.title === activeFilter);

  if (ensaios.length === 0) {
    return (
      <div className="bg-ivory border border-border/60 rounded-sm p-8 text-center">
        <p className="font-body text-base text-foreground/60">
          Em breve, novos ensaios serão publicados aqui.
        </p>
      </div>
    );
  }

  return (
    <>
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
                <div key={essay.id} data-category={cat.title}>
                  {essay.available ? (
                    <div className="relative p-6 bg-ivory border-l-4 border-l-marsala border border-border/60 rounded-sm hover:shadow-lg hover:border-l-marsala-light transition-all duration-300 group">
                      <Link
                        href={`/ensaios/${essay.slug}`}
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
    </>
  );
}
