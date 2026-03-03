import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./signIn.css";

import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <div className="logModal">
      <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
      <h2 className="titleH2">Sign In</h2>
      <form>
        <div className="username-password">
          <label htmlFor="username">User name</label>
          <input type="text" id="username" />
        </div>
        <div className="username-password">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* Enlever <Link> pour gérer la soumission du bouton une fois le Token reçu */}
        <Link to="/profile">
          <button className="summitBtn">Sign In</button>
        </Link>
        {/* ------------------------------------------------------------------------ */}
      </form>
    </div>
  );
}
