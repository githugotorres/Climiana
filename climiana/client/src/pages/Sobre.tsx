/*
 * Climiana Sobre Nós Page, versão corporativa com logo animado em água
 * Usa Tailwind + animações customizadas CSS
 * Inclui logo Climiana em SVG com efeito de ondulação e flutuação
 * Navbar: Liquid Glass style (Apple-inspired) com texto escuro para contraste
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import NavbarGlass from "@/components/NavbarGlass";
import { ArrowRight, ShieldCheck, Wrench, Clock, BadgeCheck } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Certificação Daikin",
    description: "Equipa técnica certificada pela Daikin, instalando e mantendo sistemas de acordo com as normas do fabricante.",
  },
  {
    icon: Wrench,
    title: "Instalação e Manutenção",
    description: "Serviço técnico completo, desde o projeto inicial à assistência pós-instalação.",
  },
  {
    icon: Clock,
    title: "Resposta Rápida",
    description: "Tempos de resposta reduzidos para pedidos de orçamento e assistência técnica.",
  },
  {
    icon: BadgeCheck,
    title: "Garantia de Serviço",
    description: "Todos os trabalhos realizados são cobertos por garantia, com acompanhamento técnico contínuo.",
  },
];

export default function Sobre() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = pageRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen page-enter" style={{ backgroundColor: "#F2F7FA" }}>
      <NavbarGlass />

      {/* === HERO COM LOGO ANIMADO NA ÁGUA === */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        {/* Fundo com ondas e logo animado */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2F7FA] via-[#F2F7FA]/80 to-[#F2F7FA]" />

          {/* Logo gigante animado com efeito de água */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-[0.08]">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full animate-float-water"
              style={{ filter: "url(#waterRipple)" }}
            >
              <defs>
                <filter id="waterRipple">
                  <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0072C2" />
                  <stop offset="100%" stopColor="#15ABE6" />
                </linearGradient>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E20A17" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#E20A17" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="100" cy="100" r="96" fill="url(#logoGrad)" stroke="#0072C2" strokeWidth="2" />

              {/* Letras C e A estilizadas (logotipo simplificado) */}
              <path d="M 50 70 L 50 130 L 70 130 L 70 100 L 90 100 L 90 130 L 110 130 L 110 70 L 90 70 L 90 90 L 70 90 L 70 70 Z" fill="white" opacity="0.95" />
              <path d="M 120 70 L 120 130 L 160 130 L 160 110 L 140 110 L 140 105 L 160 105 L 160 85 L 140 85 L 140 80 L 160 80 L 160 70 Z" fill="white" opacity="0.95" />

              {/* Detalhe de ar condicionado / ventoinha */}
              <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="4" opacity="0.3" />
              <circle cx="100" cy="100" r="16" fill="white" opacity="0.2" />
              <path d="M 100 70 L 100 50 M 100 130 L 100 150 M 70 100 L 50 100 M 130 100 L 150 100" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
            </svg>
          </div>

          {/* Ondas decorativas adicionais */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F2F7FA] to-transparent" />
          <svg className="absolute bottom-0 left-0 w-full h-20 text-[#F2F7FA]" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ fill: "currentColor" }}>
            <path d="M0,40 C360,120 720,0 1080,60 C1260,90 1380,60 1440,40 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* Conteúdo textual sobreposto */}
        <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <span className="reveal inline-block text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "#E20A17" }}>
            Sobre Nós
          </span>
          <h1 className="reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6" style={{ color: "#0A2540", transitionDelay: "100ms" }}>
            Climiana
          </h1>
          <p className="reveal text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto" style={{ color: "#4A5568", transitionDelay: "200ms" }}>
            Empresa especializada em climatização, parceira oficial Daikin, com sede em Ponte de Lima.
            Instalação, manutenção e assistência técnica certificada para clientes particulares e empresariais.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="reveal grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wide mb-2" style={{ color: "#0072C2" }}>Área de Atuação</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "#0A2540" }}>
                Instalação, manutenção e assistência técnica de sistemas de ar condicionado e climatização,
                para habitação e ambiente empresarial, na região Norte de Portugal.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wide mb-2" style={{ color: "#0072C2" }}>Parceria</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "#0A2540" }}>
                Parceiro oficial Daikin, líder mundial em sistemas de climatização, com técnicos
                certificados para instalação e manutenção segundo as normas do fabricante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Credentials Section */}
      <section className="py-20" style={{ backgroundColor: "rgba(0,114,194,0.02)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="reveal text-2xl sm:text-3xl font-extrabold tracking-tight leading-[1.15]" style={{ color: "#0A2540" }}>
              Porquê a Climiana
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="reveal" style={{ transitionDelay: `${(index + 1) * 80}ms` }}>
                  <div className="h-full p-6 rounded-xl bg-white border border-gray-100">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#0072C2" }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-[15px] font-bold mb-2" style={{ color: "#0A2540" }}>{value.title}</h3>
                    <p className="text-[13px] font-normal leading-relaxed" style={{ color: "#4A5568" }}>{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="reveal rounded-2xl p-10 lg:p-12" style={{ backgroundColor: "#0A2540" }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">+15</p>
                <p className="text-[13px] font-normal text-white/60">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">+500</p>
                <p className="text-[13px] font-normal text-white/60">Projetos Concluídos</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">98%</p>
                <p className="text-[13px] font-normal text-white/60">Clientes Satisfeitos</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">24h</p>
                <p className="text-[13px] font-normal text-white/60">Tempo de Resposta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <h3 className="reveal text-2xl lg:text-3xl font-extrabold mb-6 tracking-tight" style={{ color: "#0A2540" }}>
            Pronto para trabalhar connosco?
          </h3>
          <Link
            href="/orcamento"
            className="reveal inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
            style={{ backgroundColor: "#E20A17", transitionDelay: "100ms" }}
          >
            Pedir Orçamento Gratuito
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />

      {/* CSS adicional para animação do logo na água */}
      <style>{`
        @keyframes float-water {
          0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            filter: drop-shadow(0 10px 30px rgba(0,114,194,0.2));
          }
          25% {
            transform: translate(-48%, -53%) scale(1.02) rotate(1deg);
            filter: drop-shadow(0 20px 50px rgba(0,114,194,0.3));
          }
          50% {
            transform: translate(-52%, -48%) scale(0.98) rotate(-1deg);
            filter: drop-shadow(0 15px 40px rgba(0,114,194,0.2));
          }
          75% {
            transform: translate(-47%, -52%) scale(1.01) rotate(0.5deg);
            filter: drop-shadow(0 25px 60px rgba(0,114,194,0.3));
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            filter: drop-shadow(0 10px 30px rgba(0,114,194,0.2));
          }
        }

        .animate-float-water {
          animation: float-water 8s ease-in-out infinite;
          transform-origin: center center;
        }

        /* Ondas SVG animadas */
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .wave-animated {
          animation: waveMove 6s linear infinite;
        }

        /* Overlay de brilho */
        .glow-pulse {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Ajuste para melhorar o contraste do texto sobre o fundo */
        .hero-text-shadow {
          text-shadow: 0 2px 20px rgba(242, 247, 250, 0.8);
        }
      `}</style>
    </div>
  );
}