const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  cash: {
    type: Number,
    default: 0,
  },
  card: {
    type: Number,
    default: 0,
  },
  balancePerMonth: {
    type: Number,
    default: 0,
  },
  mainCurrency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Budget", budgetSchema, "budgets");
