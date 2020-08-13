const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const authMiddleware = require("./middlewares/auth.middleware");
const authRoute = require("./routes/auth.route");
const categoryRoute = require("./routes/category.route");
const currencyRoute = require("./routes/currency.route");
const budgetRoute = require("./routes/budget.route");
const transactionRoute = require("./routes/transaction.route");

try {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  throw err;
}

const corsOptions = {
  origin: process.env.CLIENT_APP,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

// router handle
app.use("/api/auth", authRoute);
app.use("/api/category", authMiddleware, categoryRoute);
app.use("/api/currency", authMiddleware, currencyRoute);
app.use("/api/budget", authMiddleware, budgetRoute);
app.use("/api/transaction", authMiddleware, transactionRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
