/* eslint-disable react/prop-types */
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import './Project.css';

export default function Project({ project }) {
  return (
    <article className="project">
      <div>
        <img
          src={project.img}
          alt="project preview"
          className="project-image project-preview"
        />
      </div>

      <div className="project-details">
        <h3 className="project-name">
          <Link
            to={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="live-url link-btn"
          >
            {project.title}
            <span>
              <HiExternalLink />
            </span>
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

        {project.github && (
          <Link
            to={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link link-btn"
          >
            source code <FaGithub />
          </Link>
        )}

        {/* <div className="card-cta">
          <Link
            to={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary preview-btn"
          >
            preview site <FaExternalLinkAlt />
          </Link>
          {project.github && (
            <Link
              to={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-btn"
            >
              View source code
            </Link>
          )}
        </div> */}
      </div>
    </article>
  );
}
