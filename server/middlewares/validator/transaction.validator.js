const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
const status = require("http-status");

module.exports.create = (req, res, next) => {
  const schema = Joi.object({
    amount: Joi.number().required(),
    category: Joi.objectId().required(),
    currency: Joi.objectId().required(),
    recurrence: Joi.string().required().valid("monthly", "day"),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(status.BAD_REQUEST).json({
      message: error.message,
    });
  }

  next();
};

module.exports.edit = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
    amount: Joi.number().required(),
    category: Joi.objectId().required(),
    currency: Joi.objectId().required(),
    recurrence: Joi.string().required().valid("monthly", "day"),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(status.BAD_REQUEST).json({
      message: error.message,
    });
  }

  next();
};

module.exports.delete = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(status.BAD_REQUEST).json({
      message: error.message,
    });
  }

  next();
};
