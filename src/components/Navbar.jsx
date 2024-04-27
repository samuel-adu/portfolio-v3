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
          <span className="ml-1 mr-auto uppercase font-semibold">
            SamuelAdu
          </span>

          <nav className="nav">
            <NavLink
              to="#projects"
              rel="noopener noreferrer"
              className="nav-link btn btn--secondary"
            >
              Work
            </NavLink>
            <NavLink
              to="/resume"
              rel="noopener noreferrer"
              className="nav-link btn btn--secondary"
            >
              Resumé
            </NavLink>
            <NavLink
              to="mailto:samueladu.dev@gmail.com"
              rel="noopener noreferrer"
              className="nav-link btn btn--secondary"
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
