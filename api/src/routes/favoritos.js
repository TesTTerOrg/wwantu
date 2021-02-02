const server = require("express").Router();
const { Favoritos } = require("../models/index.js");

server.post("/new", async (req, res) => {
  const { pelicula } = req.body;
  const duplicateMovie = await Favoritos.findOne({
    where: {
      idfavmovie: pelicula.imdbID,
    },
  });
  if (duplicateMovie == null) {
    return await Favoritos.create({
      idfavmovie: pelicula.imdbID,
      favmovie: pelicula,
    }).then((data) => {
      return res.status(200).json(data);
    });
  } else {
    return res.sendStatus(404);
  }
});
server.delete("/del/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const isMovie = await Favoritos.findOne({
    where: {
      idfavmovie: id,
    },
  });
  if (isMovie !== null) {
    return await Favoritos.destroy({
      where: {
        idfavmovie: id,
      },
    }).then((result) => {
      console.log(isMovie.dataValues, "rsutl");
      return res.status(200).json(isMovie.dataValues);
    });
  } else {
    return res.sendStatus(404);
  }
});

server.get("/all", async (req, res) => {
  Favoritos.findAll().then((favs) => res.json(favs));
});

module.exports = server;
