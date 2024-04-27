import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-nav">
          <p className="uppercase">
            &copy; {new Date().getFullYear()} samuel adu
          </p>

          <nav className="nav">
            <NavLink
              to="https://www.frontendmentor.io/profile/samuel-adu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFrontendmentor className="text-2xl" />
            </NavLink>
            <NavLink
              to="https://github.com/samuel-adu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/samuel-oa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
