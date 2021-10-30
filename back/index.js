const express = require("express");
const app = express()

require('./models/database');
const objectsRoutes = require('./controllers/objectController');
const registerRoutes = require('./controllers/registerController');
const loginRoutes = require('./controllers/loginController');
const cors = require('cors'); 

app.use(cors());
app.use(express.json());   

app.use('/objets', objectsRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);

app.listen(10000, () => console.log("Started application on port %d !", 10000));
