require("./db/mongoose");
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const omdbapi = require("./utils/omdbapi");

//Models
const Movie = require("./models/movie");

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

//Paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

//Setup ejs and views
app.set("view engine", "ejs");
app.set("views", viewsPath);

//Static directory
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index");
});

app.get("/results", (req, res) => {
    if (!req.query.title) {
        return res.render("results", {
            error: "Debe ingresar el nombre de la película.",
            search: undefined,
            results: undefined,
            fail: false
        });
    }

    omdbapi(req.query.title, "", (error, results) => {
        if (error) {
            return res.render("results", {
                error: error,
                search: req.query.title,
                results: undefined,
                fail: false
            });
        }

        // results.map((r) => {
        //     Movie.findOne({
        //         imdbID: r.imdbID
        //     }, (error, movie) => {
        //         if (error) {
        //             return console.log(error);
        //         }
        //         if (movie) {
        //             r.added = true;
        //         }
        //     });
        // });

        res.render("results", {
            error: undefined,
            search: req.query.title,
            results: results,
            fail: false
        });
    });
});

app.get("/favorite", (req, res) => {
    if (!req.query.imdbID) {
        return res.status(500).send("Debe ingresar el ID de IMDB.");
    }

    Movie.findOne({
        imdbID: req.query.imdbID
    }, (error, movie) => {
        if (error) {
            return res.status(500).send();
        }
        if (movie) {
            res.status(600).send();
        } else {
            omdbapi("", req.query.imdbID, (error, results) => {
                if (error) {
                    return res.render("results", {
                        error: error,
                        search: req.query.title,
                        results: undefined,
                        fail: false
                    });
                }

                const movie = new Movie({
                    imdbID: results.imdbID,
                    title: results.Title,
                    year: results.Year,
                    imageURL: results.Poster
                });

                movie.save().then(() => {
                    res.redirect("back");
                }).catch((e) => {
                    res.status(500).send(e);
                });
            });
        }
    });
});

app.get("/remove", (req, res) => {
    if (!req.query.id) {
        return res.status(500).send("No se encontró un ID.");
    }
    Movie.deleteOne({
        _id: req.query.id
    }).then(() => {
        res.redirect("back");
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.get("/favorites", (req, res) => {
    Movie.find({}).then((movies) => {
        res.render("favorites", {
            movies
        });
    }).catch((e) => {
        res.status(500).send();
    });
});

app.get("*", (req, res) => {
    res.render("404");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});