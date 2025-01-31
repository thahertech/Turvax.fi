import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { subject, body, recipientEmail } = req.body;

  try {
    await sendgrid.send({
      to: recipientEmail,
      from: 'info@turvax.fi',
      subject: subject,
      text: body,
      html: `<p>${body}</p>`,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}