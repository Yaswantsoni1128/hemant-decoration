const logger = require('../utils/logger');
const { sendError } = require('../utils/response');
const messages = require('../constants/messages');

const errorHandler = (err, req, res, next) => {
  logger.error('Unhandled Server Error:', err.stack || err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || messages.SERVER_ERROR;

  return sendError(res, message, [{ message }], statusCode);
};

module.exports = errorHandler;
