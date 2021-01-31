const express = require('express');
const router = express.Router();
const Mule = require('../models/mule.model');

router.get('/mules', async (req, res) => {
    try {
        const foundMules = await Mule.find();
        res.send(foundMules);
    } catch (err) {
        console.log(err);
    }
});

router.post('/mules', async (req, res) => {
    try {
        const foundMules = await Mule.findOne({name: req.body.name})
        if (!foundMules) {
            const newMule = new Mule({
                name: req.body.name,
                items: req.body.items,
            })
            const savedMule = await newMule.save();
            res.send({ message: 'Mule successfully submitted' })
        } else {
            const updatedMule = await Mule.updateOne({name: req.body.name}, {$set: {items: req.body.items}})
            res.send({message: req.body.name + ' updated'})
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/itemByName', async (req, res) => {
    try {
        const foundMules = await Mule.aggregate([
            {$unwind: '$items'},
            {$match: {'items.name': {'$regex': req.body.name, '$options': 'i'}}}
        ])
        res.send(foundMules);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;