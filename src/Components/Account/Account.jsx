import { Link } from "react-router-dom";
import "./account.css";

export function Account({
  buttonText = "View transactions",
  linkPath = "/transaction",
  accountTitle = "Argent Bank Checking (x8349)",
  accountAmount = "$2,082.79",
  accountDescription = "Available Balance",
}) {
  return (
    <div className="account">
      <div className="accountContent">
        <h3 className="accountTitle">{accountTitle}</h3>
        <p className="accountAmount">{accountAmount}</p>
        <p className="accountDescription">{accountDescription}</p>
      </div>
      <div className="accountCta">
        <Link
          to={linkPath}
          className="accountBtn"
          state={{
            accountTitle: accountTitle,
            accountAmount: accountAmount,
            accountDescription: accountDescription,
          }}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
