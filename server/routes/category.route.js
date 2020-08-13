const express = require("express");

const router = express.Router();
const controller = require("../controllers/category.controller");
const validator = require("../middlewares/validator/category.validator");

router.get("/get", controller.get);
router.post("/create", validator.create, controller.create);

module.exports = router;
