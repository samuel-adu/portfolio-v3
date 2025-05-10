/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './hero.css';
import CV from '../assets/samuel-adu-cv.pdf';
import displayPhoto from '../assets/display-photo.jpg';
import { LuFile } from 'react-icons/lu';

function Hero() {
  return (
    <section className="hero-section hero">
      <div className="container">
        <div className="hero__container">
          <img
            src={displayPhoto}
            alt="me sitting at my desk"
            className="hero__image"
          />

          <div className="hero__main">
            <h1 className="main-heading">Hi, I'm Samuel Adu</h1>

            <p className="hero__text">
              Based in the UK, I'm a frontend developer passionate about
              building accessible, responsive, and performant web applications
              with modern technologies.
            </p>

            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary">
                View My Work
              </a>

              <Link to={CV} target="_blank" className="btn btn--secondary">
                <LuFile /> Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
