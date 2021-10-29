const express = require("express");
const router = express.Router();

const { loginModel } = require('../models/loginModel');

router.get('/', (req, res) => {
    loginModel.find((err,docs) => {
        if(!err) res.send(docs)
        else console.log("error : " + err)
    })
})

module.exports = router;