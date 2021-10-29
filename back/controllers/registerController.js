const express = require("express");
const router = express.Router();

const { RegisterModel } = require('../models/registerModel');

router.post('/', (req, res) => {
    const newUser = new RegisterModel({
        name: req.body.name,
        mail: req.body.mail,
        password: req.body.password
    })

    newUser.save((err,docs) => {
        if(!err) res.send(docs);
        else console.log("error users : " + err);
    })
})

module.exports = router;