/*
 * Climiana Política de Privacidade Page
 * Página de texto legal, estilo consistente com as restantes páginas internas
 * Navbar: Liquid Glass style (Apple-inspired) com texto escuro para fundo claro
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import NavbarGlass from "@/components/NavbarGlass";

const lastUpdated = new Date().toLocaleDateString("pt-PT", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline rounded-md border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[14px] font-semibold text-amber-800">
      {children}
    </span>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="reveal py-8 border-b border-gray-100 last:border-b-0 last:pb-0">
      <h2 className="text-[16px] sm:text-[17px] font-bold mb-3 tracking-tight" style={{ color: "#0A2540" }}>
        {number}. {title}
      </h2>
      <div className="space-y-3 text-[14px] sm:text-[15px] font-normal leading-relaxed" style={{ color: "#4A5568" }}>
        {children}
      </div>
    </section>
  );
}

export default function PoliticaPrivacidade() {
  const pageRef = useRef<HTMLDivElement>(null);

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

      {/* Header */}
      <section className="pt-36 pb-14">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <span className="reveal inline-block text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "#E20A17" }}>
            Informação Legal
          </span>
          <h1 className="reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4" style={{ color: "#0A2540", transitionDelay: "100ms" }}>
            Política de Privacidade
          </h1>
          <p className="reveal text-[13px] sm:text-[14px] font-normal" style={{ color: "#4A5568", transitionDelay: "200ms" }}>
            Última atualização: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="reveal rounded-2xl bg-white border border-gray-100 p-6 sm:p-10">
            <p className="text-[14px] sm:text-[15px] font-normal leading-relaxed mb-2" style={{ color: "#4A5568" }}>
              A Climiana respeita a privacidade de quem visita este site e de quem entra em contacto
              connosco. Esta página explica, de forma simples, que dados pessoais recolhemos, para
              que servem e que direitos tem sobre eles, em conformidade com o Regulamento Geral sobre
              a Proteção de Dados (RGPD).
            </p>

            <Section number="1" title="Responsável pelo Tratamento dos Dados">
              <p>
                O responsável pelo tratamento dos dados recolhidos através deste site é a{" "}
                <strong>Climiana Unipessoal Lda</strong>, com sede na Rua do Silveiro, 59, 4990-311
                Ponte de Lima, e número de identificação fiscal <strong>508626625</strong>.
              </p>
              <p>
                Para qualquer questão relacionada com esta política ou com os seus dados pessoais,
                pode contactar-nos através do e-mail{" "}
                <a href="mailto:climiana@gmail.com" className="font-semibold hover:underline" style={{ color: "#0072C2" }}>
                  climiana@gmail.com
                </a>
                .
              </p>
            </Section>

            <Section number="2" title="Que Dados Recolhemos">
              <p>
                Recolhemos apenas os dados que nos fornece diretamente, de forma voluntária, ao
                submeter o formulário &ldquo;Pedir Orçamento&rdquo; disponível neste site: o seu nome
                e o seu contacto (e-mail e/ou telefone), bem como as restantes informações que
                indicar no formulário sobre o serviço pretendido.
              </p>
              <p>Não recolhemos dados pessoais por qualquer outra via automática neste site.</p>
            </Section>

            <Section number="3" title="Finalidade do Tratamento">
              <p>
                Os dados recolhidos destinam-se exclusivamente a responder aos seus pedidos de
                orçamento e de contacto comercial, relacionados com os serviços de climatização e
                energias renováveis prestados pela Climiana.
              </p>
            </Section>

            <Section number="4" title="Base Legal">
              <p>
                O tratamento dos seus dados baseia-se no seu consentimento, dado de forma livre e
                informada ao submeter voluntariamente o formulário, e na necessidade de tomar
                diligências pré-contratuais a seu pedido, nos termos do artigo 6.º, n.º 1, alíneas a)
                e b) do RGPD.
              </p>
            </Section>

            <Section number="5" title="Destinatários dos Dados">
              <p>
                Os dados submetidos através do formulário são enviados e armazenados numa folha de
                cálculo Google (Google Sheets), através do Google Apps Script, utilizada internamente
                como ferramenta de gestão de pedidos de orçamento.
              </p>
              <p>Não vendemos nem partilhamos os seus dados com terceiros para fins de marketing.</p>
            </Section>

            <Section number="6" title="Prazo de Conservação">
              <p>
                Os seus dados são conservados apenas durante o tempo necessário para cumprir a
                finalidade descrita acima: 12 meses após o último contacto.
              </p>
            </Section>

            <Section number="7" title="Os Seus Direitos">
              <p>Nos termos do RGPD, tem o direito de, a qualquer momento:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Aceder aos dados pessoais que temos sobre si;</li>
                <li>Solicitar a retificação de dados incorretos ou desatualizados;</li>
                <li>Solicitar o apagamento dos seus dados;</li>
                <li>Solicitar a limitação do tratamento dos seus dados;</li>
                <li>Solicitar a portabilidade dos seus dados para outro responsável;</li>
                <li>Opor-se ao tratamento dos seus dados.</li>
              </ul>
              <p>
                Pode exercer qualquer um destes direitos contactando-nos através do e-mail{" "}
                <a href="mailto:climiana@gmail.com" className="font-semibold hover:underline" style={{ color: "#0072C2" }}>
                  climiana@gmail.com
                </a>
                .
              </p>
              <p>
                Tem também o direito de apresentar reclamação junto da Comissão Nacional de Proteção
                de Dados (CNPD), autoridade de controlo em Portugal, caso considere que o tratamento
                dos seus dados não cumpre a legislação aplicável.
              </p>
            </Section>

            <Section number="8" title="Cookies">
              <p>
                À data desta versão, este site não utiliza cookies de rastreio, de análise de
                tráfego (analytics) nem de publicidade.
              </p>
              <p>
                Caso isto venha a mudar no futuro — por exemplo, com a ativação de ferramentas de
                analytics — esta política, e a eventual necessidade de um aviso de cookies, serão
                revistas em conformidade.
              </p>
            </Section>

            <Section number="9" title="Resolução Alternativa de Litígios (RAL)">
              <p>
                Em caso de litígio de consumo, o consumidor pode recorrer a uma entidade de Resolução
                Alternativa de Litígios (RAL). Tendo em conta a localização da Climiana em Ponte de
                Lima, a entidade territorialmente competente é o{" "}
                <a
                  href="https://www.ciab.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                  style={{ color: "#0072C2" }}
                >
                  CIAB – Tribunal Arbitral de Conflitos de Consumo
                </a>
                , para litígios de consumo de valor até 30.000 €.
              </p>
              <p>
                Contacto (delegação de Viana do Castelo): telefone 258 809 335, e-mail{" "}
                <a href="mailto:ciab.viana@cm-viana-castelo.pt" className="font-semibold hover:underline" style={{ color: "#0072C2" }}>
                  ciab.viana@cm-viana-castelo.pt
                </a>
                .
              </p>
            </Section>
          </div>

          <p className="reveal text-center text-[12px] font-normal mt-6" style={{ color: "#4A5568" }}>
            Tem dúvidas sobre esta política?{" "}
            <Link href="/contactos" className="font-semibold hover:underline" style={{ color: "#0072C2" }}>
              Contacte-nos
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
