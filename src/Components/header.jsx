import React from "react";
import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="logo" width="70" height="50" />
        <h1>Naikal Notes</h1>
      </div>
    </>
  );
};

export default Header;
