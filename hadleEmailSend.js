import SGMail from '@sendgrid/mail';

import 'dotenv/config';

const SENDGRID_KEY = process.env.SENDGRID_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;
console.log('🔑 SendGrid Key: ', SENDGRID_KEY?.length ? '🆗' : '⛔', '\n- - -\n');
console.log('📧 Email From: ', EMAIL_FROM?.length ? '🆗' : '⛔', '\n- - -\n');

SGMail.setApiKey(SENDGRID_KEY);

const getEmailRequest = (
  { email, sender_name, subject, text, html }
) => ({
  to: email,
  from: `${sender_name} <${EMAIL_FROM}>`,
  subject,
  text,
  html,
});

export default async function SendEmail(req, res) {
  const requestData = req.body;
  console.log('📤 Email Request: ', req.body, '\n- - -\n');

  // if (requestData.secret !== process.env.SECRET) {
  //   return res.status(511).json({ error: 'MISSING AUTH' });
  // }

  const msg = getEmailRequest(requestData);

  try {
    const result = await SGMail.send(msg);
    console.log('📩 Email Send Result: ', result, '\n- - -\n');
    res.status(200).send('It\'s all right!');
  } catch (error) {
    res.status(500).json({ error });
  }
};
