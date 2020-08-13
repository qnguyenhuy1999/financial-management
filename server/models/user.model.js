const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^[a-z][a-z0-9_\-\.]{2,32}@[a-z0-9_-]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
    unique: true,
    trim: true,
    required: true,
  },
  username: {
    required: true,
    trim: true,
    type: String,
    minlength: 3,
    maxlength: 30,
    unique: true,
  },
  password: {
    required: true,
    trim: true,
    type: String,
    minlength: 6,
    maxlength: 30,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  const salt = parseInt(process.env.BCRYPT_HASH, 10);

  bcrypt.hash(user.password, salt, (err, hash) => {
    if (err) throw err;
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema, "users");
