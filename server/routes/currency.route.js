const express = require("express");

const router = express.Router();
const controller = require("../controllers/currency.controller");
const validator = require("../middlewares/validator/currency.validator");

router.get("/get", controller.get);
router.post("/create", validator.create, controller.create);

module.exports = router;
