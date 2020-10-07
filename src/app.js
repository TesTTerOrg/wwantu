let data = [{
        "title": "test movie",
        "year": "2020"
    },
    {
        "imdbID": "123123",
        "title": "aveng",
        "year": "2020",
        "imageURL": "url",
    }
]

require("./db/mongoose");
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const omdbapi = require("./utils/omdbapi.js");

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

app.post("/movies", (req, res) => {
    const movie = new Movie(req.body);

    movie.save().then(() => {
        res.send(movie);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.get("/movies", (req, res) => {
    Movie.find({}).then((movies) => {
        res.send(movies);
    }).catch((e) => {
        res.status(500).send();
    });
});

app.get("", (req, res) => {
    res.render("index");
});

app.get("/search", (req, res) => {
    if (!req.query.title) {
        return res.send({
            error: "Debes ingresar el nombre de una película."
        });
    }
    omdbapi(req.query.title, (error, results) => {
        if (error) {
            return res.send({
                error
            });
        }
        res.send({
            search: req.query.title,
            results: results
        });
    });
});

app.get("/results", (req, res) => {
    if (!req.query.title) {
        return res.send({
            error: "Debes ingresar el nombre de una película."
        });
    }
    omdbapi(req.query.title, (error, results) => {
        if (error) {
            return res.send({
                error
            });
        }

        res.render("results", {
            search: req.query.title,
            results: results
        });
    });
});

app.get("/favorites", (req, res) => {
    res.render("favorites");
});

app.get("*", (req, res) => {
    res.render("404");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});