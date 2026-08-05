const env = require('./env');

module.exports = {
  botToken: env.telegram.botToken,
  chatId: env.telegram.chatId,
  apiUrl: env.telegram.botToken ? `https://api.telegram.org/bot${env.telegram.botToken}` : '',
};
