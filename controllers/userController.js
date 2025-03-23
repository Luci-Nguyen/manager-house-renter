const User = require("../models/userModel");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findUserById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
