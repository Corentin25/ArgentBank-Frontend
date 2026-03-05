import { useState, useEffect } from "react";
import "./editUser.css";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../Redux/authSlice";

export function EditUser({ setIsEditing }) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    if (user) {
      setNewUserName(user.userName || "");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUserName }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(setProfile(data.body));
        setIsEditing(false);
      } else {
        console.error("Error updating profile");
      }
    } catch (error) {
      console.error("Network error :", error);
    }
  };

  return (
    <div className="editModal">
      <p className="editTitle">Edit user info</p>
      <form onSubmit={handleSubmit}>
        <div className="fieldGroup">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div className="fieldGroup">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            value={user?.firstName || ""}
            disabled
          />
        </div>
        <div className="fieldGroup">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            value={user?.lastName || ""}
            disabled
          />
        </div>
        <div className="buttonGroup">
          <button className="saveCancelBtn">Save</button>
          <button
            type="button"
            className="saveCancelBtn"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
