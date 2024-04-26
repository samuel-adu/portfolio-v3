/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import displayPhoto from '../assets/images/display-photo.jpg';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="">
      <div className="container">
        <div className="hero-section">
          <div className="sm:order-1 hero-image">
            <img
              src={displayPhoto}
              alt="me sitting at my desk"
              className="hero-img"
            />
          </div>

          <div className="hero-main">
            <h1 className="hero-heading">
              I'm Samuel Adu, a frontend developer.
            </h1>
            <p className="hero-callout-text">
              I build aesthetically pleasing and functionally robust
              user-centric applications
            </p>

            <div className="hero-cta">
              <Link to="#portfolio" className="btn btn--primary">
                go to projects
              </Link>
              <Link
                to="../resume.pdf"
                target="_blank"
                className="btn btn--secondary"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
