import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { Star, Phone, ShieldCheck, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
const DOCTORALIA_LINK = "https://www.doctoralia.com.br/israel-machado/psicologo/passo-fundo";

interface Depoimento {
  initials: string;
  name: string;
  text: string;
  date: string;
  location: string;
  verified: boolean;
}

const depoimentos: Depoimento[] = [
  {
    initials: "E.M.",
    name: "E.M.",
    text: "Estou fazendo meu acompanhamento terapêutico há 3 meses em uma jornada de tratamento para depressão e após passar com outros psicólogos sem obter melhora, encontrei no Israel o profissional que eu precisava: muito competente, atencioso, humano e acolhedor. De alguma forma me sinto melhor a cada consulta. Indico para quem quer uma terapia realmente eficaz.",
    date: "15 de janeiro de 2026",
    location: "Clinical Center",
    verified: true,
  },
  {
    initials: "M.J.",
    name: "María José Brito",
    text: "Um excelente profissional, que oferece atendimento de alta qualidade. Suas intervenções são totalmente precisas, e o consultório e o prédio são muito privativos e inspiram muita confiança.",
    date: "8 de janeiro de 2026",
    location: "Clinical Center",
    verified: true,
  },
  {
    initials: "L.O.",
    name: "L. O. P. F.",
    text: "O doutor Israel é um fantástico profissional, muito atencioso, dedicado e um poço de conhecimento. Posso garantir que quem for se consultar/ser atendido por ele terá uma experiência positiva.",
    date: "12 de fevereiro de 2026",
    location: "Atendimento online",
    verified: true,
  },
  {
    initials: "P.",
    name: "Paciente",
    text: "Profissional extremamente atencioso, ético e competente, transmite confiança e acolhimento desde a primeira consulta.",
    date: "12 de fevereiro de 2026",
    location: "Catedral Metropolitana",
    verified: true,
  },
  {
    initials: "G.",
    name: "Giovani",
    text: "É um ótimo e completo profissional. É uma pessoa educada, com conhecimento técnico e postura. Uma conversa com conteúdo. Eu indico.",
    date: "12 de janeiro de 2026",
    location: "Clinical Center",
    verified: true,
  },
  {
    initials: "J.",
    name: "Jessica S.",
    text: "Eficiente, crucial... me senti muito bem, me ajudou, gratidão!!",
    date: "6 de fevereiro de 2026",
    location: "Clinical Center",
    verified: true,
  },
  {
    initials: "L.",
    name: "L.",
    text: "Psicólogo competente, empenhado em continuar crescendo na sua arte e comprometido com o bem dos pacientes. Recomendo.",
    date: "12 de fevereiro de 2026",
    location: "Atendimento online",
    verified: true,
  },
  {
    initials: "N.S",
    name: "N.S",
    text: "Um profissional atencioso e interessado em realmente ajudar. Acolhimento e confiança o definem.",
    date: "13 de fevereiro de 2026",
    location: "Teleconsulta",
    verified: true,
  },
  {
    initials: "V.",
    name: "V.",
    text: "Ótimo profissional, sempre disposto e também sempre atencioso com todas as demandas.",
    date: "12 de fevereiro de 2026",
    location: "Atendimento online",
    verified: true,
  },
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

        {/* Footer — local */}
        <div className="pt-4 border-t border-border/40">
          <p className="font-sans text-xs text-muted-foreground">
            {depoimento.location}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}

export default function Depoimentos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto">
            {depoimentos.map((dep, i) => (
              <DepoimentoCard
                key={`${dep.initials}-${i}`}
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
