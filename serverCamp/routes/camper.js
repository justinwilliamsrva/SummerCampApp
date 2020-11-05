const express = require("express");

const router = express.Router();

// import controler methods
const {create, list, read, update, remove } = require("../controllers/camper");

const {requireSignin} = require("../controllers/auth")



// route
router.post("/camper/create",create)
router.get("/campers", list);
router.get("/camper/:slug", read);
router.put("/camper/:slug", update);
router.delete("/camper/:slug",requireSignin, remove);

module.exports = router;
