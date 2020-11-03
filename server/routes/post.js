const { Router } = require("express")
const express = require("express")

const router = express.Router()



// import controler methods
const {create, list} = require('../controllers/post')

// route
router.post("/post", create);
router.get('/posts', list)


module.exports = router;