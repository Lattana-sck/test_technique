const bodyParser = require("body-parser");
const express = require("express");
const app = express()
require('./models/database');
const objectsRoutes = require('./controllers/objectController')
// const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/objets', objectsRoutes)
app.listen(10000, () => console.log("Started application on port %d !", 10000));
