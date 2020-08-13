const express = require("express");

const router = express.Router();
const controller = require("../controllers/auth.controller");
const validator = require("../middlewares/validator/auth.validator");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/login", validator.login, controller.login);
router.post("/logout", authMiddleware, controller.logout);
router.post("/register", validator.register, controller.register);

module.exports = router;
