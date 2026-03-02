import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Logo-ArgentBank.webp";
import "./header.css";

export function Header() {
  return (
    <header>
      <nav className="headerBar">
        <Link to="/">
          <img src={logo} alt="Logo ArgentBank" className="logoHeader" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <NavLink to="/login" className="user">
          <FontAwesomeIcon icon={faUserCircle} />
          <p>Sign In</p>
        </NavLink>
      </nav>
    </header>
  );
}