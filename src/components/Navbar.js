import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="top-nav">
      <div className="nav-logo"> Logo </div>

      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Works
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Privacy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
