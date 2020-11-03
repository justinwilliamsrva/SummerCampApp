const { Router } = require("express")
const express = require("express")

const router = express.Router()

// route
router.get("/", (req, res) => {
    res.json({
        data: "You reached node.js api for reach node crud app",
    });
});


module.exports = router;