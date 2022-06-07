import React, { useState } from "react";
import { RegisterNewUser } from "../../util/function";
import logo from "../../images/logo.svg";
import { useDispatch } from "react-redux";
import { accept, deny, register } from "../../features/authCustomSlicer";
import { useNavigate } from "react-router-dom";
import Notification from "../../util/Notification";

function RegisterCard({ setLoginCard }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [pw, setPW] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const handleSubmit = async () => {
    const response = await RegisterNewUser(email, pw);
    if (response) {
      dispatch(register(email, phone, pw));
      setShow(true);
      setMessage("Access Granted");
      setTimeout(() => {
        setShow(false);
        setMessage("");
        navigate("/dashboard");
      }, 2000);
      //<Navigate to="/dashboard" replace={true} />;
    } else {
      dispatch(deny());
      setShow(true);
      setMessage("Access denied");
      setEmail("");
      setPW("");
      setTimeout(() => {
        setShow(false);
        setMessage("");
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
        <p className="login-card-description">Register your account</p>
        <form action="#!">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            aria-autocomplete="list"
            onChange={(e) => setPW(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Confirm Password"
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
        </form>
        <a href="#!" className="forgot-password-link">
          Forgot password?
        </a>
        <p className="login-card-footer-text">
          Don't have an account?{" "}
          <span className="text-reset" onClick={setLoginCard}>
            Login here
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

export default RegisterCard;
