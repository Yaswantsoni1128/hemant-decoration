const { getResendClient } = require('../config/mail.config');
const env = require('../config/env');
const { ownerEmailTemplate, customerEmailTemplate } = require('../templates/inquiryEmail.template');
const logger = require('../utils/logger');

/** Short unique id so each inquiry email is a new thread (not grouped). */
const createInquiryId = () => {
  const time = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `KD-${time}-${rand}`;
};

const sendInquiryEmails = async (inquiryData) => {
  const resend = getResendClient();
  if (!resend) {
    return false;
  }

  const customerEmail = (inquiryData.email || '').trim();
  if (!customerEmail) {
    logger.error('Customer email missing — cannot send inquiry emails.');
    return false;
  }

  const inquiryId = createInquiryId();
  const submittedAt = inquiryData.submittedAt || new Date().toISOString();
  const payload = { ...inquiryData, email: customerEmail, inquiryId, submittedAt };

  // Unique subjects + X-Entity-Ref-ID prevent Gmail/Outlook from threading as one email
  const ownerSubject = `[${inquiryId}] New inquiry — ${payload.name} | ${payload.eventType} | ${payload.eventDate}`;
  const customerSubject = `[${inquiryId}] Thanks ${payload.name} — we got your ${payload.eventType} request`;

  const antiThreadHeaders = {
    'X-Entity-Ref-ID': inquiryId,
  };

  let ownerOk = false;
  let customerOk = false;

  try {
    // 1) Organisation notification → Khushi email only
    const ownerResult = await resend.emails.send({
      from: env.resend.from,
      to: [env.resend.ownerEmail],
      subject: ownerSubject,
      html: ownerEmailTemplate(payload),
      replyTo: customerEmail,
      headers: antiThreadHeaders,
    });

    if (ownerResult.error) {
      logger.error(`Owner inquiry email failed: ${ownerResult.error.message}`);
    } else {
      ownerOk = true;
      logger.info(`Owner inquiry email sent to ${env.resend.ownerEmail} (${inquiryId})`);
    }
  } catch (error) {
    logger.error('Owner inquiry email error:', error.message);
  }

  try {
    // 2) "Reaching out" confirmation → customer email from the form (kept as-is)
    const customerResult = await resend.emails.send({
      from: env.resend.from,
      to: [customerEmail],
      subject: customerSubject,
      html: customerEmailTemplate(payload),
      headers: {
        ...antiThreadHeaders,
        'X-Entity-Ref-ID': `${inquiryId}-customer`,
      },
    });

    if (customerResult.error) {
      logger.error(`Customer confirmation email failed: ${customerResult.error.message}`);
    } else {
      customerOk = true;
      logger.info(`Customer confirmation email sent to ${customerEmail} (${inquiryId})`);
    }
  } catch (error) {
    logger.error('Customer confirmation email error:', error.message);
  }

  return ownerOk || customerOk;
};

module.exports = {
  sendInquiryEmails,
};
