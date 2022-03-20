import { Request, Response } from 'express';
import SGMail from '@sendgrid/mail';

import 'dotenv/config';

import { EmailRequest } from './interfaces';

SGMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const getEmailRequest = (
  { email, sender_name, subject, text, html }: EmailRequest
) => ({
  to: email,
  from: `${sender_name} <${process.env.EMAIL_FROM}>`,
  subject,
  text,
  html,
});

export default async function SendEmail(req: Request, res: Response) {
  const requestData: EmailRequest = req.body;

  // if (requestData.secret !== process.env.SECRET) {
  //   return res.status(511).json({ error: 'MISSING AUTH' });
  // }

  const msg = getEmailRequest(requestData);

  try {
    await SGMail.send(msg);
    res.status(200).send('It\'s all right!');
  } catch (error) {
    res.status(500).json({ error });
  }
};
