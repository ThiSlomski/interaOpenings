const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
    routes: openingsRoutes,
} = require("./openings/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/openings", openingsRoutes);

module.exports = app;