const status = require("http-status");

const Currency = require("../models/currency.model");

module.exports.get = async (req, res) => {
  const currencies = await Currency.find({});

  return res.json({ currencies });
};

module.exports.create = async (req, res) => {
  const { name, price } = req.body;

  try {
    const currency = await Currency.create({
      name,
      price,
    });

    return res.json({ currency });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};
