const mongoose = require("mongoose");

const ObjetsModel = mongoose.model(
    "troov",
    {
        name: {
            type: String,
            required: "Insérez votre nom",
        },
        description: {
            type: String,
            required: "Insérez la description",
        }
    },
    "objets"
);

module.exports = { ObjetsModel };