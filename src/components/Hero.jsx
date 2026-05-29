import '../styles/Hero.css';


// Importação correta de assets no React (Vite/Webpack)
import CHAR_LEFT from '../assets/JaiCaindo.png'; 
import CHAR_RIGHT from '../assets/Jaii.png';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        
        <div className="hero-content">
          <h1 className="hero-title">
            Olá, me chamo <span className="name-highlight">Jaiane</span>
            <span className="hero-subtitle">Software Engineering</span>
          </h1>
          
          <p className="hero-description">
            Seja bem-vindo ao meu portfólio! Sou desenvolvedora de software focada em 
            engenharia de sistemas. Utilizo Java e Spring Boot para 
            arquitetar soluções de backend, integradas com bancos de dados 
            MySQL e PostgreSQL. Também aplico Python para análise de dados e automação de processos. 
            No ecossistema frontend, desenvolvo interfaces funcionais 
            HTML, CSS e JavaScript. Explore os meus projetos abaixo para conhecer a fundo a 
            minha stack técnica e a arquitetura das aplicações que desenvolvo.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Contato</a>
           
            <a href="/cv.pdf" className="btn-secondary btn-download" download>
              <span className="download-icon">↓</span> Download CV
            </a>
          </div>
        </div>

        {/* Lado Visual */}
        <div className="hero-visual-compose">
          <div className="bg-glow-circle circle-1"></div>
          <div className="bg-glow-circle circle-2"></div>

          <div className="hero-characters">
            <img src={CHAR_LEFT} className="char-img char-falling" alt="Jaiane dinâmica" />
            <img src={CHAR_RIGHT} className="char-img char-thinking" alt="Jaiane pensando" />
          </div>

          <div className="floating-techs">
            <div className="tech-node spring" data-level="Spring Boot: 65%">
              <img src="https://skillicons.dev/icons?i=spring" alt="Spring Boot" />
            </div>
            
            <div className="tech-node html" data-level="HTML5: 60%">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML5" />
            </div>
            
            <div className="tech-node python" data-level="Python: 50%">
              <img src="https://skillicons.dev/icons?i=py" alt="Python" />
            </div>
            
            <div className="tech-node azure" data-level="Azure: 45%">
              <img src="https://skillicons.dev/icons?i=azure" alt="Azure" />
            </div>
            
            <div className="tech-node java" data-level="Java: 70%">
              <img src="https://skillicons.dev/icons?i=java" alt="Java" />
            </div>
            
            <div className="tech-node postgres" data-level="PostgreSQL: 85%">
              <img src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL" />
            </div>
            
            <div className="tech-node js" data-level="JavaScript: 50%">
              <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
            </div>
            
            <div className="tech-node mysql" data-level="MySQL: 85%">
              <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" />
            </div>
            
            <div className="tech-node css" data-level="CSS3: 50%">
              <img src="https://skillicons.dev/icons?i=css" alt="CSS3" />
            </div>
          </div>
        </div> 

      </div>
    </section>
  );
}