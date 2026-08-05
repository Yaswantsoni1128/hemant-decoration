import { CONTACT_DETAILS } from '../constants/contact';

export const generateClientWhatsAppLink = (data = {}) => {
  const number = CONTACT_DETAILS.phoneRaw;
  const message = data.eventType
    ? `Hello ${CONTACT_DETAILS.companyName}! I am interested in *${data.eventType}* on *${data.eventDate || 'Upcoming Date'}* at *${data.location || 'Noida/NCR'}*. My name is ${data.name || ''}.`
    : `Hello ${CONTACT_DETAILS.companyName}! I would like to inquire about your event decoration services.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (data = {}) => {
  const url = generateClientWhatsAppLink(data);
  window.open(url, '_blank', 'noopener,noreferrer');
};
