const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

const UsersModel = require('../models/usersModel');

router.post('/', async (req, res) => {
    const salt = await bcrypt.genSalt(1);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const newUser = new UsersModel({
        name: req.body.name,
        mail: req.body.mail,
        password: hashedPassword
    })

    newUser.save((err) => {
        if (!err) res.status(200).send('Register success');
        else console.log("error users : " + err);
    })
})

module.exports = router;