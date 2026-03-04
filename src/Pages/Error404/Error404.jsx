import { Link } from "react-router-dom";
import "./error404.css";

export function Error404() {
  return (
    <main className="darkBg">
      <section className="ErrorBloc">
        <h2>Error 404</h2>
        <p>Sorry, the page you requested does not exist.</p>
        <Link to="/" className="backButton">
          Back to the home page
        </Link>
      </section>
    </main>
  );
}
