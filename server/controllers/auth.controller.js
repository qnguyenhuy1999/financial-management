const jwt = require("jsonwebtoken");
const status = require("http-status");

const User = require("../models/user.model");
const Budget = require("../models/budget.model");

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("email username password");

  if (!user) {
    return res.status(status.NOT_FOUND).json({
      message: "User not found",
    });
  }

  user.comparePassword(password, (err, isMatch) => {
    if (!isMatch) {
      return res.status(status.UNAUTHORIZED).json({
        message: "Email or password not correct.",
      });
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    return res.json({ token, ...user._doc });
  });
};

module.exports.logout = (req, res) => res.json({ message: "Logout success." });

module.exports.register = async (req, res) => {
  const { email, username, password } = req.body;

  const user = await User.findOne({ $or: [{ email }, { username }] });
  if (user) {
    return res.status(status.BAD_REQUEST).json({
      message: "Username or email exists.",
    });
  }

  try {
    const newUser = await User.create({
      email,
      username,
      password,
    });

    await Budget.create({
      cash: 0,
      card: 0,
      mainCurrency: "5f2ea0c9175ab01a742bbaa9",
      balancePerMonth: 0,
      user: newUser.id,
    });

    return res.json({ message: "Register success." });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};
