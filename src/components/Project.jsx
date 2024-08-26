/* eslint-disable react/prop-types */

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import './Project.css';

export default function Project({ project }) {
  return (
    <article className="project">
      <div className="project-preview">
        <img
          src={project.img}
          alt="project preview"
          className="project-image project-preview"
        />
      </div>

      <div className="project-details">
        <h3 className="project-name">
          <Link
            title="preview site"
            to={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card__link"
          >
            {project.title}
          </Link>
        </h3>

        <div className="tools">
          {project.tools.map((tool) => (
            <span key={tool} className="tag">
              {tool}
            </span>
          ))}
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="card-cta">
          <Link
            title="preview site"
            to={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link card__link"
          >
            <FaExternalLinkAlt />
          </Link>

          {project.github && (
            <Link
              title="view source code"
              to={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link card__link"
            >
              <FaGithub />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
