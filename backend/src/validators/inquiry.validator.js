const { body } = require('express-validator');

const inquiryValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[0-9+\-\s()]{7,15}$/)
    .withMessage('Please provide a valid phone number'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required')
    .isEmail()
    .withMessage('Please enter a valid email address'),
  body('eventType')
    .trim()
    .notEmpty()
    .withMessage('Event type is required'),
  body('eventDate')
    .trim()
    .notEmpty()
    .withMessage('Event date is required'),
  body('location')
    .trim()
    .notEmpty()
    .withMessage('Event location is required'),
  body('budget')
    .optional()
    .trim(),
  body('message')
    .optional()
    .trim(),
];

module.exports = {
  inquiryValidationRules,
};
