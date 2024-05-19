import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icons/favicon-32x32.png';
import { FaBars, FaXmark } from 'react-icons/fa6';
import '../styles/header.css';

function Header() {
  const [open, setOpen] = useState(false);

  const activeStyle = {
    color: 'var(--clr-primary-400)',
    fontWeight: '800',
  };

  return (
    <header className="container">
      <nav className="nav">
        <div className="logo-div">
          <Link
            to="/"
            className="mr-auto text-teal-500 lowercase font-semibold flex items-center gap-1"
          >
            <img src={logo} alt="" width={25} height={25} />
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
    </header>
  );
}

export default Header;
