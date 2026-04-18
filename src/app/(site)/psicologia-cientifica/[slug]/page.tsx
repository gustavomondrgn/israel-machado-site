import FadeIn from "@/components/FadeIn";
import LexicalContent from "@/components/LexicalContent";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getArtigoBySlug } from "@/lib/posts-server";
import { tagToSlug } from "@/lib/posts";
import type { Metadata } from "next";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/psicologia-concept-1-jvqa5BXzpRZRWKDF3pqWq6.webp";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);
  if (!artigo) return { title: "Artigo não encontrado" };
  return {
    title: `${artigo.title} — Israel Machado`,
    description: artigo.excerpt ?? undefined,
  };
}

export default async function ArtigoDetailPage({ params }: Props) {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);
  if (!artigo) notFound();

  const hasNotes = !!artigo.notes && typeof artigo.notes === "object";
  const hasReferences = !!artigo.references && typeof artigo.references === "object";

  return (
    <>
      {/* Hero — mesmo padrão do Antígona, com bg de psicologia científica */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/65 to-night/45" />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <Link
              href="/psicologia-cientifica"
              className="inline-flex items-center gap-2 font-sans text-sm text-warm-300 hover:text-warm-100 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Psicologia Científica
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-bronze-light" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-warm-400">
                Artigo
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-warm-50 leading-tight">
              {artigo.title}
            </h1>
            {artigo.excerpt && (
              <p className="font-display text-xl sm:text-2xl text-warm-200 italic mt-3">
                {artigo.excerpt}
              </p>
            )}
            {artigo.tags && artigo.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {artigo.tags.map(({ tag }) => (
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
              <LexicalContent data={artigo.content} variant="body" />
            </FadeIn>

            {hasNotes && (
              <FadeIn delay={0.15}>
                <div className="mt-16 pt-8 border-t border-border">
                  <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-bronze mb-6">
                    Notas
                  </h3>
                  <LexicalContent data={artigo.notes} variant="notes" />
                </div>
              </FadeIn>
            )}

            {hasReferences && (
              <FadeIn delay={0.2}>
                <div className="mt-10 pt-6 border-t border-border">
                  <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-bronze mb-6">
                    Referências
                  </h3>
                  <LexicalContent data={artigo.references} variant="references" />
                </div>
              </FadeIn>
            )}
          </article>
        </div>
      </section>

      {/* Voltar */}
      <section className="py-12 bg-cream border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/psicologia-cientifica"
              className="inline-flex items-center gap-2 px-6 py-3 border border-marsala/30 text-marsala font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Psicologia Científica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
