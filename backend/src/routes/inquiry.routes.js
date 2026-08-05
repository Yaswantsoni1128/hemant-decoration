const express = require('express');
const rateLimit = require('express-rate-limit');
const { handleInquiry } = require('../controllers/inquiry.controller');
const { inquiryValidationRules } = require('../validators/inquiry.validator');
const validate = require('../middleware/validate.middleware');
const messages = require('../constants/messages');

const router = express.Router();

// Rate limiter: max 10 requests per 15 minutes per IP
const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: messages.RATE_LIMIT_ERROR,
    errors: [{ message: messages.RATE_LIMIT_ERROR }],
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/', inquiryLimiter, inquiryValidationRules, validate, handleInquiry);

module.exports = router;
