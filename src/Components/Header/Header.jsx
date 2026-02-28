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
        </Link>
        <NavLink to="/login" className="user">
          <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
          <p className="userLog">Sign In</p>
        </NavLink>
      </nav>
    </header>
  );
}