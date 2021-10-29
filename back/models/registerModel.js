const mongoose = require("mongoose");

const RegisterModel = mongoose.model(
    "users",
    {
        name: {
            type: String,
            required: "Insérez votre nom",
        },
        mail: {
            type: String,
            required: "Insérez votre e-mail",
        },
        password: {
            type: String,
            required: "Insérez votre mot de passe"
        }
    },
);

module.exports = { RegisterModel };