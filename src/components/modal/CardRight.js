import React, { useState } from "react";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";

function CardRight() {
  const [loginCard, setLoginCard] = useState(1);

  return (
    <>
      {" "}
      {loginCard ? (
        <LoginCard setLoginCard={() => setLoginCard(0)} />
      ) : (
        <RegisterCard setLoginCard={() => setLoginCard(1)} />
      )}
    </>
  );
}

export default CardRight;
