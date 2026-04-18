import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { Star, Phone, ShieldCheck, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
const DOCTORALIA_LINK = "https://www.doctoralia.com.br/israel-machado/psicologo/passo-fundo";

type DepoimentoCategory = "Consultas" | "Aulas, Palestras e Seminários" | "Coral";

interface Depoimento {
  initials: string;
  name: string;
  text: string;
  date: string;
  location: string;
  verified: boolean;
  category: DepoimentoCategory;
}

const depoimentos: Depoimento[] = [
  {
    initials: "E.M.",
    name: "E.M.",
    text: "Estou fazendo meu acompanhamento terapêutico há 3 meses em uma jornada de tratamento para depressão e após passar com outros psicólogos sem obter melhora, encontrei no Israel o profissional que eu precisava: muito competente, atencioso, humano e acolhedor. De alguma forma me sinto melhor a cada consulta. Indico para quem quer uma terapia realmente eficaz.",
    date: "15 de janeiro de 2026",
    location: "Clinical Center",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "M.J.",
    name: "María José Brito",
    text: "Um excelente profissional, que oferece atendimento de alta qualidade. Suas intervenções são totalmente precisas, e o consultório e o prédio são muito privativos e inspiram muita confiança.",
    date: "8 de janeiro de 2026",
    location: "Clinical Center",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "L.O.",
    name: "L. O. P. F.",
    text: "O doutor Israel é um fantástico profissional, muito atencioso, dedicado e um poço de conhecimento. Posso garantir que quem for se consultar/ser atendido por ele terá uma experiência positiva.",
    date: "12 de fevereiro de 2026",
    location: "Atendimento online",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "P.",
    name: "Paciente",
    text: "Profissional extremamente atencioso, ético e competente, transmite confiança e acolhimento desde a primeira consulta.",
    date: "12 de fevereiro de 2026",
    location: "Catedral Metropolitana",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "G.",
    name: "Giovani",
    text: "É um ótimo e completo profissional. É uma pessoa educada, com conhecimento técnico e postura. Uma conversa com conteúdo. Eu indico.",
    date: "12 de janeiro de 2026",
    location: "Clinical Center",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "J.",
    name: "Jessica S.",
    text: "Eficiente, crucial... me senti muito bem, me ajudou, gratidão!!",
    date: "6 de fevereiro de 2026",
    location: "Clinical Center",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "L.",
    name: "L.",
    text: "Psicólogo competente, empenhado em continuar crescendo na sua arte e comprometido com o bem dos pacientes. Recomendo.",
    date: "12 de fevereiro de 2026",
    location: "Atendimento online",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "N.S",
    name: "N.S",
    text: "Um profissional atencioso e interessado em realmente ajudar. Acolhimento e confiança o definem.",
    date: "13 de fevereiro de 2026",
    location: "Teleconsulta",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "V.",
    name: "V.",
    text: "Ótimo profissional, sempre disposto e também sempre atencioso com todas as demandas.",
    date: "12 de fevereiro de 2026",
    location: "Atendimento online",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "M.C.",
    name: "Maitê Couto",
    text: "Gostaria de deixar registrado meu agradecimento pelo acompanhamento que tive. Foi um período muito importante na minha vida, e ter contado com um profissional tão humano e competente fez toda a diferença. Sua escuta, empatia e dedicação demonstram não só excelência na profissão, mas também um cuidado genuíno com as pessoas. Sou muito grata por todo o apoio.",
    date: "",
    location: "",
    verified: true,
    category: "Consultas",
  },
  {
    initials: "M.A.",
    name: "Marcelo Amaral",
    text: "Ótimo profissional! Tem um conhecimento enorme sobre saúde mental.",
    date: "",
    location: "",
    verified: true,
    category: "Aulas, Palestras e Seminários",
  },
  {
    initials: "K.L.",
    name: "Kauã Lima",
    text: "Trabalho incrível, foi indescritível a experiência que tivemos, um ótimo acolhimento, sabedoria extraordinária, esclarecimento de muitas confusões e conflitos mentais do cotidiano, reflexões práticas e dinâmicas sobre assuntos muito abrangentes, espero ter mais oportunidades de participar de partilhas de ensinamentos.",
    date: "",
    location: "",
    verified: true,
    category: "Aulas, Palestras e Seminários",
  },
  {
    initials: "Y.B.",
    name: "Yasmin Barros",
    text: "Foi muito boa! Pude ter novos aprendizados e aprender cada vez mais, espero poder ter experiências como essa novamente!",
    date: "",
    location: "",
    verified: true,
    category: "Aulas, Palestras e Seminários",
  },
  {
    initials: "W.S.",
    name: "Wesley Skovroinski",
    text: "A palestra com o psicólogo Israel trouxe reflexões valiosas sobre autoconhecimento, equilíbrio emocional e a importância de cuidar da mente no dia a dia. Com uma abordagem clara e acolhedora, ele destacou como pequenas mudanças de atitude podem gerar grandes transformações na nossa qualidade de vida. Uma experiência inspiradora!!",
    date: "",
    location: "",
    verified: true,
    category: "Aulas, Palestras e Seminários",
  },
  {
    initials: "A.V.",
    name: "Anny Vitória",
    text: "Maravilhoso seminário, nunca consegui compreender algo tão bem como eu compreendi neste seminário. Todos os assuntos retratados e dinâmicas me fizeram ter outra percepção da vida e do nosso psicológico. Esta formação deveria ser ideal para todas as pessoas, mas principalmente jovens, para entendermos que somos importantes e o nosso papel na sociedade.",
    date: "",
    location: "",
    verified: true,
    category: "Aulas, Palestras e Seminários",
  },
  {
    initials: "A.P.",
    name: "Artur Pazinatto",
    text: "O Israel é uma pessoa incrível quanto a sua humanidade, generosidade e humildade. Nas experiências de como maestro do coral Santa Teresinha ele sempre foi muito disposto a ensinar particularmente, a entender as capacidades únicas de cada um de nós. Uma pessoa humana!",
    date: "",
    location: "",
    verified: true,
    category: "Coral",
  },
  {
    initials: "S.L.",
    name: "Sartori L.H.",
    text: "Eu faço parte do nosso coral desde o início e, sem sombras de dúvidas, a sua continuidade se dá pelo profissionalismo do nosso mestre de canto Israel. Esforçado e comprometido em fazer acontecer, dedica-se incansavelmente para que consigamos buscar o melhor de cada um na medida de suas capacidades. Com a sua paciência, didática clara e humor, conseguiu transformar o nosso grupo em uma verdadeira unidade. Sua paixão pela tradição litúrgica motiva a buscar o aprimoramento contínuo. É um privilégio aprender com um mestre tão dedicado. Recomendo!",
    date: "",
    location: "",
    verified: true,
    category: "Coral",
  },
  {
    initials: "G.",
    name: "Gabriel",
    text: "Ótimo profissional, recomendo.",
    date: "",
    location: "",
    verified: true,
    category: "Coral",
  },
];

const filterOptions: { label: string; value: DepoimentoCategory | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Consultas", value: "Consultas" },
  { label: "Aulas, Palestras e Seminários", value: "Aulas, Palestras e Seminários" },
  { label: "Coral", value: "Coral" },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-bronze text-bronze" />
      ))}
    </div>
  );
}

function DepoimentoCard({ depoimento, delay }: { depoimento: Depoimento; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <article className="h-full bg-ivory border border-border/50 rounded-sm p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-bronze/30 transition-all duration-300 flex flex-col">
        {/* Header — nome + estrelas */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="font-sans text-sm font-medium text-foreground leading-tight">
              {depoimento.name}
            </p>
            {depoimento.verified && (
              <p className="font-sans text-[10px] tracking-wide uppercase text-bronze/80 mt-1 inline-flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Opinião verificada
              </p>
            )}
          </div>
          <Stars />
        </div>

        {/* Texto do depoimento */}
        <blockquote className="font-body text-[0.95rem] text-foreground/80 leading-[1.75] mb-5 flex-1 italic">
          &ldquo;{depoimento.text}&rdquo;
        </blockquote>

        {/* Footer — categoria + local */}
        <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-2">
          <span className="font-sans text-xs text-marsala/80 bg-marsala/8 px-2 py-0.5 rounded-sm">
            {depoimento.category}
          </span>
          {depoimento.location && (
            <p className="font-sans text-xs text-muted-foreground">
              {depoimento.location}
            </p>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

export default function Depoimentos() {
  const [activeFilter, setActiveFilter] = useState<DepoimentoCategory | "todos">("todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visibleDepoimentos =
    activeFilter === "todos"
      ? depoimentos
      : depoimentos.filter((d) => d.category === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-cream">
        <div className="container">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-bronze">
                  Depoimentos
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                O que dizem os pacientes
              </h1>
              <div className="w-16 h-[2px] bg-marsala/60 mb-6" />
              <p className="font-body text-base lg:text-lg text-foreground/75 leading-relaxed max-w-2xl">
                Avaliações reais publicadas no Doctoralia por pessoas que passaram pelo processo terapêutico. Por respeito à privacidade de cada paciente, nomes completos e fotos são preservados.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Grid de depoimentos */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="container">

          {/* Filtros */}
          <FadeIn>
            <div className="mb-12 max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                  Filtrar por categoria
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {filterOptions.map((opt) => {
                  const isActive = activeFilter === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setActiveFilter(opt.value)}
                      className={`px-4 py-3 font-sans text-xs sm:text-sm tracking-wide rounded-sm border transition-all duration-300 ${
                        isActive
                          ? "bg-marsala text-primary-foreground border-marsala shadow-sm"
                          : "bg-ivory text-foreground/70 border-border/60 hover:border-marsala/40 hover:text-marsala"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto">
            {visibleDepoimentos.map((dep, i) => (
              <DepoimentoCard
                key={`${dep.initials}-${dep.name}-${i}`}
                depoimento={dep}
                delay={(i % 3) * 0.1}
              />
            ))}
          </div>

          {/* Link para Doctoralia */}
          <FadeIn delay={0.2}>
            <div className="mt-14 text-center max-w-2xl mx-auto">
              <p className="font-body text-sm text-foreground/65 mb-4">
                Estes e outros depoimentos podem ser conferidos diretamente na plataforma do Doctoralia.
              </p>
              <a
                href={DOCTORALIA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-marsala hover:text-marsala-light transition-colors tracking-wide"
              >
                Ver perfil no Doctoralia
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-parchment">
        <div className="container">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Pronto para começar?
              </h2>
              <p className="font-body text-base text-foreground/70 mb-8 leading-relaxed">
                O primeiro passo é uma conversa. Entre em contato pelo WhatsApp para tirar dúvidas ou agendar a primeira sessão.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
