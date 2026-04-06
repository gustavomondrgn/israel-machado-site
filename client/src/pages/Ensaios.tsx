import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ChevronRight, Clock } from "lucide-react";

const ENSAIOS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/ensaios-bg-WAg25f8JNsacXt3yywyAFo.webp";
const DIVA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/Div%C3%A3_d27d6338.jpeg";

const categories = [
  {
    title: "Mitos e Símbolos",
    essays: [
      { title: "Antígona — Sombras Disfarçadas de Luz", href: "/ensaios/antigona", available: true },
      { title: "A Grande Conversação", href: "#", available: false },
      { title: "O que é um mito", href: "#", available: false },
    ],
  },
  {
    title: "Psicologia e Realidade",
    essays: [
      { title: "Percepção e Realidade", href: "#", available: false },
    ],
  },
  {
    title: "Psicologia e Literatura",
    essays: [
      { title: "O apanhador no campo de centeio — Salinger", href: "#", available: false },
    ],
  },
];

export default function Ensaios() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={ENSAIOS_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/80 to-night/65" />
        </div>
        <div className="container relative z-10 pt-28 pb-16">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-bronze-light" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-warm-200">
                  Ensaios
                </span>
              </div>
              <blockquote className="mb-8">
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

      {/* Frontispício */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6 italic">
                Em Frontispício
              </h2>
              <p className="font-body text-base lg:text-lg text-foreground/85 leading-[1.85] mb-6">
                Aqui me dedico, humildemente, a cumprir esta tarefa que define a função de um escritor — e por que não, à sua maneira, de um psicólogo.
              </p>
              <p className="font-body text-base lg:text-lg text-foreground/85 leading-[1.85] mb-6">
                Se cabe a cada ser humano o seu quinhão de contribuição neste tesouro comum chamado Tradição e Cultura, utilizarei também o poder da palavra escrita a fim de levar o leitor a ver algo do que há para ser visto, ouvido e sentido nos grandes mitos e símbolos a seguir.
              </p>
              <p className="font-body text-sm text-foreground/60 leading-[1.85] italic">
                De que vale uma soleira senão para se estar nela, enquanto não se decide entre a casa e o jardim — para onde ir, o que deixar? É possível parar aqui um instante, ante a porta e o gramado, e refletir. Esta leitura do mito tem certa erudição, algum intelectualismo, mas ela não existe para ser exibida por si ou para tornar o conteúdo inacessível — são ferramentas a serviço do levar a ver. Por isso, tudo o que se segue, se olhado com boa vontade e esmero, terá um valor de recompensa: foi escrito por uma voz que deseja se fazer entender — revelar, não ocultar.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Essays list */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {categories.map((cat, ci) => (
              <FadeIn key={cat.title} delay={ci * 0.1}>
                <div className="mb-14 last:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-[2px] bg-marsala" />
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {cat.essays.map((essay) => (
                      <div key={essay.title}>
                        {essay.available ? (
                          <Link
                            href={essay.href}
                            className="group flex items-center justify-between p-6 bg-ivory border-l-4 border-l-marsala border border-border/60 rounded-sm hover:shadow-lg hover:border-l-marsala-light transition-all duration-300"
                          >
                            <div>
                              <h4 className="font-display text-lg sm:text-xl font-semibold text-foreground group-hover:text-marsala transition-colors">
                                {essay.title}
                              </h4>
                            </div>
                            <ChevronRight className="w-5 h-5 text-marsala group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </Link>
                        ) : (
                          <div className="flex items-center justify-between p-6 bg-ivory/60 border-l-4 border-l-border/40 border border-border/30 rounded-sm">
                            <div>
                              <h4 className="font-display text-lg sm:text-xl font-semibold text-foreground/50">
                                {essay.title}
                              </h4>
                            </div>
                            <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                              <Clock className="w-3.5 h-3.5" />
                              Em breve
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative image */}
      <section className="relative h-64 lg:h-80">
        <img src={DIVA} alt="Divã de Freud" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent" />
      </section>
    </Layout>
  );
}
