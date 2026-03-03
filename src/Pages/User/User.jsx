import { Account } from "../../Components/Account/Account";
import { EditUser } from "../../Components/EditUser/EditUser";
import "./user.css";

export function User() {
  return (
    <main className="darkBg">
      <section className="userSections">
        <h2>
          Welcome back
          <br />
          {/* Penser à mettre le nom renseigné par l'utilisateur ici */}
          Peter Parker !{/* ---------------------------------- */}
        </h2>
        <button className="editNameBtn">Edit Name</button>
      </section>
      {/* <EditUser /> */}
      <section className="userSections">
        {/* Remplacer les infos de Account par celles sur l'API */}
        <Account />
        {/* --------------------------------------------------- */}
      </section>
    </main>
  );
}
