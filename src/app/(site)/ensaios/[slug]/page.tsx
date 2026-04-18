import FadeIn from "@/components/FadeIn";
import LexicalContent from "@/components/LexicalContent";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import {
  getEnsaioBySlug,
  getAllEnsaios,
  type EnsaioCategoryDoc,
} from "@/lib/posts-server";
import { tagToSlug } from "@/lib/posts";
import type { Metadata } from "next";

const ENSAIOS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/ensaios-bg-WAg25f8JNsacXt3yywyAFo.webp";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ensaio = await getEnsaioBySlug(slug);
  if (!ensaio) return { title: "Ensaio não encontrado" };
  return {
    title: `${ensaio.title} — Israel Machado`,
    description: ensaio.excerpt ?? ensaio.subtitle ?? undefined,
  };
}

export default async function EnsaioDetailPage({ params }: Props) {
  const { slug } = await params;
  const ensaio = await getEnsaioBySlug(slug);
  if (!ensaio) notFound();

  const categoryName =
    typeof ensaio.category === "object" && ensaio.category !== null
      ? (ensaio.category as EnsaioCategoryDoc).name
      : null;

  const hasNotes = !!ensaio.notes && typeof ensaio.notes === "object";
  const hasReferences = !!ensaio.references && typeof ensaio.references === "object";

  const allEnsaios = await getAllEnsaios();
  const suggestedEssays = allEnsaios
    .filter((e) => e.slug !== ensaio.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero — mesmo padrão do Antígona */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0">
          <img src={ENSAIOS_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/65 to-night/45" />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <Link
              href="/ensaios"
              className="inline-flex items-center gap-2 font-sans text-sm text-warm-300 hover:text-warm-100 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Ensaios
            </Link>
            {categoryName && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-bronze-light" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-warm-400">
                  {categoryName}
                </span>
              </div>
            )}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-warm-50 leading-tight">
              {ensaio.title}
            </h1>
            {ensaio.subtitle && (
              <p className="font-display text-xl sm:text-2xl text-warm-200 italic mt-3">
                {ensaio.subtitle}
              </p>
            )}
            {ensaio.tags && ensaio.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {ensaio.tags.map(({ tag }) => (
                  <Link
                    key={tag}
                    href={`/tag/${tagToSlug(tag)}`}
                    className="inline-block px-3.5 py-2 font-sans text-xs bg-warm-100/10 text-warm-200 hover:bg-marsala hover:text-primary-foreground border border-warm-200/20 rounded-sm transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container">
          <article className="max-w-3xl mx-auto">
            <FadeIn>
              <LexicalContent data={ensaio.content} variant="body" />
            </FadeIn>

            {hasNotes && (
              <FadeIn delay={0.15}>
                <div className="mt-16 pt-8 border-t border-border">
                  <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-bronze mb-6">
                    Notas
                  </h3>
                  <LexicalContent data={ensaio.notes} variant="notes" />
                </div>
              </FadeIn>
            )}

            {hasReferences && (
              <FadeIn delay={0.2}>
                <div className="mt-10 pt-6 border-t border-border">
                  <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-bronze mb-6">
                    Referências
                  </h3>
                  <LexicalContent data={ensaio.references} variant="references" />
                </div>
              </FadeIn>
            )}

          </article>
        </div>
      </section>

      {/* Outros ensaios — mesmo padrão do Antígona */}
      {suggestedEssays.length > 0 && (
        <section className="py-16 lg:py-20 bg-cream border-t border-border/40">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-[1px] bg-bronze" />
                  <span className="font-sans text-xs tracking-[0.3em] uppercase text-bronze font-medium">
                    Continue lendo
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-10 leading-tight">
                  Outros ensaios
                </h2>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {suggestedEssays.map((essay, i) => {
                  const essayCategory =
                    typeof essay.category === "object" && essay.category !== null
                      ? (essay.category as EnsaioCategoryDoc).name
                      : "Ensaios";
                  const available = essay.status === "published";
                  return (
                    <FadeIn key={String(essay.id)} delay={i * 0.1}>
                      {available ? (
                        <Link
                          href={`/ensaios/${essay.slug}`}
                          className="group block h-full p-6 bg-ivory border border-border/60 border-l-4 border-l-marsala rounded-sm hover:shadow-md hover:border-l-marsala-light transition-all duration-300"
                        >
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze block mb-3">
                            {essayCategory}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-marsala transition-colors mb-4 leading-snug">
                            {essay.title}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 font-sans text-xs text-marsala tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                            Ler ensaio
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      ) : (
                        <div className="h-full p-6 bg-ivory/60 border border-border/40 border-l-4 border-l-border/40 rounded-sm">
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze/60 block mb-3">
                            {essayCategory}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-foreground/50 mb-4 leading-snug">
                            {essay.title}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            Em breve
                          </span>
                        </div>
                      )}
                    </FadeIn>
                  );
                })}
              </div>

              <FadeIn delay={0.3}>
                <div className="text-center pt-8 border-t border-border/40">
                  <Link
                    href="/ensaios"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-marsala/30 text-marsala font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala hover:text-primary-foreground transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar para todos os ensaios
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
