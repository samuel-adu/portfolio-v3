import '../styles/skills.css';
import { getSkillIcon } from '../utils/getImageUrl';
import { data } from '../data';

function Skills() {
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-heading skills-section-heading">Tech Stack</h2>
        <ul className="skills-list">
          {data.skills.map((item) => (
            <li key={item.id} className="skills-list-item">
              <img
                className="skill-icon"
                src={getSkillIcon(item.icon)}
                alt={item.name}
              />
              <span className="skill-name">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
