const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
const status = require("http-status");

module.exports.edit = (req, res, next) => {
  const schema = Joi.object({
    cash: Joi.number().required(),
    card: Joi.number().required(),
    balancePerMonth: Joi.number().required(),
    mainCurrency: Joi.objectId().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(status.BAD_REQUEST).json({
      message: error.message,
    });
  }

  next();
};
