const express = require("express")
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { ObjetsModel } = require('../models/objetsModel');

// routes display objects
router.get('/', (req, res) => {
    ObjetsModel.find({}).then((result) => {
        return res.status(200).json({ result })
    })
})

// routes add objects
router.post('/', (req, res) => {
    const newObjet = new ObjetsModel({
        name: req.body.name,
        description: req.body.description
    });

    newObjet.save();

    return res.status(200).send("Object created !")
})

// routes update objects
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id)

    const updateObjet = {
        name: req.body.name,
        description: req.body.description
    };

    ObjetsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateObjet },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("update error : " + err);
        }
    )
})

// routes delete objects
router.delete("/:id", (req, res) => {
    console.log(req.params.id)
    // if (!ObjectID.isValid(req.params.id))
    //     return res.status(400).send("ID unknown : " + req.params.id)

    ObjetsModel.findOneAndRemove({
        _id: req.params.id
    },
        (err, docs) => {
            if (!err) res.status(200).send({ message: "objet supprimé" });
            else throw new Error(err);
        })
});


module.exports = router;