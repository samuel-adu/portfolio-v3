import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';
import '../styles/navbar.css';

function Header() {
  const [open, setOpen] = useState(false);

  const activeStyle = {
    color: 'var(--clr-primary-500)',
    fontWeight: '700',
  };

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

          <ul className={`${open ? 'nav-list-open' : 'nav-list'}`}>
            <li className="nav-item">
              <a
                href="/#projects"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#experience"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#contact"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                to="resume"
                className="nav-link"
                onClick={() => setOpen(false)}
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Resumé
              </NavLink>
            </li>
          </ul>

          <button
            className="sm:hidden nav-btn"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
