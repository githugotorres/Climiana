/*
 * Aviso de cookies. "Aceitar" e "Recusar" têm o mesmo destaque, como pede o RGPD.
 * O Píxel da Meta só é carregado depois de "Aceitar".
 */

import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { OPEN_SETTINGS_EVENT, getConsent, setConsent } from "@/lib/consent";
import { loadMetaPixel, isPixelLoaded, trackPageView } from "@/lib/metaPixel";
import { captureOrigem } from "@/lib/origem";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();

  // Ao abrir o site: guardar a origem do anúncio e respeitar a escolha anterior.
  useEffect(() => {
    captureOrigem();
    const choice = getConsent();
    if (choice === "accepted") loadMetaPixel();
    if (choice === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  // O site é de uma só página: contar cada mudança de página como uma visualização.
  const [firstLocation] = useState(location);
  useEffect(() => {
    if (location !== firstLocation && isPixelLoaded()) trackPageView();
  }, [location, firstLocation]);

  const accept = () => {
    setConsent("accepted");
    loadMetaPixel();
    setVisible(false);
  };

  const reject = () => {
    const wasLoaded = isPixelLoaded();
    setConsent("rejected");
    setVisible(false);
    // Se o Píxel já estava a correr nesta visita, recarregar para o desligar.
    if (wasLoaded) window.location.reload();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl sm:p-6">
        <p className="text-[14px] font-bold text-[#0A2540] mb-1.5">Este site usa cookies</p>
        <p className="text-[13px] leading-relaxed text-[#4A5568]">
          Com a sua autorização, usamos o Píxel da Meta para medir os resultados dos nossos anúncios
          no Facebook e no Instagram. Se recusar, o site funciona na mesma. Pode mudar de ideias a
          qualquer momento em "Definições de cookies", no fundo da página.{" "}
          <Link href="/politica-de-privacidade" className="font-semibold text-[#0072C2] hover:underline">
            Saber mais
          </Link>
        </p>
        <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={reject}
            className="rounded-full border border-[#0072C2] px-6 py-2.5 text-[13px] font-semibold text-[#0072C2] transition-colors hover:bg-[#0072C2]/5"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-full border border-[#0072C2] bg-[#0072C2] px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#005fa3]"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
