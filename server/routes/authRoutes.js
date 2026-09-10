const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/authControllers");

// POST /api/signup
router.post("/signup", signUp);

// POST /api/login
router.post("/login", signIn);

module.exports = router;