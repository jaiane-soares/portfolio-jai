import '../styles/ProjectCard.css';

function Placeholder({ label }) {
  return <div className="img-placeholder">{label}</div>;
}

export default function ProjectCard({ title, type, imgSrc }) {
  return (
    <article className="project-card">
      <div className="project-card__thumb">
        {imgSrc
          ? <img src={imgSrc} alt={title} />
          : <Placeholder label={title} />}
      </div>
      <div className="project-card__info">
        <p className="project-card__type">{type}</p>
        <h3 className="project-card__title">{title}</h3>
      </div>
    </article>
  );
}
