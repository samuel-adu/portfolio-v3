import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <small className="footer-text">
            &copy; {new Date().getFullYear()} samuel adu
          </small>

          <ul className="footer-links">
            <li>
              <Link
                to="https://www.frontendmentor.io/profile/samuel-adu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <SiFrontendmentor />
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/samuel-adu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/samuel-oa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
