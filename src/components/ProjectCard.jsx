/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
// import { FaGithub, FaUpRightFromSquare } from "react-icons/fa6";
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

      <h3 className="card-heading">
        <Link to={project.liveUrl} target="_blank">
          {project.title}
        </Link>
      </h3>

      <p className="card-text">{project.description}</p>

      <div className="card-cta">
        <Link
          to={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="card-btn btn btn--secondary"
        >
          view code
          {/* <FaGithub className="fa-lg ml-1 inline" /> */}
        </Link>

        <Link
          to={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-btn btn btn--secondary"
        >
          view project
          {/* <FaUpRightFromSquare className="fa-lg ml-1 inline" /> */}
        </Link>
      </div>
    </article>
  );
}
