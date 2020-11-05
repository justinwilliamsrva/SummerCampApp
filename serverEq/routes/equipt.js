const express = require("express");

const router = express.Router();

// import controler methods
const { create, list, read, update, remove } = require("../controllers/equipt");

const {requireSignin} = require("../controllers/auth")



// route
router.post("/equiptment/create", create);
router.get("/equiptment", list);
router.get("/equiptment/:slug", read);
router.put("/equiptment/:slug", update);
router.delete("/equiptment/:slug",requireSignin, remove);

module.exports = router;
