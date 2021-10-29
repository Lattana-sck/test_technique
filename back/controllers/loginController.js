const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwtoken = require('jsonwebtoken');
const User = require('../models/usersModel');

router.post('/', (req, res) => {
    const { name, password } = req.body;
    User.findOne({name: name}).then((user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    console.log(user)
                    var token = jwtoken.sign({name: user.name, mail: user.mail}, 'troov', { expiresIn: '1h'})
                    return res.status(200).json({token})
                } else {
                    console.log(err)
                }
            })
        } else {
            console.log('User Not Found')
        }
    })
})

module.exports = router;