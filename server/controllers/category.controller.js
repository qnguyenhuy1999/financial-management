const status = require("http-status");

const Category = require("../models/category.model");

module.exports.get = async (req, res) => {
  const expenses = await Category.find({
    type: "expenses",
  });

  const income = await Category.find({
    type: "income",
  });

  return res.json({ expenses, income });
};

module.exports.create = async (req, res) => {
  const { name, icon, type } = req.body;

  try {
    const category = await Category.create({
      name,
      icon,
      type,
    });

    return res.json({ category });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};
