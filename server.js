const express = require('express');
const app = express();

const router = require("./router");

const PORT = 3000;
const HOST = '127.0.0.1'

app.use('router', router);

app.get("/", (req, res) => {

    res.send("Hello World")

})


app.get("/new", (req, res) => {

    res.send({joe : "And the Juice"})

})

app.listen(PORT, HOST,() => {
    console.log(`Server is now running on ${PORT}`)
})  