import React from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../features/layoutSlicer";
import { logout } from "../features/authCustomSlicer";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  let navigate = useNavigate();

  const user = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  console.log(user);
  const handleClickLogin = () => {
    dispatch(openLoginModal());
  };
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="layout-wrapper">
      <div className="header-content-wrapper">
        <div className="top-header"></div>
        <div className="bottom-header">
          <div className="logo-wrapper">logo</div>
          <div className="navbar-wrapper">
            <nav>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>
                  {user === "" ? (
                    <span onClick={handleClickLogin}>Login/Register</span>
                  ) : (
                    <span onClick={handleLogOut}>Logout</span>
                  )}
                </li>
                <li> {user !== "" && <span>Hi {`${user}`}</span>}</li>
              </ul>
            </nav>
          </div>
        </div>
        <main> {children}</main>
      </div>
    </div>
  );
}

export default Layout;
