const express = require("express")
var app = express()

//acceuil
app.get("/", function (request, response) {
    response.send("Hello World!")
})

//inscription
app.post("/register", function(req,res){

})

//connexion
app.post("/login", function(req,res){
    
})

//ajouter
app.post("/add", function(req,res){

})

//modification
app.post("/update", function(req,res){

})

//suppression
app.post("/delete", function(req,res){

})

//afficher listes des objets
app.get("/list", function (req, res) {
    res.send("list")
})


app.listen(10000, function () {
    console.log("Started application on port %d", 10000)
});
