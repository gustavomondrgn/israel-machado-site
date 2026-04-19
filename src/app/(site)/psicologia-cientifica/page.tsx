import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import ExpandableSection from "./_components/ExpandableSection";
import SeriesMap, {
  type MapArticle,
  type MapCycle,
  type MapSeries,
} from "./_components/SeriesMap";
import {
  getVisibleArtigos,
  getAllArtigoSeries,
  type ArtigoDoc,
  type ArtigoSeriesDoc,
} from "@/lib/posts-server";

export const dynamic = "force-dynamic";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/psicologia-concept-1-jvqa5BXzpRZRWKDF3pqWq6.webp";
const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

const UNCATEGORIZED_SERIES_ID = "__uncategorized__";
const UNCATEGORIZED_CYCLE_NUMBER = 0;

function buildSeriesMap(
  artigos: ArtigoDoc[],
  allSeries: ArtigoSeriesDoc[],
): MapSeries[] {
  // Index de séries por id para lookup rápido quando populamos ciclos.
  const seriesById = new Map<string, ArtigoSeriesDoc>();
  for (const s of allSeries) seriesById.set(String(s.id), s);

  // Agrupa artigos por (serieId, cycleNumber).
  type Bucket = {
    series: ArtigoSeriesDoc | null;
    cycles: Map<number, MapArticle[]>;
  };
  const buckets = new Map<string, Bucket>();

  for (const a of artigos) {
    const serieObj =
      a.serie && typeof a.serie === "object"
        ? (a.serie as ArtigoSeriesDoc)
        : a.serie != null
          ? (seriesById.get(String(a.serie)) ?? null)
          : null;

    const serieId = serieObj ? String(serieObj.id) : UNCATEGORIZED_SERIES_ID;
    const cycleNum = a.cycleNumber ?? UNCATEGORIZED_CYCLE_NUMBER;

    let bucket = buckets.get(serieId);
    if (!bucket) {
      bucket = { series: serieObj, cycles: new Map() };
      buckets.set(serieId, bucket);
    }

    let cycleArr = bucket.cycles.get(cycleNum);
    if (!cycleArr) {
      cycleArr = [];
      bucket.cycles.set(cycleNum, cycleArr);
    }
    cycleArr.push({
      id: String(a.id),
      title: a.title,
      slug: a.slug,
      status: a.status,
      orderInCycle: a.orderInCycle ?? null,
      isBonus: a.status === "bonus",
    });
  }

  const result: MapSeries[] = [];

  for (const [serieId, bucket] of buckets.entries()) {
    const serie = bucket.series;
    const definedCycles = serie?.cycles ?? [];

    const cycleNameByNumber = new Map<number, string>();
    for (const c of definedCycles) cycleNameByNumber.set(c.cycleNumber, c.cycleName);

    const cyclesOut: MapCycle[] = [];

    for (const [num, articles] of bucket.cycles.entries()) {
      const articlesSorted = articles
        .slice()
        .sort((x, y) => (x.orderInCycle ?? 9999) - (y.orderInCycle ?? 9999));
      cyclesOut.push({
        cycleNumber: num,
        cycleName:
          num === UNCATEGORIZED_CYCLE_NUMBER
            ? "Sem ciclo definido"
            : (cycleNameByNumber.get(num) ?? `Ciclo ${num}`),
        articles: articlesSorted,
      });
    }

    cyclesOut.sort((a, b) => a.cycleNumber - b.cycleNumber);

    result.push({
      id: serieId,
      name: serie?.name ?? "Artigos avulsos",
      description: serie?.description ?? null,
      cycles: cyclesOut,
    });
  }

  result.sort((a, b) => {
    if (a.id === UNCATEGORIZED_SERIES_ID) return 1;
    if (b.id === UNCATEGORIZED_SERIES_ID) return -1;
    return a.name.localeCompare(b.name, "pt-BR");
  });

  return result;
}

export default async function PsicologiaCientifica() {
  const [artigos, allSeries] = await Promise.all([
    getVisibleArtigos(),
    getAllArtigoSeries(),
  ]);
  const seriesMap = buildSeriesMap(artigos, allSeries);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-night/40" />
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

      {/* Esclarecimentos */}
      <section className="py-16 lg:py-24 bg-parchment">
        <div className="container">
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
        </div>
      </section>

      {/* Mapa da Série — accordion por ciclo */}
      <section className="relative py-20 lg:py-28 bg-ivory">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-bronze" />

        <div className="container">
          <FadeIn>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-bronze font-medium">
                  Artigos
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-3 leading-tight">
                Aplicações para a vida cotidiana
              </h2>
              <p className="font-body text-base text-foreground/65 italic">
                Baseado em evidências
              </p>
            </div>
          </FadeIn>

          <SeriesMap series={seriesMap} />

          <FadeIn delay={0.2}>
            <div className="mt-14 p-8 bg-cream border border-border/50 rounded-sm text-center">
              <p className="font-body text-base text-foreground/75 mb-6">
                Se quiser conversar mais a respeito, entre em contato.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                Entrar em Contato
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
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
      </section>
    </>
  );
}
