import '../styles/skills.css';
import { getSkillIcon } from '../utils/getImageUrl';
import { skills } from '../data';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-heading skills-section-heading">Tech Stack</h2>
      <ul className="skills-list">
        {skills.map((item) => (
          <li key={item.name} className="skills-list-item">
            <img
              className="skill-icon"
              src={getSkillIcon(item.icon)}
              alt={item.name}
            />
            <span className="skill-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
