import { Account } from "../../Components/Account/Account";
import { EditUser } from "../../Components/EditUser/EditUser";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./user.css";

//REDUX
import { useSelector } from "react-redux";

export function User() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const [isEditing, setIsEditing] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="darkBg">
      <section className="userSections">
        <h2>
          Welcome back
          <br />
          {user
            ? user.userName || `${user.firstName} ${user.lastName}`
            : "Loading..."}{" "}
          !
        </h2>
        <button className="editNameBtn" onClick={() => setIsEditing(true)}>
          Edit Name
        </button>
      </section>
      {isEditing && <EditUser setIsEditing={setIsEditing} />}
      <section className="userSections">
        <Account />
        <Account
          accountTitle="Argent Bank Savings (x6712)"
          accountAmount="$10,928.42"
        />
        <Account
          accountTitle="Argent Bank Credit Card (x8349)"
          accountAmount="$184.30"
          accountDescription="Current Balance"
        />
      </section>
    </main>
  );
}
