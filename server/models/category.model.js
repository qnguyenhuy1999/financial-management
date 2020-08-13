const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    enum: ["expenses", "income"],
  },
});

module.exports = mongoose.model("Category", categorySchema, "categories");
