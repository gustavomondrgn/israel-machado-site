"use client";

import React from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, ChevronRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
const SERVICOS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/servicos-bg-CrNcxSYVtzepUjzYCekG7f.webp";

const areaImages: Record<string, string> = {
  depressao: "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/area-depressao-CGJ4hU4FTZTjaWNwys8aU5.webp",
  ansiedade: "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/area-ansiedade-9hMjQsWr2WpqCFvE7eXcnD.webp",
  luto: "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/area-luto-YKiqg4TS8g3pNnNVQZLyqq.webp",
  "dor-sem-nome": "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/area-dor-sem-nome-W4oaMiUYQ53MC8yHqaDzxk.webp",
};

interface AreaContent {
  title: string;
  sections: { heading: string; content: string[] }[];
}

const areasContent: Record<string, AreaContent> = {
  depressao: {
    title: "Depressão",
    sections: [
      {
        heading: "",
        content: [
          "A depressão é mais do que tristeza. A tristeza é uma reação natural à vida; ela vem, cumpre seu papel e vai embora. A depressão se instala. Ela muda a forma como a pessoa sente, pensa e funciona no dia a dia, muitas vezes sem que haja uma causa aparente — o que a torna ainda mais angustiante, porque a pessoa não entende o que está acontecendo consigo mesma.",
        ],
      },
      {
        heading: "Sintomas",
        content: [
          "Os sinais mais comuns são a perda de interesse por coisas que antes davam prazer, o cansaço persistente mesmo sem esforço físico, alterações no sono — dormir demais ou de menos —, dificuldade de concentração, mudanças no apetite, sensação de inutilidade ou culpa excessiva, e um desânimo que não responde aos estímulos habituais. Em casos mais graves, pode haver isolamento social, abandono de responsabilidades e pensamentos de morte. Nem todos os sintomas precisam estar presentes ao mesmo tempo, e a intensidade varia de pessoa para pessoa.",
        ],
      },
      {
        heading: "Diagnóstico",
        content: [
          "O diagnóstico é clínico, feito por um profissional de saúde mental a partir da escuta, da história de vida e da observação dos sintomas ao longo do tempo. Não existe exame de laboratório que confirme depressão. O que existe é um olhar treinado para distinguir um momento difícil de um quadro que precisa de tratamento. É comum que a própria pessoa demore a reconhecer o que sente como depressão — muitas vezes é alguém próximo que percebe primeiro.",
          "Essa linguagem descritiva — mapear sintomas, observar duração e intensidade — ajuda a orientar o cuidado. A psicanálise, por sua vez, amplia a pergunta: não apenas \"o que você tem?\", mas \"o que esse sofrimento está dizendo sobre a sua história, seus vínculos e sua forma de existir?\".",
        ],
      },
      {
        heading: "O olhar psicanalítico",
        content: [
          "Em uma perspectiva psicanalítica, a depressão pode se ligar, por exemplo, a experiências de perda, rupturas e lutos — inclusive lutos \"invisíveis\", como expectativas que caíram. A padrões de autocobrança, ideais muito rígidos e sentimento constante de falhar. A culpa e vergonha que se tornam difíceis de nomear. A modos repetidos de se colocar nas relações — sempre se anular, sempre \"aguentar\" sozinho. A momentos em que a vida parece perder sentido e a pessoa se sente sem lugar.",
          "Isso não significa explicar a depressão com uma única causa. Significa criar um espaço em que o sofrimento ganhe palavras, história e contexto. É aqui que a psicoterapia de fato acontece.",
        ],
      },
      {
        heading: "Tratamento",
        content: [
          "A depressão tem tratamento — e ele não se resume a \"tomar remédio\" ou \"fazer terapia\" como se fossem receitas genéricas. O caminho depende de cada pessoa, da intensidade do que ela está vivendo e do momento em que busca ajuda.",
          "A psicoterapia é o espaço onde o sofrimento pode ser escutado sem pressa. Não se trata de receber conselhos ou aprender técnicas para \"pensar positivo\", mas de construir, junto com o terapeuta, uma compreensão do que está acontecendo — de onde vem essa dor, o que ela repete, o que ela pede. É um trabalho que leva tempo, porque aquilo que se instalou ao longo de uma história não se desfaz em poucas sessões. Mas é também um trabalho que produz mudanças que duram, porque mexe na estrutura do problema e não apenas na superfície dos sintomas.",
          "Em alguns casos, o acompanhamento psiquiátrico com medicação é necessário e pode caminhar junto com a terapia. Os dois não se excluem; se complementam.",
          "O passo mais difícil costuma ser o primeiro: reconhecer que algo não vai bem e que pedir ajuda não é fraqueza. Muitas pessoas chegam ao consultório dizendo que \"deveriam estar dando conta sozinhas\". Essa frase, quase sempre, já faz parte do problema. O tratamento começa quando alguém decide que não precisa mais sustentar esse peso em silêncio.",
        ],
      },
    ],
  },
  ansiedade: {
    title: "Ansiedade",
    sections: [
      {
        heading: "",
        content: [
          "A ansiedade, em si, não é doença. Ela é uma resposta do organismo diante de situações que exigem atenção ou preparo — um mecanismo de proteção. O problema começa quando essa resposta se desproporciona da situação real, ou quando aparece sem motivo identificável, com uma frequência e uma intensidade que passam a atrapalhar a vida.",
        ],
      },
      {
        heading: "Sintomas",
        content: [
          "Os sintomas se manifestam no corpo e na mente. No corpo: taquicardia, falta de ar, tremores, sudorese, tensão muscular, insônia, problemas gastrointestinais. Na mente: pensamentos acelerados, sensação de perigo iminente, dificuldade de se concentrar, irritabilidade, medo de perder o controle. Em quadros mais intensos, podem ocorrer crises de pânico — episódios súbitos de medo extremo acompanhados de sintomas físicos fortes, que muitas vezes levam a pessoa ao pronto-socorro acreditando estar tendo um infarto.",
        ],
      },
      {
        heading: "Diagnóstico",
        content: [
          "O diagnóstico é clínico. É fundamental diferenciar a ansiedade normal — aquela que todos sentimos antes de uma prova, de uma entrevista, de um evento importante — da ansiedade patológica, que não cede, que se desproporciona e que compromete o funcionamento. Essa distinção exige avaliação profissional. É comum também que a ansiedade se confunda com ou acompanhe outros quadros, como a depressão, o que torna o olhar clínico ainda mais necessário.",
        ],
      },
      {
        heading: "O olhar psicanalítico",
        content: [
          "Para a psicanálise, a ansiedade não é um \"defeito químico\" do cérebro. Ela funciona, essencialmente, de duas formas.",
          "A primeira é como um acúmulo de tensão que não encontra saída. Algo te incomoda profundamente — uma raiva que você nunca expressou, um desejo que aprendeu a reprimir, uma dor que \"engoliu\" para não incomodar ninguém. Essa energia fica retida e, sem saída, se transforma em sintoma: tensão no corpo, insônia, coração acelerado, um mal-estar que você não sabe explicar.",
          "A segunda é como um alarme interno. Assim como um detector de fumaça dispara antes do incêndio, a mente dispara a ansiedade quando percebe que algo perturbador está prestes a vir à tona — uma lembrança dolorosa, um desejo proibido, um conflito que você prefere não encarar. A ansiedade surge como um aviso: \"atenção, território perigoso.\" Só que muitas vezes nem você mesmo sabe de onde vem esse perigo.",
          "Um exemplo comum: uma pessoa que sente ansiedade intensa toda vez que precisa se expor ou ser avaliada. Ela pode não conectar isso conscientemente, mas lá atrás existe talvez um medo antigo de não ser boa o suficiente, de decepcionar, de ser rejeitada — um conflito que nunca foi elaborado e que continua vivo, disparando o alarme nas situações do presente.",
        ],
      },
      {
        heading: "Tratamento",
        content: [
          "É por isso que o trabalho analítico com a ansiedade busca investigar o que está por trás desse alarme — não para silenciá-lo à força, mas para entender o que ele está tentando dizer. A pergunta central é a mesma que vale para qualquer sintoma: de que problema essa ansiedade é a solução? O tratamento consiste em dar palavra a isso que, por não encontrar expressão, se manifesta no corpo e no pânico. Em casos moderados a graves, a combinação com acompanhamento psiquiátrico pode ser indicada.",
        ],
      },
    ],
  },
  luto: {
    title: "Luto Prolongado e Perdas",
    sections: [
      {
        heading: "",
        content: [
          "O luto é a resposta natural do psiquismo a uma perda significativa. Ele dói, desorganiza, e exige tempo. Não há um jeito certo de viver o luto nem um prazo para superá-lo. O problema surge quando o processo se estende de tal forma que a pessoa não consegue retomar sua vida, como se ficasse presa naquele momento, sem conseguir avançar.",
          "Além disso, nem todo luto é pela morte de alguém. Existe luto por um relacionamento que acabou, por um projeto de vida que se desfez, por uma versão de si mesmo que ficou para trás. Perder-se de si mesmo — da própria identidade, da autoestima, do sentido — também é uma perda, e pode doer tanto quanto qualquer outra.",
        ],
      },
      {
        heading: "Sintomas",
        content: [
          "No luto prolongado, a dor não diminui com o tempo da forma esperada. A pessoa pode apresentar dificuldade persistente em aceitar a perda, sensação de vazio ou de que a vida perdeu o sentido, isolamento, raiva ou culpa intensa, incapacidade de retomar atividades e relações, e em alguns casos a sensação de que uma parte de si morreu junto. Quando esses sinais se mantêm por meses e comprometem a capacidade de funcionar, é preciso atenção.",
        ],
      },
      {
        heading: "Diagnóstico",
        content: [
          "Distinguir o luto normal do luto que precisa de tratamento é delicado. Não se trata de patologizar a dor — sofrer por uma perda é humano e necessário. O que o profissional avalia é se o processo está evoluindo, ainda que lentamente, ou se está paralisado. A duração, a intensidade e o grau de comprometimento da vida cotidiana são critérios importantes. Cada caso é um caso, e é justamente por isso que essa avaliação exige cuidado e escuta.",
        ],
      },
      {
        heading: "Tratamento",
        content: [
          "O trabalho terapêutico no luto não é apressar a dor nem pedir que a pessoa \"siga em frente\". É oferecer um espaço onde essa dor possa ser dita, elaborada e, aos poucos, integrada à história da pessoa. Na psicanálise, isso significa permitir que o paciente fale do que perdeu — com toda a ambivalência, a raiva, a culpa e a saudade que isso envolve — até que essa perda encontre um lugar possível dentro da vida, e não no lugar da vida.",
        ],
      },
    ],
  },
  "dor-sem-nome": {
    title: "Quando a dor não tem nome",
    sections: [
      {
        heading: "",
        content: [
          "Nem todo sofrimento se encaixa em um diagnóstico. Há pessoas que não estão deprimidas no sentido clínico, que não têm crises de pânico, que não passaram por uma perda concreta — mas sofrem. Sofrem de um jeito difuso, difícil de explicar, que muitas vezes nem elas mesmas levam a sério porque \"não tem motivo\". Sentem um vazio, uma insatisfação crônica, uma irritação que não passa, uma sensação de estar vivendo no automático ou de que algo fundamental está faltando, sem saber dizer o quê.",
          "Esse tipo de sofrimento é legítimo e merece cuidado tanto quanto qualquer outro.",
        ],
      },
      {
        heading: "Como se manifesta",
        content: [
          "Justamente por não ter um nome claro, esse sofrimento aparece de formas variadas. Pode ser uma dificuldade persistente nos relacionamentos — repetir os mesmos padrões, escolher as mesmas pessoas, sentir que nenhuma relação dá certo sem entender por quê. Pode ser uma autocobrança paralisante, a sensação de nunca estar à altura, de nunca fazer o bastante. Pode ser uma agressividade que escapa no trânsito, em casa, no trabalho, e que depois vem acompanhada de culpa. Pode ser uma dificuldade de sentir prazer, de se conectar com os outros, de se reconhecer no espelho. Ou simplesmente a sensação persistente de que a vida, mesmo quando \"funciona\" por fora, por dentro não faz sentido.",
          "Muitas vezes, esse sofrimento se expressa no corpo antes de encontrar palavras: insônia, dores crônicas, problemas de pele, gastrite, compulsões alimentares, uso excessivo de álcool ou pornografia — formas que o psiquismo encontra de descarregar o que não consegue elaborar.",
        ],
      },
      {
        heading: "O olhar psicanalítico",
        content: [
          "A psicanálise entende que esse tipo de sofrimento não é menor por ser vago — ao contrário, muitas vezes ele é o mais difícil de tratar justamente porque não tem um contorno definido. A pessoa chega ao consultório dizendo \"não sei bem por que estou aqui\" ou \"eu sei que tem gente em situação pior\", como se precisasse pedir licença para sofrer.",
          "O trabalho analítico, nesses casos, é justamente ajudar a dar forma ao que é disforme. Olhar para a história da pessoa, para os padrões que se repetem, para os desejos que foram silenciados, para os conflitos que ficaram sem resolução — até que aquilo que era apenas mal-estar comece a ganhar nome, contorno e, com isso, a possibilidade de ser tratado.",
        ],
      },
      {
        heading: "Tratamento",
        content: [
          "Não é preciso estar em crise para procurar terapia. Às vezes o sofrimento mais importante é exatamente o que parece pequeno demais para justificar ajuda — e é justamente esse o que mais se beneficia de um espaço de escuta. O tratamento começa quando a pessoa decide que o que sente merece atenção. O resto se constrói no consultório, sessão após sessão.",
        ],
      },
    ],
  },
};

const allSlugs = Object.keys(areasContent);

export default function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const area = areasContent[slug];

  if (!area) {
    notFound();
  }

  const currentIndex = allSlugs.indexOf(slug);
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;

  return (
    <>
      {/* Hero with area image */}
      <section className="relative flex items-end overflow-hidden min-h-[300px] sm:min-h-[380px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={areaImages[slug] || SERVICOS_BG}
            alt={area.title}
            className="w-full h-full object-cover"
            style={{
              objectPosition: slug === 'depressao' ? 'center 15%' : slug === 'luto' ? 'center 35%' : 'center center'
            }}
          />
          <div className="absolute inset-0 bg-night/40" />
        </div>
        {/* Content positioned at bottom with enough top padding for navbar */}
        <div className="container relative z-10 pt-28 pb-10 lg:pt-32 lg:pb-12">
          <FadeIn>
            <Link
              href="/#areas"
              className="inline-flex items-center gap-2 font-sans text-sm text-white/80 hover:text-white transition-colors mb-5"
            >
              <ArrowLeft className="w-4 h-4" />
              Áreas de Atendimento
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-white/50" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-white/70">
                Principais Áreas
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
              {area.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {area.sections.map((section, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="mb-10">
                  {section.heading && (
                    <>
                      {i > 0 && <div className="editorial-divider mx-0 my-8" />}
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5">
                        {section.heading}
                      </h2>
                    </>
                  )}
                  {section.content.map((paragraph, j) => (
                    <p
                      key={j}
                      className={`font-body text-base lg:text-lg text-foreground/85 leading-[1.85] mb-5 ${
                        i === 0 && j === 0 ? "drop-cap" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            ))}

            {/* CTA */}
            <FadeIn>
              <div className="mt-12 p-8 bg-cream border border-border/50 rounded-sm text-center">
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

            {/* Navigation */}
            <div className="mt-12 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              {prevSlug ? (
                <Link
                  href={`/area/${prevSlug}`}
                  className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-marsala transition-colors sm:max-w-[45%]"
                >
                  <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{areasContent[prevSlug].title}</span>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
              {nextSlug ? (
                <Link
                  href={`/area/${nextSlug}`}
                  className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-marsala transition-colors sm:max-w-[45%] sm:justify-end"
                >
                  <span className="truncate">{areasContent[nextSlug].title}</span>
                  <ChevronRight className="w-4 h-4 flex-shrink-0" />
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
