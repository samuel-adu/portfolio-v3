import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icons/favicon-32x32.png';
import { FaBars, FaXmark } from 'react-icons/fa6';
import '../styles/navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="">
            <img src={logo} alt="" width={35} height={35} />
          </Link>
          <Link to="/" className="ml-1 mr-auto lowercase font-semibold">
            SamuelAdu
          </Link>

          <ul className={`${open ? 'nav-list-open' : 'nav-list'}`}>
            <a href="#projects" rel="noopener noreferrer" className="nav-link">
              Work
            </a>
            <NavLink
              to="/resume"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Resumé
            </NavLink>
            <NavLink
              to="mailto:samueladu.dev@gmail.com"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Contact
            </NavLink>
          </ul>

          <button
            className="sm:hidden nav-btn"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
