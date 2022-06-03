import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex text-2xl font-medium items-center">
      <img className="mr-3" src={logo} alt="" /> Dear Grocery
    </Link>
  );
};

export default Logo;
