import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data';
import './portfolio.css';

function Portfolio() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="header">
        <h2 className="heading">My Projects</h2>
        <p>
          Here are some of my recent projects. Each one was built with a focus
          on user experience and performance.
        </p>
      </div>

      <div className="portfolio">
        {projects.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectCard project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
