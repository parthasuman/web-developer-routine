import React from "react";
import logo from "../../images/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="header-title">
        <p>A Web Developer Routine</p>
      </div>
    </nav>
  );
};

export default Header;
