import { SKILLS } from '../portfolioData';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {SKILLS.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

