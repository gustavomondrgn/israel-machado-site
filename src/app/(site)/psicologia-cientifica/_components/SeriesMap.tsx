"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { getStatusBadge, isClickable } from "@/lib/status";

export type MapArticle = {
  id: string;
  title: string;
  slug: string;
  status: string;
  orderInCycle: number | null;
  isBonus: boolean;
};

export type MapCycle = {
  cycleNumber: number;
  cycleName: string;
  articles: MapArticle[];
};

export type MapSeries = {
  id: string;
  name: string;
  description: string | null;
  cycles: MapCycle[];
};

// Paleta de ciclos — cada ciclo tem um tom diferente, derivado da paleta
// do site. Ciclo 1 = azulado (night), 2 = rosado (marsala), 3 = verde-oliva
// (bronze). A partir do 4 alterna variações mais claras dos mesmos tons.
type CyclePalette = {
  badge: string;
  header: string;
  headerText: string;
  accent: string;
  hoverAccent: string;
};

const NEUTRAL_PALETTE: CyclePalette = {
  // Usado quando o artigo não tem cycleNumber definido.
  badge: "bg-warm-300 text-warm-800",
  header: "bg-warm-100 border-warm-200",
  headerText: "text-warm-700",
  accent: "border-l-warm-300",
  hoverAccent: "hover:border-l-warm-400",
};

const CYCLE_PALETTE: CyclePalette[] = [
  {
    // Ciclo 1 — azulado/lavanda
    badge: "bg-night text-white",
    header: "bg-night/10 border-night/30",
    headerText: "text-night",
    accent: "border-l-night",
    hoverAccent: "hover:border-l-night/70",
  },
  {
    // Ciclo 2 — rosado/marsala
    badge: "bg-marsala text-white",
    header: "bg-marsala/10 border-marsala/30",
    headerText: "text-marsala",
    accent: "border-l-marsala",
    hoverAccent: "hover:border-l-marsala-light",
  },
  {
    // Ciclo 3 — bronze/oliva
    badge: "bg-bronze text-white",
    header: "bg-bronze/10 border-bronze/30",
    headerText: "text-bronze",
    accent: "border-l-bronze",
    hoverAccent: "hover:border-l-bronze-light",
  },
];

function paletteFor(cycleNumber: number): CyclePalette {
  // cycleNumber < 1 = artigo sem ciclo definido (grupo "Sem ciclo").
  // Usa paleta neutra em tom warm para não confundir com ciclos reais.
  if (cycleNumber < 1) return NEUTRAL_PALETTE;
  // Ciclo 4+ recicla as 3 paletas preservando coerência visual.
  return CYCLE_PALETTE[(cycleNumber - 1) % CYCLE_PALETTE.length];
}

function formatCode(cycleNumber: number, orderInCycle: number | null) {
  if (orderInCycle == null) return null;
  return `a${cycleNumber}.${orderInCycle}`;
}

export default function SeriesMap({ series }: { series: MapSeries[] }) {
  if (series.length === 0) {
    return (
      <div className="bg-cream border border-border/60 rounded-sm p-8 text-center">
        <p className="font-body text-base text-foreground/60">
          Em breve, novos artigos serão publicados aqui.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-14">
      {series.map((s, i) => (
        <FadeIn key={s.id} delay={i * 0.08}>
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-[2px] bg-marsala" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-marsala font-medium">
                  Série
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
                {s.name}
              </h3>
              {s.description && (
                <p className="font-body text-sm text-foreground/65 mt-2 leading-relaxed">
                  {s.description}
                </p>
              )}
            </div>

            <div className="space-y-4">
              {s.cycles.map((cycle) => (
                <CycleBlock key={cycle.cycleNumber} cycle={cycle} />
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

function CycleBlock({ cycle }: { cycle: MapCycle }) {
  const [open, setOpen] = useState(true);
  const palette = paletteFor(cycle.cycleNumber);

  return (
    <div className={`rounded-sm border overflow-hidden ${palette.header}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-white/30 transition-colors"
      >
        {cycle.cycleNumber >= 1 && (
          <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-sm font-sans text-xs tracking-wide uppercase font-medium ${palette.badge}`}
          >
            Ciclo {cycle.cycleNumber}
          </span>
        )}
        <span className={`flex-1 font-display text-lg font-semibold ${palette.headerText}`}>
          {cycle.cycleName}
        </span>
        <ChevronDown
          className={`w-5 h-5 ${palette.headerText} transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 pt-1 bg-ivory/40 space-y-2">
          {cycle.articles.length === 0 ? (
            <p className="font-body text-sm text-foreground/55 italic py-2">
              Ainda sem artigos definidos.
            </p>
          ) : (
            cycle.articles.map((a) => (
              <ArticleRow
                key={a.id}
                article={a}
                cycleNumber={cycle.cycleNumber}
                accentClass={palette.accent}
                hoverAccentClass={palette.hoverAccent}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

function ArticleRow({
  article,
  cycleNumber,
  accentClass,
  hoverAccentClass,
}: {
  article: MapArticle;
  cycleNumber: number;
  accentClass: string;
  hoverAccentClass: string;
}) {
  const badge = getStatusBadge(article.status);
  const clickable = isClickable(article.status);
  const code = formatCode(cycleNumber, article.orderInCycle);

  const titleClass = article.isBonus
    ? "font-display italic text-foreground/75"
    : "font-display text-foreground";
  const titleColorOnHover = clickable ? "group-hover:text-marsala transition-colors" : "";

  const inner = (
    <>
      <div className="flex items-baseline gap-2 min-w-0">
        {article.isBonus && <Plus className="w-3.5 h-3.5 text-bronze flex-shrink-0" />}
        {code && (
          <span className="font-sans text-xs tracking-wide text-foreground/45 flex-shrink-0">
            {code}
          </span>
        )}
        <span className={`text-base sm:text-lg ${titleClass} ${titleColorOnHover} truncate`}>
          {article.title}
        </span>
      </div>
      {badge && (
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-sm border font-sans text-[10px] tracking-wide uppercase flex-shrink-0 ${badge.className}`}
        >
          {badge.label}
        </span>
      )}
    </>
  );

  const baseClass = `flex items-center gap-3 justify-between p-4 bg-ivory border-l-4 ${accentClass} border border-border/50 rounded-sm`;

  if (clickable) {
    return (
      <Link
        href={`/psicologia-cientifica/${article.slug}`}
        className={`${baseClass} ${hoverAccentClass} hover:shadow-sm transition-all group`}
      >
        {inner}
      </Link>
    );
  }

  return <div className={`${baseClass} opacity-75 cursor-default`}>{inner}</div>;
}
