import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icons/favicon-32x32.png';
import { FaBars, FaXmark } from 'react-icons/fa6';
import '../styles/navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const activeStyle = {
    color: 'var(--clr-primary)',
    fontWeight: '800',
  };

  return (
    <header>
      <div className="container">
        <nav className="nav">
          <Link
            to="/"
            className="mr-auto lowercase font-semibold flex items-center gap-1"
          >
            <img src={logo} alt="" width={35} height={35} />
            SamuelAdu
          </Link>

          <ul className={`${open ? 'nav-list-open' : 'nav-list'}`}>
            <a
              href="/#work"
              rel="noopener noreferrer"
              className="nav-link"
              // style={({ isActive }) => (isActive ? activeStyle : null)}
              onClick={() => setOpen(false)}
            >
              Work
            </a>
            <NavLink
              to="/resume"
              rel="noopener noreferrer"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              onClick={() => setOpen(false)}
            >
              Resumé
            </NavLink>
            <NavLink
              to="mailto:samueladu.dev@gmail.com"
              rel="noopener noreferrer"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              onClick={() => setOpen(false)}
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
