import SGMail from '@sendgrid/mail';
import 'dotenv/config';
import { Request, Response } from 'express';

SGMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const getEmailRequest = (
  { email, sender_name, subject, text, html }
) => ({
  to: email,
  from: `${sender_name} <${process.env.EMAIL_FROM}>`,
  subject,
  text,
  html,
});

export default async function SendEmail(_req: Request, res: Response) {
  try {
    await SGMail.send(msg);
    res.status(200).send('It\'s all right!');
  } catch (error) {
    res.status(500).json({ error });
  }
};
