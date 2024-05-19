import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

function Projects() {
  return (
    <section
      id="projects"
      className="project-section scroll-m-[var(--spacing-l)]"
    >
      <h2 className="section-heading project-section-heading">Projects</h2>

      <div className="project-container">
        {projects.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectCard project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
