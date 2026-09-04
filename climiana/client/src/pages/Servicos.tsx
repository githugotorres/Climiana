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
import AnimatedLogoBackground from "@/components/AnimatedLogoBackground";
import { usePageMeta } from "@/hooks/usePageMeta";
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

  usePageMeta(
    "Serviços de Climatização e Ar Condicionado Daikin | Climiana",
    "Instalação e manutenção de ar condicionado, climatização, ventilação e energias renováveis com tecnologia Daikin, em Ponte de Lima."
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

      {/* Page Header com animação */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <AnimatedLogoBackground size="md" />

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
        @keyframes float { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(2deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .opacity-8 { opacity: 0.08; }
        @media (prefers-reduced-motion: reduce) {
          .animate-float { animation-duration: 0.01ms; animation-iteration-count: 1; }
        }
      `}</style>
    </div>
  );
}