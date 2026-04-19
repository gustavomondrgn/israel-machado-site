import "server-only";
import { getPayload } from "@/lib/payload";

export type ArtigoSeriesCycle = {
  cycleNumber: number;
  cycleName: string;
};

export type ArtigoSeriesDoc = {
  id: number | string;
  name: string;
  slug: string;
  description?: string | null;
  cycles?: ArtigoSeriesCycle[] | null;
};

export type ArtigoDoc = {
  id: number | string;
  title: string;
  slug: string;
  excerpt?: string | null;
  serie?: ArtigoSeriesDoc | number | string | null;
  orderInSerie?: number | null;
  cycleNumber?: number | null;
  orderInCycle?: number | null;
  tags?: { tag: string }[] | null;
  content?: unknown;
  notes?: unknown;
  references?: unknown;
  status: string;
  publishedAt?: string | null;
};

export type EnsaioCategoryDoc = {
  id: number | string;
  name: string;
  slug: string;
};

export type EnsaioDoc = {
  id: number | string;
  title: string;
  slug: string;
  subtitle?: string | null;
  excerpt?: string | null;
  category: EnsaioCategoryDoc | number | string;
  serie?: { id: number | string; name: string; slug: string } | number | string | null;
  orderInSerie?: number | null;
  tags?: { tag: string }[] | null;
  content?: unknown;
  notes?: unknown;
  references?: unknown;
  status: string;
  publishedAt?: string | null;
};

// Fallback vazio quando o Payload/DB não está disponível (ex.: build no Docker
// sem DATABASE_URI). Evita quebrar o build e permite que as páginas dinâmicas
// busquem os dados em runtime.
function handlePayloadError(context: string, err: unknown) {
  console.warn(`[posts-server] Payload indisponível em "${context}":`, err);
}

export async function getPublishedArtigos(): Promise<ArtigoDoc[]> {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: "artigos",
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
      limit: 100,
      depth: 1,
    });
    return docs as ArtigoDoc[];
  } catch (err) {
    handlePayloadError("getPublishedArtigos", err);
    return [];
  }
}

// Todos os artigos visíveis no site (rascunhos excluídos). Usado pela
// página /psicologia-cientifica para montar o mapa da série com ciclos,
// onde artigos em estágios como "briefing", "em breve" etc. aparecem
// listados com tag de status, ainda que não clicáveis.
export async function getVisibleArtigos(): Promise<ArtigoDoc[]> {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: "artigos",
      where: { status: { not_equals: "draft" } },
      sort: "orderInCycle",
      limit: 500,
      depth: 1,
    });
    return docs as ArtigoDoc[];
  } catch (err) {
    handlePayloadError("getVisibleArtigos", err);
    return [];
  }
}

export async function getAllArtigoSeries(): Promise<ArtigoSeriesDoc[]> {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: "artigo-series",
      sort: "name",
      limit: 100,
    });
    return docs as ArtigoSeriesDoc[];
  } catch (err) {
    handlePayloadError("getAllArtigoSeries", err);
    return [];
  }
}

export async function getArtigoBySlug(slug: string): Promise<ArtigoDoc | null> {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: "artigos",
      where: {
        and: [{ slug: { equals: slug } }, { status: { equals: "published" } }],
      },
      limit: 1,
      depth: 1,
    });
    return (docs[0] as ArtigoDoc) ?? null;
  } catch (err) {
    handlePayloadError("getArtigoBySlug", err);
    return null;
  }
}

export async function getPublishedEnsaios(): Promise<EnsaioDoc[]> {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: "ensaios",
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
      limit: 200,
      depth: 1,
    });
    return docs as EnsaioDoc[];
  } catch (err) {
    handlePayloadError("getPublishedEnsaios", err);
    return [];
  }
}

// Lista de ensaios visíveis no site — rascunhos ficam fora. Status
// diferente de "published" aparece na listagem com tag e sem link.
export async function getAllEnsaios(): Promise<EnsaioDoc[]> {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: "ensaios",
      where: { status: { not_equals: "draft" } },
      sort: "title",
      limit: 200,
      depth: 1,
    });
    return docs as EnsaioDoc[];
  } catch (err) {
    handlePayloadError("getAllEnsaios", err);
    return [];
  }
}

export async function getEnsaioBySlug(slug: string): Promise<EnsaioDoc | null> {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: "ensaios",
      where: {
        and: [{ slug: { equals: slug } }, { status: { equals: "published" } }],
      },
      limit: 1,
      depth: 1,
    });
    return (docs[0] as EnsaioDoc) ?? null;
  } catch (err) {
    handlePayloadError("getEnsaioBySlug", err);
    return null;
  }
}

export async function getEnsaioCategories(): Promise<EnsaioCategoryDoc[]> {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: "ensaio-categories",
      sort: "name",
      limit: 100,
    });
    return docs as EnsaioCategoryDoc[];
  } catch (err) {
    handlePayloadError("getEnsaioCategories", err);
    return [];
  }
}

export type ShowcaseItem = {
  type: "ensaio" | "artigo";
  title: string;
  excerpt: string;
  category: string;
  slug: string;
};

export async function getShowcaseItems(): Promise<ShowcaseItem[]> {
  const [ensaios, artigos] = await Promise.all([
    getPublishedEnsaios(),
    getPublishedArtigos(),
  ]);

  const ensaioItems: ShowcaseItem[] = ensaios.map((e) => ({
    type: "ensaio",
    title: e.title,
    excerpt: e.excerpt ?? "",
    category:
      typeof e.category === "object" && e.category !== null
        ? (e.category as EnsaioCategoryDoc).name
        : "Ensaio",
    slug: e.slug,
  }));

  const artigoItems: ShowcaseItem[] = artigos.map((a) => ({
    type: "artigo",
    title: a.title,
    excerpt: a.excerpt ?? "",
    category: "Psicologia Científica",
    slug: a.slug,
  }));

  return [...ensaioItems, ...artigoItems];
}
