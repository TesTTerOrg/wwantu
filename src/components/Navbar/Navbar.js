import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-block">
        <Link to="/" className="navbar-brand mr-5">
          Buscador de Peliculas
        </Link>
        <a class="navbar-brand" href="/">
          Home
        </a>
        <Link to="/favoritos" className="btn btn-outline-info ml-3">
          Favoritos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
