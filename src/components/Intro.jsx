/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './Intro.css';
// import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaFileAlt } from 'react-icons/fa';
import CV from '../assets/samuel-adu-cv.pdf';
import displayPhoto from '../assets/display-photo.jpg';

function Intro() {
  return (
    <section id="home" className="intro-section">
      <div className="container">
        <div className="hero-container">
          <div className="intro-image">
            <div className="image-wrapper">
              <img
                src={displayPhoto}
                alt="me sitting at my desk"
                className="sm:order-1 hero-image"
              />
            </div>
          </div>

          <div className="intro-main">
            <p className="outline-text">frontend developer</p>
            <h1 className="hero-heading uppercase">samuel adu</h1>
            <p className="section-text">
              Motivated and detail-oriented Front End Developer with 2 plus
              years of experience in designing and implementing responsive and
              visually appealing web applications.
            </p>

            <div className="flex flex-wrap gap-2 items-center justify-center lg:justify-start">
              <a
                href="mailto:samueladu.dev@gmail.com"
                className="btn btn--primary"
              >
                Contact Me
              </a>

              <Link
                to={CV}
                target="_blank"
                download
                className="btn btn--secondary"
              >
                <FaFileAlt /> Download CV
              </Link>

              {/* <div className="flex gap-2">
                <Link
                  to="https://www.linkedin.com/in/samuel-oa/"
                  target="_blank"
                  className="btn btn--tetiary"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  to="https://github.com/samuel-adu"
                  target="_blank"
                  className="btn btn--tetiary"
                >
                  <FaGithub />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
