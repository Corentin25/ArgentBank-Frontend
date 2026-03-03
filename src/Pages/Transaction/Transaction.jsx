import { Account } from "../../Components/Account/Account";
import "./transaction.css";

export function Transaction() {
  return (
    <main className="darkBg">
      <section className="tranSections">
        <h2 className="sr-only">transaction history</h2>
        <Account buttonText="Back to user page" linkPath="/profile" />
      </section>
      <section className="tranSections">
        <p className="soon">
          Coming soon: Discover all the transactions made on your account.
        </p>
      </section>
    </main>
  );
}
