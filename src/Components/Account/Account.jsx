import { Link } from "react-router-dom";
import "./account.css";

export function Account({
  buttonText = "View transactions",
  linkPath = "/transaction",
}) {
  return (
    <div className="account">
      <div className="accountContent">
        {/* Maper et remplacer <h3> et <p> une fois appel API en place*/}
        <h3 className="accountTitle">Argent Bank Checking (x8349)</h3>
        <p className="accountAmount">$2,082.79</p>
        <p className="accountDescription">Available Balance</p>
        {/* --------------------------------------------------------- */}
      </div>
      <div className="accountCta">
        <Link to={linkPath}>
          <button className="viewTransBtn">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
}
