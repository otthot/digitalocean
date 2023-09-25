const express = require('express');
const app = express();
const path = require("path");

const router = require("./router/router.js");

const PORT = 3000;
const HOST = '127.0.0.1'

const homepage = path.join(__dirname, 'public', 'index.html')

app.use('/router', router);
app.use(express.urlencoded({extended : true}));
app.use(express.static('public')); 

app.get("/", (req, res) => {

    res.sendFile(homepage)

})

app.get('/static', (req, res) => {

    res.send({id : 1, data : {name : "Otto", age : 23, city : "New York", country : "USA"}})
    
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