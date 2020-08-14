const status = require("http-status");

const Budget = require("../models/budget.model");

module.exports.get = async (req, res) => {
  const { _id } = req.user;
  const budget = await Budget.findOne({
    user: _id,
  })
    .populate("mainCurrency", "name price")
    .select("cash card balancePerMonth mainCurrency");

  return res.json({ budget });
};

module.exports.edit = async (req, res) => {
  const { cash, card, balancePerMonth } = req.body;
  const { _id } = req.user;

  try {
    await Budget.updateOne(
      { user: _id },
      {
        cash,
        card,
        balancePerMonth,
        mainCurrency: "5f2ea0c9175ab01a742bbaa9",
      },
    );

    const budget = await Budget.findOne({
      user: _id,
    })
      .populate("mainCurrency", "name price")
      .select("cash card balancePerMonth mainCurrency");

    return res.json({ budget });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};
