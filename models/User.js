const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  faceImage: { type: String, required: true }, // Store Base64 image
});

module.exports = mongoose.model("User", userSchema);
