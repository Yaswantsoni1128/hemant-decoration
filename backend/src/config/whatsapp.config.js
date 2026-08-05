const env = require('./env');

module.exports = {
  whatsappNumber: env.whatsapp.number.replace(/\D/g, ''),
  baseUrl: 'https://wa.me',
};
