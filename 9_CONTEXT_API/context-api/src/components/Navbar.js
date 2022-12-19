import "./Navbar.css";
import { NavLink } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      <NavLink to="/products">Produtos</NavLink>
    </nav>
  );
};

export default Navbar;
