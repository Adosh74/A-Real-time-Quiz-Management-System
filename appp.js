require("dotenv").config();
require('./db').connect();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const profRoutes = require('./Routes/profRoutes');

const app = express();
app.use(bodyParser.json());
app.use(corse({origin : "http://localhost:4200/"}));
app.use('prof',profRoutes);

app.get("/",(req,res) => {
    let data = "welcome prof.";
    res.send(data);
})
module.exports = app;