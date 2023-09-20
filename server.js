const express = require('express');
const app = express();
const path = require("path");

const router = require("./router/router.js");

app.use(express.static("/public")); 
app.use(express.urlencoded({extended : true}));

const PORT = 3000;
const HOST = '127.0.0.1'

const filePath = path.join(__dirname, 'public', 'index.html')

app.use('/router', router);

app.get("/", (req, res) => {

    res.send("Hello World")

})

app.get('/static', (req, res) => {

    res.sendFile(filePath)
    
})

app.get("/new", (req, res) => {

    res.send({joe : "And the Juice"})


})

app.get("/dir", (req, res) => {

    res.send(__dirname)

})

app.listen(PORT, HOST,() => {
    console.log(`Server is now running on ${PORT}`)

})  