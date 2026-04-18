import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { tagToSlug } from "@/lib/posts";

interface ArtigoSection {
  heading?: string;
  paragraphs: string[];
}

interface Artigo {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readingTime: string;
  category: string;
  intro: string;
  sections: ArtigoSection[];
  references?: string[];
  tags: string[];
  available: boolean;
}

const artigos: Record<string, Artigo> = {
  "vicio-em-telas": {
    slug: "vicio-em-telas",
    title: "Vício em telas: por que acontece e o que fazer",
    subtitle: "Um olhar baseado em evidências",
    date: "Em breve",
    readingTime: "—",
    category: "Saúde Mental Cotidiana",
    intro:
      "Em breve. Este artigo está em preparação e abordará o uso excessivo de telas, os mecanismos por trás do vício digital e estratégias práticas baseadas em evidências para lidar com isso no dia a dia.",
    sections: [],
    tags: ["digital", "dependência", "saúde mental"],
    available: false,
  },
};

const allSlugs = Object.keys(artigos);

export default function Artigo() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const artigo = artigos[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!artigo) {
    return (
      <Layout>
        <div className="pt-32 pb-20 container text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Artigo não encontrado</h1>
          <Link
            href="/psicologia-cientifica"
            className="font-sans text-sm text-marsala hover:underline"
          >
            Voltar para Psicologia Científica
          </Link>
        </div>
      </Layout>
    );
  }

  // Sugestões: outros artigos (excluindo o atual)
  const sugestoes = allSlugs
    .filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => artigos[s]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-parchment">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <Link
                href="/psicologia-cientifica"
                className="inline-flex items-center gap-2 font-sans text-sm text-foreground/60 hover:text-marsala transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Psicologia Científica
              </Link>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-bronze font-medium">
                  {artigo.category}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
                {artigo.title}
              </h1>
              {artigo.subtitle && (
                <p className="font-display text-lg lg:text-xl text-warm-600 italic mb-6">
                  {artigo.subtitle}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-5 font-sans text-xs text-foreground/55 pt-4 border-t border-border/40">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {artigo.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {artigo.readingTime}
                </span>
              </div>
              {artigo.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {artigo.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tag/${tagToSlug(tag)}`}
                      className="inline-block px-3.5 py-2 font-sans text-xs bg-bronze/10 text-bronze hover:bg-marsala hover:text-primary-foreground rounded-sm transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container">
          <article className="max-w-3xl mx-auto">
            {/* Intro */}
            <FadeIn>
              <p className="drop-cap font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-10">
                {artigo.intro}
              </p>
            </FadeIn>

            {/* Sections */}
            {artigo.sections.map((section, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="mb-10">
                  {section.heading && (
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5 mt-4">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="font-body text-base lg:text-[1.05rem] text-foreground/85 leading-[1.85] mb-5"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </FadeIn>
            ))}

            {/* Placeholder quando indisponível */}
            {!artigo.available && (
              <FadeIn>
                <div className="my-12 p-8 bg-cream border border-border/50 rounded-sm text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-bronze/10 text-bronze font-sans text-[10px] tracking-wider uppercase rounded-sm mb-4">
                    <Clock className="w-3 h-3" />
                    Em preparação
                  </span>
                  <p className="font-body text-sm text-foreground/65 leading-relaxed">
                    O conteúdo completo deste artigo será publicado em breve.
                  </p>
                </div>
              </FadeIn>
            )}

            {/* References */}
            {artigo.references && artigo.references.length > 0 && (
              <FadeIn>
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-bronze mb-6">
                    Referências
                  </h3>
                  <div className="space-y-3 font-body text-sm text-foreground/65 leading-relaxed">
                    {artigo.references.map((ref, i) => (
                      <p key={i}>{ref}</p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}
          </article>
        </div>
      </section>

      {/* Sugestões + Voltar */}
      <section className="py-16 lg:py-20 bg-cream border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {sugestoes.length > 0 && (
              <>
                <FadeIn>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-[1px] bg-bronze" />
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-bronze font-medium">
                      Continue lendo
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-10 leading-tight">
                    Outros artigos
                  </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                  {sugestoes.map((sug, i) => (
                    <FadeIn key={sug.slug} delay={i * 0.1}>
                      {sug.available ? (
                        <Link
                          href={`/artigo/${sug.slug}`}
                          className="group block h-full p-6 bg-ivory border border-border/60 border-l-4 border-l-marsala rounded-sm hover:shadow-md hover:border-l-marsala-light transition-all duration-300"
                        >
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze block mb-3">
                            {sug.category}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-marsala transition-colors mb-4 leading-snug">
                            {sug.title}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 font-sans text-xs text-marsala tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                            Ler artigo
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      ) : (
                        <div className="h-full p-6 bg-ivory/60 border border-border/40 border-l-4 border-l-border/40 rounded-sm">
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze/60 block mb-3">
                            {sug.category}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-foreground/50 mb-4 leading-snug">
                            {sug.title}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            Em breve
                          </span>
                        </div>
                      )}
                    </FadeIn>
                  ))}
                </div>
              </>
            )}

            <FadeIn delay={0.3}>
              <div className="text-center pt-8 border-t border-border/40">
                <Link
                  href="/psicologia-cientifica"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-marsala/30 text-marsala font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala hover:text-primary-foreground transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
