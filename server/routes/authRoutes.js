const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/authControllers");
const verifyToken = require("../middleware/authMiddleware");

// Public routes
router.post("/signup", signUp);
router.post("/login", signIn);

// Protected route
router.get("/protected", verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "You have access to this protected route.",
        user: req.user
    });
});

module.exports = router;