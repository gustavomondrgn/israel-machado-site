import FadeIn from "@/components/FadeIn";
import EnsaiosList, { type EnsaioListItem } from "./_components/EnsaiosList";
import { getAllEnsaios, type EnsaioCategoryDoc } from "@/lib/posts-server";
import { Phone } from "lucide-react";

export const dynamic = "force-dynamic";

const ENSAIOS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/ensaios-bg-WAg25f8JNsacXt3yywyAFo.webp";
const DIVA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/Div%C3%A3_d27d6338.jpeg";
const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

export default async function Ensaios() {
  const docs = await getAllEnsaios();

  const items: EnsaioListItem[] = docs.map((e) => ({
    id: String(e.id),
    title: e.title,
    slug: e.slug,
    category:
      typeof e.category === "object" && e.category !== null
        ? (e.category as EnsaioCategoryDoc).name
        : "Sem categoria",
    status: e.status,
    tags: (e.tags ?? []).map((t) => t.tag),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center">
        <div className="absolute inset-0">
          <img src={ENSAIOS_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/80 to-night/65" />
        </div>
        <div className="container relative z-10 pt-64 pb-40 lg:pt-80 lg:pb-56">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-bronze-light" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-warm-200">
                  Ensaios
                </span>
              </div>
              <blockquote>
                <p className="font-display text-xl sm:text-2xl lg:text-3xl text-white italic leading-relaxed mb-4">
                  "Minha tarefa, aquela que estou tentando realizar, é, pelo poder da palavra escrita, levar você a ouvir, e a sentir — é, antes de tudo, levar você a ver. Nada mais além disso, e isso é tudo."
                </p>
                <footer className="font-sans text-sm text-warm-300">
                  — Joseph Conrad
                </footer>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introdução geral */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="font-body text-base lg:text-lg text-foreground/85 leading-[1.85] mb-6">
                Aqui me dedico, humildemente, a cumprir esta tarefa que define a função de um escritor — e por que não, à sua maneira, de um psicólogo.
              </p>
              <p className="font-body text-base lg:text-lg text-foreground/85 leading-[1.85]">
                Se cabe a cada ser humano o seu quinhão de contribuição neste tesouro comum chamado Tradição e Cultura, utilizarei também o poder da palavra escrita a fim de levar o leitor a ver algo do que há para ser visto, ouvido e sentido nos grandes mitos e símbolos a seguir.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Essays list */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <EnsaiosList ensaios={items} />

            {/* CTA */}
            <FadeIn delay={0.2}>
              <div className="mt-12 p-8 bg-ivory border border-border/50 rounded-sm text-center">
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
          </div>
        </div>
      </section>

      {/* Decorative image */}
      <section className="relative h-64 lg:h-80">
        <img src={DIVA} alt="Divã de Freud" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent" />
      </section>
    </>
  );
}
