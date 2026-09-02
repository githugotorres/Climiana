/*
 * Climiana Navbar Glass, shared across all inner pages and Home
 * Liquid Glass style (Apple-inspired), floating pill navbar
 * variant="dark" -> light glass, dark text (used on light-background pages)
 * variant="light" -> dark glass, white text (used over the Home photo hero)
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/assistencia", label: "Assistência Técnica" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/contactos", label: "Contactos" },
];

interface NavbarGlassProps {
  variant?: "dark" | "light";
}

export default function NavbarGlass({ variant = "dark" }: NavbarGlassProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isActive = (path: string) => location === path;
  const isLight = variant === "light";

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div
          className={`relative mt-5 rounded-2xl backdrop-blur-xl border overflow-hidden shadow-lg ${
            isLight
              ? "bg-white/10 border-white/20 shadow-black/20"
              : "bg-white/70 border-white/20 shadow-black/5"
          }`}
        >
          <nav className="flex items-center justify-between h-[64px] px-6">
            <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
              <img src="/imagens/climiana-logo-transparent.png" alt="Climiana" className="h-8 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-[12px] font-medium uppercase tracking-wider transition-all duration-200 ${
                    isLight
                      ? isActive(link.href)
                        ? "text-white bg-white/15 shadow-sm shadow-black/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : isActive(link.href)
                        ? "text-[#0A2540] bg-[#0072C2]/10 shadow-sm"
                        : "text-[#0A2540]/80 hover:text-[#0A2540] hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:914781470"
                className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200 ${
                  isLight ? "text-white/70 hover:text-white" : "text-[#0A2540]/70 hover:text-[#0A2540]"
                }`}
              >
                <Phone className="w-3.5 h-3.5" /> 914 781 470
              </a>
              <Link
                href="/orcamento"
                className="px-5 py-2 rounded-full text-[13px] font-semibold text-white shadow-lg shadow-red-900/20 transition-all duration-200 hover:shadow-xl hover:shadow-red-900/30 hover:brightness-110 active:scale-95"
                style={{ backgroundColor: "#E20A17" }}
              >
                Pedir Orçamento
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              className={`lg:hidden p-1.5 -mr-1.5 rounded-lg transition-colors ${
                isLight ? "text-white hover:bg-white/10" : "text-[#0A2540] hover:bg-black/5"
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden grid transition-all duration-300 ease-in-out ${
              mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className={`border-t px-4 py-4 flex flex-col gap-1 ${isLight ? "border-white/15" : "border-black/5"}`}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-[13px] font-medium py-2.5 px-3 rounded-lg transition-colors ${
                      isLight
                        ? isActive(link.href) ? "text-white bg-white/10" : "text-white/75 hover:bg-white/10"
                        : isActive(link.href) ? "text-[#0072C2] bg-[#0072C2]/5" : "text-[#0A2540]/80 hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:914781470"
                  className={`flex items-center gap-2 text-[13px] font-medium py-2.5 px-3 ${
                    isLight ? "text-white/75" : "text-[#0A2540]/80"
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" /> 914 781 470
                </a>
                <Link
                  href="/orcamento"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-5 py-2.5 rounded-full text-center text-[13px] font-semibold text-white"
                  style={{ backgroundColor: "#E20A17" }}
                >
                  Pedir Orçamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
