const express = require("express");

const router = express.Router();
const controller = require("../controllers/transaction.controller");
const validator = require("../middlewares/validator/transaction.validator");

router.get("/get", controller.get);
router.post("/create", validator.create, controller.create);
router.post("/edit", validator.edit, controller.edit);
router.post("/delete", validator.delete, controller.delete);

module.exports = router;
