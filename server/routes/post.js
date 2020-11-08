const { Router } = require("express");
const express = require("express");

const router = express.Router();

// import controler methods
const { create, list, read, update, remove } = require("../controllers/post");

const {requireSignin} = require("../controllers/auth")



// route
router.post("/post", create);
router.get("/posts", list);
router.get("/post/:slug", read);
router.put("/post/:slug", update);
router.delete("/post/:slug", remove);

module.exports = router;
