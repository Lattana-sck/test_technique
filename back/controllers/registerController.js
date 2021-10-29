const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const { RegisterModel } = require('../models/registerModel');

router.post('/', jsonParser,  async (req, res) => {
        const salt = await bcrypt.genSalt(1);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new RegisterModel({
            name: req.body.name,
            mail: req.body.mail,
            password: hashedPassword
        })

        newUser.save((err, docs) => {
            if (!err) res.status(500).send(docs);
            else console.log("error users : " + err);
        })
    
})

module.exports = router;