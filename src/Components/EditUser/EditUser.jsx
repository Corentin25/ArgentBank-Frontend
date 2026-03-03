import "./editUser.css";

export function EditUser() {
  return (
    <div className="editModal">
      <p className="editTitle">Edit user info</p>
      <form>
        <div className="fieldGroup">
          <label htmlFor="username">User name</label>
          <input type="text" id="username" />
        </div>
        <div className="fieldGroup">
          <label htmlFor="firstname">First name</label>
          <input type="text" id="firstname" />
        </div>
        <div className="fieldGroup">
          <label htmlFor="lastname">Last name</label>
          <input type="text" id="lastname" />
        </div>
        <div className="buttonGroup">
          <button className="saveCancelBtn">Save</button>
          <button className="saveCancelBtn">Cancel</button>
        </div>
      </form>
    </div>
  );
}
