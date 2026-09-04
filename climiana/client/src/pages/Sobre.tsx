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
import AnimatedLogoBackground from "@/components/AnimatedLogoBackground";
import { usePageMeta } from "@/hooks/usePageMeta";
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

  usePageMeta(
    "Sobre a Climiana | Parceiro Oficial Daikin em Ponte de Lima",
    "Empresa especializada em climatização, parceira oficial Daikin, com sede em Ponte de Lima. Instalação, manutenção e assistência técnica certificada."
  );

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
        <AnimatedLogoBackground size="lg" />

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

      {/* CSS adicional (não relacionado com o fundo animado, que agora vive em AnimatedLogoBackground) */}
      <style>{`
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