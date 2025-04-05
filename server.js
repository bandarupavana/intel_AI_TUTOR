const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");
const User = require("./models/User");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/edutrack")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// --- SIGNUP ---
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    console.log(`✅ User created: ${username}`);

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// --- SIGNIN ---
app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ success: false, error: "Invalid username or password" });
    }

    // Debug logs (remove later)
    console.log("🔐 User entered password:", password);
    console.log("🔐 Stored hashed password:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: "Invalid username or password" });
    }

    return res.json({
      success: true,
      progress: user.progress || null
    });

  } catch (error) {
    console.error("❌ Sign-in error:", error);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// --- UPDATE PROGRESS ---
app.post("/updateProgress", async (req, res) => {
  const { username, grade, level, quizResults } = req.body;

  try {
    await User.findOneAndUpdate(
      { username },
      { progress: { grade, level, quizResults } },
      { new: true }
    );
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Update progress error:", err);
    res.status(500).json({ success: false, error: "Failed to update progress" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
