import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="container">
      {/* LEFT SIDE */}
      <div className="left">
        <img src="/ohc.png" alt="Healthcare" className="left-img" />
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="login-box">
          <h2>Sign in to OHC</h2>
          <p>Sign in to continue to the OHC platform</p>

          <form>
            <div className="input-group">
              <label>Username</label>
              <input type="text" placeholder="Enter Your Login ID" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter Your Password" />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button className="btn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;