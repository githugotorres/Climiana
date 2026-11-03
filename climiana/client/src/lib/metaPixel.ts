/*
 * Píxel da Meta, carregado SÓ depois de o visitante aceitar os cookies.
 * O código oficial da Meta foi adaptado para não arrancar sozinho no <head>.
 */

const META_PIXEL_ID = "1466340338766283";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let loaded = false;

export function isPixelLoaded() {
  return loaded;
}

export function loadMetaPixel() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;

  if (!window.fbq) {
    const fbq: Fbq = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue!.push(args);
      }
    } as Fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq!("init", META_PIXEL_ID);
  window.fbq!("track", "PageView");
}

export function trackPageView() {
  if (loaded && window.fbq) window.fbq("track", "PageView");
}

export function trackLead(params?: Record<string, string>) {
  if (loaded && window.fbq) window.fbq("track", "Lead", params ?? {});
}
