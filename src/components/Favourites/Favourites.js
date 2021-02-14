import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const saveFavourites = JSON.parse(localStorage.getItem("Testter"));
    if (saveFavourites) {
      setFavourites([...saveFavourites]);
    }
  }, []);

  const saveLocalStorage = (data) => {
    localStorage.setItem("Testter", JSON.stringify(data));
  };

  const removeFavourites = (movie) => {
    const favouriteList = favourites.filter(
      (data) => data.imdbID !== movie.imdbID
    );
    setFavourites(favouriteList);
    saveLocalStorage(favouriteList);
  };

  return (
    <>
      <h3 className="d-flex justify-content-center mt-5 h1">Favoritos</h3>
      {favourites.map((data, key) => {
        return (
          <div key={key} className="cmt-4 cardContainer">
            <Card className="cardStyle mt-4">
              <CardMedia
                className="cardImageHeight"
                component="img"
                alt="Poster Pelicula"
                height="400"
                image={data.Poster}
                title="Poster Pelicula"
              />
              <CardContent>
                <h5>{data.Title}</h5>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeFavourites(data);
                  }}
                >
                  Remover
                </button>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Favourites;
