import { useMemo, useState } from "react";
import { Clock, HelpCircle, LayoutDashboard, TrendingDown } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Calculadora simplificada — 3 perguntas, 3 respostas em linguagem direta.
 * Benchmarks: IBM Cost of a Data Breach 2025 (violação detectada em <200 dias
 * custa US$ 3,87 mi vs US$ 5,01 mi; probabilidade anual ~14%), ajustado por porte.
 */

const BREACH_FAST = 3_870_000;
const BREACH_SLOW = 5_010_000;
const ANNUAL_PROB = 0.14;
/** Câmbio de referência para exibir valores em R$ (declarado na nota de fonte) */
const USD_BRL = 5.4;

const SIZE_OPTIONS = [
  { label: "Até 200 colaboradores", factor: 0.35 },
  { label: "De 200 a 500", factor: 0.55 },
  { label: "De 500 a 2.000", factor: 0.8 },
  { label: "Mais de 2.000", factor: 1 },
];
const TEAM_OPTIONS = [
  { label: "1 analista", ftes: 1 },
  { label: "2 a 3 analistas", ftes: 2.5 },
  { label: "4 a 6 analistas", ftes: 5 },
  { label: "7 ou mais", ftes: 8 },
];
const TOOL_OPTIONS = ["1 a 3", "4 a 6", "7 a 10", "11 ou mais"];

function fmtUSD(v: number) {
  if (v >= 1_000_000)
    return `US$ ${(v / 1_000_000).toLocaleString("pt-BR", { maximumFractionDigits: 2 })} mi`;
  return `US$ ${Math.round(v / 1_000).toLocaleString("pt-BR")} mil`;
}

/** Decisor brasileiro orça em reais — valor principal em R$ (benchmark IBM convertido) */
function fmtBRL(usd: number) {
  const v = usd * USD_BRL;
  if (v >= 1_000_000)
    return `R$ ${(v / 1_000_000).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} mi`;
  return `R$ ${Math.round(v / 1_000).toLocaleString("pt-BR")} mil`;
}

export function CalculatorSection() {
  const [sizeIdx, setSizeIdx] = useState(1);
  const [teamIdx, setTeamIdx] = useState(1);
  const [toolsIdx, setToolsIdx] = useState(2);

  const r = useMemo(() => {
    const factor = SIZE_OPTIONS[sizeIdx].factor;
    const exposureNow = ANNUAL_PROB * BREACH_SLOW * factor;
    const exposureV1 = ANNUAL_PROB * BREACH_FAST * factor;
    const hours = Math.round(TEAM_OPTIONS[teamIdx].ftes * 2080 * 0.33 * 0.7);
    return { savings: exposureNow - exposureV1, exposureNow, exposureV1, hours };
  }, [sizeIdx, teamIdx]);

  return (
    <section className="lp-section form-section" id="calculadora">
      <div className="lp-container">
        <Reveal className="section-head">
          <span className="eyebrow">Calcule seu cenário</span>
          <h2>Quanto custa continuar como está?</h2>
          <p>Responda 3 perguntas e veja o que muda no seu ambiente.</p>
        </Reveal>

        <Reveal className="calc-card">
          <div className="calc-inputs">
            <div className="field">
              <label htmlFor="c-size">Qual o tamanho da sua empresa?</label>
              <select id="c-size" value={sizeIdx} onChange={(e) => setSizeIdx(Number(e.target.value))}>
                {SIZE_OPTIONS.map((o, i) => (
                  <option key={o.label} value={i}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="c-team">Quantas pessoas cuidam da segurança?</label>
              <select id="c-team" value={teamIdx} onChange={(e) => setTeamIdx(Number(e.target.value))}>
                {TEAM_OPTIONS.map((o, i) => (
                  <option key={o.label} value={i}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="c-tools">Quantas ferramentas de segurança usam?</label>
              <select id="c-tools" value={toolsIdx} onChange={(e) => setToolsIdx(Number(e.target.value))}>
                {TOOL_OPTIONS.map((o, i) => (
                  <option key={o} value={i}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="calc-divider" aria-hidden="true" />

          <div className="calc-hero">
            <div className="calc-help-wrap">
              <button type="button" className="calc-help" aria-label="Como esse valor é calculado?">
                <HelpCircle aria-hidden="true" />
              </button>
              <div className="calc-popover" role="tooltip">
                <div className="calc-popover-inner">
                  <strong>De onde vem esse valor?</strong>
                  <ol>
                    <li>
                      Uma violação detectada tarde custa em média <strong>US$ 5,01 mi</strong>;
                      detectada rápido, <strong>US$ 3,87 mi</strong> (IBM, 2025). Diferença: US$
                      1,14 mi.
                    </li>
                    <li>
                      A chance de uma empresa sofrer uma violação é de <strong>~14% ao ano</strong>.
                    </li>
                    <li>
                      Ajustamos pelo porte — {SIZE_OPTIONS[sizeIdx].label.toLowerCase()} usa fator{" "}
                      {SIZE_OPTIONS[sizeIdx].factor.toLocaleString("pt-BR")}.
                    </li>
                  </ol>
                  <p className="calc-popover-math">
                    14% × US$ 1,14 mi × {SIZE_OPTIONS[sizeIdx].factor.toLocaleString("pt-BR")} ={" "}
                    {fmtUSD(r.savings)} ≈ <strong>{fmtBRL(r.savings)}/ano</strong> (câmbio R${" "}
                    {USD_BRL.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})
                  </p>
                </div>
              </div>
            </div>
            <span className="calc-hero-label">Com o Vision One, sua empresa deixa de perder</span>
            <span className="calc-hero-value">{fmtBRL(r.savings)} / ano</span>
            <span className="calc-hero-sub">
              só por detectar ataques mais rápido — o risco financeiro anual cai de{" "}
              {fmtBRL(r.exposureNow)} para {fmtBRL(r.exposureV1)}.
            </span>
          </div>

          <div className="calc-items">
            <div className="calc-item">
              <span className="calc-item-icon"><Clock aria-hidden="true" /></span>
              <div>
                <strong>≈ {r.hours.toLocaleString("pt-BR")} horas por ano</strong> do seu time voltam
                pro trabalho estratégico.
                <span className="calc-item-sub">A IA corta ~70% da triagem manual de alertas.</span>
              </div>
            </div>
            <div className="calc-item">
              <span className="calc-item-icon"><LayoutDashboard aria-hidden="true" /></span>
              <div>
                <strong>Suas {TOOL_OPTIONS[toolsIdx]} ferramentas viram 1 painel único.</strong>
                <span className="calc-item-sub">Menos licenças pra pagar, menos lacunas entre sistemas.</span>
              </div>
            </div>
            <div className="calc-item">
              <span className="calc-item-icon"><TrendingDown aria-hidden="true" /></span>
              <div>
                <strong>Violação detectada rápido custa 24% menos.</strong>
                <span className="calc-item-sub">US$ 3,87 mi contra US$ 5,01 mi na média global (IBM, 2025).</span>
              </div>
            </div>
          </div>

          <a href="#agendar" className="btn btn-primary btn-lg calc-cta">
            Validar esses números na sessão de 30 minutos
          </a>
        </Reveal>

        <Reveal>
          <p className="compare-source">
            Estimativa ilustrativa com base em benchmarks públicos —{" "}
            <a href="https://www.ibm.com/reports/data-breach" target="_blank" rel="noopener noreferrer">
              IBM Cost of a Data Breach Report 2025
            </a>
            , ajustada pelo porte da empresa e convertida a R${" "}
            {USD_BRL.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}/US$. Não constitui
            proposta comercial.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
