import './Skills.css';
import { getSkillIcon } from '../utils/getImageUrl';
import { skills } from '../data';

function Skills() {
  return (
    <section id="skills" className="skill skills-section">
      <h2 className="section-heading skills-section-heading">Tech Stack</h2>
      <ul className="skill__list">
        {skills.map((item) => (
          <li key={item.name} className="skill__item">
            <img
              className="skill__icon"
              src={getSkillIcon(item.icon)}
              alt={item.name}
            />
            <span className="skill__name">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
