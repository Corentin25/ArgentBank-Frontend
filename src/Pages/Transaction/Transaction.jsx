import { useLocation, Navigate } from "react-router-dom";
import { Account } from "../../Components/Account/Account";
import "./transaction.css";

//REDUX
import { useSelector } from "react-redux";

export function Transaction() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const location = useLocation();
  const { accountTitle, accountAmount, accountDescription } =
    location.state || {};

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <main className="darkBg">
      <section className="tranSections">
        <h2 className="sr-only">transaction history</h2>
        <Account
          buttonText="Back to user page"
          linkPath="/profile"
          accountTitle={accountTitle || "Argent Bank Checking"}
          accountAmount={accountAmount || "$0"}
          accountDescription={accountDescription || "Available Balance"}
        />
      </section>
      <section className="tranSections">
        <p className="soon">
          Coming soon: Discover all the transactions made on your account.
        </p>
      </section>
    </main>
  );
}
