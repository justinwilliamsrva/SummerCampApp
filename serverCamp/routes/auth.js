const { Router } = require("express");
const express = require("express");

const router = express.Router();

// import controler methods
const { login } = require("../controllers/auth");

// route
router.post("/login", login);


module.exports = router;
