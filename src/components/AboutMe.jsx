import '../styles/AboutMe.css';

const PHOTO_SRC = '/src/assets/JaiChibi.png';

function Placeholder({ label }) {
  return <div className="photo-placeholder">{label}</div>;
}

export default function AboutMe() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-container">

        
        <div className="about-media">
          {PHOTO_SRC
            ? <img src={PHOTO_SRC} alt="Foto" />
            : <Placeholder label="Foto de perfil" />}
        </div>

        {/* Texto */}
        <div className="about-details">
          <hgroup className="section-title" id="about-title">
            <span>Sobre</span>
            <span className="accent">Mim</span>
          </hgroup>

          <div className="about-bio">
            <p>
              Sou alguém movida por decifrar o mundo através da lógica e das nuances.
              Encontrei na tecnologia a minha forma de criar e resolver problemas, mas
              quem eu sou vai muito além das linhas de código.
            </p>
            <p>
              Sou feita da paciência exigida para resolver um bom Sudoku, do silêncio
              focado acompanhado por uma xícara de café sempre presente, e do fascínio
              pela literatura russa. Para mim, destrinchar um sistema
              complexo, encaixar a última peça de um puzzle lógico ou mergulhar nas
              páginas de um romance denso são caminhos que partem do mesmo lugar: uma
              mente curiosa que não se cansa de aprender e buscar o próximo desafio.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}