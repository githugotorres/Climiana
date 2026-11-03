/*
 * Consentimento de cookies (RGPD / Lei das comunicações eletrónicas).
 * A escolha fica guardada no navegador do visitante. Sem escolha, nada de
 * rastreio é carregado.
 */

export type ConsentChoice = "accepted" | "rejected";

const STORAGE_KEY = "climiana-cookie-consent";
export const CONSENT_EVENT = "climiana:consent-change";
export const OPEN_SETTINGS_EVENT = "climiana:open-cookie-settings";

export function getConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Navegador sem armazenamento: a escolha vale só para esta visita.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
