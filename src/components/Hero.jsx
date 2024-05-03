/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import displayPhoto from '../assets/images/display-photo.jpg';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="">
      <div className="container">
        <div className="hero-section">
          <div className="hero-main">
            <h1 className="hero-heading">
              I build aesthetically pleasing and functionally robust
              user-centric applications
            </h1>

            <div className="hero-cta">
              <Link to="#work" className="btn btn--primary">
                go to projects
              </Link>
              <Link to="/resume" className="btn btn--secondary">
                View my resumé
              </Link>
            </div>
          </div>

          <img
            src={displayPhoto}
            alt="me sitting at my desk"
            className="hero-img sm:order-1 hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
