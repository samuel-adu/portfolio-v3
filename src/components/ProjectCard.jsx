/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/getImageUrl';
import '../styles/project.css';

export default function Project({ project }) {
  return (
    <article className="project-card">
      <Link href={project.liveUrl} target="_blank">
        <img
          src={getImageUrl(project.img)}
          alt="project preview"
          className="card-img"
        />
      </Link>

      <Link to={project.liveUrl} target="_blank" className="card-heading">
        {project.title}
      </Link>

      <p className="card-text">{project.description}</p>

      <Link
        to={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="card-btn"
      >
        View on GitHub
      </Link>
    </article>
  );
}
