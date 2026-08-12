import { Reveal } from "./Reveal";

export function FinalCtaSection() {
  return (
    <section className="lp-section final-cta">
      <Reveal className="lp-container">
        <h2>Agende sua sessão gratuita de 30 minutos.</h2>
        <p>Conversa técnica, sem compromisso, com um especialista que conhece o seu setor.</p>
        <a href="#agendar" className="btn btn-primary btn-lg">
          Agendar minha sessão de 30 minutos
        </a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-container footer-inner">
        <a href="#" className="footer-logo" aria-label="by Seven">
          <img src="logos/by-seven-logo-c.png" alt="by Seven" className="h-12" />
        </a>
        <p className="footer-tagline">
          by Seven — especialistas em TI que resolvem o problema antes de vender a solução.
        </p>
        <nav className="footer-links" aria-label="Links institucionais">
          <a href="https://www.byseven.com.br/" target="_blank" rel="noopener noreferrer">
            Contato
          </a>
          <a
            href="https://www.linkedin.com/company/by-seven/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
        <p className="footer-meta">Trend Vision One™ é marca da Trend Micro Incorporated.</p>
      </div>
    </footer>
  );
}
