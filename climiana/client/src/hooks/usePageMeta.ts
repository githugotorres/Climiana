import { useEffect } from "react";

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    setMetaTag("description", description);
  }, [title, description]);
}

// Usado só na página 404: pede ao Google para não a indexar. Repõe
// "index, follow" ao sair da página, para não deixar o site inteiro
// marcado como noindex depois de uma visita à página de erro.
export function useNoIndex() {
  useEffect(() => {
    setMetaTag("robots", "noindex");
    return () => setMetaTag("robots", "index, follow");
  }, []);
}
