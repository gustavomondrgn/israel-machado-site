import "server-only";
import { getPayload } from "@/lib/payload";

export type ArtigoDoc = {
  id: number | string;
  title: string;
  slug: string;
  excerpt?: string | null;
  serie?: { id: number | string; name: string; slug: string } | number | string | null;
  orderInSerie?: number | null;
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

export async function getPublishedArtigos(): Promise<ArtigoDoc[]> {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "artigos",
    where: { status: { equals: "published" } },
    sort: "-publishedAt",
    limit: 100,
    depth: 1,
  });
  return docs as ArtigoDoc[];
}

export async function getArtigoBySlug(slug: string): Promise<ArtigoDoc | null> {
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
}

export async function getPublishedEnsaios(): Promise<EnsaioDoc[]> {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "ensaios",
    where: { status: { equals: "published" } },
    sort: "-publishedAt",
    limit: 200,
    depth: 1,
  });
  return docs as EnsaioDoc[];
}

export async function getAllEnsaios(): Promise<EnsaioDoc[]> {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "ensaios",
    sort: "title",
    limit: 200,
    depth: 1,
  });
  return docs as EnsaioDoc[];
}

export async function getEnsaioBySlug(slug: string): Promise<EnsaioDoc | null> {
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
}

export async function getEnsaioCategories(): Promise<EnsaioCategoryDoc[]> {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "ensaio-categories",
    sort: "name",
    limit: 100,
  });
  return docs as EnsaioCategoryDoc[];
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
