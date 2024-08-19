// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaBars, FaXmark } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import './Navbar.css';

function Header() {
  // const [open, setOpen] = useState(false);

  // const activeStyle = {
  //   color: 'var(--text2)',
  //   fontWeight: '700',
  // };

  return (
    <div className="navbar">
      <div className="container">
        <nav className="nav">
          <div className="logo-div">
            <Link
              to="/"
              className="mr-auto text-xl lowercase font-bold flex items-center gap-1"
            >
              SamuelAdu
            </Link>
          </div>

          <ul className="navbar__social-links">
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
        </nav>
      </div>
    </div>
  );
}

export default Header;
