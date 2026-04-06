import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { Phone, MapPin, ArrowRight, Clock, Shield, ChevronRight, Instagram } from "lucide-react";
import { useState } from "react";

// CDN URLs
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/hero-bg-FwmxvZ9pDugDEjS2REXZXh.webp";
const PERFIL_BLAZER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/fotoperfil(2)_0a6b9b91.jpeg";
const PERFIL_BRACOS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/WhatsAppImage2026-03-04at09.40.58-Copia_f1bf01bc.jpeg";
const POLTRONA_CLINICAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/poltrona-nova_3516a989.jpeg";
const CLINICAL_CENTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/clinical-center-frente.jpg_c9549d3e.webp";
const CATEDRAL_PF = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/catedral_14ce2591.jpg";
const CONTACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/contact-bg-WiTgbBHjndtMdqdAfiFnUY.webp";
const SALA_CATEDRAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/sala-catedral-nova_af2ae77d.jpeg";

const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

const AREA_IMG_DEPRESSAO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/area-depressao-CGJ4hU4FTZTjaWNwys8aU5.webp";
const AREA_IMG_ANSIEDADE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/area-ansiedade-9hMjQsWr2WpqCFvE7eXcnD.webp";
const AREA_IMG_LUTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/area-luto-YKiqg4TS8g3pNnNVQZLyqq.webp";
const AREA_IMG_DOR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/area-dor-sem-nome-W4oaMiUYQ53MC8yHqaDzxk.webp";

const areas = [
  {
    slug: "depressao",
    title: "Depressão",
    excerpt: "A depressão é mais do que tristeza. Ela muda a forma como a pessoa sente, pensa e funciona no dia a dia, muitas vezes sem que haja uma causa aparente.",
    image: AREA_IMG_DEPRESSAO,
  },
  {
    slug: "ansiedade",
    title: "Ansiedade",
    excerpt: "A ansiedade, em si, não é doença. O problema começa quando essa resposta se desproporciona da situação real, ou quando aparece sem motivo identificável.",
    image: AREA_IMG_ANSIEDADE,
  },
  {
    slug: "luto",
    title: "Luto Prolongado e Perdas",
    excerpt: "O luto é a resposta natural do psiquismo a uma perda significativa. O problema surge quando o processo se estende de tal forma que a pessoa não consegue retomar sua vida.",
    image: AREA_IMG_LUTO,
  },
  {
    slug: "dor-sem-nome",
    title: "Quando a dor não tem nome",
    excerpt: "Nem todo sofrimento se encaixa em um diagnóstico. Há pessoas que sofrem de um jeito difuso, difícil de explicar, que muitas vezes nem elas mesmas levam a sério.",
    image: AREA_IMG_DOR,
  },
];

const PERFIL_EXTENDED = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/perfil-extended_e0254b44.png";

function HeroSection() {
  return (
    <>
      {/* ===== VERSÃO DESKTOP: foto full-width com caixa translúcida sobreposta ===== */}
      <section className="relative overflow-hidden min-h-[85vh] hidden lg:block">
        <img
          src={PERFIL_EXTENDED}
          alt="Israel Machado - Psicólogo Clínico"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 right-0 h-[70px] bg-gradient-to-b from-black/40 via-black/15 to-transparent z-[1]" />

        <div className="relative z-10 h-full min-h-[85vh] flex items-center">
          <div className="container">
            <FadeIn direction="up" duration={0.9}>
              <div className="bg-ivory/85 backdrop-blur-sm p-12 max-w-lg rounded-sm shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-[1px] bg-bronze" />
                  <span className="font-sans text-xs tracking-[0.3em] uppercase text-warm-500">
                    CRP 07/43950
                  </span>
                </div>
                <h1 className="font-display text-[3.2rem] font-semibold text-foreground leading-[1.08] mb-2">
                  Israel
                  <br />
                  Machado
                </h1>
                <div className="w-14 h-[2px] bg-marsala/60 mb-3" />
                <p className="font-display text-lg text-warm-600 italic mb-4">
                  Psicólogo Clínico
                </p>
                <p className="font-body text-[0.9rem] text-foreground/75 leading-relaxed mb-6">
                  Psicoterapia psicanalítica. Atendimento presencial em Passo Fundo e online para todo o Brasil.
                </p>
                <p className="font-body text-[0.8rem] text-warm-500 mb-6">
                  Sessões de 60 minutos · Semanal
                </p>
                <div className="flex flex-row gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-all duration-300 shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Agendar Consulta
                  </a>
                  <a
                    href="#sobre"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-foreground/5 transition-all duration-300"
                  >
                    Sobre Mim
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== VERSÃO MOBILE: foto no topo + informações abaixo, sem sobreposição ===== */}
      <section className="lg:hidden">
        {/* Foto de perfil — ocupa o topo da tela */}
        <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
          <img
            src={PERFIL_EXTENDED}
            alt="Israel Machado - Psicólogo Clínico"
            className="absolute inset-0 w-full h-full object-cover object-[60%_10%]"
          />
          {/* Tarja topo para menu */}
          <div className="absolute top-0 left-0 right-0 h-[70px] bg-gradient-to-b from-black/40 via-black/15 to-transparent z-[1]" />
          {/* Degradê suave na base para transição com a seção de texto */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
        </div>

        {/* Informações — fundo sólido, sem sobreposição à foto */}
        <div className="bg-ivory px-6 pb-10 -mt-6 relative z-10">
          <FadeIn direction="up" duration={0.7}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-bronze" />
              <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-warm-500">
                CRP 07/43950
              </span>
            </div>
            <h1 className="font-display text-[2.6rem] font-semibold text-foreground leading-[1.05] mb-1">
              Israel
              <br />
              Machado
            </h1>
            <div className="w-12 h-[2px] bg-marsala/60 mb-2" />
            <p className="font-display text-base text-warm-600 italic mb-3">
              Psicólogo Clínico
            </p>
            <p className="font-body text-[0.85rem] text-foreground/75 leading-relaxed mb-4">
              Psicoterapia psicanalítica. Atendimento presencial em Passo Fundo e online para todo o Brasil.
            </p>
            <p className="font-body text-[0.75rem] text-warm-500 mb-5">
              Sessões de 60 minutos · Semanal
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-all duration-300 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-foreground/5 transition-all duration-300"
              >
                Sobre Mim
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function PsicoterapiaSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream" id="psicoterapia">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image column */}
          <FadeIn className="lg:col-span-5" direction="left">
            <div className="relative">
              <img
                src={POLTRONA_CLINICAL}
                alt="Poltrona do consultório"
                className="w-full h-[400px] lg:h-[520px] object-cover rounded-sm shadow-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-ivory/90 backdrop-blur-sm p-4 rounded-sm">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-marsala flex-shrink-0" />
                  <p className="font-sans text-xs text-foreground/70">
                    Sessões de 60 minutos &middot; Semanal
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text column */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                  Fundamentos
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
                O que é psicoterapia?
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="drop-cap font-body text-base lg:text-lg text-foreground/85 leading-[1.85] mb-8">
                A tradição psicanalítica mostra que o sofrimento humano tem estrutura, que ele aprisiona sem que a pessoa saiba o porquê, e que a relação terapêutica é o espaço onde isso pode ser tocado. O horizonte deste trabalho é a liberdade, não apenas o alívio — é a recuperação da capacidade de viver. Psicoterapia, como a compreendo, em sua essência é soltura de correntes tendo uma liberdade ao menos suficiente como alvo.
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="editorial-divider" />
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6 mt-8">
                Como funciona?
              </h3>
              <p className="font-body text-base text-foreground/80 leading-[1.85] mb-6">
                A psicoterapia acontece em um espaço protegido — sessões regulares, horário fixo, sigilo absoluto. Essa regularidade não é burocracia: é a condição para que algo difícil possa ser dito. As sessões têm duração de sessenta minutos e ocorrem semanalmente.
              </p>
              <p className="font-body text-base text-foreground/80 leading-[1.85] mb-8">
                O atendimento é individual, presencial ou online, e não há número fixo de sessões: a duração é determinada pelo processo, não por um protocolo. O que se passa entre terapeuta e paciente, dentro desse enquadre, é o material de trabalho — o que finalmente pode ser olhado com outra perspectiva.
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-2 font-sans text-sm text-marsala hover:text-marsala-light transition-colors"
                >
                  Mais informações sobre locais, modalidades e valores
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function AreasSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory" id="areas">
      <div className="container">
        <FadeIn>
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-bronze" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                Áreas de Atendimento
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Principais Áreas Atendidas
            </h2>
            <p className="font-body text-base text-foreground/75 leading-relaxed">
              Estas demandas têm sido comuns no consultório, por isso recebem destaque. Chamo a atenção especialmente para aquela dor que não tem nome, quando a pessoa sabe que está sofrendo, mas não consegue dizer exatamente o quê. Clique em cada área para saber mais.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, i) => (
            <FadeIn key={area.slug} delay={i * 0.1}>
              <Link href={`/area/${area.slug}`}>
                <div className="group h-full bg-cream border border-border/50 rounded-sm overflow-hidden hover:shadow-lg hover:border-bronze/30 transition-all duration-500 cursor-pointer">
                  {/* Image header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1a]/50 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 right-6 font-display text-xl font-semibold text-white drop-shadow-md group-hover:text-warm-200 transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>
                  {/* Content */}
                  <div className="p-7 pt-5">
                    <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">
                      {area.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-xs text-marsala tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                      Ler mais
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnsaiosPreview() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-night" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-bronze-light" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-warm-400">
                  Ensaios
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-100 mb-6 leading-tight">
                Mitos, Símbolos e Psicologia
              </h2>
              <blockquote className="mb-6">
                <p className="font-display text-lg text-warm-200 italic leading-relaxed">
                  "Minha tarefa, aquela que estou tentando realizar, é, pelo poder da palavra escrita, levar você a ouvir, e a sentir — é, antes de tudo, levar você a ver."
                </p>
                <footer className="mt-2 font-sans text-xs text-warm-500">
                  — Joseph Conrad
                </footer>
              </blockquote>
              <p className="font-body text-base text-warm-300 leading-relaxed mb-8">
                Ensaios sobre mitos, literatura e psicologia. Textos que buscam revelar, não ocultar — escritos por uma voz que deseja se fazer entender.
              </p>
              <Link
                href="/ensaios"
                className="inline-flex items-center gap-2 font-sans text-sm text-bronze-light hover:text-warm-100 transition-colors tracking-wide"
              >
                Ler os Ensaios
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <Link href="/ensaios/antigona" className="group block">
              <div className="bg-night-light/50 border border-warm-800/50 rounded-sm p-8 hover:border-bronze/30 transition-all duration-500">
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-warm-500 mb-3 block">
                  Mitos e Símbolos
                </span>
                <h3 className="font-display text-2xl font-semibold text-warm-100 mb-3 group-hover:text-bronze-light transition-colors">
                  Antígona — Sombras Disfarçadas de Luz
                </h3>
                <p className="font-body text-sm text-warm-400 leading-relaxed mb-4">
                  Antígona não é tão nobre quanto parece, nem Creonte tão execrável quanto convém supor. Ambos têm verdades graves ignoradas sobre si e o entorno, o que lhes custa tudo.
                </p>
                <span className="inline-flex items-center gap-1.5 font-sans text-xs text-bronze-light tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                  Ler ensaio
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function SobreSection() {
  return (
    <section className="py-20 lg:py-28 bg-parchment" id="sobre">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                  Sobre Mim
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
                Por que sou psicólogo?
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="drop-cap font-body text-base lg:text-lg text-foreground/85 leading-[1.85] mb-10">
                Por ficar impressionado com o poder da palavra. Graças a um professor brilhante que tive, pude ver o quanto uma conversa, uma aula, uma frase dita na hora certa pode fazer por uma pessoa que sofre. Mais que uma descoberta intelectual, foi uma experiência que culminou na decisão de estudar a fundo o que, para mim, se tornou mais que uma profissão: uma vocação.
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                Formação
              </h3>
              <div className="space-y-3 mb-8">
                {[
                  "Psicologia (UPF)",
                  "Pós-Graduação em Psicoterapia Clínica (UPF)",
                  "Clínica Contemporânea: A Abordagem de André Green (EPPM) — em andamento",
                  "Diálogos entre Psicanálise e Literatura (EPPM) — em andamento",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-marsala mt-2 flex-shrink-0" />
                    <p className="font-body text-sm text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                Grupos de Estudos e Formação Contínua
              </h3>
              <div className="space-y-3 mb-8">
                {[
                  "Núcleo de Estudos de Psicoterapia Psicanalítica (NEPP) — membro",
                  "Espaço Winnicott de Passo Fundo — membro",
                  "Supervisão clínica com profissional de referência com mais de 40 anos de experiência clínica",
                  "Análise pessoal — compondo o tripé da formação psicanalítica — com analista com mais de 20 anos de experiência",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                    <p className="font-body text-sm text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                Outras Formações
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-warm-500 mt-2 flex-shrink-0" />
                <p className="font-body text-sm text-foreground/80">Música (UFRGS)</p>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn className="lg:col-span-5 order-1 lg:order-2" direction="right">
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full border border-bronze/20 rounded-sm" />
              <img
                src={PERFIL_BRACOS}
                alt="Israel Machado"
                className="relative w-full h-[400px] lg:h-[550px] object-cover object-top rounded-sm shadow-lg"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContatoSection() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });

  return (
    <section className="py-20 lg:py-28 relative" id="contato">
      <div className="absolute inset-0">
        <img src={CONTACT_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ivory/85 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-bronze" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                Contato
              </span>
              <div className="w-8 h-[1px] bg-bronze" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              Agende sua consulta
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Como agendar
                </h3>
                <p className="font-body text-base text-foreground/75 leading-relaxed mb-6">
                  O primeiro passo é entrar em contato. Você pode enviar uma mensagem pelo WhatsApp ou preencher o formulário ao lado. Responderei o mais breve possível.
                </p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-cream/80 border border-border/50 rounded-sm hover:shadow-md hover:border-bronze/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-marsala/10 flex items-center justify-center flex-shrink-0 group-hover:bg-marsala/20 transition-colors">
                  <Phone className="w-5 h-5 text-marsala" />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">WhatsApp</p>
                  <p className="font-sans text-xs text-muted-foreground">(54) 99914-1101</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/israelkmachado"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-cream/80 border border-border/50 rounded-sm hover:shadow-md hover:border-bronze/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0 group-hover:bg-bronze/20 transition-colors">
                  <Instagram className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">Instagram</p>
                  <p className="font-sans text-xs text-muted-foreground">@israelkmachado</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-cream/80 border border-border/50 rounded-sm">
                <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">Sigilo Absoluto</p>
                  <p className="font-sans text-xs text-muted-foreground">Tudo o que é dito em sessão é protegido pelo sigilo profissional</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right">
            <form
              className="bg-cream/60 border border-border/50 rounded-sm p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const msg = `Olá, meu nome é ${formData.nome}. ${formData.mensagem}`;
                const whatsUrl = `https://wa.me/5554999141101?text=${encodeURIComponent(msg)}`;
                window.open(whatsUrl, '_blank');
              }}
            >
              <div className="space-y-5">
                <div>
                  <label className="block font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-marsala/50 focus:ring-1 focus:ring-marsala/20 transition-all"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-marsala/50 focus:ring-1 focus:ring-marsala/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-ivory border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-marsala/50 focus:ring-1 focus:ring-marsala/20 transition-all resize-none"
                    placeholder="Escreva sua mensagem..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors duration-300"
                >
                  Enviar pelo WhatsApp
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ComoChegar() {
  return (
    <section className="py-20 lg:py-28 bg-cream" id="como-chegar">
      <div className="container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-bronze" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                Localização
              </span>
              <div className="w-8 h-[1px] bg-bronze" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Como Chegar
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn direction="left">
            <div className="bg-ivory border border-border/50 rounded-sm overflow-hidden shadow-sm">
              <img
                src={CLINICAL_CENTER}
                alt="Clinical Center - Passo Fundo"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Clinical Center
                </h3>
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-marsala mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-sm text-foreground/70">
                    Rua Uruguai, 1969 — Passo Fundo, RS
                  </p>
                </div>
                <p className="font-body text-sm text-foreground/65">
                  Atendimento presencial em consultório equipado e com ambiente acolhedor.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-ivory border border-border/50 rounded-sm overflow-hidden shadow-sm">
              <img
                src={SALA_CATEDRAL}
                alt="Consultório Catedral"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Catedral
                </h3>
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-marsala mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-sm text-foreground/70">
                    Pça. Mal. Floriano — Passo Fundo, RS
                  </p>
                </div>
                <p className="font-body text-sm text-foreground/65">
                  Segundo local de atendimento, com ambiente reservado e confortável.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 max-w-5xl mx-auto rounded-sm overflow-hidden shadow-lg border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.7!2d-52.4!3d-28.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE1JzM2LjAiUyA1MsKwMjQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <PsicoterapiaSection />
      <AreasSection />
      <EnsaiosPreview />
      <SobreSection />
      <ContatoSection />
      <ComoChegar />
    </Layout>
  );
}
