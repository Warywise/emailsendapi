import Nodemailer from 'nodemailer';
import 'dotenv/config';
import { Request, Response } from 'express';

async function main() {
  // const testAccount = await Nodemailer.createTestAccount();

  const transporter = Nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `"Fred Foo 👻" <${process.env.EMAIL}>`,
    to: 'g_santanna@outlook.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", Nodemailer.getTestMessageUrl(info));
};

export default async function SendEmail(_req: Request, res: Response) {
  try {
    await main();
    res.send('It\'s all right!');
  } catch (error) {
    res.send('Error!');
  }
};
