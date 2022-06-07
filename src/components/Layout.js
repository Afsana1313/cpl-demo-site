import React from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../features/layoutSlicer";

function Layout({ children }) {
  const user = useSelector((state) => state.auth.userEmailID);
  const dispatch = useDispatch();
  const handleClickLogin = () => {
    dispatch(openLoginModal());
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
                <li onClick={handleClickLogin}>Login/Register</li>
                {user !== "" && <span>Hi {`${user}`}</span>}
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
