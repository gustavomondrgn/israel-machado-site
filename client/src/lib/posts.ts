// Catálogo central de publicações (ensaios + artigos) para sistema de tags.
// Usado pela página /tag/:nome para listar todos os posts com determinada tag.

export type PostType = "ensaio" | "artigo";

export interface Post {
  type: PostType;
  slug: string;
  title: string;
  category: string;
  href: string;
  excerpt?: string;
  tags: string[];
  available: boolean;
}

export const allPosts: Post[] = [
  // ===== Ensaios =====
  {
    type: "ensaio",
    slug: "antigona",
    title: "Antígona — Sombras Disfarçadas de Luz",
    category: "Mitos e Símbolos",
    href: "/ensaios/antigona",
    excerpt:
      "Antígona não é tão nobre quanto parece, nem Creonte tão execrável quanto convém supor. Ambos têm verdades graves ignoradas sobre si e o entorno.",
    tags: ["tragédia grega", "sófocles", "hamartia", "sabedoria"],
    available: true,
  },
  {
    type: "ensaio",
    slug: "a-grande-conversacao",
    title: "A Grande Conversação",
    category: "Mitos e Símbolos",
    href: "#",
    tags: ["tradição", "cultura"],
    available: false,
  },
  {
    type: "ensaio",
    slug: "o-que-e-um-mito",
    title: "O que é um mito",
    category: "Mitos e Símbolos",
    href: "#",
    tags: ["mito", "símbolo"],
    available: false,
  },
  {
    type: "ensaio",
    slug: "percepcao-e-realidade",
    title: "Percepção e Realidade",
    category: "Psicologia e Realidade",
    href: "#",
    tags: ["percepção", "realidade"],
    available: false,
  },
  {
    type: "ensaio",
    slug: "salinger",
    title: "O apanhador no campo de centeio — Salinger",
    category: "Psicologia e Literatura",
    href: "#",
    tags: ["literatura", "salinger", "adolescência"],
    available: false,
  },

  // ===== Artigos (Psicologia Científica) =====
  {
    type: "artigo",
    slug: "vicio-em-telas",
    title: "Vício em telas: por que acontece e o que fazer",
    category: "Saúde Mental Cotidiana",
    href: "/artigo/vicio-em-telas",
    excerpt:
      "Um olhar baseado em evidências sobre o uso excessivo de telas, os mecanismos por trás do vício digital e estratégias práticas para lidar com isso no dia a dia.",
    tags: ["digital", "dependência", "saúde mental"],
    available: false,
  },
];

// Normaliza uma tag para usar em URL (ex: "tragédia grega" → "tragedia-grega")
export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// Recupera a tag original a partir do slug procurando em todos os posts
export function slugToTag(slug: string): string | null {
  for (const post of allPosts) {
    for (const tag of post.tags) {
      if (tagToSlug(tag) === slug) return tag;
    }
  }
  return null;
}

// Lista todos os posts que contêm uma determinada tag (case insensitive)
export function postsByTag(tag: string): Post[] {
  return allPosts.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

// Lista todas as tags únicas com contagem
export function allTags(): { tag: string; count: number }[] {
  const map = new Map<string, number>();
  for (const post of allPosts) {
    for (const tag of post.tags) {
      map.set(tag, (map.get(tag) || 0) + 1);
    }
  }
  return Array.from(map.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
