import '../styles/resume.css';
import Hr from '../components/Hr';

function MyResume() {
  return (
    <div className="container resume-container">
      <div className="resume-section">
        <h2 className="resume-main-heading">Samuel Adu</h2>
        <p className="email">samueladu.dev@gmail.com</p>
        <p className="resume-text summary">
          Detail-oriented frontend developer focused on building aesthetically
          pleasing and functionally robust user-centric applications based on
          frontend best practices.
        </p>
      </div>

      <div className="resume-section">
        <h3 className="resume-heading">skills</h3>
        <Hr />
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
      </div>

      <div className="resume-section">
        <h3 className="resume-heading">EDUCATION</h3>
        <div className="row">
          <p className="resume-sub-heading col">
            Federal University of Technology Akure
          </p>
          <p className="lead col">B.Tech Statistics</p>
          <p className="date col">Oct 2010 - Sep 2016</p>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="resume-heading">EXPERIENCE</h3>
        <div>
          <div className="row">
            <p className="resume-sub-heading col">Data Administrator</p>
            <p className="lead col">E.ON UK, Solihull</p>
            <p className="date col">Dec 2023 - Present</p>
          </div>

          <ul className="resume-list">
            <li className="resume-list-item">
              Created visualisations, dashboards, and reports to present
              findings and communicate insights to stakeholders.
            </li>
            <li className="resume-list-item">
              Ensured data quality by implementing data validation processes and
              resolving inconsistencies.
            </li>
          </ul>
        </div>

        <div>
          <div className="row">
            <p className="resume-sub-heading col">Frontend Developer</p>
            <p className="lead col">Orda Africa, Lagos</p>
            <p className="date col">Dec 2022 - Nov 2023</p>
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
          </ul>
        </div>

        <div>
          <div className="row">
            <p className="resume-sub-heading col">Web Developer</p>
            <p className="lead col">Alpine Green Technology, Lagos</p>
            <p className="date col">Sep 2021 - Dec 2022</p>
          </div>
          <ul className="resume-list">
            <li className="resume-list-item">
              Translated UI designs from Figma into innovative, responsive user
              interfaces, while ensuring compatibility across devices
            </li>
            <li className="resume-list-item">
              Built maintainable and reusable react components
            </li>
            <li className="resume-list-item">
              Migrated multipage website to a single-page application using
              NextJS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyResume;
