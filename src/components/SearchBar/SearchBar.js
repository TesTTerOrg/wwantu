import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center my-3">
        <h1>Buscador de Peliculas</h1>
      </div>
      <div className="d-flex justify-content-center">
        <input
          type="search"
          className="form-control mr-sm-2"
          value={searchValue}
          placeholder={"Buscar Pelicula"}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-outline-success my-sm-0"
          onClick={() => onSearch(searchValue)}
        >
          &#x1f50d;
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
