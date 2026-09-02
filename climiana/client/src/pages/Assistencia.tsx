/*
 * Climiana Assistência Técnica Page, refined design
 * Typography: Poppins, extrabold headings, regular body
 * Colors: Blue #0072C2, Gradient #15ABE6, Red #E20A17
 * Navbar: Liquid Glass style (Apple-inspired) with dark text for contrast
 * Inclui animação do logo em fundo (bolha) com efeito de água
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import NavbarGlass from "@/components/NavbarGlass";
import { Wrench, Shield, Clock, HeadphonesIcon, ArrowRight, CheckCircle, CalendarCheck, Gauge } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Planos de manutenção periódica que prolongam a vida útil dos equipamentos e garantem o seu funcionamento eficiente durante todo o ano.",
  },
  {
    icon: Clock,
    title: "Resposta Rápida",
    description: "Equipa técnica disponível para intervenções urgentes com diagnóstico preciso e reparação eficaz no menor tempo possível.",
  },
  {
    icon: Shield,
    title: "Garantia de Serviço",
    description: "Todos os nossos trabalhos são cobertos por garantia oficial, com peças originais e certificação técnica em cada intervenção.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Linha de apoio técnico para diagnósticos remotos, agendamentos de intervenção e acompanhamento pós-serviço personalizado.",
  },
  {
    icon: CalendarCheck,
    title: "Contratos de Manutenção",
    description: "Planos anuais personalizados com visitas programadas, prioridade de atendimento e condições especiais em peças e mão-de-obra.",
  },
  {
    icon: Gauge,
    title: "Otimização Energética",
    description: "Análise do desempenho dos seus sistemas com recomendações técnicas para reduzir consumos e melhorar a eficiência.",
  },
];

const process_steps = [
  { step: "01", title: "Contacto", description: "Ligue-nos ou preencha o formulário online. Descrevemos o problema e agendamos a visita." },
  { step: "02", title: "Diagnóstico", description: "O nosso técnico avalia o equipamento, identifica a causa e apresenta a solução." },
  { step: "03", title: "Intervenção", description: "Reparação ou manutenção executada com peças originais e máximo rigor técnico." },
  { step: "04", title: "Validação", description: "Testes de funcionamento, relatório técnico e garantia do serviço prestado." },
];

export default function Assistencia() {
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

      {/* ===== Page Header com animação do logo na água ===== */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        {/* Animação do logo (bolha) no fundo - posição centralizada */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2F7FA] via-[#F2F7FA]/80 to-[#F2F7FA]" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] opacity-[0.06]">
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
              </defs>
              <circle cx="100" cy="100" r="96" fill="url(#logoGrad)" stroke="#0072C2" strokeWidth="2" />
              <path d="M 50 70 L 50 130 L 70 130 L 70 100 L 90 100 L 90 130 L 110 130 L 110 70 L 90 70 L 90 90 L 70 90 L 70 70 Z" fill="white" opacity="0.95" />
              <path d="M 120 70 L 120 130 L 160 130 L 160 110 L 140 110 L 140 105 L 160 105 L 160 85 L 140 85 L 140 80 L 160 80 L 160 70 Z" fill="white" opacity="0.95" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="4" opacity="0.3" />
              <circle cx="100" cy="100" r="16" fill="white" opacity="0.2" />
              <path d="M 100 70 L 100 50 M 100 130 L 100 150 M 70 100 L 50 100 M 130 100 L 150 100" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
            </svg>
          </div>

          <svg className="absolute bottom-0 left-0 w-full h-16 text-[#F2F7FA]" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ fill: "currentColor" }}>
            <path d="M0,20 C360,60 720,0 1080,30 C1260,45 1380,30 1440,20 L1440,60 L0,60 Z" />
          </svg>
        </div>

        {/* Bolha decorativa adicional (mantida) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-8" style={{ background: "radial-gradient(circle, rgba(0,114,194,0.15) 0%, transparent 70%)", top: "-20%", left: "-10%" }} />
        </div>

        {/* Conteúdo textual */}
        <div className="max-w-3xl mx-auto px-5 lg:px-8 relative z-10 text-center">
          <span className="reveal inline-block text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "#E20A17" }}>
            Assistência Técnica & Manutenção
          </span>
          <h1 className="reveal text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] mb-6" style={{ color: "#0A2540", transitionDelay: "100ms" }}>
            Cuidamos dos seus equipamentos como se fossem nossos
          </h1>
          <p className="reveal text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto" style={{ color: "#4A5568", transitionDelay: "200ms" }}>
            A nossa equipa técnica certificada assegura o funcionamento contínuo e eficiente de todos os seus sistemas de climatização.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="reveal group"
                  style={{ transitionDelay: `${(index + 1) * 80}ms` }}
                >
                  <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-[#0072C2]/5 hover:-translate-y-1">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #0072C2, #15ABE6)" }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-[15px] font-bold mb-2" style={{ color: "#0A2540" }}>{feature.title}</h3>
                    <p className="text-[13px] font-normal leading-relaxed" style={{ color: "#4A5568" }}>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24" style={{ backgroundColor: "rgba(0,114,194,0.02)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "#E20A17" }}>
              Como Trabalhamos
            </span>
            <h2 className="reveal text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight leading-[1.15] mb-5" style={{ color: "#0A2540", transitionDelay: "100ms" }}>
              O nosso processo de assistência
            </h2>
            <p className="reveal text-base font-normal leading-relaxed" style={{ color: "#4A5568", transitionDelay: "200ms" }}>
              Um processo simples e transparente, do primeiro contacto à resolução completa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process_steps.map((step, index) => (
              <div key={step.step} className="reveal text-center" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white" style={{ background: "linear-gradient(135deg, #0072C2, #15ABE6)" }}>
                  {step.step}
                </div>
                <h3 className="text-[15px] font-bold mb-2" style={{ color: "#0A2540" }}>{step.title}</h3>
                <p className="text-[13px] font-normal leading-relaxed" style={{ color: "#4A5568" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="reveal inline-block text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "#E20A17" }}>
                Porquê a Climiana
              </span>
              <h2 className="reveal text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight leading-[1.15] mb-5" style={{ color: "#0A2540", transitionDelay: "100ms" }}>
                Experiência e dedicação ao serviço do seu conforto
              </h2>
              <p className="reveal text-[15px] font-normal leading-relaxed mb-8" style={{ color: "#4A5568", transitionDelay: "200ms" }}>
                Com mais de 15 anos de experiência, a nossa equipa combina conhecimento técnico avançado com um atendimento personalizado que faz a diferença.
              </p>
              <ul className="reveal space-y-3.5 mb-8" style={{ transitionDelay: "300ms" }}>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4.5 h-4.5 text-[#0072C2] mt-0.5 shrink-0" />
                  <span className="text-[14px] font-normal" style={{ color: "#4A5568" }}>Técnicos certificados e em formação contínua</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4.5 h-4.5 text-[#0072C2] mt-0.5 shrink-0" />
                  <span className="text-[14px] font-normal" style={{ color: "#4A5568" }}>Peças originais com garantia do fabricante</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4.5 h-4.5 text-[#0072C2] mt-0.5 shrink-0" />
                  <span className="text-[14px] font-normal" style={{ color: "#4A5568" }}>Orçamentos transparentes sem surpresas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4.5 h-4.5 text-[#0072C2] mt-0.5 shrink-0" />
                  <span className="text-[14px] font-normal" style={{ color: "#4A5568" }}>Cobertura em toda a região Norte de Portugal</span>
                </li>
              </ul>
              <Link
                href="/contactos"
                className="reveal inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white shadow-lg shadow-red-900/20 transition-all duration-200 hover:shadow-xl hover:shadow-red-900/30 hover:brightness-110 active:scale-[0.97]"
                style={{ backgroundColor: "#E20A17", transitionDelay: "400ms" }}
              >
                Agendar Manutenção
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="reveal" style={{ transitionDelay: "200ms" }}>
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/5">
                <img
                  src="/imagens/climiana-assistencia-tecnica.jpg"
                  alt="Técnico de assistência Climiana"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS para animação (mesmo bloco reutilizado) */}
      <style>{`
        @keyframes float-water {
          0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            filter: drop-shadow(0 10px 30px rgba(0,114,194,0.1));
          }
          25% {
            transform: translate(-48%, -53%) scale(1.02) rotate(1deg);
            filter: drop-shadow(0 20px 50px rgba(0,114,194,0.15));
          }
          50% {
            transform: translate(-52%, -48%) scale(0.98) rotate(-1deg);
            filter: drop-shadow(0 15px 40px rgba(0,114,194,0.1));
          }
          75% {
            transform: translate(-47%, -52%) scale(1.01) rotate(0.5deg);
            filter: drop-shadow(0 25px 60px rgba(0,114,194,0.15));
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            filter: drop-shadow(0 10px 30px rgba(0,114,194,0.1));
          }
        }
        .animate-float-water {
          animation: float-water 8s ease-in-out infinite;
          transform-origin: center center;
        }
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
      `}</style>
    </div>
  );
}