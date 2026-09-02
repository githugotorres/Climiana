/*
 * Climiana Serviços Page, refined design matching Home page style
 * Typography: Poppins, extrabold headings, regular body
 * Colors: Blue #0072C2, Gradient #15ABE6, Red #E20A17
 * Background: #F2F7FA
 * Navbar: Liquid Glass style (Apple-inspired) with dark text for contrast
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import NavbarGlass from "@/components/NavbarGlass";
import { Wind, Thermometer, Fan, Sun, ArrowRight, CheckCircle } from "lucide-react";

const DAIKIN_URL = "https://www.daikin.pt/pt_pt/particular/campanhas/a-primavera-voltou-a-escolha-pela-daikin-tambem.html";

const services = [
  {
    id: "ar-condicionado",
    icon: Thermometer,
    title: "Ar Condicionado",
    subtitle: "Tecnologia Daikin, líder mundial em climatização",
    description: "Como parceiro oficial Daikin, instalamos exclusivamente equipamentos da marca líder mundial em ar condicionado. Tecnologia japonesa de excelência com a garantia e assistência técnica certificada Climiana.",
    features: [
      "Instalação de splits e multi-splits Daikin",
      "Sistemas VRV Daikin para grandes espaços",
      "Bombas de calor Daikin Altherma",
      "Manutenção preventiva e corretiva certificada",
      "Diagnóstico e otimização energética",
      "Garantia oficial Daikin em todos os equipamentos",
    ],
    image: "/imagens/climiana-services-hvac.jpg",
  },
  {
    id: "climatizacao",
    icon: Wind,
    title: "Climatização",
    subtitle: "Sistemas integrados Daikin para controlo total do ambiente",
    description: "Conforto térmico perfeito durante todo o ano com tecnologia Daikin. Projetamos e instalamos sistemas de climatização centralizados que se adaptam às necessidades específicas de cada espaço, sempre com equipamentos Daikin de última geração.",
    features: [
      "Climatização centralizada Daikin",
      "Piso radiante hidráulico",
      "Ventiloconvectores",
      "Controlo inteligente por zonas",
      "Integração com domótica e app",
    ],
    image: "/imagens/climiana-services-climatizacao.jpg",
  },
  {
    id: "ventilacao",
    icon: Fan,
    title: "Ventilação",
    subtitle: "Qualidade do ar interior com tecnologia Daikin",
    description: "Projetos de ventilação mecânica para espaços habitacionais, comerciais e industriais. Qualidade do ar interior garantida com soluções Daikin de alta performance e purificação avançada.",
    features: [
      "Ventilação mecânica controlada (VMC)",
      "Sistemas de extração industrial",
      "Renovação de ar com recuperação de calor Daikin",
      "Desenfumagem e segurança contra incêndios",
      "Purificação do ar com tecnologia Daikin Streamer",
      "Projetos para cozinhas profissionais",
    ],
    image: "/imagens/climiana-services-ventilation.png",
  },
  {
    id: "energias-renovaveis",
    icon: Sun,
    title: "Energias Renováveis",
    subtitle: "Autonomia energética e sustentabilidade para o seu imóvel",
    description: "Instalação de painéis solares térmicos. Autonomia energética e sustentabilidade para o seu imóvel com retorno garantido do investimento.",
    features: [
      "Sistemas solares térmicos",
      "Bombas de calor aerotérmicas",
      "Certificação energética",
      "Apoio na candidatura a incentivos fiscais",
    ],
    image: "/imagens/climiana-services-solar.jpg",
  },
];

export default function Servicos() {
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

      {/* Page Header com animação */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2F7FA] via-[#F2F7FA]/80 to-[#F2F7FA]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] opacity-[0.06]">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-float-water" style={{ filter: "url(#waterRipple)" }}>
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

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-8" style={{ background: "radial-gradient(circle, rgba(0,114,194,0.15) 0%, transparent 70%)", top: "-20%", right: "-10%" }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="reveal inline-block text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "#E20A17" }}>Os Nossos Serviços</span>
          <h1 className="reveal text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] mb-6" style={{ color: "#0A2540", transitionDelay: "100ms" }}>Soluções completas de climatização</h1>
          <p className="reveal text-base lg:text-lg font-normal leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "#4A5568", transitionDelay: "200ms" }}>Da instalação à manutenção, oferecemos um serviço integral com equipamentos exclusivamente Daikin, líder mundial em climatização.</p>
          <a href={DAIKIN_URL} target="_blank" rel="noopener noreferrer" className="reveal inline-flex items-center gap-3 hover:opacity-80 transition-opacity duration-200" style={{ transitionDelay: "300ms" }}>
            <img src="/imagens/daikin-logo.png" alt="Daikin" className="h-7 w-auto" />
            <span className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: "#0072C2" }}>Parceiro Oficial</span>
          </a>
        </div>
      </section>

      {/* Services Detail (mesmo conteúdo) */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="space-y-28 lg:space-y-36">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-28">
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                    <div className={`reveal ${!isEven ? "lg:order-2" : ""}`} style={{ transitionDelay: "100ms" }}>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/5">
                        <img src={service.image} alt={service.title} className="w-full h-auto object-cover aspect-[16/10]" />
                        <div className="absolute top-4 left-4">
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #0072C2, #15ABE6)" }}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${!isEven ? "lg:order-1" : ""}`}>
                      <span className="reveal inline-block text-[11px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#15ABE6", transitionDelay: "150ms" }}>{service.subtitle}</span>
                      <h2 className="reveal text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight leading-[1.15] mb-5" style={{ color: "#0A2540", transitionDelay: "200ms" }}>{service.title}</h2>
                      <p className="reveal text-[15px] font-normal leading-relaxed mb-8" style={{ color: "#4A5568", transitionDelay: "250ms" }}>{service.description}</p>
                      <ul className="reveal space-y-3 mb-8" style={{ transitionDelay: "300ms" }}>
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-4.5 h-4.5 text-[#0072C2] mt-0.5 shrink-0" />
                            <span className="text-[14px] font-normal" style={{ color: "#4A5568" }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/orcamento" className="reveal inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white shadow-lg shadow-red-900/20 transition-all duration-200 hover:shadow-xl hover:shadow-red-900/30 hover:brightness-110 active:scale-[0.97]" style={{ backgroundColor: "#E20A17", transitionDelay: "350ms" }}>
                        Pedir Orçamento <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="reveal rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0072C2 0%, #15ABE6 100%)" }}>
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute w-64 h-64 rounded-full bg-white/20 -top-20 -right-20" />
              <div className="absolute w-48 h-48 rounded-full bg-white/10 -bottom-10 -left-10" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight">Precisa de uma solução personalizada?</h3>
              <p className="text-[15px] font-normal text-white/75 max-w-xl mx-auto mb-8 leading-relaxed">Cada espaço é único. Contacte-nos para um estudo técnico gratuito e descubra a solução ideal.</p>
              <Link href="/orcamento" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white shadow-lg shadow-red-900/25 transition-all duration-200 hover:shadow-xl hover:brightness-110 active:scale-[0.97]" style={{ backgroundColor: "#E20A17" }}>
                Contactar Equipa Técnica <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes float-water {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); filter: drop-shadow(0 10px 30px rgba(0,114,194,0.1)); }
          25% { transform: translate(-48%, -53%) scale(1.02) rotate(1deg); filter: drop-shadow(0 20px 50px rgba(0,114,194,0.15)); }
          50% { transform: translate(-52%, -48%) scale(0.98) rotate(-1deg); filter: drop-shadow(0 15px 40px rgba(0,114,194,0.1)); }
          75% { transform: translate(-47%, -52%) scale(1.01) rotate(0.5deg); filter: drop-shadow(0 25px 60px rgba(0,114,194,0.15)); }
          100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); filter: drop-shadow(0 10px 30px rgba(0,114,194,0.1)); }
        }
        .animate-float-water { animation: float-water 8s ease-in-out infinite; transform-origin: center center; }
        @keyframes float { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(2deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .opacity-8 { opacity: 0.08; }
      `}</style>
    </div>
  );
}