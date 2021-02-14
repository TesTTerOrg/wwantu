import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-block">
        <Link to="/testter" className="navbar-brand mr-5">
          Buscador de Peliculas
        </Link>
        <Link to="/favoritos" className="btn btn-outline-info ml-3">
          Favoritos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
