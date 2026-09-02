import { Link } from "wouter";
import { Home } from "lucide-react";
import NavbarGlass from "@/components/NavbarGlass";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F2F7FA" }}>
      <NavbarGlass />

      <section className="flex-1 flex items-center justify-center pt-36 pb-20 px-5">
        <div className="text-center max-w-lg">
          <p
            className="text-[96px] sm:text-[130px] font-extrabold leading-none tracking-tight mb-2"
            style={{
              background: "linear-gradient(135deg, #0072C2, #15ABE6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: "#0A2540" }}>
            Página não encontrada
          </h1>
          <p className="text-base font-normal leading-relaxed mb-10" style={{ color: "#4A5568" }}>
            A página que procura não existe ou foi movida. Verifique o endereço ou volte à página inicial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white shadow-lg shadow-red-900/20 transition-all duration-200 hover:shadow-xl hover:brightness-110 active:scale-[0.97] w-full sm:w-auto"
              style={{ backgroundColor: "#E20A17" }}
            >
              <Home className="w-4 h-4" />
              Voltar ao Início
            </Link>
            <Link
              href="/contactos"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-medium border transition-all duration-200 hover:bg-black/5 w-full sm:w-auto"
              style={{ color: "#0A2540", borderColor: "rgba(10,37,64,0.15)" }}
            >
              Contactar-nos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
