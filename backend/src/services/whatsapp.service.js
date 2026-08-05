const whatsappConfig = require('../config/whatsapp.config');

const generateWhatsAppLink = (inquiryData) => {
  const textMessage = `Hello! I would like to inquire about event decoration.\n\n` +
    `*Name:* ${inquiryData.name}\n` +
    `*Event Type:* ${inquiryData.eventType}\n` +
    `*Event Date:* ${inquiryData.eventDate}\n` +
    `*Budget:* ${inquiryData.budget || 'N/A'}\n` +
    `*Location:* ${inquiryData.location}\n` +
    `*Message:* ${inquiryData.message || 'N/A'}`;

  const encodedText = encodeURIComponent(textMessage);
  return `${whatsappConfig.baseUrl}/${whatsappConfig.whatsappNumber}?text=${encodedText}`;
};

module.exports = {
  generateWhatsAppLink,
};
