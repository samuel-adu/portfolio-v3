/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { getProjectImage } from '../utils/getImageUrl';
import '../styles/project.css';

export default function Project({ project }) {
  return (
    <>
      <article className="project-card">
        <img
          src={getProjectImage(project.img)}
          alt="project preview"
          className="card-img"
        />

        <h3 className="card-heading">{project.title}</h3>

        <p className="card-text">{project.description}</p>

        <div className="card-cta">
          <Link
            to={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn view-code-btn"
          >
            View Code
          </Link>
          <Link
            to={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn preview-btn"
          >
            Preview Site
          </Link>
        </div>
      </article>
    </>
  );
}
