import { Link } from 'react-router-dom';
import './Resume.css';

function Resume() {
  return (
    <div className="container">
      <section className="resume-section scroll-m-[var(--space-l)] mt-[var(--space-l)]">
        <h2 className="resume-main-heading">Samuel Adu</h2>
        <Link to="mailto:samueladu.dev@gmail.com" className="resume-link">
          samueladu.dev@gmail.com
        </Link>
        <p className="resume-text summary">
          Experienced frontend developer specialising in ReactJS. I have a
          strong foundation in HTML, CSS and JavaScript, and I’m skilled at
          building aesthetically pleasing and functionally robust user-centric
          web applications.
        </p>
      </section>

      <section className="resume-section">
        <h3 className="resume-heading">tech stack</h3>
        <div className="row">
          <div className="col">
            <p className="resume-sub-heading skill-heading">
              Programming Languages
            </p>
            <ul className="skill-list">
              <li className="skill-list-item">HTML</li>
              <li className="skill-list-item">CSS</li>
              <li className="skill-list-item">JavaScript</li>
              <li className="skill-list-item">TypeScript</li>
            </ul>
          </div>
          <div className="col">
            <p className="resume-sub-heading skill-heading">
              Libraries & Frameworks
            </p>
            <ul className="skill-list">
              <li className="skill-list-item">ReactJS</li>
              <li className="skill-list-item">React Router</li>
              <li className="skill-list-item">Redux</li>
              <li className="skill-list-item">NextJS</li>
            </ul>
          </div>
          <div className="col">
            <p className="resume-sub-heading skill-heading">
              Tools & Platforms
            </p>
            <ul className="skill-list">
              <li className="skill-list-item">Figma</li>
              <li className="skill-list-item">Vercel</li>
              <li className="skill-list-item">Git</li>
              <li className="skill-list-item">GitHub</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="resume-heading">EDUCATION</h3>
        <div className="row">
          <p className="resume-sub-heading col">
            Federal University of Technology Akure
          </p>
          <p className="lead col">Bachelor of Technology in Statistics</p>
          <p className="date col">2010 - 2016</p>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="resume-heading">EXPERIENCE</h3>

        <article>
          <div className="row">
            <p className="resume-sub-heading col">Frontend Developer</p>
            <p className="lead col">Orda Africa, Remote</p>
            <p className="date col">Dec 2022 - Present</p>
          </div>
          <ul className="resume-list">
            <li className="resume-list-item">
              Translated design wireframes to actual code that produced visual
              elements of the application, while collaborating with backend
              developers for seamless integration
            </li>
            <li className="resume-list-item">
              Developed and maintained frontend for web apps, emphasising
              performance and cross-browser compatibility
            </li>
            <li className="resume-list-item">
              Implemented the Mobile First approach in the redesign of existing
              websites, resulting in a significant improvement in mobile
              responsiveness and user engagement metrics
            </li>
            <li className="resume-list-item">
              Collaborated with backend developers to seamlessly integrate UI
              components with APIs and databases
            </li>
            <li className="resume-list-item">
              Implemented the BEM methodology to create scalable and
              maintainable CSS architecture
            </li>
            <li>
              Wrote functional requirement documents and guides for seamless
              understanding of projects
            </li>
            <li>
              Engage in constructive code reviews and share knowledge with the
              team.
            </li>
          </ul>
        </article>

        <article>
          <div className="row">
            <p className="resume-sub-heading col">Web Developer</p>
            <p className="lead col">Alpine Green Technology, Lagos</p>
            <p className="date col">Sep 2021 - Dec 2022</p>
          </div>
          <ul className="resume-list">
            <li className="resume-list-item">
              Develop and maintain front-end for web and mobile apps,
              collaborating with back-end developers for seamless integration.
            </li>
            <li className="resume-list-item">
              Developed responsive and user-friendly web applications using
              HTML, CSS, and JavaScript.
            </li>
            <li className="resume-list-item">
              Actively participate in development processes, including planning,
              reviews, and continuous improvement cycles.
            </li>
            <li className="resume-list-item">
              Conducted thorough testing and debugging using Chrome DevTools and
              other browser developer tools.
            </li>
            <li className="resume-list-item">
              Implemented version control using Git and GitHub for efficient
              collaboration and code management.
            </li>
            <li className="resume-list-item">
              Implemented responsive web design principles and followed a
              mobile-first approach to ensure compatibility across various
              devices.
            </li>
            <li className="resume-list-item">
              Ensured accessibility compliance by adhering to WCAG standards and
              implementing ARIA attributes.
            </li>
            <li className="resume-list-item">
              Documented technical specifications, project requirements, and
              codebase for future reference and team collaboration.
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Resume;
