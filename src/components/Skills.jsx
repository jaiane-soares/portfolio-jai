import '../styles/Skills.css';

const SKILLS = [
  { name: 'Java',        src: 'https://cdn.simpleicons.org/openjdk' },       
  { name: 'Spring Boot', src: 'https://cdn.simpleicons.org/springboot' },     
  { name: 'Python',      src: 'https://cdn.simpleicons.org/python' },        
  { name: 'MySQL',       src: 'https://cdn.simpleicons.org/mysql' },         
  { name: 'HTML5',       src: 'https://cdn.simpleicons.org/html5' },         
         
  { name: 'JavaScript',  src: 'https://cdn.simpleicons.org/javascript' },    
  { name: 'Git',         src: 'https://cdn.simpleicons.org/git' },            
];

function Placeholder({ label }) {
  return <div className="skill-placeholder">{label}</div>;
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="skills-container">

        <hgroup className="section-title" id="skills-title">
          <span>Minhas</span>
          <span className="accent">Skills</span>
        </hgroup>

        <div className="skills-grid">
          {SKILLS.map(({ name, src }) => (
            <div key={name} className="skill-card">
              <div className="skill-icon">
                {src
                  ? <img src={src} alt={`Logo do ${name}`} />
                  : <Placeholder label={name} />}
              </div>
              <span className="skill-name">{name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}