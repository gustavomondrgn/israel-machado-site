# Guia de Reconstrução no Elementor — Site Israel Machado

> Guia visual 1:1 para reproduzir o site React/Tailwind no Elementor (WordPress).
> Use os valores deste documento direto nos campos do Elementor — não precisa mais abrir o código.

---

## ⚙️ ANTES DE COMEÇAR — Configurações Globais

### 1. Fontes (Elementor → Configurações do Site → Fontes Globais)

Instale via Google Fonts no `Elementor → Configurações → Fontes`:

| Função | Família | Onde usar |
|---|---|---|
| **Display** (títulos) | `Cormorant Garamond` | H1, H2, H3, H4, preços, citações |
| **Body** (parágrafos) | `Source Serif 4` | Textos longos, descrições |
| **Sans** (UI) | `DM Sans` | Botões, navegação, labels, badges |

> ⚠️ **Source Serif 4** pode aparecer como "Source Serif Pro" em alguns repositórios — use a mais nova disponível.

### 2. Cores Globais (Elementor → Configurações do Site → Cores Globais)

Cadastre estas como **Cores Personalizadas** com os nomes abaixo. Os valores estão em HEX (Elementor não aceita OKLCH):

| Nome (cadastre assim) | HEX | Uso principal |
|---|---|---|
| `Marsala` (Primary) | `#61403C` | Botões, CTAs, links, drop-cap |
| `Marsala Light` | `#735249` | Hover de botões marsala |
| `Marsala Dark` | `#4A2F2A` | Acento escuro |
| `Bronze` | `#C9A68B` | Secondary accent, badges, ícones |
| `Bronze Light` | `#DCC4B3` | Hover de bronze |
| `Night` | `#1A1A2E` | Fundo escuro (footer, seção ensaios) |
| `Night Light` | `#2D2D45` | Cards sobre fundo night |
| `Ivory` (Background) | `#F8F5F1` | Fundo principal claro |
| `Cream` | `#F0EBE5` | Cards, seções alternadas |
| `Parchment` | `#F1EAE0` | Seção "Sobre" e "Onde atendo" |
| `Foreground` (Text) | `#373636` | Texto padrão escuro |
| `Muted Text` | `#757575` | Texto secundário/labels |
| `Warm 100` | `#F5EFEA` | Texto sobre fundo escuro |
| `Warm 200` | `#F0DCD0` | Texto secundário sobre dark |
| `Warm 300` | `#E6D0C8` | Texto terciário sobre dark |
| `Warm 400` | `#D4A574` | Links sobre dark, badges |
| `Warm 500` | `#C8945E` | Muted sobre dark |
| `Warm 600` | `#B07D48` | Muito muted sobre dark |
| `Warm 800` | `#4D2D1F` | Bordas no footer |

### 3. Container & Layout (Configurações do Site → Layout)

- **Largura do container**: `1280px`
- **Espaçamento entre widgets**: `0` (controle manual)
- **Padding lateral mobile**: `16px`
- **Padding lateral tablet**: `24px`
- **Padding lateral desktop**: `32px`
- **Border radius padrão**: `2px` (o site usa `rounded-sm` em quase tudo — bordas quase retas, estilo editorial)

### 4. CSS Customizado Global (Elementor → Custom CSS, ou via tema filho)

Cole isso em **Configurações do Site → CSS Personalizado** (Elementor Pro) ou no `style.css` do tema filho:

```css
/* Drop Cap — primeira letra grande nos parágrafos editoriais */
.drop-cap p:first-of-type::first-letter,
.drop-cap::first-letter {
  font-family: 'Cormorant Garamond', Georgia, serif;
  float: left;
  font-size: 3.5em;
  line-height: 0.8;
  padding-right: 0.12em;
  padding-top: 0.08em;
  color: #61403C;
  font-weight: 600;
}

/* Divisor editorial decorativo (linha gradiente curta) */
.editorial-divider {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #C9A68B, transparent);
  margin: 32px 0;
  border: none;
}

/* Selection color */
::selection {
  background: rgba(97, 64, 60, 0.15);
  color: #373636;
}

/* Smooth scroll */
html { scroll-behavior: smooth; }

/* Body global */
body {
  font-family: 'Source Serif 4', Georgia, serif;
  background: #F8F5F1;
  color: #373636;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', Georgia, serif;
}
```

---

## 🎨 DETALHES "INVISÍVEIS" QUE PASSAM DESPERCEBIDOS

Esta é a lista do que mais costuma escapar quando se reconstrói no Elementor:

| Detalhe | Onde aplicar | Como configurar no Elementor |
|---|---|---|
| **Border-radius `2px`** | Quase TODOS os cards, botões, inputs | Sempre `2px` em "Border Radius" — não use o default `4-8px` do Elementor |
| **Backdrop blur** | Header (quando scrolla), card hero, form contato | CSS Custom: `backdrop-filter: blur(4px); background: rgba(248,245,241,0.85);` |
| **Letter-spacing largo em UPPERCASE** | Badges de seção ("Fundamentos", "Contato", "Localização") | `text-transform: uppercase` + `letter-spacing: 0.25em` (≈ 4px) |
| **Drop-cap** | Primeiro parágrafo de "O que é psicoterapia?" e "Sobre Mim" | Adicione classe `drop-cap` no widget Texto Editor |
| **Linha decorativa antes de badges** | Hero, "Voltar", labels de seção | Widget Divider 8-10px wide + cor bronze, OU pseudo-elemento CSS |
| **Sombras suaves** | Cards: `shadow-sm` = `0 1px 2px rgba(0,0,0,0.05)` | Box Shadow: H=0, V=1, Blur=2, cor preto 5% opacidade |
| **Sombra média (hover)** | Cards no hover: `shadow-md` = `0 4px 6px rgba(0,0,0,0.07)` | H=0, V=4, Blur=6, cor preto 7% |
| **Sombra grande** | Card do hero, iframe do mapa: `shadow-lg` = `0 10px 15px rgba(0,0,0,0.1)` | H=0, V=10, Blur=15, cor preto 10% |
| **Drop-shadow em texto** | Heading branco sobre imagem (Hero da Serviços) | `text-shadow: 0 2px 4px rgba(0,0,0,0.5)` |
| **Image scale on hover** | Imagens dos cards de áreas | Motion Effects → Hover Animation → Grow OU CSS `transform: scale(1.05); transition: 700ms` |
| **Gap animation no link "Ler mais →"** | Links das áreas/ensaios | CSS hover: aumenta `gap` de `6px` para `12px` em 300ms |
| **Border opacity (border/50)** | Cards = 1px solid bronze a 50% opacidade | `border: 1px solid rgba(201,166,139,0.5)` |
| **Gradient overlay sobre imagens** | Hero e cards de áreas (texto sobre imagem) | Background → Overlay → Gradient: black 70% → transparente |
| **Linhas finas (1px) com gradiente** | Section transitions, editorial dividers | `linear-gradient(90deg, transparent, #C9A68B, transparent)` em uma div 1px de altura |
| **Cursor pointer em tudo clicável** | Cards inteiros que viram link | Adicione `cursor: pointer` no CSS |
| **Texto com opacidade** (`text-foreground/70`) | Body texts geralmente NÃO são pretos puros | Use `color: rgba(55, 54, 54, 0.70)` para tons suavizados |
| **`leading-[1.85]`** | Parágrafos editoriais longos | Line-height = `1.85` (não o padrão `1.5`) |
| **`leading-[1.08]` em headings grandes** | H1 do hero | Line-height = `1.08` (super apertado) |

---

## 📐 ESCALA DE ESPAÇAMENTOS — Tabela de Conversão Tailwind → px

Sempre que ver no código uma classe tipo `py-20` ou `gap-6`, é só consultar aqui:

| Tailwind | px | Tailwind | px |
|---|---|---|---|
| `0.5` | 2 | `8` | 32 |
| `1` | 4 | `10` | 40 |
| `1.5` | 6 | `12` | 48 |
| `2` | 8 | `14` | 56 |
| `2.5` | 10 | `16` | 64 |
| `3` | 12 | `20` | 80 |
| `3.5` | 14 | `24` | 96 |
| `4` | 16 | `28` | 112 |
| `5` | 20 | `32` | 128 |
| `6` | 24 |  |  |
| `7` | 28 |  |  |

**Padding vertical das seções principais**: `py-16 lg:py-24` = **64px (mobile) / 96px (desktop)**

---

## 🧱 SEÇÃO 1 — HEADER / NAVBAR

### Estado padrão (sobre página com hero escuro)
- **Posição**: Fixed top, z-index 50
- **Background**: `rgba(26, 26, 46, 0.6)` (Night a 60%) + `backdrop-filter: blur(4px)`
- **Padding vertical**: `16px` mobile / `20px` desktop
- **Padding horizontal**: container 1280px

### Estado scrollado
- **Background**: `rgba(248, 245, 241, 0.95)` (Ivory a 95%) + `backdrop-filter: blur(8px)`
- **Borda inferior**: `1px solid #E0D5C8`
- **Transição**: `500ms`

### Logo
- **Texto principal "Israel Machado"**
  - Font: **Cormorant Garamond**, **20px** (mobile) / **28px** (desktop)
  - Weight: **600** (semibold)
  - Letter-spacing: `0.025em` (tracking-wide)
- **Subtítulo "PSICÓLOGO CLÍNICO"**
  - Font: **DM Sans**, **10px** (mobile) / **12px** (desktop)
  - UPPERCASE
  - Letter-spacing: **0.25em** (3-4px)
  - Cor scrolled: `#757575` (Muted)
  - Cor sobre dark: `#D4A574` (Warm 400)

### Itens do menu
- Font: **DM Sans**, **14px**, weight normal
- Letter-spacing: `0.025em`
- Cor inativa scrolled: `rgba(55,54,54,0.7)`
- Cor inativa dark: `#F0DCD0` (Warm 200)
- Cor hover/ativa: `#61403C` (Marsala)
- Transição: `300ms`
- **Gap entre itens**: `28px`

### Botão "Agendar" do header
- Background: `#61403C` (Marsala)
- Hover: `#735249` (Marsala Light)
- Texto: branco/Ivory, **DM Sans 14px UPPERCASE**, letter-spacing `0.025em`
- Padding: **20px horizontal / 10px vertical**
- Border-radius: **2px**

### Dropdown (submenu)
- Background: `#F8F5F1` (Ivory)
- Box-shadow: `shadow-lg` (0 10px 15px rgba(0,0,0,0.1))
- Item padding: **20px h / 10px v**
- Item hover: bg `#F0EBE5` (Cream) + cor `#61403C` (Marsala)

---

## 🦶 SEÇÃO 2 — FOOTER

- **Background**: `#1A1A2E` (Night)
- **Padding**: `64px top / 32px bottom`
- **Layout**: Grid 1 coluna mobile / 3 colunas desktop
- **Gap entre colunas**: `40px` mobile / `48px` desktop
- **Borda separadora antes do copyright**: `1px solid #4D2D1F` (Warm 800), com `pt-6` (24px)

### Coluna 1 — Identidade
- **"Israel Machado"** — Cormorant Garamond, **24px**, weight 600, cor `#F5EFEA` (Warm 100)
- **"PSICÓLOGO CLÍNICO"** — DM Sans, **12px**, UPPERCASE, letter-spacing **0.2em**
- **Bio curta** — Source Serif 4, **14px**, cor `#E6D0C8` (Warm 300), line-height `1.625`

### Colunas 2 e 3 — Navegação / Contato
- **Heading da seção**: DM Sans, **12px**, UPPERCASE, letter-spacing **0.2em**, cor `#C9A68B` (Bronze), `mb-4` (16px)
- **Links**: DM Sans, **14px**, cor `#E6D0C8` (Warm 300)
- **Hover**: cor `#F5EFEA` (Warm 100)
- **Gap entre links**: `8px` ou `12px`
- **Ícones inline**: gap de `8px` com o texto

### Copyright (linha inferior)
- DM Sans, **12px**, cor `#C8945E` (Warm 500)

---

## 🌅 SEÇÃO 3 — HERO DA HOME

### Estrutura geral (DESKTOP)
- **Altura mínima**: `85vh`
- **Background**: imagem de fundo full-width
- **Overlay no topo**: gradient `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.15), transparent)` com `70px` de altura

### Card translúcido sobre a imagem (DESKTOP)
- **Background**: `rgba(248, 245, 241, 0.85)` + `backdrop-filter: blur(4px)`
- **Padding**: **48px**
- **Max-width**: `512px`
- **Border-radius**: `2px`
- **Box-shadow**: `0 10px 15px rgba(0,0,0,0.1)` (shadow-lg)
- **Posição**: Esquerda, centralizado verticalmente

### Conteúdo interno do card

1. **Badge CRP** (linha + texto)
   - Linha: `40px` × `1px`, cor `#C9A68B` (Bronze), gap `12px` do texto
   - Texto: DM Sans, **12px**, UPPERCASE, letter-spacing **0.3em**, cor `#C8945E` (Warm 500)
   - Margin-bottom: **16px**

2. **H1 "Israel Machado"** (em duas linhas)
   - Font: **Cormorant Garamond**, **51.2px** (3.2rem), weight 600
   - Cor: `#373636`
   - Line-height: **1.08** ⚠️ apertadíssimo
   - Margin-bottom: **8px**

3. **Divisor decorativo**
   - `56px × 2px`, cor `rgba(97,64,60,0.6)` (Marsala 60%)
   - Margin-bottom: **12px**

4. **Subtítulo "Psicólogo Clínico"**
   - Cormorant Garamond, **18px**, *italic*, cor `#B07D48` (Warm 600)
   - Margin-bottom: **16px**

5. **Descrição**
   - Source Serif 4, **14.4px** (0.9rem), cor `rgba(55,54,54,0.75)`
   - Line-height: `1.625`
   - Margin-bottom: **24px**

6. **Nota "Sessões de 50 minutos"**
   - Source Serif 4, **12.8px** (0.8rem), cor `#C8945E` (Warm 500)
   - Margin-bottom: **24px**

7. **Botões** (lado a lado, gap **12px**)
   - **Primário**: bg Marsala, padding **24px h / 12px v**, ícone Phone 16x16
   - **Secundário**: outline 1px solid `rgba(55,54,54,0.2)`, mesmo padding

### Versão MOBILE (override)
- Card aparece **na parte inferior** da tela (full-width, com `12-16px` margem externa)
- Card padding interno: **16-20px**
- H1: **28-32px**, line-height ainda apertada
- Botões em **stack vertical**, gap `10px`

---

## 📖 SEÇÃO 4 — "O QUE É PSICOTERAPIA?"

- **Background**: `#F0EBE5` (Cream)
- **Padding vertical**: `64px` mobile / `96px` desktop
- **Layout**: Grid 12 colunas
  - Imagem: 5/12 colunas
  - Texto: 7/12 colunas
  - Gap: `32px` mobile / `64px` desktop

### Imagem
- Border-radius: `2px`
- Box-shadow: `shadow-lg`
- Mobile: altura fixa `320px`/`400px`, object-cover

### Coluna de texto

1. **Badge "FUNDAMENTOS"**
   - DM Sans, **12px**, UPPERCASE, letter-spacing **0.25em**, cor `#C9A68B` (Bronze)

2. **H2 "O que é psicoterapia?"**
   - Cormorant Garamond, **30/36/48px** (mobile/tablet/desktop), weight 600
   - Cor: `#373636`
   - Line-height: `1.25`
   - Margin-bottom: **32px**

3. **Parágrafo principal (com drop-cap)**
   - Adicionar classe `drop-cap` no widget Texto
   - Source Serif 4, **16/18px**
   - Cor: `rgba(55,54,54,0.85)`
   - Line-height: **1.85** ⚠️
   - Margin-bottom: **32px**

4. **Divisor editorial** — adicionar `<hr class="editorial-divider">` ou widget Divider 60x1px com cor Bronze

5. **H3 "Como funciona?"**
   - Cormorant Garamond, **24/30px**, weight 600
   - Margin-top: **32px**, margin-bottom: **24px**

6. **Demais parágrafos**
   - Source Serif 4, **16px**, cor `rgba(55,54,54,0.80)`
   - Line-height: **1.85**
   - Margin-bottom: **24-32px**

7. **Link "Mais informações"**
   - DM Sans, **14px**, cor Marsala, hover Marsala Light
   - Display inline-flex com ícone, gap `8px`

---

## 🗂️ SEÇÃO 5 — "PRINCIPAIS ÁREAS ATENDIDAS"

- **Background**: `#F8F5F1` (Ivory)
- **Padding vertical**: `64-96px`

### Cabeçalho da seção (centralizado)
- Badge "ÁREAS DE ATENDIMENTO" — DM Sans 12px UPPERCASE letter-spacing 0.25em cor Bronze
- H2 — Cormorant Garamond, **30/36/48px** weight 600, margin-bottom **24px**
- Descrição — Source Serif 4 16px cor `rgba(55,54,54,0.75)` line-height `1.625`

### Grid de cards
- **Layout**: 1 coluna mobile / 2 colunas desktop
- **Gap**: **24px**

### Card individual
- **Background**: `#F0EBE5` (Cream)
- **Border**: `1px solid rgba(192,176,160,0.5)` (Border 50%)
- **Border-radius**: `2px`
- **Overflow**: hidden
- **Cursor**: pointer
- **Transição**: `all 500ms`
- **Hover**:
  - Box-shadow: `shadow-lg` (0 10px 15px rgba(0,0,0,0.1))
  - Border-color: `rgba(201,166,139,0.3)` (Bronze 30%)
  - Imagem interna: `transform: scale(1.05)` em **700ms**

### Estrutura interna do card

**1. Imagem (parte de cima)**
- Altura: `176px` (h-44)
- Object-cover
- **Overlay gradient**: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)`
- **Título sobreposto** (absoluto, bottom 16px, left/right 24px):
  - Cormorant Garamond, **20px**, weight 600
  - Cor branca, `text-shadow: 0 2px 4px rgba(0,0,0,0.3)` (drop-shadow-md)
  - Hover: cor `#F0DCD0` (Warm 200)

**2. Conteúdo (parte de baixo)**
- Padding: **28px** geral, **20px** top
- **Excerpt**: Source Serif 4, **14px**, cor `rgba(55,54,54,0.7)`, line-height `1.625`, margin-bottom **16px**
- **Link "LER MAIS →"**:
  - DM Sans, **12px**, UPPERCASE, letter-spacing `0.025em`
  - Cor Marsala
  - Display inline-flex, gap **6px**
  - Hover: gap aumenta para **12px** em 300ms (CSS custom)
  - Ícone ChevronRight 14×14

---

## 🌒 SEÇÃO 6 — "MITOS, SÍMBOLOS E PSICOLOGIA" (Ensaios)

- **Background**: `#1A1A2E` (Night) — seção escura
- **Padding vertical**: `64-96px`
- **Layout**: 2 colunas (texto + card destaque)

### Coluna esquerda (intro)
- Badge "ENSAIOS" — DM Sans 12px UPPERCASE letter-spacing 0.25em cor `#D4A574` (Warm 400)
- H2 — Cormorant Garamond **30/36/48px** weight 600 cor `#F5EFEA` (Warm 100), line-height `1.25`, margin-bottom **24px**

**Blockquote (citação)**
- Texto: Cormorant Garamond, **18px**, *italic*, cor `#F0DCD0` (Warm 200), line-height `1.625`
- Atribuição: DM Sans, **12px**, cor `#C8945E` (Warm 500), margin-top **8px**

**Descrição**
- Source Serif 4, **16px**, cor `#E6D0C8` (Warm 300), line-height `1.625`, margin-bottom **32px**

**Link "Ler os Ensaios"**
- DM Sans, **14px**, cor `#DCC4B3` (Bronze Light), hover `#F5EFEA`
- Letter-spacing `0.025em`, inline-flex gap **8px**

### Card de destaque (Antígona)
- **Background**: `rgba(45, 45, 69, 0.5)` (Night Light 50%)
- **Border**: `1px solid rgba(77, 45, 31, 0.5)` (Warm 800 50%)
- **Padding**: **32px**
- **Border-radius**: `2px`
- **Hover border**: `rgba(201,166,139,0.3)` (Bronze 30%)
- **Transição**: `all 500ms`

**Conteúdo do card**
- Badge: DM Sans **12px** UPPERCASE letter-spacing **0.2em** cor `#C8945E`, display block, margin-bottom **12px**
- H3: Cormorant Garamond **24px** weight 600 cor `#F5EFEA`, hover cor `#C9A68B`, margin-bottom **12px**
- Parágrafo: Source Serif 4 **14px** cor `#D4A574` line-height `1.625` margin-bottom **16px**
- Link "LER ENSAIO →": DM Sans 12px UPPERCASE cor Bronze Light, gap 6→12px no hover

---

## 👤 SEÇÃO 7 — "POR QUE SOU PSICÓLOGO?" (Sobre)

- **Background**: `#F1EAE0` (Parchment)
- **Padding vertical**: `64-96px`
- **Layout**: 2 colunas (imagem + texto)

### Imagem (coluna esquerda)
- Border-radius: `2px`
- Border decorativa: `1px solid rgba(201,166,139,0.2)` (Bronze 20%)
- Box-shadow: `shadow-lg`

### Texto (coluna direita)
- Badge "SOBRE MIM" — DM Sans 12px UPPERCASE letter-spacing 0.25em cor Bronze
- H2 — Cormorant Garamond **30/36/48px** weight 600, line-height `1.25`, margin-bottom **32px**
- Parágrafo intro com **drop-cap** — Source Serif 4 **16/18px**, line-height **1.85**, margin-bottom **40px**

### Subseções "Formação", "Grupos de Estudos", "Outras Formações"
- H3: Cormorant Garamond **20px** weight 600, margin-bottom **20px**
- Lista de itens:
  - Estrutura: flex, gap **12px**
  - **Bullet circular**: `6px × 6px`, border-radius `50%`, margin-top `8px`
    - Formação: cor Marsala
    - Grupos: cor Bronze
    - Outras: cor Warm 500
  - Texto: Source Serif 4 **14px** cor `rgba(55,54,54,0.8)`
  - Gap entre itens: **12px**
- Margin-bottom de cada subseção: **32px**

---

## 📞 SEÇÃO 8 — "AGENDE SUA CONSULTA" (Contato)

- **Background**: imagem de fundo + overlay `rgba(248,245,241,0.85)` + backdrop-blur 4px
- **Padding vertical**: `64-96px`
- **Layout**: 2 colunas (info + formulário)

### Coluna esquerda — Info de contato
- Badge "CONTATO" — Bronze, mesmo padrão
- H2 — Cormorant Garamond **30/36/48px** weight 600, margin-bottom **16px**
- Subtítulo H3 — Cormorant Garamond **24px** weight 600, margin-bottom **16px**
- Parágrafo — Source Serif 4 **16px** cor `rgba(55,54,54,0.75)`, margin-bottom **24px**

### Cards de contato (WhatsApp / Instagram / Sigilo)
Cada card:
- **Background**: `rgba(240,235,229,0.8)` (Cream 80%)
- **Border**: `1px solid rgba(192,176,160,0.5)`
- **Border-radius**: `2px`
- **Padding**: **20px**
- **Layout interno**: flex items-center, gap **16px**
- **Hover**: shadow-md + border bronze 30%

**Container do ícone (círculo)**
- `48px × 48px`, border-radius `50%`
- Background: `rgba(97,64,60,0.1)` (Marsala 10%) — hover 20%
  - Para Instagram/Sigilo: `rgba(201,166,139,0.1)` (Bronze 10%)
- Ícone: `20px × 20px`, cor Marsala (WhatsApp) ou Bronze (resto)

**Texto**
- Heading do card: DM Sans **14px** weight 500, cor `#373636`
- Subtexto: DM Sans **12px**, cor `#757575`

### Coluna direita — Formulário
- **Container**:
  - Background `rgba(240,235,229,0.6)` (Cream 60%)
  - Border `1px solid rgba(192,176,160,0.5)`
  - Padding **24-32px**
  - Border-radius `2px`

- **Gap entre campos**: **20px** (space-y-5)

- **Label**:
  - DM Sans **12px** UPPERCASE letter-spacing `0.025em`
  - Cor `#757575` (Muted)
  - Margin-bottom **8px**

- **Input/Textarea**:
  - Background `#F8F5F1` (Ivory)
  - Border `1px solid` Border color
  - Border-radius `2px`
  - Padding **16px h / 12px v**
  - Font Source Serif 4 **14px**
  - Placeholder cor `rgba(117,117,117,0.5)`
  - **Focus**: border `rgba(97,64,60,0.5)` + box-shadow `0 0 0 1px rgba(97,64,60,0.2)` (ring marsala)

- **Textarea**: min-height **120px**, resize none

- **Botão Submit**:
  - Width: 100%
  - Padding: **14px** vertical
  - Background Marsala, hover Marsala Light
  - DM Sans **14px** UPPERCASE letter-spacing `0.05em`
  - Border-radius `2px`
  - Transição `300ms`

---

## 📍 SEÇÃO 9 — "COMO CHEGAR"

- **Background**: `#F0EBE5` (Cream)
- **Padding vertical**: `64-96px`
- Cards `bg-ivory` `1px solid border/50` `rounded-sm` `shadow-sm` → hover `shadow-md`
- Imagem altura **192px** (h-48)
- Conteúdo padding **24px**
- Título: Cormorant Garamond **20px** weight 600, margin-bottom **8px**
- Endereço: flex items-start gap **8px**, ícone MapPin 16×16 cor Marsala, texto DM Sans **14px** cor `rgba(55,54,54,0.7)`
- Descrição: Source Serif 4 **14px** cor `rgba(55,54,54,0.65)` line-height `1.625`

### Iframe Google Maps
- Width 100%, height **350px**, border 0
- Wrapper: border-radius `2px`, shadow-lg, border `1px solid border/50`

---

## 🛎️ PÁGINA SERVIÇOS — particularidades

### Hero da página Serviços
- Background image + overlay `rgba(26,26,46,0.4)` (Night 40%)
- Link "← Voltar" — DM Sans 14px branco, ícone 16×16, margin-bottom 32px
- Badge: linha 8×1px Warm 200/60 + texto branco-warm 12px UPPERCASE letter-spacing 0.25em
- H1 "Serviços": Cormorant Garamond **36/48/60px** weight 600 branco, line-height `1.25`, **drop-shadow-lg** (`text-shadow: 0 10px 15px rgba(0,0,0,0.5)`)
- Descrição: Source Serif 4 **18px** cor Warm 200 90%

### Card de serviço (psicoterapia)
- Background Cream, border 1px Border 50%, radius 2px, shadow-sm
- Grid interno: imagem (50%) + conteúdo (50%) no desktop
- Imagem aspect-ratio `4/3` mobile, stretch desktop
- Conteúdo padding **24/32/40px** (mobile/tablet/desktop)
- H3 do serviço: Cormorant Garamond **24/30px** weight 600 — com ícone inline (Users/Monitor) 20×20 cor Marsala, gap 12px
- Descrição: Source Serif 4 **16px** cor `rgba(55,54,54,0.8)` line-height **1.8**
- **Lista de características**:
  - Bullet `6px × 6px` rounded-full bg Bronze, margin-top `6px`
  - Texto DM Sans **14px** cor `rgba(55,54,54,0.65)`
  - Gap entre itens **8px**
- **Preço**: Cormorant Garamond **30px** weight 600 cor Marsala
- CTA: botão padrão Marsala

### Card de palestras (mais discreto)
- Background Ivory, border 1px Border 30% (mais sutil)
- Grid: 1/3 imagem + 2/3 conteúdo
- Aspect-ratio imagem `16/9`
- H3 menor: Cormorant Garamond **20/24px**
- Ícone Mic 20×20 cor **Bronze** (não Marsala)
- CTA: botão **outline** (border foreground/20)

### Seção "Onde atendo"
- Background Parchment
- Grid: clinical 2/3 + catedral 1/3
- Card grande:
  - Aspect-ratio imagem `16/10`
  - Badge sobreposto: `absolute top-4 left-4`, padding **12px h / 4px v**, bg Marsala, texto branco DM Sans **10px** UPPERCASE letter-spacing **0.2em**, border-radius `2px`, shadow-sm
  - Conteúdo padding **28px**
- Card pequeno: padding **24px**, ícone MapPin menor (14×14)

---

## 🎯 BOTÕES — Catálogo completo

### 🔴 Botão Primário "Agendar"
```
Background:  #61403C (Marsala)
Hover:       #735249 (Marsala Light)
Texto:       #F8F5F1 (Ivory) | DM Sans 14px UPPERCASE letter-spacing 0.05em
Padding:     24px horizontal / 12px vertical
Border:      none
Radius:      2px
Shadow:      0 1px 2px rgba(0,0,0,0.05)
Ícone:       Phone 16×16, gap 8px
Transição:   300ms
```

### ⚪ Botão Secundário "Outline"
```
Background:  transparent
Border:      1px solid rgba(55,54,54,0.2)
Hover BG:    rgba(55,54,54,0.05)
Texto:       #373636 | DM Sans 14px UPPERCASE letter-spacing 0.05em
Padding:     24px h / 12px v   (ou 20×10 menor)
Radius:      2px
```

### 🔴 Botão CTA grande
```
Padding:     28px h / 14px v   (px-7 py-3.5)
Resto igual ao primário
```

---

## ✅ CHECKLIST FINAL POR PÁGINA

Para cada página/seção que você reconstruir, valide:

- [ ] Backgrounds nas cores corretas (Ivory, Cream, Parchment, Night)?
- [ ] Padding vertical das seções `64-96px`?
- [ ] Headings em **Cormorant Garamond** com weight 600?
- [ ] Body em **Source Serif 4** com line-height **1.625** ou **1.85**?
- [ ] Badges com **DM Sans 12px UPPERCASE letter-spacing 0.25em**?
- [ ] Border-radius **2px** em tudo (não 4-8px do default Elementor)?
- [ ] Box-shadows aplicados (cards `shadow-sm`, hovers `shadow-md`)?
- [ ] Borders sutis com opacidade (`rgba(...,0.5)`)?
- [ ] Drop-cap nos parágrafos editoriais?
- [ ] Editorial divider (60×1px gradient bronze) entre blocos?
- [ ] Hover transitions de **300ms** (links) e **500-700ms** (cards/imagens)?
- [ ] Image scale 1.05 no hover dos cards de áreas?
- [ ] Letter-spacing wider (0.05em) nos botões UPPERCASE?
- [ ] Cores de texto suavizadas (`rgba(55,54,54,0.7-0.85)`) — não preto puro?
- [ ] Botões Marsala com hover Marsala Light?
- [ ] Header fixo com backdrop-blur?

---

**Esse documento é seu mapa.** Tenha ele aberto lado a lado com o Elementor.
Se travar em alguma seção específica, anote qual e a gente refina junto.
