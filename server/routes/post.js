const { Router } = require("express")
const express = require("express")

const router = express.Router()



// import controler methods
const {create, list, read} = require('../controllers/post')

// route
router.post("/post", create);
router.get('/posts', list)
router.get('/post/:slug', read)


module.exports = router;