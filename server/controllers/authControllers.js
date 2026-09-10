// controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateSignUp } = require("../utils/validators");

const JWT_SECRET = process.env.JWT_SECRET;

const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Regex Validations
        const validation = validateSignUp(email, password);
        if (!validation.valid) {
            return res.status(400).json({ success: false, message: validation.message });
        }

        // 2. Check Database for Existing User (Utilizes the Index)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "Email is already registered." });
        }

        // 3. Hash Password & Save
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ success: true, message: "Account created successfully. Please log in." });

    } catch (error) {
        console.error("SignUp Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Fast Retrieval using the Indexed field
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid Email or Password" });
        }

        // 2. Verify Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid Email or Password" });
        }

        // 3. Generate JWT Session Token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            JWT_SECRET,
            { expiresIn: "7d" } // Token valid for 7 days
        );

        // 4. Return sanitized user data
        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("SignIn Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = { signUp, signIn };