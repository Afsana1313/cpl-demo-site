import React from "react";
import LoginCardleft from "./LoginCardleft";
import CardRight from "./CardRight";
function Modal() {
  return (
    <div className="modal-container">
      <div className="login-card-wrapper">
        <LoginCardleft />
        <CardRight />
      </div>
    </div>
  );
}

export default Modal;
