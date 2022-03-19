import SGMail from '@sendgrid/mail';
import 'dotenv/config';
import { Request, Response } from 'express';

SGMail.setApiKey(process.env.SENDGRID_API_KEY as string)
const msg = {
  to: process.env.EMAIL as string,
  from: process.env.EMAIL_FROM as string,
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

export default async function SendEmail(_req: Request, res: Response) {
  try {
    await SGMail.send(msg);
    res.send('It\'s all right!');
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
