import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Logo-ArgentBank.webp";
import "./header.css";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { setLogout, setProfile } from "../../Redux/authSlice";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const userProfile = async () => {
      if (!token) return;

      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          dispatch(setProfile(data.body));
        } else {
          console.error("Error retrieving profile");
        }
      } catch (error) {
        console.error("Network error :", error);
      }
    };
    userProfile();
  }, [dispatch, token]);

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
              <p>{user ? user.userName || `${user.firstName}` : "Profile"}</p>
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
