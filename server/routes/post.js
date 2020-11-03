const { Router } = require("express")
const express = require("express")

const router = express.Router()



// import controler methods
const {create} = require('../controllers/post')

// route
router.get("/", create);


module.exports = router;