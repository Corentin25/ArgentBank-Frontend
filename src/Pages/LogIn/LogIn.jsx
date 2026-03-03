import { SignIn } from "../../Components/SignIn/SignIn";
import "./logIn.css";

export function LogIn() {
  return (
    <main className="darkBg">
      <section className="logSection">
        <SignIn />
      </section>
    </main>
  );
}
