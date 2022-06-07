import React from "react";
import Modal from "./modal/Modal";
import { useSelector } from "react-redux";

function Front() {
  const modalOpen = useSelector((state) => state.layout.loginModalOpen);
  return <>{modalOpen && <Modal />}</>;
}

export default Front;
