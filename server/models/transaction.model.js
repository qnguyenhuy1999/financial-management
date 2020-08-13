const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  currency: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Currency",
  },
  recurrence: {
    type: String,
    enum: ["monthly", "day"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model(
  "Transaction",
  transactionSchema,
  "transactions",
);
