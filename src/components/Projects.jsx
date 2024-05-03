import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div id="work" className="project-section">
      <div className="container">
        <div className="section-banner">
          <h2 className="project-section-heading">Projects</h2>
          <Link
            to="mailto:samueladu.dev@gmail.com"
            className="btn btn--secondary"
          >
            contact me
          </Link>
        </div>

        <div className="project-container">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
