import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo, updateUserUsername } from "../Redux/User/UserActions";

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfo(token));
    }
  }, [dispatch, token]);

  const [newUsername, setNewUsername] = useState(user.username);
  useEffect(() => {
    if (user.username) {
      setNewUsername(user.username);
    }
  }, [user.username]);
  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(updateUserUsername(newUsername));
      await dispatch(fetchUserInfo(token));
      console.log("Username updated successfully:", response);
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };

  const handleCancel = () => {
    setNewUsername(user.username);
  };

  if (!token) {
    return <h2>Please log in to view this page.</h2>; 
  }

  return (
    <div>
      <div className="header">
        <h2>Edit user info</h2>
        <form onSubmit={handleSubmit}>
          <div className="input_edit">
            <label>User Name:</label>
            <input
              type="text"
              value={newUsername}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input_edit">
            <label>First Name:</label>
            <input type="text" value={user.firstname} disabled />
          </div>
          <div className="input_edit">
            <label>Last Name:</label>
            <input type="text" value={user.lastname} disabled />
          </div>
          <div className="buttons">
            <button className="edit_name_button" type="submit">
              Save
            </button>
            <button
              className="edit_name_button"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
};

export default User;
