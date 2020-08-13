const express = require("express");

const router = express.Router();
const controller = require("../controllers/budget.controller");
const validator = require("../middlewares/validator/budget.validator");

router.get("/get", controller.get);
router.post("/edit", validator.edit, controller.edit);

module.exports = router;
