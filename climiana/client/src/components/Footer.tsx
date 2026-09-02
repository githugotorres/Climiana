/*
 * Climiana Footer, refined design
 * Typography: Poppins, consistent sizing
 * Colors: Blue #0072C2, Gradient #15ABE6, Red #E20A17
 */

import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

const MAPS_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Rua%20da%20Vila%20Coroneliana%202722%2C%20Correlh%C3%A3%2C%20Ponte%20de%20Lima%2C%20Viana%20do%20Castelo";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8" style={{ backgroundColor: "#0A1628" }}>
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, #0072C2 0%, #15ABE6 50%, #E20A17 100%)" }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src="/imagens/climiana-logo-transparent.png"
              alt="Climiana"
              className="h-12 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-[13px] font-normal leading-relaxed text-white/55 mb-4">
              Sistemas de climatização e energias renováveis. Excelência técnica ao serviço do seu conforto desde 2008.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="tel:914781470"
                className="flex items-center gap-2 text-[13px] font-medium text-white/70 hover:text-[#15ABE6] transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5" />
                914 781 470
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90 mb-5">Navegação</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[13px] font-normal text-white/55 hover:text-[#15ABE6] transition-colors duration-200">Home</Link></li>
              <li><Link href="/servicos" className="text-[13px] font-normal text-white/55 hover:text-[#15ABE6] transition-colors duration-200">Serviços</Link></li>
              <li><Link href="/assistencia" className="text-[13px] font-normal text-white/55 hover:text-[#15ABE6] transition-colors duration-200">Assistência Técnica</Link></li>
              <li><Link href="/sobre" className="text-[13px] font-normal text-white/55 hover:text-[#15ABE6] transition-colors duration-200">Sobre Nós</Link></li>
              <li><Link href="/contactos" className="text-[13px] font-normal text-white/55 hover:text-[#15ABE6] transition-colors duration-200">Contactos</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90 mb-5">Contactos</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#15ABE6] mt-0.5 shrink-0" />
                <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] font-normal text-white/55 hover:text-[#15ABE6] transition-colors duration-200">Rua da Vila Coroneliana 2722, Correlhã, Ponte de Lima, Viana do Castelo</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#15ABE6] shrink-0" />
                <a href="tel:258753464" className="text-[13px] font-normal text-white/55 hover:text-[#15ABE6] transition-colors duration-200">258 753 464</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#15ABE6] shrink-0" />
                <a href="tel:914781470" className="text-[13px] font-normal text-white/55 hover:text-[#15ABE6] transition-colors duration-200">914 781 470</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#15ABE6] shrink-0" />
                <a href="mailto:climiana@gmail.com" className="text-[13px] font-normal text-white/55 hover:text-[#15ABE6] transition-colors duration-200">climiana@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] font-normal text-white/35">
            &copy; {new Date().getFullYear()} Climiana Unipessoal Lda. Todos os direitos reservados.
          </p>
          <p className="text-[11px] font-normal text-white/35">
            Sistemas de Climatização e Energias Renováveis
          </p>
        </div>
      </div>
    </footer>
  );
}
