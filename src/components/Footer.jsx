import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer container">
      <small className="footer-text">
        &copy; {new Date().getFullYear()} samuel adu
      </small>

      <ul className="footer-links">
        <li>
          <Link
            to="https://www.frontendmentor.io/profile/samuel-adu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFrontendmentor className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/samuel-adu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/samuel-oa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
