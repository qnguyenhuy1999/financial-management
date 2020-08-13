const Joi = require("@hapi/joi");
const status = require("http-status");

module.exports.login = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .max(40)
      .pattern(
        new RegExp(
          /^[a-z][a-z0-9_\-\.]{2,32}@[a-z0-9_-]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
        ),
      )
      .insensitive()
      .messages({
        "string.pattern.base": "Email invalid.",
      }),
    password: Joi.string().required().insensitive(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(status.BAD_REQUEST).json({
      message: error.message,
    });
  }

  next();
};

module.exports.register = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .max(40)
      .pattern(
        new RegExp(
          /^[a-z][a-z0-9_\-\.]{2,32}@[a-z0-9_-]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
        ),
      )
      .insensitive()
      .messages({
        "string.pattern.base": "Email invalid.",
      }),
    username: Joi.string().max(40).insensitive(),
    password: Joi.string().required().insensitive(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(status.BAD_REQUEST).json({
      message: error.message,
    });
  }

  next();
};
