import { Award, ShieldCheck, BookOpen, Medal, BarChart3, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { HoverEffect } from "./HoverEffect";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { TestimonialsGrid } from "@/components/ui/testimonials-scroller";

// Setores atendidos (clientes sob NDA — nomes fictícios pareciam placeholder
// e minavam a credibilidade). Quando houver logos autorizados, adicionar `src`.
const clientLogos = [
  { alt: "Instituições financeiras", label: "INSTITUIÇÕES FINANCEIRAS" },
  { alt: "Indústria", label: "INDÚSTRIA" },
  { alt: "Saúde", label: "SAÚDE" },
  { alt: "Varejo", label: "VAREJO" },
  { alt: "Logística", label: "LOGÍSTICA" },
  { alt: "Agronegócio", label: "AGRONEGÓCIO" },
  { alt: "Educação", label: "EDUCAÇÃO" },
  { alt: "Fintechs", label: "FINTECHS" },
];

const testimonials = [
  {
    text: '"A gente tinha SIEM, EDR e DLP de fornecedores diferentes. Cada ferramenta gerava seu próprio alerta, ninguém conversava com ninguém. Depois do Vision One, o tempo de investigação de incidente caiu 70%. O que levava dois dias para correlacionar, hoje aparece em minutos no painel."',
    name: "CISO",
    role: "Instituição Financeira, 400+ colaboradores",
    note: "— Nome preservado por NDA",
  },
  {
    text: '"O gatilho foi um relatório de risco que o board pediu com 48 horas de prazo. Levei três dias para montar. Com o Vision One, esse relatório é gerado automaticamente. Na próxima reunião de diretoria eu cheguei com dados — não com desculpas."',
    name: "Gerente de Segurança da Informação",
    role: "Indústria de manufatura, 280 colaboradores",
    note: "— Nome preservado por NDA",
  },
  {
    text: '"Tínhamos três contratos de segurança que se sobrepunham e ninguém sabia dizer o que cada um cobria. Consolidamos tudo no Vision One com a by Seven: menos licença pra pagar, menos console pra olhar, e pela primeira vez o inventário de risco bate com a realidade."',
    name: "CTO",
    role: "Rede varejista, 1.200+ colaboradores",
    note: "— Nome preservado por NDA",
  },
  {
    text: '"Um ransomware travou um fornecedor nosso numa sexta-feira. No sábado de manhã o mesmo grupo tentou a gente. O Vision One isolou as máquinas afetadas sozinho, antes do time acordar. Segunda-feira a operação abriu normal — e o board nem ficou sabendo pelo jornal."',
    name: "Coordenador de Infraestrutura",
    role: "Grupo hospitalar, 900+ colaboradores",
    note: "— Nome preservado por NDA",
  },
];

type Badge = { icon?: LucideIcon; img?: string; label: string };

// Reconhecimentos de analistas atribuídos à Trend Micro (fabricante da plataforma)
// + credenciais próprias da by Seven. TODO: validar edição/ano de cada relatório
// com o material oficial da Trend antes de publicar.
const badges: Badge[] = [
  { icon: Award, label: "Gartner Magic Quadrant Leader — XDR (Trend Micro)" },
  { icon: Medal, label: "The Forrester Wave™ Leader — XDR (Trend Micro)" },
  { icon: BarChart3, label: "IDC — nº 1 mundial em Cloud Workload Security (Trend Micro)" },
  { img: "logos/trendmicro.svg", label: "Parceiro Autorizado Trend Micro" },
  { icon: ShieldCheck, label: "ISO 27001 Compliance Ready" },
  { icon: BookOpen, label: "140+ Certificações Técnicas Ativas" },
];

export function SocialProofSection() {
  return (
    <section className="lp-section" id="prova">
      <div className="lp-container">
        <Reveal>
          <p className="logos-intro">Setores que já resolveram esse problema com a gente:</p>
          <div className="mx-auto mb-16 max-w-3xl">
            <div className="mx-auto h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
            <LogoCloud logos={clientLogos} aria-label="Logos de clientes" />
            <div className="mx-auto h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
          </div>
        </Reveal>

        <Reveal className="section-head" >
          <span className="eyebrow">Depoimentos</span>
          <h2>O que os clientes dizem</h2>
        </Reveal>
        <div className="mb-16">
          <TestimonialsGrid testimonials={testimonials} />
        </div>

        <div className="badges">
          {badges.map(({ icon: Icon, img, label }) => (
            <Reveal key={label} className="badge-card">
              <span className="badge-logo-chip">
                {img ? (
                  <img src={img} alt="" loading="lazy" />
                ) : (
                  Icon && <Icon aria-hidden="true" />
                )}
              </span>
              {label}
              <HoverEffect />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
