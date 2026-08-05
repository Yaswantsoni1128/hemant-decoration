const { validationResult } = require('express-validator');
const { sendError } = require('../utils/response');
const messages = require('../constants/messages');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((err) => ({
      field: err.path || err.param,
      message: err.msg,
    }));
    return sendError(res, messages.VALIDATION_ERROR, formattedErrors, 422);
  }
  next();
};

module.exports = validate;
