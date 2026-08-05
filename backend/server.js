const app = require('./src/app');
const env = require('./src/config/env');
const logger = require('./src/utils/logger');

const server = app.listen(env.port, () => {
  logger.info(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${env.port}`);
  logger.info(`🔗 Health check available at http://localhost:${env.port}/health`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Promise Rejection:', err);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});
