const Equipt = require("../models/equipt");

const slugify = require("slugify");

// exports.create = (req, res) => {
//     // console.log(req.body)
//     const { title, content, user } = req.body;
//     const slug = slugify(title);

//     switch (true) {
//         case !title:
//             return res.status(400).json({ error: "Title is required" });
//             break;

//         case !content:
//             return res.status(400).json({ error: "Content is required" });
//             break;
//     }

//     Equipt.create({ title, content, user, slug }, (err, Equipt) => {
//         if (err) {
//             console.log(err);
//             res.status(400).json({ error: "duplicate Equipt" });
//         }
//         res.json(Equipt);
//     });
// };

exports.list = (req, res) => {
    Equipt.find({})
        .sort({ item: 1 })
        .exec((err, equipts) => {
            if (err) console.log(err);
            res.json(equipts);
        });
};


exports.update = (req, res) => {
    const { slug } = req.params;
    const { title, content, user } = req.body;
    Equipt.findOneAndUpdate({ slug }, { title, content, user }, { new: true }).exec((err, Equipt) => {
        if (err) console.log(err);
        res.json(Equipt);
    });
};

// exports.remove = (req, res) => {
//     const { slug } = req.params;
//     Equipt.findOneAndRemove({ slug }).exec((err, Equipt) => {
//         if (err) console.log(err);
//         res.json({ message: "Equipt deleted" });
//     });
// };