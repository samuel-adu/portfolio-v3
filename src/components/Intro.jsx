/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import '../styles/intro.css';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa6';
import CV from '../assets/samuel-adu-cv.pdf';

function Intro() {
  return (
    <section id="home" className="intro-section">
      <div className="hero-container">
        <div className="hero-main">
          <h1 className="hero-heading">
            I build aesthetically pleasing and functionally robust user-centric
            applications
          </h1>

          <div className="hero-cta">
            <a href="#contact" className="btn btn--primary">
              Contact Me
            </a>
            <Link
              to={CV}
              target="_blank"
              download
              className="btn btn--secondary"
            >
              Download CV <FaDownload />
            </Link>
            <div>
              <Link
                to="https://github.com/samuel-adu"
                target="_blank"
                className="btn btn--tetiary mr-2"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://www.linkedin.com/in/samuel-oa/"
                target="_blank"
                className="btn btn--tetiary"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        <div className="avatar">
          <img
            src="https://res.cloudinary.com/dnke0ggdz/image/upload/v1715070083/profile-picture.jpg"
            alt="me sitting at my desk"
            className="sm:order-1 hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
