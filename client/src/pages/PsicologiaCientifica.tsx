import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, ChevronDown, ChevronUp, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/psicologia-concept-1-jvqa5BXzpRZRWKDF3pqWq6.webp";

function ExpandableSection({
  title,
  preview,
  children,
}: {
  title: string;
  preview: React.ReactNode;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-cream border border-border/50 rounded-sm overflow-hidden">
      <div className="p-6 lg:p-8">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5">
          {title}
        </h2>
        <div className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9]">
          {preview}
        </div>

        {expanded && (
          <div className="mt-6 font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] animate-in fade-in duration-500">
            {children}
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-marsala hover:text-marsala-light transition-colors tracking-wide"
        >
          {expanded ? (
            <>
              Recolher
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Leia mais
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function PsicologiaCientifica() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/70 via-[#1a1510]/20 to-[#1a1510]/50" />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-sans text-sm text-warm-200/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Início
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-warm-200/60" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-warm-200/80">
                Divulgação Científica
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 drop-shadow-lg">
              Psicologia Científica
            </h1>
            <p className="font-body text-lg text-warm-200/90 max-w-3xl leading-relaxed drop-shadow">
              Seção destinada à divulgação científica — novidades, atualidades, artigos, metanálises, comentários — e apresentar algumas dicas para a vida cotidiana baseadas em evidências.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Esclarecimentos com Leia Mais */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Psicologia é ciência */}
            <FadeIn>
              <ExpandableSection
                title="Psicologia é ciência"
                preview={
                  <p>
                    A psicologia é uma ciência — mas não do mesmo tipo que a física ou a química, e entender essa diferença é fundamental para quem busca tratamento. A psicologia estuda o comportamento humano, os processos mentais e o sofrimento psíquico. Dentro dela, existem diferentes abordagens — diferentes formas de olhar para os mesmos fenômenos. A psicanálise é uma delas, e é a que fundamenta o trabalho clínico que realizo.
                  </p>
                }
              >
                <div className="space-y-5">
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2">
                    O que é a psicanálise
                  </h3>
                  <p>
                    A psicanálise parte de uma premissa que, a princípio, pode parecer estranha: boa parte do que nos move — desejos, medos, escolhas, repetições — não está acessível à consciência. Não porque esteja "escondida" de propósito, mas porque o psiquismo humano é estruturalmente dividido: há uma dimensão inconsciente que opera segundo lógicas próprias, e que se manifesta nos sonhos, nos atos falhos, nos sintomas, nas escolhas repetidas e nos padrões de relação.
                  </p>
                  <p>
                    Isso significa que, muitas vezes, a pessoa sabe o que sente, mas não sabe por que sente. Sabe que repete um padrão, mas não consegue parar. Sabe que algo a incomoda, mas não encontra palavras para dizer o quê. A psicanálise trabalha nesse intervalo — entre o que se sabe e o que não se sabe sobre si mesmo.
                  </p>

                  <h3 className="font-display text-xl font-semibold text-foreground mt-4">
                    Como funciona na prática
                  </h3>
                  <p>
                    O instrumento central da psicanálise é a fala. O paciente fala — sobre o que quiser, sem roteiro, sem tarefa — e o analista escuta. Mas não é uma escuta passiva: é uma escuta treinada para perceber o que está nas entrelinhas, no que se repete, no que se evita, no que aparece como detalhe mas carrega peso. A partir dessa escuta, o analista intervém — não com conselhos ou orientações, mas com pontuações, perguntas e interpretações que ajudam o paciente a ver o que antes não via.
                  </p>
                  <p>
                    Esse processo leva tempo. Não porque seja ineficiente, mas porque aquilo que se formou ao longo de uma vida inteira — padrões, defesas, formas de se relacionar — não se transforma em poucas sessões. A psicanálise aposta em mudanças que duram, porque mexem na estrutura do problema e não apenas na superfície dos sintomas.
                  </p>

                  <h3 className="font-display text-xl font-semibold text-foreground mt-4">
                    Para quem serve
                  </h3>
                  <p>
                    A psicanálise serve para quem sofre e quer entender o que está por trás desse sofrimento. Serve para quem tem sintomas — ansiedade, depressão, pânico, insônia — e também para quem não tem um diagnóstico claro, mas sente que algo não vai bem. Serve para quem repete padrões nos relacionamentos, para quem se sente preso numa vida que "funciona" mas não faz sentido, para quem carrega um mal-estar que não sabe nomear.
                  </p>
                  <p>
                    Não é preciso estar em crise para procurar análise. Muitas vezes, o sofrimento mais importante é justamente o mais silencioso.
                  </p>

                  <h3 className="font-display text-xl font-semibold text-foreground mt-4">
                    Uma nota sobre ciência
                  </h3>
                  <p>
                    A psicanálise não opera pelo método experimental clássico — não faz testes controlados em laboratório. Seu campo é o da clínica: a escuta singular de cada sujeito, caso a caso. Isso não a torna menos rigorosa; torna-a rigorosa de outro modo. Seu rigor está na consistência teórica, na formação contínua do analista e, sobretudo, nos efeitos que produz na vida de quem se submete ao processo.
                  </p>
                  <p>
                    Há mais de um século, a psicanálise vem sendo praticada, ensinada, debatida e reformulada em todo o mundo. Ela não é a única forma válida de fazer psicologia — mas é uma forma profunda, honesta e eficaz de tratar o sofrimento humano.
                  </p>
                </div>
              </ExpandableSection>
            </FadeIn>

            {/* Divider */}
            <FadeIn>
              <div className="editorial-divider mx-0" />
            </FadeIn>

            {/* Artigos e Dicas */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-bronze" />
                  <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                    Artigos
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-3">
                  Dicas para a vida cotidiana
                </h2>
                <p className="font-body text-base text-foreground/65 mb-8">
                  Baseado em evidências
                </p>

                {/* Article card - Vício em Telas */}
                <div className="bg-cream border border-border/50 rounded-sm p-6 hover:shadow-md hover:border-bronze/30 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-bronze/10 text-bronze font-sans text-[10px] tracking-wider uppercase rounded-sm">
                          <Clock className="w-3 h-3" />
                          Em breve
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-marsala transition-colors">
                        Vício em telas: por que acontece e o que fazer
                      </h3>
                      <p className="font-body text-sm text-foreground/65 leading-relaxed">
                        Um olhar baseado em evidências sobre o uso excessivo de telas, os mecanismos por trás do vício digital e estratégias práticas para lidar com isso no dia a dia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Back link */}
            <FadeIn>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-sans text-sm text-marsala hover:text-marsala-light transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao Início
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
