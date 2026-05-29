import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const PROJECTS = [
  { id: 1, title: 'SOPRO', type: 'Web + Hardware', imgSrc: '/src/assets/sopro.png' },
  { id: 2, title: 'ECHOES OF KINDENESS', type: 'Backend', imgSrc: '/src/assets/echoes.png' },
  { id: 3, title: 'SentinelaAI', type: 'Backend ', imgSrc: '/src/assets/sentinela.png' },
];

const TAGS = ['#Web', '#Backend', '#Hardware'];

export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-container">

        <div className="projects-header">
          <hgroup className="section-title" id="projects-title">
            <span className="accent">Meus</span>
            <span>projetos</span>
          </hgroup>

          <p className="projects-subtitle">
            Aqui estão alguns dos projetos desenvolvidos focados em solucionar problemas reais.
          </p>

          <nav className="projects-filter" aria-label="Filtros de projeto">
            {TAGS.map((tag) => (
              <span key={tag} className="tag-item">{tag}</span>
            ))}
          </nav>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              type={project.type}
              imgSrc={project.imgSrc}
            />
          ))}
        </div>

        <div className="projects-actions">
          <a className="more-projects-btn" href="#projects" role="button">
            Saber mais <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}