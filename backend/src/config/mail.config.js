const { Resend } = require('resend');
const env = require('./env');
const logger = require('../utils/logger');

let resendClient = null;

/**
 * Returns a Resend client when RESEND_API_KEY is set.
 * Replace re_xxxxxxxxx in .env with your real key from https://resend.com/api-keys
 */
const getResendClient = () => {
  if (!env.resend.apiKey) {
    logger.warn('RESEND_API_KEY is missing. Email sending is disabled.');
    return null;
  }

  if (env.resend.apiKey.includes('xxxxxxxxx')) {
    logger.warn('Replace RESEND_API_KEY placeholder (re_xxxxxxxxx) with your real Resend API key.');
    return null;
  }

  if (!resendClient) {
    resendClient = new Resend(env.resend.apiKey);
  }

  return resendClient;
};

module.exports = {
  getResendClient,
};
