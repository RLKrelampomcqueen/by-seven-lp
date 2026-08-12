import { AnimatedHero } from "@/components/ui/animated-hero-section-1";
import { Button } from "@/components/ui/button";
import { Star, BadgeCheck, Check } from "lucide-react";

const scrollTo = (id: string) => () =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const stats = [
  { num: "220+", label: "especialistas em TI" },
  { num: "140+", label: "certificações técnicas" },
  { num: "2.000+", label: "projetos entregues" },
  { num: "5", label: "vetores cobertos em 1 plataforma" },
];

export default function HeroSection() {
  return (
    <AnimatedHero
      overlayClassName="hero-overlay-lp"
      logo={<img src="logos/by-seven-logo-c.png" alt="by Seven" className="h-11" />}
      navLinks={[
        { label: "O problema", href: "#dor" },
        { label: "Produtos", href: "#produtos" },
        { label: "Calculadora", href: "#calculadora" },
        { label: "Resultados", href: "#prova" },
      ]}
      topRightAction={
        <Button
          onClick={scrollTo("agendar")}
          className="rounded-full border-0 px-4 text-sm font-bold text-white shadow-lg shadow-red-900/30 hover:opacity-90 bg-[linear-gradient(135deg,#FE7C31_0%,#F46646_35%,#E3554E_70%,#C94048_100%)] md:px-5 md:text-sm"
        >
          Agendar sessão
        </Button>
      }
      title={
        <>
          Seu ambiente tem <span className="text-brand-gradient">181 dias</span> para descobrir
          que foi atacado.
        </>
      }
      description="A by Seven traz o Trend Vision One™ para unificar detecção, resposta e gestão de risco em uma única plataforma — antes que o board descubra por outro caminho."
      ctaButton={{
        text: "Quero garantir meu teste grátis",
        onClick: scrollTo("agendar"),
        className:
          "rounded-full border-0 h-auto w-full sm:w-auto px-5 sm:px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-red-900/40 hover:opacity-90 bg-[linear-gradient(135deg,#FE7C31_0%,#F46646_35%,#E3554E_70%,#C94048_100%)] backdrop-blur-none",
      }}
      secondaryCta={{
        text: "Ver como funciona na prática",
        onClick: scrollTo("solucao"),
        className:
          "rounded-full h-auto w-full sm:w-auto px-5 sm:px-8 py-4 text-sm sm:text-base font-bold bg-transparent border border-[#2B3347] text-white hover:bg-transparent hover:border-[#FE7C31] hover:text-[#FE7C31] backdrop-blur-none",
      }}
    >
      <div className="hero-trust">
        <span>
          <Star aria-hidden="true" />
          Gartner Magic Quadrant Leader
        </span>
        <span>
          <BadgeCheck aria-hidden="true" />
          Parceiro certificado Trend Micro
        </span>
        <span>
          <Check aria-hidden="true" />
          2.000+ projetos entregues
        </span>
      </div>
      <div className="hero-stats" role="list">
        {stats.map((s) => (
          <div className="stat" role="listitem" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </AnimatedHero>
  );
}
