/*
 * Climiana Navbar, refined proportions matching Home page style
 * Brand colors: Blue #0072C2, Gradient #15ABE6, Red #E20A17
 * Compact, well-proportioned, clean.
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";

const services = [
  { label: "Ar Condicionado", href: "/servicos#ar-condicionado" },
  { label: "Climatização", href: "/servicos#climatizacao" },
  { label: "Ventilação", href: "/servicos#ventilacao" },
  { label: "Energias Renováveis", href: "/servicos#energias-renovaveis" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/imagens/climiana-logo-transparent.png"
            alt="Climiana"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={`text-[12px] font-medium uppercase tracking-wider transition-colors duration-200 hover:text-[#0072C2] ${
              isActive("/") ? "text-[#0072C2]" : "text-[#2D3748]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/servicos"
            className={`text-[12px] font-medium uppercase tracking-wider transition-colors duration-200 hover:text-[#0072C2] ${
              isActive("/servicos") ? "text-[#0072C2]" : "text-[#2D3748]"
            }`}
          >
            Serviços
          </Link>

          <Link
            href="/assistencia"
            className={`text-[12px] font-medium uppercase tracking-wider transition-colors duration-200 hover:text-[#0072C2] ${
              isActive("/assistencia") ? "text-[#0072C2]" : "text-[#2D3748]"
            }`}
          >
            Assistência Técnica
          </Link>

          <Link
            href="/sobre"
            className={`text-[12px] font-medium uppercase tracking-wider transition-colors duration-200 hover:text-[#0072C2] ${
              isActive("/sobre") ? "text-[#0072C2]" : "text-[#2D3748]"
            }`}
          >
            Sobre Nós
          </Link>

          <Link
            href="/contactos"
            className={`text-[12px] font-medium uppercase tracking-wider transition-colors duration-200 hover:text-[#0072C2] ${
              isActive("/contactos") ? "text-[#0072C2]" : "text-[#2D3748]"
            }`}
          >
            Contactos
          </Link>
        </div>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:914781470"
            className="flex items-center gap-1.5 text-[13px] font-medium text-[#2D3748] hover:text-[#0072C2] transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            914 781 470
          </a>
          <Link
            href="/orcamento"
            className="px-5 py-2 rounded-full text-[13px] font-semibold text-white shadow-lg shadow-red-900/20 transition-all duration-200 hover:shadow-xl hover:shadow-red-900/30 hover:brightness-110 active:scale-95"
            style={{ backgroundColor: "#E20A17" }}
          >
            Pedir Orçamento
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors hover:bg-black/5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5 text-[#2D3748]" /> : <Menu className="w-5 h-5 text-[#2D3748]" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-5 py-5 flex flex-col gap-1">
            <Link href="/" className="text-[14px] font-medium py-2.5 px-3 rounded-lg text-[#0072C2] bg-[#0072C2]/5" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/servicos" className="text-[14px] font-medium py-2.5 px-3 rounded-lg text-[#2D3748] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
              Serviços
            </Link>
            <Link href="/assistencia" className="text-[14px] font-medium py-2.5 px-3 rounded-lg text-[#2D3748] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
              Assistência Técnica
            </Link>
            <Link href="/sobre" className="text-[14px] font-medium py-2.5 px-3 rounded-lg text-[#2D3748] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
              Sobre Nós
            </Link>
            <Link href="/contactos" className="text-[14px] font-medium py-2.5 px-3 rounded-lg text-[#2D3748] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
              Contactos
            </Link>
            <Link
              href="/orcamento"
              className="mt-3 px-5 py-2.5 rounded-full text-center text-[13px] font-semibold text-white"
              style={{ backgroundColor: "#E20A17" }}
              onClick={() => setMobileOpen(false)}
            >
              Pedir Orçamento Gratuito
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
