const telegramConfig = require('../config/telegram.config');
const logger = require('../utils/logger');

const sendTelegramMessage = async (inquiryData) => {
  if (!telegramConfig.botToken || !telegramConfig.chatId) {
    logger.warn('Telegram Bot Token or Chat ID not configured. Skipping Telegram notification.');
    return false;
  }

  const textMessage = `🎉 New Inquiry\n\n` +
    `Name: ${inquiryData.name}\n` +
    `Phone: ${inquiryData.phone}\n` +
    `Email: ${inquiryData.email}\n` +
    `Event: ${inquiryData.eventType}\n` +
    `Date: ${inquiryData.eventDate}\n` +
    `Budget: ${inquiryData.budget || 'N/A'}\n` +
    `Location: ${inquiryData.location}\n\n` +
    `Message: ${inquiryData.message || 'N/A'}`;

  try {
    const response = await fetch(`${telegramConfig.apiUrl}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramConfig.chatId,
        text: textMessage,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();
    if (data.ok) {
      logger.info('Telegram notification sent successfully.');
      return true;
    } else {
      logger.warn('Telegram API response error:', data.description);
      return false;
    }
  } catch (error) {
    logger.error('Error dispatching Telegram message:', error.message);
    return false;
  }
};

module.exports = {
  sendTelegramMessage,
};
