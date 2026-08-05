const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  port: process.env.PORT || 5000,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  resend: {
    apiKey: process.env.RESEND_API_KEY || '',
    // Use onboarding@resend.dev for testing; replace with your verified domain later
    from: process.env.RESEND_FROM || 'Khushi Decorations <onboarding@resend.dev>',
    ownerEmail: process.env.OWNER_EMAIL || 'decorationkhushi@gmail.com',
  },
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || '',
    chatId: process.env.TELEGRAM_CHAT_ID || '',
  },
  whatsapp: {
    number: process.env.WHATSAPP_NUMBER || '917340020028',
  },
};
