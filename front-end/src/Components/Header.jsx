import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeToken } from "../Redux/Login/LoginReducer";
import { useNavigate } from "react-router-dom";
import { fetchUserInfo } from "../Redux/User/UserActions";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeToken());
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfo(token));
    }
  }, [dispatch, token]);

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="../../argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {token ? (
        <div className="main-nav-item">
          <span>{username}</span>
          <Link to="/user">
          <i className="fa fa-user-circle"></i>
          </Link>
          <button onClick={handleSignOut}>
            <i className="fas fa-power-off"></i>
          </button>
        </div>
      ) : (
        <div className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <Link to="/login">
            <i className="fas fa-power-off"></i>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
