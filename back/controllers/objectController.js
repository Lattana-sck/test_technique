const express = require("express")
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { ObjetsModel } = require('../models/objetsModel');

// routes display objects
router.get('/', (req, res) => {
    ObjetsModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log("error to get data : " + err)
    })
})

// routes add objects
router.post('/', (req, res) => {
    const newObjet = new ObjetsModel({
        name: req.body.name,
        description: req.body.description
    });

    newObjet.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log("error creating data : " + err);
    })
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
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id)
    
    ObjetsModel.findByIdAndRemove(
      req.params.id,
      (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Delete error : " + err);
      })
  });
  

module.exports = router;