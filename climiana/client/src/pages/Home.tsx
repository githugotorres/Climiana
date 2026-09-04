/*
 * Climiana Home Page, full-screen hero, no scroll
 * Navbar: Liquid Glass style (Apple-inspired) com texto branco para fundo escuro
 * Partículas: pontos minúsculos com movimento orgânico e sem gravidade
 * Quantidade aumentada (120 partículas), opacidade e tamanho ajustados para visibilidade
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import NavbarGlass from "@/components/NavbarGlass";
import { usePageMeta } from "@/hooks/usePageMeta";

const DAIKIN_URL = "https://www.daikin.pt/pt_pt/particular/campanhas/a-primavera-voltou-a-escolha-pela-daikin-tambem.html";

// ===== COMPONENTE DE PARTÍCULAS (120 pontos visíveis com movimento orgânico) =====
function Particles() {
  const count = 120;
  const particles = Array.from({ length: count }, (_, i) => {
    const size = 2 + Math.random() * 3; // 2px a 5px
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 15 + Math.random() * 25; // 15s a 40s
    const delay = -Math.random() * duration; // negativo: já entra em movimento, sem pausa inicial
    const opacity = 0.01 + Math.random() * 0.4; // 0.3 a 0.7
    // Movimento amplo: até 150px
    const amplitudeX = 60 + Math.random() * 90;
    const amplitudeY = 60 + Math.random() * 90;
    return { size, x, y, duration, delay, opacity, amplitudeX, amplitudeY };
  });

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {particles.map((p, i) => {
        // Gerar keyframe único para cada partícula (usando estilos inline com animation)
        // Usamos uma única keyframe genérica com variáveis CSS para amplitude
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={
              {
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: "#15ABE6",
                opacity: p.opacity,
                willChange: "transform",
                animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
                "--ampX": `${p.amplitudeX}px`,
                "--ampY": `${p.amplitudeY}px`,
              } as React.CSSProperties
            }
          />
        );
      })}
      <style>{`
        @keyframes float-particle {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(calc(var(--ampX) * 0.6), calc(var(--ampY) * -0.8)) scale(1.1);
          }
          50% {
            transform: translate(calc(var(--ampX) * -0.7), calc(var(--ampY) * 0.5)) scale(0.9);
          }
          75% {
            transform: translate(calc(var(--ampX) * 0.8), calc(var(--ampY) * 0.3)) scale(1.05);
          }
          100% {
            transform: translate(calc(var(--ampX) * -0.4), calc(var(--ampY) * -0.6)) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  usePageMeta(
    "Climiana, Sistemas de Climatização e Energias Renováveis",
    "Climiana - Especialistas em climatização, ar condicionado, ventilação e energias renováveis em Ponte de Lima. Conforto térmico e eficiência energética de excelência."
  );

  return (
    <div className="h-dvh w-full overflow-x-hidden overflow-y-auto relative">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="/imagens/climiana-hero-daikin-stylish-final.jpg"
          alt="Interior moderno com o ar condicionado Daikin Stylish"
          className="w-full h-full object-cover"
        />
        {/* Dark semi-transparent overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(10,37,64,0.82) 0%, rgba(10,37,64,0.65) 45%, rgba(10,37,64,0.3) 100%)"
        }} />
      </div>

      {/* Partículas (pontos visíveis) */}
      <Particles />

      {/* Navbar */}
      <NavbarGlass variant="light" />

      {/* Hero Content */}
      <div className="relative z-10 min-h-[calc(100dvh-88px)] sm:h-full flex items-center py-8 sm:py-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl space-y-5 sm:space-y-8">
            {/* Daikin Partner Badge */}
            <a
              href={DAIKIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all duration-300 group"
            >
              <img src="/imagens/daikin-logo.png" alt="Daikin" className="h-5 w-auto" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/75 group-hover:text-white transition-colors duration-200">
                Parceiro Oficial
              </span>
            </a>

            <h1 className="text-3xl sm:text-5xl lg:text-[4.25rem] font-extrabold text-white leading-[1.15] sm:leading-[1.08] tracking-tight">
              Sistemas de climatização<br className="hidden sm:block" />
            </h1>

            <p className="text-sm sm:text-base lg:text-lg font-normal text-white/60 leading-relaxed max-w-md">
              Soluções premium de climatização com tecnologia Daikin, líder mundial em sistemas de ar condicionado. Instalação, manutenção e assistência técnica certificada.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5 pt-2">
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-semibold text-white shadow-xl shadow-red-900/25 transition-all duration-250 hover:shadow-2xl hover:shadow-red-900/35 hover:brightness-110 active:scale-[0.97]"
                style={{ backgroundColor: "#E20A17" }}
              >
                Pedir Orçamento Gratuito
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>

              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-medium text-white/85 border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:text-white active:scale-[0.97]"
              >
                Explorar Serviços
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="relative sm:absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-6 sm:pb-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-10 text-white/40 text-[11px] sm:text-[13px] font-normal tracking-wide">
            <span className="flex items-center gap-2 sm:gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#15ABE6" }} />
              Parceiro Oficial Daikin
            </span>
            <span className="flex items-center gap-2 sm:gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#15ABE6" }} />
              +15 Anos de Experiência
            </span>
            <span className="flex items-center gap-2 sm:gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#15ABE6" }} />
              Certificação Técnica Daikin
            </span>
            <span className="flex items-center gap-2 sm:gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#15ABE6" }} />
              Ponte de Lima
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}