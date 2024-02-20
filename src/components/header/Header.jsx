import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img id="logo" src={logo} alt="Logo" />
      </div>
      <div className="pages">
        <a href="#">ABOUT</a>
        <a href="#">OUR WORK</a>
        <a href="#">INSIGHT</a>
        <a href="#">SHOP</a>
      </div>
      <div className="contactUs">CONTACT US</div>
    </div>
  );
};

export default Header;
