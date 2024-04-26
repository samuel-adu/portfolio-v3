import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icons/favicon-32x32.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link to="/" className="">
            <img src={logo} alt="" width={30} height={30} />
          </Link>
          <span className="mr-auto font-mono">thesamueladu</span>

          <nav className="nav">
            <NavLink
              to="https://github.com/samuel-adu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </NavLink>
            <NavLink
              to="https://www.frontendmentor.io/profile/samuel-adu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFrontendmentor className="text-2xl" />
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
    </header>
  );
}

export default Navbar;
