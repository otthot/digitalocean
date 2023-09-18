const express = require('express');
const app = express();

const PORT = 3000;
const HOST = '127.0.0.1'

app.get("/", (req, res) => {

    res.send("Hello World")

})

app.listen(PORT, HOST,() => {
    console.log(`Server is now running on ${PORT}`)
})  