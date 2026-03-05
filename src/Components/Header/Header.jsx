import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Logo-ArgentBank.webp";
import "./header.css";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../Redux/authSlice";

export function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
  };

  return (
    <header>
      <nav className="headerBar">
        <Link to="/">
          <img src={logo} alt="Logo ArgentBank" className="logoHeader" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isAuthenticated ? (
          <div className="userNav">
            <NavLink to="/profile" className="user">
              <FontAwesomeIcon icon={faUserCircle} />
              <p>{user ? user.firstName : "Profile"}</p>
            </NavLink>
            <button onClick={handleLogout} className="logoutBtn">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <p>Sign Out</p>
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="user">
            <FontAwesomeIcon icon={faUserCircle} />
            <p>Sign In</p>
          </NavLink>
        )}
      </nav>
    </header>
  );
}
