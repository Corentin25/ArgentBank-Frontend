import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./signIn.css";

//REDUX
import { useDispatch } from "react-redux";
import { setLogin } from "../../Redux/authSlice";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Nom d'utilisateur ou mot de passe incorrect");
      }

      const data = await response.json();
      const token = data.body.token;

      dispatch(setLogin(token));
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="logModal">
      <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
      <h2 className="titleH2">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="username-password">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="username-password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <button type="submit" className="summitBtn">
          Sign In
        </button>
      </form>
    </div>
  );
}
