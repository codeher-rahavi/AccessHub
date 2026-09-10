require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json()); // Allows parsing of JSON bodies
app.use(cors()); // Allows frontend to communicate with backend
app.use("/api", authRoutes);


// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic Test Route
app.get("/", (req, res) => {
    res.send("Easy Access Backend is running!");
});

// Server Initialization
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});