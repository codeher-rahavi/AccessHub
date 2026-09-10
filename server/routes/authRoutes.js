const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/authController");

// POST /api/signup
router.post("/signup", signUp);

// POST /api/login
router.post("/login", signIn);

module.exports = router;