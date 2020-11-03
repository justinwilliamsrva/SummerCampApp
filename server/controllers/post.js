const Post = require("../models/post");

const slugify = require("slugify");

exports.create = (req, res) => {
    // console.log(req.body)
    const { title, content, user } = req.body;
    const slug = slugify(title);

    switch (true) {
        case !title:
            return res.status(400).json({ error: "Title is required" });
            break;

        case !content:
            return res.status(400).json({ error: "Content is required" });
            break;
    }

    Post.create({ title, content, user, slug }, (err, post) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: "duplicate post" });
        }
        res.json(post);
    });
};

exports.list = (req, res) => {
    Post.find({})
        .limit(10)
        .sort({createdAt: -1 })
        .exec((err, posts) => {
            if (err) console.log(err);
            res.json(posts);
        });
};

exports.read = (req, res) => {

  const{slug} = req.params
    Post.findOne({slug})
        .limit(10)
        .sort({createdAt: -1 })
        .exec((err, post) => {
            if (err) console.log(err);
            res.json(post);
        });
};