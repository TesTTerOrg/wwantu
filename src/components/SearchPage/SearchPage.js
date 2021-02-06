import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const fetchData = async () => {
    return await fetch(`https://www.omdbapi.com/?s=${search}&apikey=4b4ab6ac`)
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (search) {
      fetchData();
    }
  }, [search]);

  useEffect(() => {
    const saveFavourites = JSON.parse(localStorage.getItem("Testter"));
    if (saveFavourites) {
      setFavourites([...saveFavourites]);
    }
  }, []);

  const saveLocalStorage = (data) => {
    localStorage.setItem("Testter", JSON.stringify(data));
  };

  const addFavourites = (data) => {
    const favouriteList = [...favourites, data];
    setFavourites(favouriteList);
    saveLocalStorage(favouriteList);
  };

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <MovieList
        movieList={movieList}
        favourites={addFavourites}
        favouritesList={favourites}
      />
    </>
  );
};

export default SearchPage;
