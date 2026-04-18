import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link, useParams } from "wouter";
import { ArrowLeft, ChevronRight, Clock, Tag as TagIcon } from "lucide-react";
import { useEffect } from "react";
import { postsByTag, slugToTag, tagToSlug } from "@/lib/posts";

export default function TagPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const tagName = slugToTag(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!tagName) {
    return (
      <Layout>
        <div className="pt-32 pb-20 container text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Tag não encontrada</h1>
          <Link href="/ensaios" className="font-sans text-sm text-marsala hover:underline">
            Ver todos os ensaios
          </Link>
        </div>
      </Layout>
    );
  }

  const posts = postsByTag(tagName);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-parchment">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Link
                href="/ensaios"
                className="inline-flex items-center gap-2 font-sans text-sm text-foreground/60 hover:text-marsala transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-bronze font-medium">
                  Etiqueta
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-3 flex items-center gap-3 flex-wrap break-words">
                <TagIcon className="w-7 h-7 text-marsala flex-shrink-0" />
                <span>{tagName}</span>
              </h1>
              <p className="font-body text-base text-foreground/65 mt-4">
                {posts.length === 1
                  ? "1 publicação encontrada com esta etiqueta."
                  : `${posts.length} publicações encontradas com esta etiqueta.`}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Lista */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <FadeIn>
                <p className="text-center font-body text-foreground/60">
                  Nenhuma publicação encontrada.
                </p>
              </FadeIn>
            ) : (
              <div className="space-y-5">
                {posts.map((post, i) => (
                  <FadeIn key={post.slug} delay={i * 0.05}>
                    {post.available ? (
                      <Link
                        href={post.href}
                        className="group block p-6 lg:p-7 bg-cream border border-border/60 border-l-4 border-l-marsala rounded-sm hover:shadow-md hover:border-l-marsala-light transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze">
                            {post.type === "ensaio" ? "Ensaio" : "Artigo"}
                          </span>
                          <span className="text-bronze/40">·</span>
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze/80">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground group-hover:text-marsala transition-colors mb-3 leading-snug">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="font-body text-sm text-foreground/65 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((t) => (
                              <span
                                key={t}
                                className={`inline-block px-2 py-0.5 font-sans text-[10px] rounded-sm ${
                                  t.toLowerCase() === tagName.toLowerCase()
                                    ? "bg-marsala/15 text-marsala font-medium"
                                    : "bg-bronze/10 text-bronze/80"
                                }`}
                              >
                                #{t}
                              </span>
                            ))}
                          </div>
                          <ChevronRight className="w-5 h-5 text-marsala group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </Link>
                    ) : (
                      <div className="block p-6 lg:p-7 bg-cream/60 border border-border/40 border-l-4 border-l-border/40 rounded-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze/60">
                            {post.type === "ensaio" ? "Ensaio" : "Artigo"}
                          </span>
                          <span className="text-bronze/30">·</span>
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze/60">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground/50 mb-3 leading-snug">
                          {post.title}
                        </h2>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((t) => (
                              <span
                                key={t}
                                className={`inline-block px-2 py-0.5 font-sans text-[10px] rounded-sm ${
                                  t.toLowerCase() === tagName.toLowerCase()
                                    ? "bg-marsala/10 text-marsala/70 font-medium"
                                    : "bg-bronze/5 text-bronze/50"
                                }`}
                              >
                                #{t}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground flex-shrink-0">
                            <Clock className="w-3.5 h-3.5" />
                            Em breve
                          </span>
                        </div>
                      </div>
                    )}
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
