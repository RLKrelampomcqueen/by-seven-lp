import { Mail, Laptop, Network, Cloud, Radar } from "lucide-react";
import { Reveal } from "./Reveal";

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
              <span className="benefit-num" aria-hidden="true">{num}</span>
              <div className="benefit-icon">
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
