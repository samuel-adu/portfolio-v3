import { Link } from 'react-router-dom';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <small className="footer-text">
            &copy; {new Date().getFullYear()} samuel adu
          </small>

          <ul className="footer__list">
            <li>
              <Link
                to="https://github.com/samuel-adu"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <LuGithub />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/samuel-oa"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <LuLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
