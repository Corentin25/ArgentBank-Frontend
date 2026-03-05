import { Account } from "../../Components/Account/Account";
import { EditUser } from "../../Components/EditUser/EditUser";
import { useEffect, useState } from "react";
import "./user.css";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../Redux/authSlice";

export function User() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const [isEditing, setIsEditing] = useState(false);

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
