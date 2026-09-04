/*
 * Climiana Contactos Page, refined design with animated logo in background
 * Typography: Poppins, extrabold headings, regular body
 * Colors: Blue #0072C2, Gradient #15ABE6, Red #E20A17
 * Navbar: Liquid Glass style (Apple-inspired) with dark text for contrast
 */

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import NavbarGlass from "@/components/NavbarGlass";
import AnimatedLogoBackground from "@/components/AnimatedLogoBackground";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

const ADDRESS = "Rua da Vila Coroneliana 2722, Correlhã, Ponte de Lima, Viana do Castelo";
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

const contactInfo = [
  {
    icon: MapPin,
    title: "Morada",
    lines: ["Rua da Vila Coroneliana 2722", "Correlhã, Ponte de Lima", "Viana do Castelo"],
    href: MAPS_DIRECTIONS_URL,
  },
  {
    icon: Phone,
    title: "Telefones",
    lines: ["Fixo: 258 753 464", "Telemóvel: 914 781 470"],
    href: "tel:914781470",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["climiana@gmail.com"],
    href: "mailto:climiana@gmail.com",
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Seg-Sex: 08h00 - 18h00"],
  },
];

export default function Contactos() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    "Contactos | Climiana Climatização em Ponte de Lima",
    "Entre em contacto connosco para um diagnóstico gratuito e sem compromisso. A nossa equipa está pronta para encontrar a solução ideal para si."
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

      {/* Page Header with animated logo background */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <AnimatedLogoBackground size="md" />

        {/* Conteúdo textual existente */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-8" style={{ background: "radial-gradient(circle, rgba(226,10,23,0.08) 0%, transparent 70%)", top: "-20%", right: "-10%" }} />
        </div>
        <div className="max-w-3xl mx-auto px-5 lg:px-8 relative z-10 text-center">
          <span className="reveal inline-block text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "#E20A17" }}>
            Contactos
          </span>
          <h1 className="reveal text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] mb-6" style={{ color: "#0A2540", transitionDelay: "100ms" }}>
            Vamos transformar o seu espaço
          </h1>
          <p className="reveal text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto" style={{ color: "#4A5568", transitionDelay: "200ms" }}>
            Entre em contacto connosco para um diagnóstico gratuito e sem compromisso.
            A nossa equipa está pronta para encontrar a solução ideal para si.
          </p>
        </div>
      </section>

      {/* Resto do conteúdo (contact cards, CTA, footer) permanece inalterado */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const cardContent = (
                <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-[#0072C2]/5 hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #0072C2, #15ABE6)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[14px] font-bold mb-2" style={{ color: "#0A2540" }}>{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-[13px] font-normal" style={{ color: "#4A5568" }}>{line}</p>
                  ))}
                </div>
              );
              return (
                <div key={info.title} className="reveal group" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                  {info.href ? (
                    <a href={info.href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0072C2]/50 focus-visible:ring-offset-2 rounded-2xl" target={info.title === "Morada" ? "_blank" : undefined} rel={info.title === "Morada" ? "noopener noreferrer" : undefined}>
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="reveal rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0072C2 0%, #15ABE6 100%)" }}>
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute w-64 h-64 rounded-full bg-white/20 -top-20 -right-20" />
              <div className="absolute w-48 h-48 rounded-full bg-white/10 -bottom-10 -left-10" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-3 tracking-tight">
                Prefere falar diretamente connosco?
              </h3>
              <p className="text-[14px] font-normal text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Ligue-nos ou envie um e-mail. Estamos disponíveis para esclarecer qualquer dúvida.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/orcamento"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white shadow-lg shadow-red-900/20 transition-all duration-200 hover:shadow-xl hover:brightness-110 active:scale-[0.97]"
                  style={{ backgroundColor: "#E20A17" }}
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS para animação (reutilizado) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .opacity-8 {
          opacity: 0.08;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float { animation-duration: 0.01ms; animation-iteration-count: 1; }
        }
      `}</style>
    </div>
  );
}