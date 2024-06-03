/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { getProjectImage } from '../utils/getImageUrl';
import '../styles/project.css';

export default function Project({ project }) {
  return (
    <article className="project">
      <div className="project-preview">
        <img
          src={getProjectImage(project.img)}
          alt="project preview"
          className="project-image"
        />
      </div>

      <div className="project-details">
        <h3 className="project-name">{project.title}</h3>

        <p className="project-desc">{project.description}</p>

        <div className="card-cta">
          <Link
            to={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            Source Code
          </Link>
          <Link
            to={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </article>
  );
}
