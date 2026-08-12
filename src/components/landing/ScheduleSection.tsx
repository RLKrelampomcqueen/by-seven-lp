import { Reveal } from "./Reveal";
import { HoverEffect } from "./HoverEffect";
import { ActiveCampaignForm } from "./ActiveCampaignForm";

export function ScheduleSection() {
  return (
    <section className="lp-section form-section" id="agendar">
      <div className="lp-container">
        <Reveal className="section-head">
          <span className="eyebrow">Agende agora</span>
          <h2>Fale com um especialista, não com um vendedor</h2>
          <p>
            30 minutos de conversa técnica: você fala sobre o seu ambiente, a gente mostra onde o
            Vision One encaixa — ou não.
          </p>
        </Reveal>

        <Reveal className="form-wrap ac-form-wrap">
          <HoverEffect />
          <ActiveCampaignForm />
        </Reveal>
      </div>
    </section>
  );
}
