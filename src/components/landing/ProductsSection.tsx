import { Mail, Laptop, Network, Cloud, Radar } from "lucide-react";
import { Reveal } from "./Reveal";
import { HoverEffect } from "./HoverEffect";
import { Meteors } from "@/components/ui/meteors";

const products = [
  {
    icon: Mail,
    num: "01",
    title: "Email & Collaboration Security",
    text: "Bloqueia phishing, BEC e ransomware antes de chegar à caixa de entrada — cobrindo e-mail, Teams e apps de colaboração.",
  },
  {
    icon: Laptop,
    num: "02",
    title: "Endpoint Security",
    text: "Detecção e resposta em notebooks, servidores e dispositivos móveis, com contenção automática de ameaças em tempo real.",
  },
  {
    icon: Network,
    num: "03",
    title: "Network Security",
    text: "Visibilidade e inspeção de tráfego leste-oeste e norte-sul, fechando as brechas entre segmentos da rede corporativa.",
  },
  {
    icon: Cloud,
    num: "04",
    title: "Cloud Security",
    text: "Postura de segurança contínua para workloads, containers e configurações em nuvem — antes que virem incidente.",
  },
  {
    icon: Radar,
    num: "05",
    title: "Security Operations (XDR)",
    text: "Correlação de sinais de todos os vetores num único painel, com IA priorizando o que é ameaça real.",
  },
];

export function ProductsSection() {
  return (
    <section className="lp-section" id="produtos">
      <div className="lp-container">
        <Reveal className="section-head">
          <span className="eyebrow">O que entregamos</span>
          <h2>5 frentes, uma única plataforma</h2>
          <p>
            A by Seven implementa o Trend Vision One™ cobrindo todos os vetores de ataque do seu
            ambiente — sem pontos cegos entre ferramentas.
          </p>
        </Reveal>

        <div className="benefits-grid">
          {products.map(({ icon: Icon, num, title, text }) => (
            <Reveal key={num} className="benefit">
              <div className="benefit-icon">
                <Icon aria-hidden="true" />
              </div>
              <span className="benefit-num" aria-hidden="true">{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <HoverEffect />
              <div className="pointer-events-none absolute inset-0 z-[-1] [mask-image:linear-gradient(to_bottom,black,transparent_38%,transparent_62%,black)]">
                <Meteors
                  number={6}
                  minDuration={10}
                  maxDuration={22}
                  className="h-0.5 w-0.5 bg-[#FE7C31]/60 shadow-[0_0_4px_1px_#ff950025] before:h-px before:w-[70px] before:from-[#F46646]/50"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
