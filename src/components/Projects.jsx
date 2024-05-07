import ProjectCard from './ProjectCard';
import { data } from '../data';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section id="work" className="project-section">
      <div className="container">
        <div className="section-banner">
          <h2 className="section-heading project-section-heading">Projects</h2>
          <Link
            to="mailto:samueladu.dev@gmail.com"
            className="btn btn--secondary"
          >
            contact me
          </Link>
        </div>

        <div className="project-container">
          {data.projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
