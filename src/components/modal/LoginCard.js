import React, { useState } from "react";
import { CheckAuthorization } from "../../util/function";
import logo from "../../images/logo.svg";
import { useDispatch } from "react-redux";
import { accept, deny } from "../../features/authCustomSlicer";
import { useNavigate } from "react-router-dom";
import Notification from "../../util/Notification";

function LoginCard({ setLoginCard }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const handleSubmit = async () => {
    const response = await CheckAuthorization(email, pw);
    if (response) {
      dispatch(accept(email));
      setShow(true);
      setMessage("Access Granted");
      setTimeout(() => {
        setShow(false);
        setMessage("");
      }, 2000);
      //<Navigate to="/dashboard" replace={true} />;
      navigate("/dashboard");
    } else {
      dispatch(deny());
      setShow(true);
      setMessage("Access denied");

      setTimeout(() => {
        setShow(false);
        setMessage("");
        setEmail("");
        setPW("");
      }, 2000);
    }
  };
  return (
    <div className="login-card-right">
      {show && <Notification message={message} />}
      <div className="login-card-body">
        <div className="brand-wrapper">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <p className="login-card-description">Sign into your account</p>
        <form action="#!">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            className="form-control"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            value={pw}
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="***********"
            aria-autocomplete="list"
            onChange={(e) => setPW(e.target.value)}
          />

          <input
            onClick={handleSubmit}
            name="login"
            id="login"
            className="btn btn-block login-btn mb-4"
            type="button"
            value="Login"
          />

          <span
            style={{ color: "red", visibility: message ? "visible" : "hidden" }}
          >
            Incorrect UserId or Password
          </span>
        </form>
        <a href="#!" className="forgot-password-link">
          Forgot password?
        </a>
        <p className="login-card-footer-text">
          Don't have an account?{" "}
          <span className="text-reset" onClick={setLoginCard}>
            Register here
          </span>
        </p>
        <nav className="login-card-footer-nav">
          <a href="#!">Terms of use.</a>
          <a href="#!">Privacy policy</a>
        </nav>
      </div>
    </div>
  );
}

export default LoginCard;
