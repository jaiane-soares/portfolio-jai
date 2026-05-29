import '../styles/Certificate.css';

const CERT_SRC = '/src/assets/Azure.jpeg'; 

function Placeholder({ label }) {
  return <div className="cert-placeholder">{label}</div>;
}

export default function Certificate() {
  return (
    <section className="cert-section" id="certificate" aria-labelledby="cert-title">
      <div className="cert-container">

        <hgroup className="section-title" id="cert-title">
          <span>Minhas</span>
          <span className="accent">Certificações</span>
        </hgroup>

        <div className="cert-card">
          {CERT_SRC
            ? <img src={CERT_SRC} alt="Certificado de Jaiane" />
            : <Placeholder label="Certificado" />}
        </div>

      </div>
    </section>
  );
}