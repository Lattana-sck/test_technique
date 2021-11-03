const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const UsersModel = require('../models/usersModel');

router.post('/', (req, res) => {
    const { name, mail, password } = req.body;
    UsersModel.findOne({ mail: mail }).then((user) => {
        if (user) {
            return res.status(409).json({ message: "email deja utilisé" })
        } else {
            const salt = bcrypt.genSalt(1);
            const hashedPassword = bcrypt.hash(password, salt)
            const newUser = new UsersModel({
                name: name,
                mail: mail,
                password: hashedPassword
            })

            newUser.save();
            return res.status(200).json({ message: "user crée" })
        }

    })
})
module.exports = router;