/* eslint-disable react/prop-types */
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/project.css';

export default function Project({ project }) {
  return (
    <article className="project">
      <img
        src={project.img}
        alt="project preview"
        className="project-image project-preview"
      />

      <div className="project-details">
        <h3 className="project-name">{project.title}</h3>

        <p className="project-desc">{project.description}</p>

        <div className="card-cta">
          <Link
            to={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary card-btn"
          >
            preview site <FaExternalLinkAlt />
          </Link>
          <Link
            to={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn github-link"
          >
            view source code
          </Link>
        </div>
      </div>
    </article>
  );
}
