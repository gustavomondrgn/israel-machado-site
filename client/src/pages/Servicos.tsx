import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, Phone, Users, Mic, MapPin } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/servicos-concept-2_b61d70a2.jpg";
const SERVICOS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/servicos-bg-CrNcxSYVtzepUjzYCekG7f.webp";
const POLTRONA_CLINICAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/poltrona-nova_3516a989.jpeg";
const SALA_CATEDRAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/sala-catedral-nova_af2ae77d.jpeg";
const PALESTRA_FRENTE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/palestra-frente_4ff2b1ac.jpeg";
const PALESTRA_SIMULACAO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/palestra-simulacao_1657aca1.jpeg";
const PALESTRA_RODA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/palestra-roda_1b9b780e.jpeg";
const CATEDRAL_PF = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/catedral_14ce2591.jpg";

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
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/70 via-[#1a1510]/25 to-[#1a1510]/55" />
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

      {/* Atendimento Clínico */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Atendimento Clínico */}
            <FadeIn>
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center mb-20">
                {/* Images - two offices */}
                <div className="w-full lg:w-5/12 flex-shrink-0">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                      <img
                        src={POLTRONA_CLINICAL}
                        alt="Consultório Clinical Center"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-night/70 to-transparent p-3">
                        <p className="font-sans text-[10px] text-warm-200 tracking-wider uppercase">Clinical Center</p>
                      </div>
                    </div>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                      <img
                        src={SALA_CATEDRAL}
                        alt="Consultório Catedral"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-night/70 to-transparent p-3">
                        <p className="font-sans text-[10px] text-warm-200 tracking-wider uppercase">Catedral</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="w-full lg:w-7/12">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-marsala" />
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                      Atendimento Clínico
                    </h2>
                  </div>
                  <p className="font-body text-base lg:text-lg text-foreground/80 leading-[1.8] mb-6">
                    Psicoterapia individual de orientação psicanalítica, presencial ou online. O trabalho é construído a partir da escuta, no ritmo de cada paciente, com o objetivo de dar nome e contorno ao que produz sofrimento.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                      Sessões semanais de 60 minutos
                    </li>
                    <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                      Atendimento presencial em Passo Fundo, RS
                    </li>
                    <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                      Atendimento online para todo o Brasil e exterior
                    </li>
                    <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                      Adultos
                    </li>
                  </ul>

                  {/* Endereços */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-bronze mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-sans text-sm font-medium text-foreground">Clinical Center</p>
                        <p className="font-sans text-xs text-foreground/55">Rua Uruguai, 1969 — Passo Fundo, RS</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-bronze mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-sans text-sm font-medium text-foreground">Catedral</p>
                        <p className="font-sans text-xs text-foreground/55">Pça. Mal. Floriano — Passo Fundo, RS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Palestras e Rodas de Conversa */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-14 items-center">
                {/* Images - palestras */}
                <div className="w-full lg:w-5/12 flex-shrink-0">
                  <div className="space-y-3">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                      <img
                        src={PALESTRA_FRENTE}
                        alt="Palestra sobre saúde mental"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative aspect-square overflow-hidden rounded-sm">
                        <img
                          src={PALESTRA_SIMULACAO}
                          alt="Simulação de atendimento clínico"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative aspect-square overflow-hidden rounded-sm">
                        <img
                          src={PALESTRA_RODA}
                          alt="Roda de conversa"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="w-full lg:w-7/12">
                  <div className="flex items-center gap-3 mb-4">
                    <Mic className="w-5 h-5 text-marsala" />
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                      Palestras e Rodas de Conversa
                    </h2>
                  </div>
                  <p className="font-body text-base lg:text-lg text-foreground/80 leading-[1.8] mb-6">
                    Palestras, rodas de conversa e workshops sobre saúde mental, psicologia e temas relacionados. Voltados para empresas, instituições de ensino, comunidades e grupos diversos.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                      Temas adaptados ao público e ao contexto
                    </li>
                    <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                      Formato presencial ou online
                    </li>
                    <li className="flex items-start gap-2 font-sans text-sm text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                      Para empresas, escolas, universidades e comunidades
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 lg:py-20 bg-parchment">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                  Informações Práticas
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-8">
                Valores e Modalidades
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                <div className="bg-ivory border border-border/50 rounded-sm p-6 text-center">
                  <p className="font-display text-2xl font-semibold text-marsala mb-1">R$ 200</p>
                  <p className="font-sans text-xs text-muted-foreground tracking-wide uppercase">Psicoterapia presencial individual</p>
                </div>
                <div className="bg-ivory border border-border/50 rounded-sm p-6 text-center">
                  <p className="font-display text-2xl font-semibold text-marsala mb-1">R$ 180</p>
                  <p className="font-sans text-xs text-muted-foreground tracking-wide uppercase">Psicoterapia online individual</p>
                </div>
                <div className="bg-ivory border border-border/50 rounded-sm p-6 text-center">
                  <p className="font-display text-2xl font-semibold text-foreground/70 mb-1">Valor Social</p>
                  <p className="font-sans text-xs text-muted-foreground tracking-wide uppercase">Sob Consulta</p>
                </div>
                <div className="bg-[#3a3028] border border-[#4d3f32] rounded-sm p-6 text-center">
                  <p className="font-display text-lg font-medium text-warm-300 mb-1">Personalizado</p>
                  <p className="font-sans text-[10px] text-warm-400/80 tracking-wide uppercase">Palestras e Workshops</p>
                  <p className="font-body text-[11px] text-warm-400/60 mt-2 leading-relaxed">Valores conforme formato e duração</p>
                </div>
              </div>
              <p className="font-body text-sm text-foreground/65 leading-relaxed">
                Os valores podem ser conversados. A ideia é que o custo não seja um impedimento para quem precisa de atendimento. Entre em contato para saber mais.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Localização com foto da Catedral */}
      <section className="py-16 lg:py-20 bg-ivory">
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

            <FadeIn delay={0.1}>
              <div className="relative aspect-[21/9] overflow-hidden rounded-sm mb-6">
                <img
                  src={CATEDRAL_PF}
                  alt="Catedral de Passo Fundo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                  <p className="font-display text-xl lg:text-2xl text-warm-100 font-semibold">
                    Passo Fundo, RS
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Entre em contato
              </h2>
              <p className="font-body text-base text-foreground/70 mb-8">
                Para agendar uma consulta, tirar dúvidas ou saber mais sobre qualquer um dos serviços, entre em contato pelo WhatsApp.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors"
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
