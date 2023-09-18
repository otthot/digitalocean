const express = require("express");
const Router = express.Router()


Router('/', (req, res) =>(

    res.send("Hello!")

))


module.exports = Router;