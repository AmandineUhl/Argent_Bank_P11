import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Login/LoginAction";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.login.error);
  const navigate = useNavigate();

  const rememberedUsername = localStorage.getItem("rememberedUsername") || "";
  const rememberedPassword = localStorage.getItem("rememberedPassword") || "";
  
  const [username, setUsername] = useState(rememberedUsername);
  const [password, setPassword] = useState(rememberedPassword);
  const [rememberMe, setRememberMe] = useState(rememberedUsername ? true : false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const action = await dispatch(login({ email: username, password }));
      const token = action.payload;

      if (token) {
        if (rememberMe) {
          localStorage.setItem("rememberedUsername", username);
          localStorage.setItem("rememberedPassword", password);
        } else {
          localStorage.removeItem("rememberedUsername");
          localStorage.removeItem("rememberedPassword");
        }
        localStorage.setItem("token", token);
        navigate("/user");
      } else {
        console.error("Token not found in action payload.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
