const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Currency", currencySchema, "currencies");
