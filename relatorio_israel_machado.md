# Relatório de Alterações — Site Israel Machado, Psicólogo Clínico

**Cliente:** Israel Machado
**Profissão:** Psicólogo Clínico
**CRP:** 07/43950
**Atendimento:** Passo Fundo, RS (presencial) e online (todo Brasil e exterior)
**Data do relatório:** 08 de abril de 2026
**Equipe:** Kandle Studio

---

## 1. Visão Geral do Projeto

### Cliente
Israel Machado é psicólogo clínico atuando em Passo Fundo (RS), com formação em psicoterapia psicanalítica, pós-graduação pela UPF e formação contínua em abordagens contemporâneas (André Green, Winnicott, Bion). Trabalha com adultos, atendendo presencialmente em dois consultórios — Clinical Center (principal) e Catedral (secundário) — e online para todo o Brasil.

### Objetivo do site
- Apresentar Israel como profissional de referência em psicoterapia psicanalítica em Passo Fundo
- Captar pacientes via Instagram e Google (90%+ dos acessos previstos vêm de mobile)
- Servir de portfólio editorial para os ensaios e artigos que ele produz
- Oferecer canais diretos de contato (WhatsApp como CTA principal)
- Construir autoridade através de conteúdo escrito (Ensaios + Psicologia Científica)

### Plataforma
- **Atual (entrega Kandle):** site estático em React/Vite, hospedado localmente para revisão (acessado via ngrok)
- **Plano futuro:** migração completa para WordPress, replicando exatamente o design e a estrutura desta entrega. Toda a hierarquia visual, paleta, tipografia e comportamento serão preservados.

### Stack utilizada
- **Frontend:** React 19 + TypeScript
- **Build:** Vite 7
- **Estilização:** Tailwind CSS 4 (com tokens customizados via OKLch)
- **Roteamento:** Wouter (SPA)
- **Animações:** Framer Motion (sutis, usadas em entradas de seção)
- **Componentes UI:** shadcn/ui + Radix
- **Tipografia:** Google Fonts (Cormorant Garamond, Source Serif 4, DM Sans)
- **Ícones:** Lucide React

---

## 2. Estrutura de Páginas

| Rota | Página | Status | Descrição |
|------|--------|--------|-----------|
| `/` | **Início** | ✅ Concluída | Hero com foto do Israel + card translúcido (CRP, nome, CTA WhatsApp). Seções: Psicoterapia, Áreas de Atuação, Ensaios (preview), Sobre Mim, Contato (com formulário), Como Chegar (mapa) |
| `/servicos` | **Serviços** | ✅ Concluída | 3 cards de modalidades (Presencial / Online / Palestras) com valor e CTA, seção "Onde atendo" com hierarquia Clinical > Catedral, CTA final |
| `/area/depressao` | **Depressão** | ✅ Concluída | Texto longo sobre depressão (sintomas, diagnóstico, olhar psicanalítico, tratamento) |
| `/area/ansiedade` | **Ansiedade** | ✅ Concluída | Mesma estrutura da página de Depressão, conteúdo específico |
| `/area/luto` | **Luto Prolongado e Perdas** | ✅ Concluída | Mesma estrutura, conteúdo sobre luto |
| `/area/dor-sem-nome` | **Quando a dor não tem nome** | ✅ Concluída | Mesma estrutura, conteúdo sobre sofrimento difuso |
| `/psicologia-cientifica` | **Psicologia Científica** | ⚠️ Estrutura pronta, aguardando conteúdo | Bloco "Psicologia é ciência" expandível + seção de Artigos com card placeholder ("Vício em telas") |
| `/artigo/:slug` | **Página de artigo** | ⚠️ Template pronto, aguardando conteúdo | Template para artigos da Psicologia Científica. Hoje só tem 1 placeholder ("Vício em telas") |
| `/ensaios` | **Ensaios** | ✅ Concluída | Listagem com filtro por categoria (Mitos e Símbolos / Psicologia e Realidade / Psicologia e Literatura) |
| `/ensaios/antigona` | **Ensaio: Antígona** | ✅ Concluída | Único ensaio publicado. Texto integral do Israel sobre a tragédia de Sófocles |
| `/depoimentos` | **Depoimentos** | ✅ Concluída | Grid de 9 depoimentos do Doctoralia formatados em cards (sem fotos, respeitando privacidade) |
| `/tag/:slug` | **Página de tag** | ✅ Concluída | Lista todas as publicações que contêm uma tag específica (sistema de filtragem por etiqueta) |

---

## 3. O Que Foi Alterado em Relação ao Site Original (Manus)

O site original foi gerado pela IA Manus. A versão entregue foi reformulada nos seguintes pontos:

### 3.1 — Hero da Home (mobile)
- **Antes:** Foto + texto empilhados verticalmente, com degradê de transição confuso, "Sessões de 60 minutos" incorreto
- **Depois:** Foto ocupa a tela inteira (`h-svh`), card translúcido `bg-ivory/88 backdrop-blur-sm` ancorado na base sobrepondo apenas o colo do Israel — preserva rosto e busto. Texto compactado para iPhone SE
- **Motivo:** Pedido do cliente — replicar visual do desktop em mobile de forma coerente, já que 90%+ dos acessos virão de celular

### 3.2 — "Sessões de 60 minutos" → "50 minutos"
- **Antes:** Texto aparecia em 5 lugares diferentes ("60 minutos")
- **Depois:** Corrigido para "50 minutos" em todos os lugares (Hero desktop, Hero mobile, Psicoterapia, Serviços, tarja sobre poltrona)
- **Motivo:** Erro factual da IA. As sessões reais do Israel são de 50 minutos

### 3.3 — Mapa do footer (Clinical Center)
- **Antes:** iframe com coordenadas genéricas (`-28.26, -52.4`) caindo em local aleatório de Passo Fundo
- **Depois:** iframe correto apontando para "Clinical Center Rua Uruguai 1969 Passo Fundo RS", clicável (abre Google Maps com endereço correto)
- **Motivo:** Pedido do cliente. Funciona como cartão de visita

### 3.4 — Cards "Como Chegar" clicáveis
- **Antes:** Cards estáticos
- **Depois:** Ambos os cards (Clinical Center e Catedral) são links que abrem o Google Maps com o endereço respectivo
- **Motivo:** Melhor UX para visitante mobile que quer ir ao consultório

### 3.5 — Lixo do Manus removido
- **Antes:** O site carregava plugins do Manus (`vite-plugin-manus-runtime`, `manus-debug-collector`, `ManusDialog`), banner "Preview mode — This page is not live", pasta `__manus__/` com debug collector, pasta `.manus-logs/`
- **Depois:** Tudo removido. `vite.config.ts` reduzido a ~10 linhas com apenas `react`, `tailwindcss`
- **Motivo:** Eliminar dependências da plataforma Manus, evitar tarja "Preview mode" e preparar para migração WordPress

### 3.6 — Valor da Psicoterapia Online
- **Antes:** R$ 180 (valor inventado pela IA)
- **Depois:** "A confirmar" (visualmente em cinza, menos destaque que o R$ 200 do presencial)
- **Motivo:** Israel ainda não definiu o valor — pediu para deixar como pendência

### 3.7 — Página de Serviços reestruturada
- **Antes:** Layout confuso — fotos pequenas em grid, texto longo, valores em seção separada na parte inferior, sem CTA por modalidade
- **Depois:** 3 cards autossuficientes em ordem de destaque:
  1. **Psicoterapia Presencial** — foto grande, R$ 200, botão "Agendar"
  2. **Psicoterapia Online** — mesmo destaque visual, "Valor sob consulta", botão "Consultar"
  3. **Palestras** — card menor (1/3 da largura no desktop), botão outline mais discreto
- **Motivo:** Pedido do cliente — quer algo mais objetivo: nome, valor, botão direto

### 3.8 — Seção "Onde atendo" com hierarquia
- **Antes:** Foto panorâmica única da Catedral de Passo Fundo (local secundário em destaque)
- **Depois:** 2 cards lado a lado — Clinical Center ocupa 2/3 da largura com badge "PRINCIPAL", Catedral ocupa 1/3 com tamanho menor
- **Motivo:** Pedido do cliente — Clinical é o principal, Catedral é secundário. A hierarquia visual precisa refletir isso

### 3.9 — Foto do consultório (poltrona Clinical Center)
- **Antes:** Foto pequena, com tarja "Sessões de 60 minutos" sobreposta cobrindo parte da imagem
- **Depois:** Tarja removida. Imagem ampliada (substituída pela versão maior enviada pelo Israel), agora estica verticalmente para alinhar com a base do texto da seção "O que é psicoterapia?"
- **Motivo:** Pedido do cliente — queria a foto sem a tarja e mostrando mais do enquadramento (janela e tapete)

### 3.10 — Página de Depoimentos
- **Antes:** Página vazia com placeholder "Em breve"
- **Depois:** Página completa com layout em grid (3 colunas desktop, 2 tablet, 1 mobile) usando os 9 depoimentos reais do Doctoralia que o cliente forneceu. Cada card mostra: nome (ou inicial), selo "Opinião verificada", 5 estrelas em bronze, texto do depoimento em itálico, data e local. **Sem fotos** (decisão do cliente — psicoterapia exige privacidade)
- **Motivo:** Construir prova social. O cliente forneceu os prints do Doctoralia

### 3.11 — Header / Menu de navegação
- **Antes:** "Início, Psicologia Científica, Ensaios, Serviços, Depoimentos" (ordem questionável, sem submenu)
- **Depois:** Reordenado seguindo boas práticas de UX para sites de saúde:
  1. Início
  2. **Áreas de Atuação ▾** (submenu com Depressão / Ansiedade / Luto / Quando a dor não tem nome)
  3. Serviços
  4. Psicologia Científica
  5. Ensaios
  6. Depoimentos
  7. Botão "Agendar" (CTA)
- **Motivo:** Pedido do cliente — sentia falta de acesso direto às áreas de atuação. A nova ordem segue a lógica: o visitante primeiro precisa saber **se ele trata o que eu preciso** (Áreas), depois **como funciona** (Serviços), depois autoridade (conteúdo) e prova social (depoimentos)

### 3.12 — Página de Ensaios
- **Antes:** Bloco "Em Frontispício" com texto que pertencia ao ensaio da Antígona, sem filtro de categorias
- **Depois:**
  - Removido o bloco "Em Frontispício" (texto realocado para o ensaio próprio)
  - Mantida apenas a introdução geral ("Aqui me dedico, humildemente...")
  - Adicionado **filtro por categoria** com 4 botões: Todos / Mitos e Símbolos / Psicologia e Realidade / Psicologia e Literatura
  - Hero da página reduzida (era 70vh, agora altura natural)
- **Motivo:** Pedido do cliente — texto deslocado e ausência de filtro

### 3.13 — Página de Psicologia Científica
- **Antes:** Bloco introdutório e seção de artigos sem separação visual clara, tudo no mesmo fundo
- **Depois:**
  - Bloco introdutório ("Psicologia é ciência") agora em fundo `bg-parchment` (mais escuro)
  - Seção de Artigos virou seção independente com fundo `bg-ivory`, criando corte visual claro
  - Linha cobre horizontal de 24px centralizada no topo da seção de Artigos como divisor explícito
  - Label "ARTIGOS" com mais respiro e peso visual
- **Motivo:** Pedido do cliente — a transição entre os dois blocos estava confusa visualmente

### 3.14 — Página de ensaio (Antígona)
- **Antes:** Página fechada, sem sugestões de continuar lendo, sem tags
- **Depois:** Adicionada seção "Continue lendo — Outros ensaios" com 3 cards de sugestões + botão de retorno destacado em outline. Adicionadas tags clicáveis no hero
- **Motivo:** Boas práticas de retenção e navegação

### 3.15 — Sistema de tags por categoria
- **Antes:** Não existia
- **Depois:** Sistema completo:
  - Catálogo central de publicações em `lib/posts.ts`
  - Página `/tag/:slug` que lista todos os posts (ensaios + artigos) com aquela tag
  - Tags clicáveis em todos os lugares (listagem de Ensaios, página de ensaio, página de artigo, card "Vício em telas")
  - URLs normalizadas (ex: "tragédia grega" → `/tag/tragedia-grega`)
- **Motivo:** Pedido do cliente — queria sistema de etiquetas/categorias

### 3.16 — Estrutura para artigos individuais
- **Antes:** Card "Vício em telas" sem rota nem página
- **Depois:** Template `Artigo.tsx` com rota `/artigo/:slug`. Hero com categoria, título, subtítulo, data, tempo de leitura, tags. Conteúdo dinâmico (intro com drop-cap + seções com headings). Bloco "Em preparação" automático. Sugestões de outros artigos. Voltar destacado
- **Motivo:** Pedido do cliente — cada post precisa abrir como página própria

### 3.17 — Hero das páginas internas (overlay padronizado)
- **Antes:** Cada hero usava cor de overlay diferente (`#1a1510/70`, `#2a1f1a/70`), com pouco contraste sobre as fotos
- **Depois:** Todas as heros (`/servicos`, `/psicologia-cientifica`, `/area/:slug`) usam o mesmo overlay sólido escuro de `/ensaios`: `bg-gradient-to-t from-night/95 via-night/80 to-night/65`
- **Motivo:** Pedido do cliente — texto pouco legível sobre as fotos. Optamos pelo overlay sólido (não gradiente lateral) por ser consistente em mobile e desktop

### 3.18 — Hero do desktop (foto do Israel)
- **Antes:** Imagem cortava o rosto/cabeça em telas grandes (>1920px) por ser pequena demais
- **Depois:** Substituída pela versão ampliada (com mais conteúdo nas laterais) enviada pelo cliente. Agora ocupa 100% da largura sem precisar de cap nem bordas escuras
- **Motivo:** Pedido do cliente — manter o enquadramento original em telas grandes

### 3.19 — Formulário de contato alinhado
- **Antes:** Form e coluna de info ao lado tinham alturas diferentes, gerando vazio visual
- **Depois:** Form usa `flex flex-1` para esticar verticalmente até alinhar com a base da coluna de info
- **Motivo:** Limpeza visual

### 3.20 — Seção "Por que sou psicólogo?" alinhada
- **Antes:** Foto e bloco de texto desalinhados na base, deixando vazio embaixo da foto
- **Depois:** Container da imagem se estica para alinhar com a base do texto
- **Motivo:** Limpeza visual

### 3.21 — Favicon
- **Antes:** Sem favicon
- **Depois:** Favicon SVG vetorial com as iniciais "IM" em ivory sobre fundo marsala arredondado, usando a fonte do site (Cormorant Garamond)
- **Motivo:** Identidade visual completa

### 3.22 — Overflow horizontal
- **Antes:** Site rolava lateralmente em mobile (algum elemento estava vazando)
- **Depois:** `overflow-x: hidden` no `html` e no Layout principal
- **Motivo:** Bug crítico de mobile

---

## 4. Decisões de Design e Identidade Visual

### 4.1 — Paleta de cores (OKLch + hex aproximados)

| Token | OKLch | Hex aproximado | Uso |
|-------|-------|----------------|-----|
| `marsala` | `oklch(0.38 0.12 15)` | **#5a1f24** | Ações primárias, CTAs, links destacados |
| `marsala-light` | (variação clara) | **#7a2c33** | Hover do marsala |
| `bronze` | `oklch(0.65 0.08 70)` | **#a07b4a** | Acentos, divisores, labels |
| `bronze-light` | (variação clara) | **#bf9966** | Acentos sobre fundos escuros |
| `ivory` | `oklch(0.97 0.008 85)` | **#fbf7ee** | Fundo principal, texto sobre escuro |
| `cream` | `oklch(0.95 0.012 80)` | **#f4ede0** | Fundo secundário (cards, seções alternadas) |
| `parchment` | (cinza-rosa pálido) | **#ede6d8** | Fundo de seções de destaque |
| `night` | `oklch(0.25 0.04 250)` | **#1f2330** | Fundo escuro (footer, hero overlays, ensaios) |
| `warm-100` a `warm-900` | escala oklch | tons quentes | Texto secundário e variações de fundo |
| `foreground` | `oklch(0.22 0.04 30)` | **#2c2520** | Texto principal |

### 4.2 — Tipografia

| Família | Uso | Pesos |
|---------|-----|-------|
| **Cormorant Garamond** | Títulos, nome do profissional, citações em destaque, italic decorativo | 300, 400, 500, 600, 700 (regular + italic) |
| **Source Serif 4** | Corpo de texto longo (parágrafos editoriais, ensaios, artigos) | 300, 400, 500, 600, 700 (regular + italic) |
| **DM Sans** | UI (botões, labels, navegação, dados pequenos, CRP, datas) | 300, 400, 500, 600, 700 (regular + italic) |

**Decisão:** combinação clássica de **serifa de display** + **serifa de leitura** + **sans-serif funcional** — formato editorial respeitado, evita o visual "tech/startup" comum em sites de saúde digital.

### 4.3 — Tom de comunicação

O site adota um tom **sóbrio, editorial e clínico-psicanalítico**, intencionalmente diferente do padrão "Dr. Influencer" (Pacheco, Ítalo etc.). Decisões:

- Sem "promessas de cura"
- Sem linguagem motivacional vazia
- Sem CTAs gritantes ("Clique já!", "Transforme sua vida!")
- Tipografia editorial (parece livro, não landing page)
- Cores marsala/bronze (associadas a tradição, livros, biblioteca) em vez de azul corporativo
- Drop caps em parágrafos de abertura (referência tipográfica de revistas literárias)

Isso reflete o público-alvo do Israel: pessoas interessadas em psicanálise, leitoras, que valorizam profundidade sobre velocidade.

### 4.4 — Decisões visuais relevantes

- **Hero desktop:** foto full-width com card translúcido `bg-ivory/85 backdrop-blur-sm` sobrepondo a parte esquerda. Padrão "editorial moderno"
- **Hero mobile:** mesmo conceito, card ancorado na base preservando rosto e busto
- **Animações:** apenas `FadeIn` sutil em entradas de seção (Framer Motion). Sem parallax, sem hover effects exagerados. Decisão do cliente: gostou das animações de cor e movimento sutil
- **Imagens:** todas com `object-cover` e `object-position` específicos para preservar pontos focais
- **Cards:** padrão `border + rounded-sm + shadow-sm`, hover sutil aumentando a sombra
- **Tag pills:** `rounded-sm` em vez de `rounded-full` (mais editorial, menos "social media")

---

## 5. Decisões de Copy e Conteúdo

### 5.1 — Páginas com texto **escrito pelo próprio Israel** (preservar integralmente)

| Página | Conteúdo |
|--------|----------|
| `/area/depressao` | Texto longo sobre depressão (sintomas, diagnóstico, olhar psicanalítico, tratamento) |
| `/area/ansiedade` | Texto sobre ansiedade, com explicação psicanalítica do alarme interno |
| `/area/luto` | Texto sobre luto prolongado e perdas |
| `/area/dor-sem-nome` | Texto sobre sofrimento difuso |
| `/ensaios/antigona` | Ensaio completo sobre Antígona (~12 parágrafos, com notas e referências bibliográficas) |
| Seção "Sobre Mim" da home | "Por que sou psicólogo?" (texto introspectivo do próprio Israel) |
| `/psicologia-cientifica` | Bloco "Psicologia é ciência" (texto completo sobre psicanálise como ciência) |

**⚠️ IMPORTANTE:** Nenhum desses textos foi alterado. São voz própria do Israel e devem ser preservados na migração para WordPress.

### 5.2 — Páginas com copy **criado/adaptado pela equipe**

| Página | O que foi escrito |
|--------|-------------------|
| Hero da home | "Psicoterapia psicanalítica. Atendimento presencial em Passo Fundo e online para todo o Brasil." |
| Hero `/servicos` | Subtítulo "Conheça as formas de trabalho que ofereço..." |
| Hero `/depoimentos` | "O que dizem os pacientes" + nota sobre privacidade |
| Cards de Serviços | Descrições curtas das 3 modalidades |
| Card "Vício em telas" (placeholder) | Excerpt provisório (será substituído quando Israel escrever o artigo) |

### 5.3 — Mudanças de tom em relação à versão anterior

- **"Sessões de 60 minutos"** → **"50 minutos"** (factual)
- **R$ 180 online** → **"A confirmar"** (não inventar valores)
- Dado inventado pela IA "Vício em telas" — mantido como placeholder mas marcado como "Em preparação"
- **Removido:** texto "Em Frontispício" da página de Ensaios (era do ensaio Antígona, foi realocado)

---

## 6. Estrutura de Publicações

### 6.1 — Página `/psicologia-cientifica`

Dividida em **dois blocos com fundos contrastantes**:

**Bloco 1 — "Psicologia é ciência" (fundo `parchment`)**
- Texto introdutório expandível (componente `ExpandableSection`)
- Conteúdo completo do Israel sobre o que é a psicanálise
- Botão "Leia mais / Recolher" para revelar 4 sub-tópicos: O que é a psicanálise / Como funciona na prática / Para quem serve / Uma nota sobre ciência

**Bloco 2 — "Artigos / Dicas para a vida cotidiana" (fundo `ivory`)**
- Linha cobre horizontal centralizada como divisor explícito
- Label "ARTIGOS" com tracking marcado
- Subtítulo "Dicas para a vida cotidiana — baseado em evidências"
- Card único do artigo "Vício em telas" (placeholder, marcado como "Em breve")
- Card é clicável e leva para `/artigo/vicio-em-telas` (página de artigo individual)
- Cada artigo tem suas próprias tags clicáveis

### 6.2 — Página `/ensaios`

**Estrutura:**
- Hero compacta com citação de Joseph Conrad
- Introdução geral ("Aqui me dedico, humildemente...")
- **Filtro por categoria** com 4 botões: Todos / Mitos e Símbolos / Psicologia e Realidade / Psicologia e Literatura
- Listagem agrupada por categoria
- Cada ensaio tem tags clicáveis (que levam para `/tag/:slug`)
- Imagem decorativa do divã de Freud no final

### 6.3 — As 3 categorias dos Ensaios

1. **Mitos e Símbolos**
   - Antígona — Sombras Disfarçadas de Luz (✅ publicado)
   - A Grande Conversação (em breve)
   - O que é um mito (em breve)

2. **Psicologia e Realidade**
   - Percepção e Realidade (em breve)

3. **Psicologia e Literatura**
   - O apanhador no campo de centeio — Salinger (em breve)

**Como o filtro funciona:**
- Implementado em React puro com `useState` (sem backend)
- Botões filtram a listagem instantaneamente
- Cada ensaio tem `data-category` correspondente
- Quando categoria selecionada, só ela aparece
- Botão "Todos" mostra todas as categorias agrupadas

### 6.4 — Primeiro conteúdo disponível: Ensaio Antígona

- **Status:** ✅ Publicado e completo
- **URL:** `/ensaios/antigona`
- **Categoria:** Mitos e Símbolos
- **Tags:** tragédia grega, sófocles, hamartia, sabedoria
- **Conteúdo:** ensaio integral do Israel (texto autoral, ~3500 palavras), com notas e referências bibliográficas (Sófocles, Hegel, Aristóteles, Höffe)
- **Recursos da página:**
  - Hero escuro com categoria, título, subtítulo e tags clicáveis
  - Texto com drop-cap de abertura, parágrafos com leading aumentado para leitura confortável
  - Blockquotes destacadas
  - Notas e Referências separadas no final
  - Seção "Continue lendo" com 3 sugestões de outros ensaios
  - Botão "Voltar para todos os ensaios" em outline marsala

### 6.5 — Sistema de tags

- Tags clicáveis aparecem em: listagem de Ensaios, página individual do ensaio, página individual do artigo, card "Vício em telas" da Psicologia Científica
- Cada tag clica abre `/tag/:slug` (ex: `/tag/sofocles`)
- A página de tag mostra **todas as publicações** (ensaios + artigos) que contêm aquela tag
- A tag atual fica destacada em marsala nas pílulas dos posts listados

---

## 7. Seção de Serviços e Agendamento

### 7.1 — Modalidades e valores

| Modalidade | Valor | Destaque |
|------------|-------|----------|
| **Psicoterapia presencial individual** | **R$ 200** | Alto — card grande com foto, botão "Agendar" |
| **Psicoterapia online individual** | "Valor sob consulta" | Igual ao presencial — botão "Consultar" |
| **Palestras e Rodas de Conversa** | "Valores conforme formato e duração" | Menor — card com 1/3 da largura, botão outline |

**Sessões:** semanais, 50 minutos, modalidade individual, atendimento adultos.

### 7.2 — Como funciona o CTA

- **Canal principal:** WhatsApp (`https://wa.me/5554999141101`) com mensagem pré-preenchida "Olá, gostaria de agendar uma consulta."
- **CTAs presentes:**
  - Botão "Agendar" no header (sempre visível)
  - "Agendar Consulta" no Hero da Home
  - Botão por modalidade na página de Serviços
  - Botão WhatsApp na seção de Contato (Home)
  - Card WhatsApp clicável na seção de Contato
  - Botão "Agendar pelo WhatsApp" no final de várias páginas
- **Formulário de contato (Home):** envia para WhatsApp ao submeter (gera link `wa.me` com mensagem formatada — não usa backend)

### 7.3 — Pendências dessa seção

- Definir o valor da Psicoterapia Online (Israel deve confirmar)
- Substituir as fotos das modalidades (Israel vai enviar fotos novas dos consultórios)

---

## 8. Pendências — Itens que o Cliente Precisa Enviar

| # | Item | Para qual página | Impacto se não for entregue |
|---|------|------------------|-----------------------------|
| 1 | **Foto ampliada do consultório principal (poltrona)** | `/` Home — seção "O que é psicoterapia?" e Servicos | A versão atual já foi substituída pela versão maior enviada. Se quiser ampliar mais (mostrar mais janela e tapete), é só mandar nova versão. |
| 2 | **Fotos das modalidades de atendimento** | `/servicos` — cards das 3 modalidades | Hoje usamos fotos do consultório como placeholder. Idealmente cada modalidade teria sua imagem própria |
| 3 | **Imagens da seção "Onde atendo"** | `/servicos` — Clinical Center e Catedral | As imagens atuais (poltrona Clinical e sala Catedral) são suficientes mas não ideais. Israel disse que enviaria fotos melhores |
| 4 | **Fotos originais usadas no site da Manus** | Várias seções | Algumas imagens ainda vêm da CDN da Manus (`d2xsxph8kpxj0f.cloudfront.net`). Quando for migrar para WordPress, todas precisarão estar localmente |
| 5 | **Valor da Psicoterapia Online individual** | `/servicos` — Card "Online" | Hoje aparece como "Valor sob consulta". Quando definir, substituímos pelo valor numérico |
| 6 | **Decisão sobre seção de suicídio** | Pergunta direta para Israel: **"Você atende esse tipo de demanda?"** Se sim, precisa estar no site (de forma branda, recurso de cuidado, sem alarmismo, sem detalhamento clínico). Se não, mantemos fora. Decisão do Gustavo: manter fora **até** que Israel responda |
| 7 | **Conteúdo dos artigos da Psicologia Científica** | `/psicologia-cientifica` e `/artigo/:slug` | Hoje só existe o placeholder "Vício em telas". Quando Israel escrever artigos reais, é só preencher o objeto `artigos` em `Artigo.tsx` |
| 8 | **Conteúdo dos próximos ensaios** | `/ensaios` | Hoje só existe o ensaio "Antígona". Os outros 4 títulos estão como "Em breve". Israel precisa enviar quando estiverem prontos |

---

## 9. Pendências Técnicas e de Desenvolvimento

### 9.1 — O que ficou para implementar

- **Migração para WordPress:** plano combinado, ainda não iniciado. Toda a estrutura visual será replicada
- **Hospedagem definitiva:** hoje rodando localmente via ngrok. Após migração WordPress, definir host
- **Domínio:** definir e configurar
- **Email transacional / SMTP do formulário:** hoje o form de contato envia via WhatsApp. Quando migrar, decidir se vira email real
- **Analytics:** o `index.html` tem placeholder de Umami (`%VITE_ANALYTICS_ENDPOINT%/umami`) que não está configurado. Decidir tracking definitivo (Umami, GA4 ou Plausible)
- **SEO meta tags:** descrição básica está, mas faltam Open Graph, Twitter Card, JSON-LD de "LocalBusiness" (importante para SEO local)
- **Sitemap.xml e robots.txt** para SEO
- **Política de privacidade / Termos de uso** (LGPD)

### 9.2 — Bugs conhecidos

- Nenhum bug conhecido no momento da entrega.

### 9.3 — Itens que dependem de conteúdo do cliente

- Página `/psicologia-cientifica` está com 1 artigo placeholder. Esperando conteúdo real.
- Página `/ensaios` está com 1 ensaio (Antígona) e 4 placeholders. Esperando os outros.
- Seção "Onde atendo" pode ser atualizada quando vierem fotos novas.

---

## 10. Pendências de Mobile

### 10.1 — O que foi resolvido

Mobile foi prioridade absoluta nesta entrega (90%+ dos acessos virão de celular). Foi feita auditoria completa e todos os 20 problemas identificados foram corrigidos:

**Críticos (alta prioridade) — resolvidos:**
1. Menu mobile sem scroll próprio (corrigido com `max-h overflow-y-auto`)
2. Sub-itens "Áreas de Atuação" com touch target pequeno (corrigido para `py-3.5`)
3. Links âncora não fechavam o menu (corrigido com `onClick`)
4. Imagem da poltrona com altura fixa estourava em telas pequenas (corrigido com `h-[320px] sm:h-[400px]`)
5. Cards de Serviços com preço + botão lado a lado quebravam mal em <375px (corrigido com `flex-col sm:flex-row`)
6. Navegação prev/next em AreaDetail dava overflow com títulos longos (corrigido com `truncate` + `max-w-[45%]`)
7. Botões de filtro de Ensaios com touch ruim (corrigido para `py-3`)
8. Card de ensaio só era clicável no título (corrigido com Link absoluto cobrindo o card todo)
9. Botão "Leia mais" em Psicologia Científica com touch ruim (corrigido com `py-2 -my-2`)
10. TagPage com título inline-flex podia causar overflow (corrigido com `flex-wrap break-words`)

**Média/baixa prioridade — resolvidos:**
11. Botão hambúrguer ~40px (aumentado para `p-2.5`)
12. Hero mobile com card grande em iPhone SE (compactado com `text-[1.75rem]`)
13. Gradient dos cards de áreas com baixo contraste (mudado para `from-black/70`)
14. Form de contato com padding excessivo (corrigido para `p-6 sm:p-8`)
15. Card Catedral com `min-h-[220px]` estranho em mobile (corrigido com `aspect-[16/10]`)
16. Cards Serviços com `p-8` excessivo (corrigido para `p-6 sm:p-8 lg:p-10`)
17. Tags em geral com touch ruim (`px-3.5 py-2` nas pílulas clicáveis)
18. AreaDetail com `min-height: 380px` inline (corrigido com breakpoint)
19. Padding/gaps excessivos (várias seções ajustadas)
20. SobreSection com foto antes do título no mobile (corrigido — texto vem primeiro)

**Outros:**
- Overflow horizontal global travado com `overflow-x: hidden` no `html` e no Layout
- Hero mobile completamente reformulado para preservar rosto/busto do Israel
- Todos os heros internos padronizados com mesmo overlay sólido escuro

### 10.2 — O que ainda precisa de ajuste

Nenhum item identificado pela auditoria mobile permanece em aberto. Quando o cliente testar em dispositivos reais, possíveis ajustes finos podem aparecer.

### 10.3 — Prioridade

Mobile foi tratado como **prioridade máxima** durante todo o desenvolvimento, conforme decisão do cliente.

---

## 11. Observações Importantes para o Cliente

### 11.1 — Sobre os créditos da Manus

⚠️ **NÃO usar a IA do site da Manus para nada.** Os créditos estão baixos (~300) e quando zeram, **trava até de abrir** o site na plataforma da Manus. A versão entregue pela Kandle roda independentemente — ela não depende da Manus. Se precisar consultar o site original como referência visual, abra apenas para visualizar (não peça alterações para a IA).

### 11.2 — Prazo combinado e fluxo de revisão

- **Entrega:** sexta-feira
- **Revisão do cliente:** sábado
- **Ajustes finais:** após retorno da revisão
- **Migração para WordPress:** fase posterior

### 11.3 — Como solicitar alterações futuras

- **Alterações pequenas (texto, valores, datas):** mensagem direta para o Gustavo (Kandle)
- **Conteúdo novo (artigos, ensaios):** enviar texto completo formatado, com título, categoria e tags sugeridas
- **Fotos:** sempre enviar versão alta resolução, indicando para qual seção. Salvar em pasta organizada
- **Mudanças estruturais:** marcar reunião para alinhar antes da execução

### 11.4 — Sobre o conteúdo escrito

Os textos das páginas `/area/*`, do ensaio Antígona, do "Sobre Mim" e do bloco "Psicologia é ciência" são **da autoria do Israel** e foram preservados integralmente. Qualquer alteração deles deve passar pelo próprio Israel.

---

## 12. Observações Internas (Equipe Kandle)

### 12.1 — Perfil do cliente

Israel Machado é **diferente do perfil "influencer médico"**. Não quer:
- Linguagem motivacional
- CTAs gritantes
- Cores corporativas (azul escritório)
- Layout "clean tech"
- Promessas de transformação
- Frases de efeito
- Gradientes coloridos / glassmorphism agressivo

Quer:
- Tom editorial / literário
- Voz autoral preservada
- Estética sóbria, tipograficamente cuidada
- Cores de tradição (marsala, bronze, ivory)
- Foco em profundidade, não em conversão imediata

### 12.2 — Diferença entre "Dr. Pacheco/Ítalo" vs perfil científico/psicanalítico

**Perfil Pacheco/Ítalo (médicos influenciadores):**
- Fotos sorrindo, cores vibrantes, vídeos curtos
- CTAs urgentes ("Agende já!", "Vagas limitadas!")
- Promessas mensuráveis ("Reduza 70% da sua ansiedade")
- Linguagem direta, simples, "fale como pessoa comum"
- Layout responsive típico de marketing digital

**Perfil científico/psicanalítico (Israel):**
- Fotos contidas, paleta sóbria, tipografia editorial
- CTAs discretos ("Agendar consulta", "Sobre mim")
- Sem promessas — propõe processo, não solução
- Linguagem cuidada, vocabulário técnico preservado quando faz sentido
- Layout que parece revista, não landing page

**Por que isso importa para a Kandle:** o público de psicanálise lê. Não pula parágrafos. Valoriza profundidade. Um site que parece "marketing" repele esse público. Repetir esse padrão para outros psicólogos que tenham perfil similar.

### 12.3 — Decisões técnicas que o próximo dev precisa saber

1. **Gerenciador de pacotes:** `pnpm@10.4.1`. Build scripts aprovados em `package.json` via `onlyBuiltDependencies`. Para rodar local, precisa de Node ≥22 (usar fnm/nvm).
2. **Comando de dev:** `pnpm dev` (Vite na porta 3000)
3. **Imagens locais:** salvar em `client/public/images/`. URLs já no código apontam para `/images/...`. Nunca usar a CDN da Manus para imagens novas.
4. **Roteador:** Wouter (não React Router). Sintaxe ligeiramente diferente — usar `<Route path="/x" component={X} />` e `useParams<{ slug: string }>()`.
5. **Sistema de tags:** centralizado em `client/src/lib/posts.ts`. Para adicionar novo post (ensaio ou artigo), atualizar **dois lugares**: o catálogo em `posts.ts` E o objeto interno da página específica (`Ensaios.tsx` ou `Artigo.tsx`). Quando migrar para WordPress, isso vira post type único.
6. **Adicionar novo ensaio:** copiar `EnsaioAntigona.tsx`, criar arquivo novo, adicionar rota em `App.tsx`, atualizar `Ensaios.tsx` e `posts.ts`.
7. **Adicionar novo artigo:** mais simples — só adicionar entrada no objeto `artigos` em `Artigo.tsx` e em `posts.ts`. Sem rota nova, sem arquivo novo.
8. **Animações:** todas via `<FadeIn>` (componente custom em `components/FadeIn.tsx` que envolve Framer Motion). Não usar animações maiores — o cliente prefere movimento sutil.
9. **Mapas:** iframe simples sem API key. Usar embed via query textual (`maps.google.com/maps?q=...&output=embed`). Não usar `MapView` (componente que sobrou de tentativa anterior, hoje sem uso ativo — pode ser removido em refatoração futura).
10. **Tamanho de referência desktop:** **1440px**. Sempre testar em 1440, 1920 e 2560. Mobile testar em iPhone SE (375), iPhone 12 (390), Android grande (412).
11. **Removido completamente:** plugins do Manus (`@builder.io/vite-plugin-jsx-loc`, `vite-plugin-manus-runtime`, debug collector). Não reintroduzir.
12. **Favicon:** `/favicon.svg` vetorial com IM. Se cliente quiser PNG fallback, gerar exportando o SVG.

---

## Encerramento

Esta entrega cobre:
- ✅ 22 alterações estruturais em relação ao site original da Manus
- ✅ Auditoria mobile completa com 20 problemas identificados e corrigidos
- ✅ Sistema de publicações com filtros, tags e templates reutilizáveis
- ✅ Página de depoimentos completa com conteúdo real
- ✅ Header reorganizado com submenu de Áreas de Atuação
- ✅ Identidade visual consolidada e documentada

**Total de páginas funcionais:** 12
**Total de pendências do cliente:** 8
**Total de pendências técnicas (pré-WordPress):** ~7

Próximo passo: revisão do cliente (sábado) e migração para WordPress.

---

*Relatório gerado em 08/04/2026 — Kandle Studio*
