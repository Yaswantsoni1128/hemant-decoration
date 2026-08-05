# LuxeDecor - Modern Event Decoration Business Website & REST API

A production-grade, luxury full-stack web application for an Event & Balloon Decoration business. Built with **React 19, Vite, Tailwind CSS v4, Framer Motion, Node.js, Express.js, Nodemailer, Telegram Bot API, and WhatsApp Integration**.

---

## 🌟 Key Features

- **Modern Luxury Aesthetic**: Dark slate background with champagne gold accents (`#D4AF37`), glassmorphism cards, micro-animations, and responsive typography.
- **11 Signature Decoration Categories**:
  - Birthday Decoration
  - Anniversary Decoration
  - Baby Welcome Decoration
  - Baby Shower Decoration
  - Room Decoration
  - Balloon Decoration
  - Surprise Decoration
  - Proposal Decoration
  - Haldi Decoration
  - Engagement Decoration
  - Custom Event Decoration
- **Production-Ready Backend (`POST /api/inquiry`)**:
  - Express input validation (`express-validator`).
  - Automated HTML email dispatch to owner & customer confirmation email via Nodemailer.
  - Asynchronous Telegram notification dispatch via Telegram Bot API.
  - WhatsApp deep-link URL generator returned in API response.
  - Rate-limiting security middleware (10 inquiries per 15 min per IP).
  - Graceful fallbacks: If SMTP or Telegram tokens are unconfigured, inquiries complete smoothly and return the WhatsApp link.
- **Frontend Capabilities**:
  - SPA Navigation (`react-router-dom`).
  - Dynamic page metadata title & Open Graph SEO (`react-helmet-async`).
  - React Hook Form + Zod schema validation.
  - Interactive Lightbox for high-resolution portfolio photos.
  - Touch-optimized Swiper carousels for client reviews.
  - Floating WhatsApp & Call quick actions.
  - Clean modular folder structure adhering to SOLID & DRY principles.

---

## 📁 Project Architecture

```
Hemant-decoration/
├── backend/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── config/          # env, mail, telegram, whatsapp configs
│       ├── constants/       # API response messages
│       ├── controllers/     # inquiry controller logic
│       ├── middleware/      # rate limiter, validator, error handler
│       ├── routes/          # API route definitions
│       ├── services/        # Nodemailer, Telegram API, WhatsApp link builder
│       ├── templates/       # HTML Email templates
│       ├── utils/           # logger & standard JSON response builder
│       └── validators/      # express-validator rules
│
└── frontend/
    ├── .env
    ├── .env.example
    ├── package.json
    ├── vite.config.js
    ├── public/              # robots.txt, sitemap.xml
    └── src/
        ├── assets/
        ├── components/      # common, buttons, cards, forms, layout, sections
        ├── config/          # env config
        ├── constants/       # colors, contact, nav, routes, services, strings
        ├── data/            # FAQs, gallery photos, packages, testimonials
        ├── hooks/
        ├── layouts/         # MainLayout wrapper
        ├── pages/           # Home, About, Services, Gallery, Contact, NotFound
        ├── routes/          # AppRoutes
        ├── services/        # Axios API & inquiry service
        ├── utils/           # WhatsApp helper, date formatters
        ├── App.jsx
        ├── index.css
        └── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### 1. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in `backend/` (or copy from `.env.example`):

```env
PORT=5000
CLIENT_URL=http://localhost:5173

# Nodemailer Configuration (Optional)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your_email@gmail.com
MAIL_PASSWORD=your_app_password
OWNER_EMAIL=owner@luxedecorevents.com

# Telegram Bot (Optional)
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

# WhatsApp Business Number
WHATSAPP_NUMBER=919643229455
```

Start backend development server:

```bash
node server.js
```
The API server starts on `http://localhost:5000`. Test health status at `http://localhost:5000/health`.

---

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file in `frontend/` (or copy from `.env.example`):

```env
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=919643229455
VITE_TELEGRAM_USERNAME=luxuryeventdecor
VITE_INSTAGRAM_URL=https://instagram.com/luxuryeventdecor
VITE_FACEBOOK_URL=https://facebook.com/luxuryeventdecor
```

Start frontend development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📡 API Reference

### POST `/api/inquiry`

Submit a new event decoration booking inquiry.

**Request Body**:
```json
{
  "name": "Ananya Sharma",
  "phone": "+91 98765 43210",
  "email": "ananya@example.com",
  "eventType": "Birthday Decoration",
  "eventDate": "2026-08-15",
  "budget": "₹3,000 - ₹6,000",
  "location": "Sector 137, Noida",
  "message": "Prefer rose gold and metallic black balloon theme."
}
```

**Success Response (201 Created)**:
```json
{
  "success": true,
  "message": "Your inquiry has been submitted successfully! Our team will contact you shortly.",
  "data": {
    "whatsappLink": "https://wa.me/919643229455?text=...",
    "inquiry": {
      "name": "Ananya Sharma",
      "email": "ananya@example.com",
      "eventType": "Birthday Decoration",
      "eventDate": "2026-08-15",
      "location": "Sector 137, Noida"
    }
  }
}
```

---

## 🔮 Future Scalability Features

The codebase is modularly structured so these capabilities can be plugged in seamlessly:
- **Admin Dashboard**: Connect Express authentication middleware to view incoming inquiries.
- **Payment Integration**: Razorpay / UPI deep links for deposit collection.
- **Cloudinary Image Upload**: Admin portal for dynamic gallery uploads.
- **CMS & Blog**: Dynamic management of packages and service descriptions.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
