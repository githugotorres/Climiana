/*
 * Guarda de onde veio o visitante (ex.: ?origem=anuncio-altherma4),
 * para o pedido de orçamento chegar à folha com essa informação.
 * Não usa cookies nem dados pessoais: fica só nesta sessão do navegador.
 */

const KEY = "climiana-origem";

export function captureOrigem() {
  try {
    const params = new URLSearchParams(window.location.search);
    const origem = params.get("origem") || params.get("utm_campaign");
    if (origem) window.sessionStorage.setItem(KEY, origem.slice(0, 80));
  } catch {
    // ignorar
  }
}

export function getOrigem(): string {
  try {
    return window.sessionStorage.getItem(KEY) || "direto";
  } catch {
    return "direto";
  }
}
