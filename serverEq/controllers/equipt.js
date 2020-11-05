const Equipt = require("../models/equipt");

const slugify = require("slugify");

exports.create = (req, res) => {
    // console.log(req.body)
    const { item, location, availability, user, notes  } = req.body;
    const slug = slugify(item);

    switch (true) {
        case !item:
            return res.status(400).json({ error: "Item is required" });
            break;

        case !location:
            return res.status(400).json({ error: "Location is required" });
            break;
        case !availability:
            return res.status(400).json({ error: "Availability is required" });
            break;

    }

    Equipt.create({item, location, availability, user, notes, slug }, (err, equipt) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: "duplicate Equipt" });
        }
        res.json(equipt);
    });
};

exports.list = (req, res) => {
    Equipt.find({})
        .sort({ item: 1 })
        .exec((err, equipts) => {
            if (err) console.log(err);
            res.json(equipts);
        });
};
exports.read = (req, res) => {
    const { slug } = req.params;
    Equipt.findOne({ slug })
        // .limit(10)
        // .sort({ createdAt: -1 })
        .exec((err, equipt) => {
            if (err) console.log(err);
            res.json(equipt);
        });
};

exports.update = (req, res) => {
    const { slug } = req.params;
    const { title, content, user } = req.body;
    Equipt.findOneAndUpdate({ slug }, { title, content, user }, { new: true }).exec((err, equipt) => {
        if (err) console.log(err);
        res.json(equipt);
    });
};

exports.remove = (req, res) => {
    const { slug } = req.params;
    Equipt.findOneAndRemove({ slug }).exec((err, equipt) => {
        if (err) console.log(err);
        res.json({ message: "Equipt deleted" });
    });
};
