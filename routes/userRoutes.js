const express = require("express");
const User = require("../models/User"); // Ensure correct path to User model
const router = express.Router();

// Create a new user
router.post("/", async (req, res) => {
    try {
        const { email, faceImage } = req.body;
        if (!email || !faceImage) {
            return res.status(400).json({ error: "Email and face image are required." });
        }

        const newUser = new User({ email, faceImage });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
