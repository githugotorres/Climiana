/*
 * Climiana Orçamento Page, internal form page
 * Navbar: Liquid Glass style (Apple-inspired) com texto escuro para fundo claro
 * Inclui transição de página subtil
 */

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import NavbarGlass from "@/components/NavbarGlass";
import { usePageMeta } from "@/hooks/usePageMeta";
import { toast } from "sonner";

const ORCAMENTO_WEBHOOK_URL = import.meta.env.VITE_ORCAMENTO_WEBHOOK_URL as string | undefined;

type OrcamentoFormState = {
  nomeCompleto: string;
  email: string;
  telemovel: string;
  morada: string;
  tipoServico: string;
  tipoEspaco: string;
  temProjetoInstalacao: string;
  localizacaoObra: string;
  novaOuSubstituicao: string;
  urgencia: string;
  descricao: string;
};

const initialFormState: OrcamentoFormState = {
  nomeCompleto: "",
  email: "",
  telemovel: "",
  morada: "",
  tipoServico: "",
  tipoEspaco: "",
  temProjetoInstalacao: "",
  localizacaoObra: "",
  novaOuSubstituicao: "",
  urgencia: "",
  descricao: "",
};

const serviceOptions = [
  "Ar Condicionado",
  "Climatização",
  "Ventilação",
  "Energias Renováveis",
  "Outro",
];

const spaceOptions = ["Habitação", "Escritório", "Comércio", "Indústria", "Outro"];

const yesNoOptions = ["Sim", "Não"];

const installationOptions = ["Instalação nova", "Substituição de equipamento existente"];

const urgencyOptions = ["Urgente", "Dentro de 1 semana", "Dentro de 1 mês", "Sem pressa"];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-[13px] font-semibold text-[#0A2540] mb-2">{children}</label>;
}

function InputField(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#0A2540] placeholder:text-gray-400 shadow-sm outline-none transition-colors focus:border-[#0072C2] focus:ring-2 focus:ring-[#0072C2]/10 ${props.className ?? ""}`} />;
}

function SelectField(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#0A2540] shadow-sm outline-none transition-colors focus:border-[#0072C2] focus:ring-2 focus:ring-[#0072C2]/10 ${props.className ?? ""}`} />;
}

function RadioGroup({
  name,
  value,
  options,
  onChange,
}: {
  name: string;
  value: string;
  options: string[];
  onChange: (next: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const checked = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all ${checked ? "border-[#0072C2] bg-[#0072C2] text-white shadow-md" : "border-gray-200 bg-white text-[#0A2540] hover:border-[#0072C2]/40 hover:bg-[#0072C2]/5"}`}
            aria-pressed={checked}
          >
            {option}
          </button>
        );
      })}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

export default function Orcamento() {
  usePageMeta(
    "Pedir Orçamento Gratuito de Climatização | Climiana",
    "Envie o seu pedido e a nossa equipa entra em contacto consigo no prazo máximo de 24 horas úteis."
  );

  const pageRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<OrcamentoFormState>(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);
  // Honeypot: campo invisível para humanos que os bots de spam preenchem automaticamente
  const [website, setWebsite] = useState("");

  const canSubmit = useMemo(() => {
    return (
      form.nomeCompleto.trim() &&
      form.email.trim() &&
      form.telemovel.trim() &&
      form.morada.trim() &&
      form.tipoServico &&
      form.tipoEspaco &&
      form.temProjetoInstalacao &&
      form.localizacaoObra.trim() &&
      form.novaOuSubstituicao &&
      form.urgencia &&
      form.descricao.trim() &&
      consentAccepted
    );
  }, [form, consentAccepted]);

  const updateField = (key: keyof OrcamentoFormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Se o honeypot vier preenchido, é um bot: cancelar sem avisar nem mostrar erro
    if (website.trim() !== "") {
      return;
    }

    if (!ORCAMENTO_WEBHOOK_URL) {
      toast.error("Falta configurar VITE_ORCAMENTO_WEBHOOK_URL com o URL do Web App do Apps Script.");
      return;
    }

    setSubmitting(true);

    try {
      const hiddenIframeId = "orcamento-submit-target";
      let hiddenIframe = document.getElementById(hiddenIframeId) as HTMLIFrameElement | null;

      if (!hiddenIframe) {
        hiddenIframe = document.createElement("iframe");
        hiddenIframe.id = hiddenIframeId;
        hiddenIframe.name = hiddenIframeId;
        hiddenIframe.title = "Orcamento submit target";
        hiddenIframe.style.display = "none";
        document.body.appendChild(hiddenIframe);
      }

      const formElement = document.createElement("form");
      formElement.method = "POST";
      formElement.action = ORCAMENTO_WEBHOOK_URL;
      formElement.target = hiddenIframeId;

      Object.entries(form).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        formElement.appendChild(input);
      });

      document.body.appendChild(formElement);
      formElement.submit();
      formElement.remove();

      setSubmitted(true);
      setForm(initialFormState);
      setConsentAccepted(false);
      setWebsite("");
      toast.success("Pedido enviado com sucesso.");
    } catch {
      toast.error("Não foi possível enviar o pedido. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

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
    <div ref={pageRef} className="min-h-screen page-transition" style={{ backgroundColor: "#F2F7FA" }}>
      <NavbarGlass />

      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-8" style={{ background: "radial-gradient(circle, rgba(226,10,23,0.08) 0%, transparent 70%)", top: "-20%", right: "-10%" }} />
        </div>
        <div className="max-w-3xl mx-auto px-5 lg:px-8 relative z-10 text-center">
          <span className="reveal inline-block text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "#E20A17" }}>
            Orçamento
          </span>
          <h1 className="reveal text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] mb-6" style={{ color: "#0A2540", transitionDelay: "100ms" }}>
            Preencha o formulário
          </h1>
          <p className="reveal text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto" style={{ color: "#4A5568", transitionDelay: "200ms" }}>
            Envie o seu pedido e a nossa equipa entra em contacto consigo no prazo máximo de 24 horas úteis.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="reveal max-w-5xl mx-auto" style={{ transitionDelay: "200ms" }}>
            {submitted ? (
              <div className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900 shadow-sm">
                <p className="text-[14px] font-bold mb-1">Pedido enviado com sucesso.</p>
                <p className="text-[13px] leading-relaxed">
                  Recebemos o teu pedido e a equipa da Climiana vai entrar em contacto contigo brevemente.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden">
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #0072C2 0%, #15ABE6 50%, #E20A17 100%)" }} />
              <div className="p-5 sm:p-8 lg:p-10 space-y-8">
                {/*
                  Honeypot: campo fora do fluxo visual normal (não display:none), por isso
                  continua acessível a leitores de ecrã, que veem a label a avisar para o
                  deixar em branco. Bots que preenchem todos os campos do formulário acabam
                  por preencher este, e o pedido é então descartado em handleSubmit.
                */}
                <div className="sr-only">
                  <label htmlFor="website">Não preencha este campo</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel>Nome Completo</FieldLabel>
                    <InputField required value={form.nomeCompleto} onChange={(e) => updateField("nomeCompleto", e.target.value)} placeholder="O seu nome completo" />
                  </div>
                  <div>
                    <FieldLabel>Email</FieldLabel>
                    <InputField required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="exemplo@email.com" />
                  </div>
                  <div>
                    <FieldLabel>Número de telemóvel</FieldLabel>
                    <InputField required type="tel" value={form.telemovel} onChange={(e) => updateField("telemovel", e.target.value)} placeholder="914 781 470" />
                  </div>
                  <div>
                    <FieldLabel>Morada</FieldLabel>
                    <InputField required value={form.morada} onChange={(e) => updateField("morada", e.target.value)} placeholder="Rua, número, localidade" />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel>Tipo de serviço pretendido</FieldLabel>
                    <SelectField required value={form.tipoServico} onChange={(e) => updateField("tipoServico", e.target.value)}>
                      <option value="">Selecionar</option>
                      {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </SelectField>
                  </div>
                  <div>
                    <FieldLabel>Tipo de espaço</FieldLabel>
                    <SelectField required value={form.tipoEspaco} onChange={(e) => updateField("tipoEspaco", e.target.value)}>
                      <option value="">Selecionar</option>
                      {spaceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </SelectField>
                  </div>
                </div>

                <div>
                  <FieldLabel>Tem projeto de instalação?</FieldLabel>
                  <RadioGroup name="temProjetoInstalacao" value={form.temProjetoInstalacao} options={yesNoOptions} onChange={(value) => updateField("temProjetoInstalacao", value)} />
                </div>

                <div>
                  <FieldLabel>Localização da obra (Concelho/Freguesia)</FieldLabel>
                  <InputField required value={form.localizacaoObra} onChange={(e) => updateField("localizacaoObra", e.target.value)} placeholder="Ex.: Ponte de Lima / Correlhã" />
                </div>

                <div className="grid lg:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel>É uma instalação nova ou substituição de equipamento existente?</FieldLabel>
                    <RadioGroup name="novaOuSubstituicao" value={form.novaOuSubstituicao} options={installationOptions} onChange={(value) => updateField("novaOuSubstituicao", value)} />
                  </div>
                  <div>
                    <FieldLabel>Qual a urgência do serviço?</FieldLabel>
                    <SelectField required value={form.urgencia} onChange={(e) => updateField("urgencia", e.target.value)}>
                      <option value="">Selecionar</option>
                      {urgencyOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </SelectField>
                  </div>
                </div>

                <div>
                  <FieldLabel>Descreva brevemente o que pretende ou alguma informação adicional</FieldLabel>
                  <textarea
                    required
                    rows={6}
                    value={form.descricao}
                    onChange={(e) => updateField("descricao", e.target.value)}
                    placeholder="Explique o que precisa, medidas, preferências ou dúvidas..."
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#0A2540] placeholder:text-gray-400 shadow-sm outline-none transition-colors focus:border-[#0072C2] focus:ring-2 focus:ring-[#0072C2]/10"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={consentAccepted}
                      onChange={(e) => setConsentAccepted(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-[#0072C2] focus:ring-2 focus:ring-[#0072C2]/30 cursor-pointer"
                    />
                    <span className="text-[13px] leading-relaxed text-[#4A5568]">
                      Li e aceito a{" "}
                      <Link href="/politica-de-privacidade" className="font-semibold text-[#0072C2] hover:underline">
                        Política de Privacidade
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="text-[12px] text-[#4A5568] max-w-2xl">
                    Os dados recolhidos destinam‑se exclusivamente à elaboração do orçamento e não serão utilizados para outros fins.
                  </p>
                  <button
                    type="submit"
                    disabled={!canSubmit || submitting}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white shadow-lg shadow-red-900/20 transition-all duration-200 hover:shadow-xl hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                    style={{ backgroundColor: "#E20A17" }}
                  >
                    {submitting ? "A enviar..." : submitted ? "Enviar novo pedido" : "Enviar Pedido"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}