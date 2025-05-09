/* eslint-disable react/prop-types */

import { LuGithub, LuExternalLink } from 'react-icons/lu';

import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card__image-container">
        <img src={project.img} alt={project.title} className="card__image" />
      </div>

      <div className="card__header">
        <h3 className="card__title">
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

        <p className="card__description">{project.description}</p>
      </div>

      <div className="card__content">
        {project.tools.map((tool) => (
          <span key={tool} className="tag">
            {tool}
          </span>
        ))}
      </div>

      <div className="card__footer">
        <Link
          title="preview site"
          to={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card__link btn btn--small btn--secondary "
        >
          <LuExternalLink />
          preview
        </Link>

        {project.github && (
          <Link
            title="view source code"
            to={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card__link btn btn--small btn--secondary "
          >
            <LuGithub />
            source code
          </Link>
        )}
      </div>
    </article>
  );
}
