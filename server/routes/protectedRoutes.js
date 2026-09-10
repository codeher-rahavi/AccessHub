const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

router.get("/home", verifyToken, (req, res) => {

    res.status(200).json({
        success: true,
        message: "JWT verified. Welcome to AccessHub.",
        user: req.user
    });

});

module.exports = router;