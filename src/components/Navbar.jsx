import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icons/favicon-32x32.png';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link to="/" className="">
            <img src={logo} alt="" width={35} height={35} />
          </Link>
          <Link to="/" className="ml-1 mr-auto lowercase font-semibold">
            SamuelAdu
          </Link>

          <nav className="nav">
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
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
