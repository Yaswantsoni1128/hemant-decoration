const { sendInquiryEmails } = require('../services/mail.service');
const { sendTelegramMessage } = require('../services/telegram.service');
const { generateWhatsAppLink } = require('../services/whatsapp.service');
const { sendSuccess, sendError } = require('../utils/response');
const messages = require('../constants/messages');
const logger = require('../utils/logger');

const handleInquiry = async (req, res, next) => {
  try {
    const { name, phone, email, eventType, eventDate, budget, location, message } = req.body;

    const inquiryData = {
      name,
      phone,
      email,
      eventType,
      eventDate,
      budget,
      location,
      message,
      submittedAt: new Date().toISOString(),
    };

    logger.info(`Processing inquiry for ${name} - ${eventType} on ${eventDate}`);

    // Generate WhatsApp Deep Link
    const whatsappLink = generateWhatsAppLink(inquiryData);

    // Trigger async non-blocking notifications
    Promise.allSettled([
      sendInquiryEmails(inquiryData),
      sendTelegramMessage(inquiryData),
    ]).catch((err) => {
      logger.error('Background notification error:', err);
    });

    return sendSuccess(
      res,
      messages.INQUIRY_SUCCESS,
      {
        whatsappLink,
        inquiry: {
          name,
          email,
          eventType,
          eventDate,
          location,
        },
      },
      201
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleInquiry,
};
