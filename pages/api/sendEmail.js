// // pages/api/sendEmail.js
// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Ensure you have the SendGrid API key set in your environment variables

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { to, subject, text, html } = req.body;

//     const msg = {
//       to,
//       from: 'your-email@example.com', // Your SendGrid verified sender email
//       subject,
//       text,
//       html,
//     };

//     try {
//       await sgMail.send(msg);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Error sending email' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }