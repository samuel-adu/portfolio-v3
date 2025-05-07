import React from 'react';
import Project from './Project';
import { projects } from '../data';

function Portfolio() {
  return (
    <section
      id="projects"
      className="portfolio-section scroll-m-[var(--space-l)]"
    >
      <h2 className="section-heading">My Projects</h2>
      {/* <p>
        Here are some of my recent projects. Each one was built with a focus on
        user experience and performance.
      </p> */}

      <div className="portfolio">
        {projects.map((project) => (
          <React.Fragment key={project.title}>
            <Project project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
