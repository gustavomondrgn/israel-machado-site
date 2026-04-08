import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, Phone, Users, Mic, MapPin } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/servicos-concept-2_b61d70a2.jpg";
const SERVICOS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/servicos-bg-CrNcxSYVtzepUjzYCekG7f.webp";
const POLTRONA_CLINICAL = "/images/poltrona-nova_3516a989.png";
const CLINICAL_CENTER_FACHADA = "/images/WhatsApp Image 2026-04-08 at 13.02.11.jpeg";
const SALA_CATEDRAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/sala-catedral-nova_af2ae77d.jpeg";
const PALESTRA_FRENTE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/palestra-frente_4ff2b1ac.jpeg";
const PALESTRA_SIMULACAO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/palestra-simulacao_1657aca1.jpeg";
const PALESTRA_RODA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/palestra-roda_1b9b780e.jpeg";

export default function Servicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
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
                Serviços
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight drop-shadow-lg">
              Serviços
            </h1>
            <p className="font-body text-lg text-warm-200/90 mt-4 max-w-2xl drop-shadow">
              Conheça as formas de trabalho que ofereço. Cada uma delas parte do mesmo princípio: a escuta atenta e o compromisso com o que é singular em cada pessoa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Serviços — Cards unificados */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-10">

            {/* Card 1 — Psicoterapia Presencial */}
            <FadeIn>
              <div className="bg-cream border border-border/50 rounded-sm overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={POLTRONA_CLINICAL}
                      alt="Consultório Clinical Center"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-marsala" />
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                        Psicoterapia Presencial
                      </h2>
                    </div>
                    <p className="font-body text-base text-foreground/80 leading-[1.8] mb-5">
                      Psicoterapia individual de orientação psicanalítica. Sessões semanais de 50 minutos em consultório em Passo Fundo.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                        Sessões semanais de 50 minutos
                      </li>
                      <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                        Clinical Center &middot; Rua Uruguai, 1969
                      </li>
                      <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                        Adultos
                      </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-auto">
                      <p className="font-display text-3xl font-semibold text-marsala">R$ 200</p>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors shadow-sm"
                      >
                        <Phone className="w-4 h-4" />
                        Agendar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 — Psicoterapia Online */}
            <FadeIn delay={0.1}>
              <div className="bg-cream border border-border/50 rounded-sm overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={SALA_CATEDRAL}
                      alt="Consultório para atendimento"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-marsala" />
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                        Psicoterapia Online
                      </h2>
                    </div>
                    <p className="font-body text-base text-foreground/80 leading-[1.8] mb-5">
                      O mesmo trabalho clínico da modalidade presencial, com atendimento por videochamada para todo o Brasil e exterior.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                        Sessões semanais de 50 minutos
                      </li>
                      <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                        Para todo o Brasil e exterior
                      </li>
                      <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                        Adultos
                      </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-auto">
                      <p className="font-display text-lg font-medium text-foreground/60">Valor sob consulta</p>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors shadow-sm"
                      >
                        <Phone className="w-4 h-4" />
                        Consultar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 3 — Palestras (menos destaque) */}
            <FadeIn delay={0.2}>
              <div className="bg-ivory border border-border/30 rounded-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                    <img
                      src={PALESTRA_FRENTE}
                      alt="Palestra sobre saúde mental"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <Mic className="w-5 h-5 text-bronze" />
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                        Palestras, seminários e aulas teórico-expositivas
                      </h2>
                    </div>
                    <p className="font-body text-sm text-foreground/75 leading-[1.8] mb-5">
                      Palestras, rodas de conversa e workshops sobre saúde mental. Temas adaptados ao público e ao contexto. Para empresas, escolas, universidades e comunidades.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-auto">
                      <p className="font-sans text-sm text-foreground/50">Valores conforme formato e duração</p>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-foreground/20 text-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-foreground/5 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Consultar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-body text-sm text-foreground/55 leading-relaxed text-center max-w-2xl mx-auto">
                Os valores podem ser conversados. A ideia é que o custo não seja um impedimento para quem precisa de atendimento.
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Onde atendo — Clinical Center (principal) + Catedral (secundário) */}
      <section className="py-16 lg:py-20 bg-parchment">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                  Localização
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-8">
                Onde atendo
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Clinical Center — destaque principal (2/3) */}
              <FadeIn delay={0.1} className="lg:col-span-2">
                <a
                  href="https://www.google.com/maps/search/Clinical+Center+Rua+Uruguai+1969+Passo+Fundo+RS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-ivory border border-border/50 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={CLINICAL_CENTER_FACHADA}
                      alt="Clinical Center — consultório principal"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-marsala text-primary-foreground font-sans text-[10px] tracking-[0.2em] uppercase rounded-sm shadow-sm">
                        Principal
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Clinical Center
                    </h3>
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-marsala mt-0.5 flex-shrink-0" />
                      <p className="font-sans text-sm text-foreground/70">
                        Rua Uruguai, 1969 — Passo Fundo, RS
                      </p>
                    </div>
                    <p className="font-body text-sm text-foreground/65 leading-relaxed">
                      Local principal de atendimento. Consultório equipado, com ambiente acolhedor e estrutura completa para psicoterapia.
                    </p>
                  </div>
                </a>
              </FadeIn>

              {/* Catedral — secundário (1/3) */}
              <FadeIn delay={0.2}>
                <a
                  href="https://www.google.com/maps/search/Pça+Mal+Floriano+Passo+Fundo+RS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col bg-ivory border border-border/50 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                >
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-[220px] overflow-hidden">
                    <img
                      src={SALA_CATEDRAL}
                      alt="Consultório Catedral"
                      className="absolute inset-0 w-full h-full object-cover object-right"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Catedral
                    </h3>
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-bronze mt-0.5 flex-shrink-0" />
                      <p className="font-sans text-xs text-foreground/65">
                        Pça. Mal. Floriano — Passo Fundo, RS
                      </p>
                    </div>
                    <p className="font-body text-xs text-foreground/55 leading-relaxed">
                      Segundo local de atendimento.
                    </p>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-body text-base text-foreground/70 mb-8">
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
      </section>
    </Layout>
  );
}
