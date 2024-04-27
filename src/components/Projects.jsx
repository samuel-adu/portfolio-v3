import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <main id="projects" className="project-section">
      <div className="container">
        <div className="section-banner">
          <h2 className="section-heading project-section-heading">Projects</h2>
          <Link
            to="mailto:samueladu.dev@gmail.com"
            className="btn btn--primary"
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
    </main>
  );
}

export default Projects;
