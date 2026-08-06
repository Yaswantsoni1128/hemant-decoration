const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const env = require('./config/env');
const inquiryRoutes = require('./routes/inquiry.routes');
const errorHandler = require('./middleware/error.middleware');
const { sendSuccess } = require('./utils/response');

const app = express();

// Security HTTP headers
app.use(helmet());

// Enable CORS with client URL configuration
app.use(
  cors({
    origin: [env.clientUrl, env.clientUrl2, 'http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
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
  return sendSuccess(res, 'Event Decoration API is active and healthy', {
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
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
