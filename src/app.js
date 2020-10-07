const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

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

app.get("", (req, res)=>{
    res.render("index");
});

app.get("/results", (req, res)=>{
    res.render("results");
});

app.get("/favorites", (req, res)=>{
    res.render("favorites");
});

app.get("*", (req,res)=>{
    res.render("404");
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});