const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send(`<h1>EU NAO ACREDITO ${req.query['nome']}</h1>`);
})

app.listen(3000, () => {
    console.log("Srvidor online")
    console.log("http://localhost:3000/");

});