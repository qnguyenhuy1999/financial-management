const Joi = require("@hapi/joi");
const status = require("http-status");

module.exports.create = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    icon: Joi.object({
      class: Joi.string().required(),
      background: Joi.string().required(),
    }).required(),
    type: Joi.string().required().valid("expenses", "income"),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(status.BAD_REQUEST).json({
      message: error.message,
    });
  }

  next();
};
