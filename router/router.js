const express = require("express");
const Router = express.Router()

const users =  {1 : {name : "John"}, 2 : {name : "Tim"}, 3 : {name : "Anton"}}


Router.get('/users', (req, res) =>(

    res.send(users)

))


module.exports = Router;