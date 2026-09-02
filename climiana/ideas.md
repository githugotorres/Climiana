# Climiana — Design Brainstorm

## Três Abordagens Estilísticas

### 1. "Arctic Flow" — Glassmorphism Orgânico
**Intro:** Uma estética fluida e etérea inspirada no movimento de ar e água, com camadas de vidro translúcido que flutuam sobre um fundo azul-bebé quase branco. Evoca pureza, frescura e tecnologia silenciosa.
**Probabilidade:** 0.07

### 2. "Thermal Precision" — Brutalismo Técnico Suave
**Intro:** Linhas geométricas rígidas com tipografia bold e contrastes fortes, inspirado em maquinaria industrial de precisão. Transmite confiança técnica e engenharia de excelência.
**Probabilidade:** 0.04

### 3. "Eco Gradient" — Natureza Digital
**Intro:** Gradientes orgânicos que transitam entre azuis e verdes, com formas biomórficas e micro-animações que evocam folhas e vento. Conecta tecnologia com sustentabilidade ambiental.
**Probabilidade:** 0.06

---

## Abordagem Escolhida: "Arctic Flow" — Glassmorphism Orgânico

### Design Movement
Glassmorphism 2.0 combinado com a linguagem visual da Apple (2023-2026) — superfícies translúcidas com profundidade, blur generoso, e hierarquia criada através de camadas de opacidade.

### Core Principles
1. **Leveza Etérea** — Cada elemento deve parecer flutuar, sem peso visual excessivo
2. **Profundidade por Camadas** — Usar backdrop-blur, sombras difusas e opacidades para criar z-depth
3. **Movimento Orgânico** — Animações que imitam o fluxo de ar e água (ease-out suaves, transforms subtis)
4. **Clareza Funcional** — Apesar da estética premium, a informação é sempre legível e acessível

### Color Philosophy
- **Fundo Principal:** #F2F7FA — Azul-bebé ultra-leve, quase branco. Evoca ar limpo e frescura sem cansar a vista.
- **Tech Blue (Dominante):** #1B4F8A — Azul profundo e confiável para headings, nav, e ícones. Transmite competência técnica.
- **Accent Red (CTA):** #E63946 — Vermelho vivo e energético, reservado exclusivamente para botões de conversão.
- **White Structural:** #FFFFFF — Para cards e superfícies glassmórficas.
- **Glass Border:** rgba(255,255,255,0.6) — Bordas subtis nas superfícies de vidro.
- **Text Secondary:** #5A6B7B — Cinza-azulado para texto secundário.

### Layout Paradigm
Layout assimétrico com secções full-width que alternam entre alinhamento à esquerda e à direita. Hero com split diagonal. Cards em grid orgânico com tamanhos variados. Secções separadas por curvas SVG suaves (não linhas retas).

### Signature Elements
1. **Floating Glass Cards** — Cards com backdrop-blur(20px), border semi-transparente, e sombra difusa que se intensifica no hover
2. **Ambient Gradient Orbs** — Esferas de gradiente azul/ciano desfocadas no background que se movem lentamente (parallax sutil)
3. **Liquid Hover States** — No hover, os cards expandem suavemente com uma transição de escala + elevação de sombra

### Interaction Philosophy
Cada interação deve sentir-se como tocar numa superfície de vidro polido — feedback imediato mas suave. Hover states revelam profundidade adicional. Clicks produzem um micro-scale (0.97) antes da ação. Scrolling revela elementos com fade-in + translate-y suave.

### Animation
- **Entrance:** Elements fade-in com translateY(20px→0) em 600ms, staggered por 80ms entre siblings
- **Hover Cards:** scale(1.02), box-shadow intensifica, backdrop-blur aumenta ligeiramente — 250ms ease-out
- **CTA Buttons:** Pulse sutil no idle (box-shadow que respira), scale(0.97) no active
- **Background Orbs:** Transform translate lento (20s linear infinite) com alternate direction
- **Nav:** Backdrop-blur que intensifica no scroll, transição de 300ms
- **Scroll Reveal:** IntersectionObserver com threshold 0.1, animação de 500ms ease-out

### Typography System
- **Font Family:** Poppins (exclusiva em todo o site)
- **Hero Title:** Poppins 700, 3.5rem-4.5rem, tracking tight (-0.02em), cor Tech Blue
- **Section Headings:** Poppins 600, 2rem-2.5rem, cor Tech Blue
- **Body Text:** Poppins 400, 1rem-1.125rem, cor #2D3748 (quase preto suave)
- **Nav Links:** Poppins 500, 0.9rem, uppercase com letter-spacing 0.05em
- **CTA Text:** Poppins 600, 1rem, cor white

### Brand Essence
**Positioning:** Climiana é a referência em conforto térmico e eficiência energética no Norte de Portugal — para proprietários e empresas que exigem excelência técnica e soluções sustentáveis.
**Personalidade:** Confiável, Inovadora, Premium.

### Brand Voice
Headlines e CTAs soam técnicos mas acessíveis, com autoridade silenciosa. Evitam hipérboles e preferem precisão.
- Exemplo headline: "O conforto perfeito nasce da engenharia certa."
- Exemplo CTA: "Solicitar Diagnóstico Gratuito"

### Wordmark & Logo
Logótipo com a palavra "Climiana" em Poppins 700, com o "i" estilizado como uma gota/fluxo de ar em gradiente azul. Ícone separado: forma abstrata de fluxo de ar circular em gradiente azul-ciano.

### Signature Brand Color
**#1B4F8A** — Um azul profundo e tecnológico que é inequivocamente Climiana. Presente na nav, headings, e como base de todos os gradientes.
