const ownerEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; }
    .container { max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #b45309 0%, #d97706 100%); color: #fffbeb; padding: 25px; text-align: center; }
    .header h2 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 25px; color: #334155; }
    .table-info { width: 100%; border-collapse: collapse; margin-top: 15px; }
    .table-info td { padding: 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
    .table-info td.label { font-weight: 600; color: #0f172a; width: 35%; }
    .footer { background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Event Inquiry Received</h2>
    </div>
    <div class="content">
      <p>Hello Khushi Decorations,</p>
      <p>You have received a <strong>new</strong> booking inquiry from your website:</p>
      <table class="table-info">
        <tr><td class="label">Inquiry ID:</td><td>${data.inquiryId || 'N/A'}</td></tr>
        <tr><td class="label">Customer Name:</td><td>${data.name}</td></tr>
        <tr><td class="label">Phone Number:</td><td>${data.phone}</td></tr>
        <tr><td class="label">Customer Email:</td><td>${data.email}</td></tr>
        <tr><td class="label">Event Type:</td><td>${data.eventType}</td></tr>
        <tr><td class="label">Event Date:</td><td>${data.eventDate}</td></tr>
        <tr><td class="label">Budget Range:</td><td>${data.budget || 'Not specified'}</td></tr>
        <tr><td class="label">Location:</td><td>${data.location}</td></tr>
        <tr><td class="label">Special Request:</td><td>${data.message || 'N/A'}</td></tr>
      </table>
    </div>
    <div class="footer">
      <p>Automated notification from Khushi Decorations website.</p>
    </div>
  </div>
</body>
</html>
`;

const customerEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; }
    .container { max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #b45309 0%, #d97706 100%); color: #fffbeb; padding: 30px; text-align: center; }
    .header h2 { margin: 0; font-size: 24px; font-weight: 600; }
    .content { padding: 30px; color: #334155; line-height: 1.6; }
    .badge { display: inline-block; background: #fef3c7; color: #92400e; padding: 6px 14px; border-radius: 20px; font-weight: 600; font-size: 13px; margin-bottom: 15px; }
    .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 13px; color: #64748b; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Thank You for Reaching Out!</h2>
    </div>
    <div class="content">
      <div class="badge">Inquiry Received${data.inquiryId ? ` · ${data.inquiryId}` : ''}</div>
      <p>Dear <strong>${data.name}</strong>,</p>
      <p>Thank you for contacting <strong>Khushi Decorations</strong> for your <strong>${data.eventType}</strong> on <strong>${data.eventDate}</strong>.</p>
      <p>This confirmation was sent to <strong>${data.email}</strong>.</p>
      <p>Our team has received your request and will get in touch shortly via call or WhatsApp.</p>
      <br>
      <p>Warm regards,<br><strong>Khushi Decorations</strong></p>
    </div>
    <div class="footer">
      <p>Need urgent help? Reply to this email or chat with us on WhatsApp.</p>
    </div>
  </div>
</body>
</html>
`;

module.exports = {
  ownerEmailTemplate,
  customerEmailTemplate,
};
