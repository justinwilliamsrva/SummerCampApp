const Camper = require("../models/camper");

const slugify = require("slugify");

exports.create = (req, res) => {
    // console.log(req.body)
    const { first_name, last_name, counselor,address,camper_number,parent_names,parent_number,parent_email,age,gender,allergies } = req.body;
    const slug = slugify(first_name + last_name);


    Camper.create({first_name, last_name,slug, counselor,address,camper_number,parent_names,parent_number,parent_email,age,gender,allergies }, (err, camper) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: "duplicate Camper" });
        }
        res.json(camper);
    });
};

exports.list = (req, res) => {
    Camper.find({})
        .sort({ first_name: 1 })
        .exec((err, campers) => {
            if (err) console.log(err);
            res.json(campers);
        });
};
exports.read = (req, res) => {
    const { slug } = req.params;
    Camper.findOne({ slug })
        // .limit(10)
        // .sort({ createdAt: -1 })
        .exec((err, camper) => {
            if (err) console.log(err);
            res.json(camper);
        });
};

exports.update = (req, res) => {
    const { slug } = req.params;
    const { first_name, last_name, counselor,address,camper_number,parent_names,parent_number,parent_email,age,gender,allergies} = req.body;
    Camper.findOneAndUpdate({ slug }, { first_name, last_name, camper_number, counselor,address,parent_names,parent_number,parent_email,age,gender,allergies }, { new: true }).exec((err, camper) => {
        if (err) console.log(err);
        res.json(camper);
    });
};

exports.remove = (req, res) => {
    const { slug } = req.params;
    Camper.findOneAndRemove({ slug }).exec((err, camper) => {
        if (err) console.log(err);
        res.json({ message: "Camper deleted" });
    });
};
