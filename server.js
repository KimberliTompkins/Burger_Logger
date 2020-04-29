const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;
 
const app = express();

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });