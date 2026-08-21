import {
  AlertTriangle,
  Bell,
  FileText,
  Lock,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./Reveal";

const pains = [
  { icon: AlertTriangle, quote: '"Tenho cinco ferramentas abertas e nenhuma fala com a outra."' },
  { icon: Bell, quote: '"Recebo 300 alertas por dia. Não sei quais são reais."' },
  { icon: FileText, quote: '"O board quer saber nosso nível de risco. Não consigo gerar esse relatório rápido."' },
  { icon: Lock, quote: '"Ransomware entrou na pauta da diretoria e agora todo mundo olha pra mim."' },
  { icon: Clock, quote: '"Sei que fui atacado. Não sei há quanto tempo."' },
  { icon: ShieldCheck, quote: '"LGPD, ISO 27001, auditoria chegando — e meu stack não gera evidência nenhuma."' },
];

export function PainSection() {
  return (
    <section className="lp-section pain" id="dor">
      <div className="lp-container">
        <Reveal className="section-head">
          <span className="eyebrow">O problema</span>
          <h2>Reconhece alguma dessas?</h2>
          <p>Se uma frase abaixo parece familiar, a conversa que você precisa ter é com a gente.</p>
        </Reveal>
        <div className="pain-grid">
          {pains.map(({ icon: Icon, quote }) => (
            <Reveal key={quote} className="pain-card">
              <Icon aria-hidden="true" />
              <p>{quote}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="pain-cta">
          <a href="#agendar" className="link-arrow">
            <span className="link-arrow-text">Quero entender como resolver isso</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
