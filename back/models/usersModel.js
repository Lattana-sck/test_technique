const mongoose = require("mongoose");

const UsersModel = new mongoose.Schema(
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

// module.exports = { UsersModel };
module.exports = mongoose.model('User', UsersModel);