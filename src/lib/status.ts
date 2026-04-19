// Mapa de status → aparência da tag. Usado tanto em /ensaios quanto
// em /psicologia-cientifica para render consistente.
//
// "published" não mostra tag (é o estado normal — clicável).
// "draft" nunca aparece no site (filtrado na query).
// Qualquer status diferente de "published" torna o item não-clicável
// na listagem.

export type ContentStatus =
  | "draft"
  | "coming_soon"
  | "briefing"
  | "esboco"
  | "redigido"
  | "a_fazer"
  | "bonus"
  | "published";

export type StatusBadge = {
  label: string;
  // Classes Tailwind para bg + text + border em um visual discreto.
  className: string;
};

const STATUS_BADGES: Record<Exclude<ContentStatus, "published" | "draft">, StatusBadge> = {
  coming_soon: {
    label: "Em breve",
    className: "bg-night/10 text-night border-night/20",
  },
  briefing: {
    label: "Briefing",
    className: "bg-rose-100 text-rose-800 border-rose-200",
  },
  esboco: {
    label: "Esboço",
    className: "bg-amber-100 text-amber-800 border-amber-200",
  },
  redigido: {
    label: "Redigido",
    className: "bg-violet-100 text-violet-800 border-violet-200",
  },
  a_fazer: {
    label: "A fazer",
    className: "bg-warm-200 text-warm-700 border-warm-300",
  },
  bonus: {
    label: "Bônus",
    className: "bg-bronze/15 text-bronze border-bronze/30",
  },
};

export function getStatusBadge(status: string): StatusBadge | null {
  if (status === "published" || status === "draft") return null;
  return STATUS_BADGES[status as keyof typeof STATUS_BADGES] ?? null;
}

export function isClickable(status: string): boolean {
  return status === "published";
}
