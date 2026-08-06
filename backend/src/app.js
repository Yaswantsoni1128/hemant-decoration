const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const env = require('./config/env');
const inquiryRoutes = require('./routes/inquiry.routes');
const errorHandler = require('./middleware/error.middleware');
const { sendSuccess } = require('./utils/response');
const logger = require('./utils/logger');

const app = express();

// Security HTTP headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// CORS — allow production + local frontend origins
app.use(
  cors({
    origin(origin, callback) {
      // Allow non-browser tools (curl/postman) with no Origin header
      if (!origin) return callback(null, true);

      if (env.allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      logger.warn(`Blocked CORS origin: ${origin}`);
      return callback(null, false);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 204,
  })
);

// Compression & Body Parsing
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// HTTP Request Logger
app.use(morgan('dev'));

// Health check endpoint
app.get('/health', (req, res) => {
  return sendSuccess(res, 'Event Decorations API is active and healthy', {
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    allowedOrigins: env.allowedOrigins,
  });
});

// API Routes
app.use('/api/inquiry', inquiryRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot find route ${req.originalUrl} on this server`,
    errors: [],
  });
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;
