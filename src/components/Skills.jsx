/* eslint-disable react/no-unescaped-entities */
import './Skills.css';
import { getSkillIcon } from '../utils/getImageUrl';
import { skills } from '../data';

function Skills() {
  return (
    <section id="skills" className="skill skills-section">
      <div className="header">
        <h2 className="heading">My Stack</h2>
        <p>
          I'm proficient in these technologies and constantly learning new ones.
        </p>
      </div>

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
