const path = require("path");
const express = require("express");
const hbs = require("hbs");
const omdbapi = require("./utils/omdbapi.js");

const app = express();
const port = process.env.PORT || 3000;

//Paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars and views
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Static directory
app.use(express.static(publicDirectoryPath));

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
    res.render("results");
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