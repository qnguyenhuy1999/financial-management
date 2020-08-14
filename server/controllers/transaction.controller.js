const status = require("http-status");
const moment = require("moment");
const mongoose = require("mongoose");

const Transaction = require("../models/transaction.model");

const lookups = [
  {
    $lookup: {
      from: "categories",
      localField: "category",
      foreignField: "_id",
      as: "category",
    },
  },
  {
    $lookup: {
      from: "currencies",
      localField: "currency",
      foreignField: "_id",
      as: "currency",
    },
  },
];

module.exports.get = async (req, res) => {
  const { _id } = req.user;
  const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");
  const endOfMonth = moment().endOf("month").format("YYYY-MM-DD");

  try {
    const dayTransactions = await Transaction.aggregate([
      {
        $match: {
          $and: [
            { recurrence: "day" },
            {
              date: {
                $gte: new Date(startOfMonth),
                $lt: new Date(endOfMonth),
              },
            },
            { user: mongoose.Types.ObjectId(_id) },
          ],
        },
      },
      { $sort: { date: -1, amount: -1 } },
      ...lookups,
      {
        $project: {
          amount: 1,
          date: 1,
          category: {
            $arrayElemAt: ["$category", 0],
          },
          currency: {
            $arrayElemAt: ["$currency", 0],
          },
        },
      },
    ]);

    const monthTransactions = await Transaction.aggregate([
      {
        $match: {
          $and: [
            { recurrence: "monthly" },
            { user: mongoose.Types.ObjectId(_id) },
          ],
        },
      },
      { $sort: { amount: -1 } },
      ...lookups,
      {
        $project: {
          amount: 1,
          category: {
            $arrayElemAt: ["$category", 0],
          },
          currency: {
            $arrayElemAt: ["$currency", 0],
          },
        },
      },
    ]);

    return res.json({ monthTransactions, dayTransactions });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};

module.exports.create = async (req, res) => {
  const { amount, category, recurrence, date } = req.body;
  const { _id } = req.user;

  if (recurrence === "day" && !date) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: "Date is required on recurrence day." });
  }

  try {
    const newTransaction = await Transaction.create({
      amount,
      category,
      currency: "5f2ea0c9175ab01a742bbaa9",
      recurrence,
      date,
      user: _id,
    });

    const transaction = await Transaction.findOne({
      $and: [{ _id: newTransaction.id, user: _id }],
    })
      .populate("category", "name type icon")
      .populate("currency", "name price")
      .select("amount category currency recurrence date");

    return res.json({ transaction });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};

module.exports.edit = async (req, res) => {
  const { id, amount, category, currency, recurrence, date } = req.body;
  const { _id } = req.user;

  if (currency === "day" && !date) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: "Date is required on recurrence day." });
  }

  try {
    await Transaction.updateOne(
      { $and: [{ _id: id, user: _id }] },
      {
        amount,
        category,
        currency,
        recurrence,
        date,
        user: _id,
      },
    );

    const transaction = await Transaction.findOne({
      $and: [{ _id: id, user: _id }],
    })
      .populate("category", "name type")
      .populate("currency", "name price")
      .select("amount category currency recurrence date");

    return res.json({ transaction });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};

module.exports.delete = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.body;

  try {
    await Transaction.findOneAndDelete({ $and: [{ _id: id, user: _id }] });

    return res.json({ message: "Delete success." });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};
