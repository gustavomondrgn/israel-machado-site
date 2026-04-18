import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ArrowLeft, ChevronRight, Clock } from "lucide-react";
import { useEffect } from "react";
import { tagToSlug } from "@/lib/posts";

const ANTIGONA_TAGS = ["tragédia grega", "sófocles", "hamartia", "sabedoria"];

// Ensaios sugeridos — exclui o atual (Antígona)
const suggestedEssays = [
  {
    title: "A Grande Conversação",
    category: "Mitos e Símbolos",
    href: "#",
    available: false,
  },
  {
    title: "O que é um mito",
    category: "Mitos e Símbolos",
    href: "#",
    available: false,
  },
  {
    title: "Percepção e Realidade",
    category: "Psicologia e Realidade",
    href: "#",
    available: false,
  },
];

const ENSAIOS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/ensaios-bg-WAg25f8JNsacXt3yywyAFo.webp";

export default function EnsaioAntigona() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0">
          <img src={ENSAIOS_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/65 to-night/45" />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <Link
              href="/ensaios"
              className="inline-flex items-center gap-2 font-sans text-sm text-warm-300 hover:text-warm-100 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Ensaios
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-bronze-light" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-warm-400">
                Mitos e Símbolos
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-warm-50 leading-tight">
              Antígona
            </h1>
            <p className="font-display text-xl sm:text-2xl text-warm-200 italic mt-3 mb-6">
              Sombras disfarçadas de luz
            </p>
            <div className="flex flex-wrap gap-2">
              {ANTIGONA_TAGS.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${tagToSlug(tag)}`}
                  className="inline-block px-3.5 py-2 font-sans text-xs bg-warm-100/10 text-warm-200 hover:bg-marsala hover:text-primary-foreground border border-warm-200/20 rounded-sm transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container">
          <article className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="drop-cap font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Antígona facilmente é vista como símbolo de extrema força e nobreza de caráter, enquanto Creonte tem uma leitura geralmente inversa: um tirano rígido, antagonista, obstáculo orgulhoso; ou no máximo ambígua: uma força que tem em vista o governo, a soberania, as leis e a ordem, encontrando nisso sua justificativa. É de fato confortável e em alguns casos até suficiente parar por aí em vez de enfrentar a pressão do mergulho angustiante nas águas exigentes do conhecimento.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                O resultado, entretanto, não pode ser outro senão o do acúmulo de cultura irrefletida, estéril no fim das contas, limitado ao aspecto informativo da leitura, válido, sim, mas muito mais efetivo para impressionar numa roda de conversa que formar um sujeito para a vida. Em uma palavra, o leitor que assim procede retém um sonho vago reduzido a um esquema genérico "coragem x tirania", por um lado tão banal e batido que não justifica sua preservação nas consciências por mais de dois milênios; por outro, na situação real, do dia a dia, tal esqueminha não é muito útil, de modo que acertadamente alguém pode perguntar, quando não afirmar: "para que perder meu tempo com isso?". Não, não perca.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Bem diferente é a postura grave daquele sujeito comprometido com o entendimento frutífero, não para acumular informação, nem impressionar ou acrescentar louros ao currículo, mas para viver. Em determinado momento da vida seremos Antígona, e talvez estaremos tão enganados quanto ela. Conhecer Antígona por dentro, como força viva, é o que servirá, na hora H, como conhecimento suficientemente capaz de evitar uma tragédia. Compreender Creonte, de igual modo, revelará não apenas a prudência ausente antes da catástrofe, como também a sabedoria que se apresenta após, e só após, a que dá sentido aos erros e se transforma em força a partir deles se bem integrados na personalidade.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                As grandes obras gritam por espíritos dispostos a esse trabalho duro e silencioso, capaz de buscar nas profundezas da Realidade, una e multifacetada, os tesouros reveladores da nossa própria existência, não como troféus de estante, mas como conhecimento efetivo de orientação na vida.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                A leitura que faço de Antígona, tanto da personagem quanto da obra, é diferente de tudo o que já se produziu pela tradição. Não tem por isso a intenção de abolir leituras consagradas – se bem que resulte em um posicionamento francamente antagônico a algumas –, mas especialmente a de mostrar algo que ainda não foi visto. Aliás, é disso que se trata o tempo todo, de ver, sendo o seu oposto, o não ver, o eixo e razão de toda a desgraça sucedida às personagens, pelo que os gregos chamam <em>hamartia</em>, como mais adiante se verá. Isso é universalmente válido, tanto para as personagens dentro da obra, quanto para todos os públicos, de todos os tempos, sem exceção. Tudo está na obra, dentro da obra e se revela por si se lhe dermos a chance.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-8 font-semibold">
                Antígona não é tão nobre quanto parece, nem Creonte tão execrável quanto convém supor. Ambos têm verdades graves ignoradas sobre si e o entorno, o que lhes custa tudo.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="editorial-divider mx-0 my-10" />
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Ao negar a ambos o status de grandeza ou de representação de valores legítimos, ou aceitar o antagonismo comum, muito mais banal, entre coragem e tirania, estabelece-se necessariamente um sem número de oposições a interpretações conhecidas. Dentre elas, há uma notavelmente especial, endereçada àquela feita por ninguém menos do que Hegel, cuja sustentação está precisamente no entendimento de que ambos os lados do conflito têm sua justificação própria, representando antes de tudo o entrechoque de dois valores legítimos que se mantém assim até o fim, ainda que para isso seja necessário negar ou lesar a outra parte para se fazer valer.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Mas se for assim mesmo, o que a obra ensina? Que as virtudes são tão perigosas e destrutivas quanto os vícios; que, levadas às últimas consequências, destroem terrivelmente; que princípios elevados, quando colidem, produzem ruína, e que essas colisões são inevitáveis. Isso não é formativo — é, na verdade, contrário às finalidades da poesia e, mais especificamente, da tragédia. Para Aristóteles, os poetas estão entre os grandes mestres do povo. Ora, por óbvio, um mestre forma, ensina, educa. Isso nos obriga a olhar para qualquer destas obras através da pergunta acima: o que isto ensina?
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Uma baliza segura que nos confirma isso, o que Sófocles quis dizer, está na voz do Coro, justamente a fala de conclusão — após a catástrofe, com o arco dos desdobramentos e consequências terríveis completo, apresentando à raiz os motivos dos infortúnios —, quase como uma voz divina, um veredito de fora, superior e onisciente:
              </p>
            </FadeIn>

            <FadeIn>
              <blockquote className="my-8 pl-6 border-l-2 border-marsala/40">
                <p className="font-display text-lg lg:text-xl text-foreground/90 italic leading-relaxed">
                  "Destaca-se a prudência sobremodo como a primeira condição para a felicidade. (...) A desmedida empáfia nas palavras reverte em desmedidos golpes contra os soberbos que, já na velhice, aprendem afinal prudência."
                </p>
                <footer className="mt-3 font-sans text-sm text-muted-foreground">
                  — Sófocles, <em>Antígona</em>, vv. 1485–1492
                </footer>
              </blockquote>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Segundo o próprio texto, portanto, a ausência de prudência — uma aplicação da sabedoria — e não o entrechoque de virtudes legítimas, é a causa da tragédia. Por isso essa interpretação está categoricamente errada.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="editorial-divider mx-0 my-10" />
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Sófocles não consola. Sófocles acusa. O que o poeta apresenta não é a beleza de uma colisão necessária, mas a feiura de um erro evitável: a soberba que recusa integrar o que vê parcialmente; a cegueira que toma a própria luz por toda a luz. O Coro não celebra os caídos como vítimas do Espírito — lamenta-os como exemplos da <em>hybris</em> que a prudência poderia ter evitado. A diferença não é de grau; é de direção.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Existe, portanto, uma sentença não absorvida no sistema hegeliano: ao converter Antígona e Creonte em "veículos do Espírito" — momentos necessários de uma colisão necessária —, a leitura hegeliana retira deles exatamente o que os torna formativamente úteis: a condição de pessoas comuns que podiam ter agido de outro modo. Uma colisão necessária não comporta veredito moral — comporta apenas contemplação. E onde não há veredito, não há <em>hamartia</em>: não há erro, há apenas função.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                "Armar" não é metáfora ornamental. O espectador que sai da tragédia sofocliana carrega consigo algo de funcional: o reconhecimento de um mecanismo. Não o mecanismo abstrato da dialética, mas o mecanismo concreto e recorrente pelo qual homens e mulheres comuns — como Antígona, como Creonte, como nós — tomam a própria porção de luz por toda a luz disponível, e agem com a convicção absoluta de quem vê quando de fato não vê o suficiente. Essa é a <em>hamartia</em> em sua forma mais perigosa: não a ignorância crua, mas o saber parcial revestido de certeza total.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                O espectador armado por Sófocles deixa o teatro não consolado pela necessidade do que viu, mas advertido pela evitabilidade do que reconheceu. Leva consigo uma pergunta que não existia antes: <em>onde eu mesmo estou errando? O que eu não vejo? Em que ponto da minha própria visão estou tomando a parte pelo todo?</em> Essa pergunta é a arma.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="my-10 text-center">
                <span className="font-display text-2xl text-bronze">* * *</span>
              </div>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Com esse instrumento em mãos — a virtude manifestada nos atos, não predicada de fora — veremos que há elementos mais complexos, por isso mais formativos, do que normalmente se supõe.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Vamos ao contexto. Antígona sabe que Polinices atacou Tebas. Não o ignora nem o nega quando confrontada por Creonte. Sua cegueira não é, portanto, ignorância. É de outra e mais sutil ordem: ela vê o irmão e vê o traidor, mas recusa-se a deixar que um ilumine o outro. Fragmenta a realidade em compartimentos estanques — aqui o sangue, ali a traição — e esses compartimentos não se comunicam. Essa incapacidade de integrar o que se vê numa visão de conjunto é uma forma mais refinada de não ver, precisamente o que a peça pune.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Existe um detalhe esclarecedor que a própria Antígona oferece, quase sem perceber: ela confessa que não faria o mesmo por um marido ou por um filho — apenas pelo irmão, pois com os pais mortos nunca poderia ter outro. O argumento, exposto, denuncia a si mesmo. O problema não é o amor ao irmão. O amor ao irmão tem estatuto ético legítimo. O problema é outro e mais importante: Antígona mobiliza a lei dos deuses como argumento universal para um ato que, pelo seu próprio testemunho, aparentemente não faria por nenhum outro ser humano. Ela usa a linguagem do absoluto para justificar o que é, no fundo, um apego particular — e o faz com plena sinceridade, sem perceber.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6 font-semibold italic">
                Esse é o mecanismo exato da sombra disfarçada de luz: o afeto pessoal mimetiza a gramática do sagrado, e o agente acredita estar falando de lei quando está apenas falando de preferência.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Antígona tem, portanto, um pé no heroísmo e outro no equívoco — e é exatamente essa mistura que a torna tão humana quanto formativa. Existe uma coragem maior do que o reino — sustentada, contudo, por uma <em>hamartia</em>, por um erro de visão que a impede de ser nobre em sentido pleno. Talvez essa seja a mais trágica das verdades da obra.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="editorial-divider mx-0 my-10" />
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Creonte carrega a mesma estrutura com disfarce diferente. Em seu primeiro discurso como rei, convoca Zeus e os deuses como fiadores da ordem que pretende estabelecer. É o gesto de um homem que governa sob autoridade maior que a sua. Poucas cenas depois, decreta que Polinices permaneça insepulto — violando precisamente os ritos funerários que esses mesmos deuses exigem. A inconsistência está ali, no próprio texto: ele invoca os deuses como fundamento e os viola como inconveniência.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                O momento mais revelador é a cena com Tirésias. "Nunca fui desatento às tuas advertências" — declara Creonte, antes de rejeitar exatamente o que o profeta anuncia. A frase é a chave: ela proclama a abertura no instante preciso em que a fecha. A estrutura é idêntica à de Antígona: a proclamação do princípio que, no mesmo movimento, interdita sua aplicação ao caso concreto que o exigiria.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                O material é diferente — em Antígona, o apego ao sangue; em Creonte, o apego à integridade do decreto como condição de sua própria existência como sujeito. A estrutura é a mesma. O que colide não são virtudes — são cegueiras.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="my-10 text-center">
                <span className="font-display text-2xl text-bronze">* * *</span>
              </div>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Passados mais de dois mil anos, cabe perguntar: este teatro é preservado por curiosidade histórica, por mero entretenimento ou existe algo além? A resposta está na dimensão formativa — na catarse, o efeito que Aristóteles atribuiu como finalidade à tragédia, cuja alma é o próprio mito. O mito opera como espelho. O espectador acompanha a bravura de Antígona e a admira; acompanha a firmeza e a dureza de Creonte e as compreende; e então assiste à ruína de ambos — sente, antes de entender, que o erro não estava na coragem nem na ordem, mas em algo mais profundo e mais comum: a incapacidade de ver além de si mesmo.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Sófocles termina a peça no lamento de Creonte. A tradição crítica, de modo geral, termina com ele. Há, porém, algo que a obra deixa em aberto e que me parece tão precioso quanto aquilo que o precede.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Creonte sobrevive. Antígona morreu inteira na sua convicção; Hêmon, no desespero; Eurídice, no luto. Creonte é o único que percorreu o arco inteiro — decretou, viveu a cegueira, foi avisado, perdeu tudo, e viu. E se ele, por isso, é o que mais sofre, é também o único que possui agora um campo fértil à sabedoria, porque ninguém sabe melhor o preço da cegueira do que aquele que pagou por ela.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6">
                Ismene também sobrevive — a mesma Ismene que no início pediu cautela, reconheceu os dois lados, ofereceu-se para dividir a culpa, e foi recusada pela irmã. A prudência rejeitada no começo é a prudência que resta no fim, ao lado do rei que finalmente pode ouvi-la. Onde antes havia um rei surdo e uma jovem ignorada, há agora a possibilidade de um governo que integra o que a tragédia separou.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6 font-semibold">
                Sófocles encerra no limiar da aurora. Creonte tem o dia pela frente e a decisão do que fazer com ele.
              </p>
            </FadeIn>

            {/* Notes */}
            <FadeIn>
              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-bronze mb-6">
                  Notas
                </h3>
                <div className="space-y-4 font-body text-sm text-foreground/65 leading-relaxed">
                  <p>1. Kury traduz o termo grego <em>phronein</em> como "prudência". O sentido original é mais amplo: <em>phronesis</em> é a sabedoria prática, o discernimento reto.</p>
                  <p>2. Etéocles e Polinices, filhos de Édipo, irmãos de Antígona, mataram-se mutuamente na batalha pelo trono de Tebas.</p>
                  <p>3. O termo grego <em>hamartánein</em> vem do tiro com arco: errar o alvo. Não implica maldade nem fraqueza de caráter, mas uma limitação de visão.</p>
                  <p>4. A tradição filosófica grega oferece um conceito próximo mas não idêntico ao que ocorre em Antígona. O que ocorre é o inverso da <em>akrasia</em> — não a vontade que derrota a razão, mas a vontade que recrutou a razão e a colocou a seu serviço sem que nenhuma das duas perceba.</p>
                </div>
              </div>
            </FadeIn>

            {/* References */}
            <FadeIn>
              <div className="mt-10 pt-6 border-t border-border">
                <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-bronze mb-6">
                  Referências
                </h3>
                <div className="space-y-3 font-body text-sm text-foreground/65 leading-relaxed">
                  <p>SÓFOCLES. <em>A Trilogia Tebana: Édipo Rei, Édipo em Colono, Antígona</em>. Tradução de Mário da Gama Kury. Rio de Janeiro: Zahar, 1990.</p>
                  <p>HEGEL, Georg Wilhelm Friedrich. <em>Fenomenologia do Espírito</em>. Tradução de Paulo Meneses. Petrópolis: Vozes, 2008.</p>
                  <p>ARISTÓTELES. <em>Poética</em>. Tradução de Eudoro de Sousa. Lisboa: Imprensa Nacional–Casa da Moeda, 2003.</p>
                  <p>HÖFFE, Otfried. <em>Aristóteles</em>. Tradução de Roberto Hofmeister Pich. Porto Alegre: Artmed, 2008.</p>
                </div>
              </div>
            </FadeIn>

          </article>
        </div>
      </section>

      {/* Ensaios sugeridos */}
      <section className="py-16 lg:py-20 bg-cream border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[1px] bg-bronze" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-bronze font-medium">
                  Continue lendo
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-10 leading-tight">
                Outros ensaios
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              {suggestedEssays.map((essay, i) => (
                <FadeIn key={essay.title} delay={i * 0.1}>
                  {essay.available ? (
                    <Link
                      href={essay.href}
                      className="group block h-full p-6 bg-ivory border border-border/60 border-l-4 border-l-marsala rounded-sm hover:shadow-md hover:border-l-marsala-light transition-all duration-300"
                    >
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze block mb-3">
                        {essay.category}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-marsala transition-colors mb-4 leading-snug">
                        {essay.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 font-sans text-xs text-marsala tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                        Ler ensaio
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  ) : (
                    <div className="h-full p-6 bg-ivory/60 border border-border/40 border-l-4 border-l-border/40 rounded-sm">
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze/60 block mb-3">
                        {essay.category}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground/50 mb-4 leading-snug">
                        {essay.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        Em breve
                      </span>
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>

            {/* Voltar aos ensaios */}
            <FadeIn delay={0.3}>
              <div className="text-center pt-8 border-t border-border/40">
                <Link
                  href="/ensaios"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-marsala/30 text-marsala font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala hover:text-primary-foreground transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os ensaios
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
