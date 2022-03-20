import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

import { EmailRequest } from './interfaces';

const schema = Joi.object({
  email: Joi.string().email().required(),
  sender_name: Joi.string().min(2).required(),
  subject: Joi.string().min(2).required(),
  text: Joi.string().min(2).required(),
  html: Joi.string().min(9).required(),
});

export default async function BodyValidator(
  req: Request, res: Response, next: NextFunction
) {
  const emailRequest: EmailRequest = req.body;
  const { error } = schema.validate(emailRequest);

  if (error) return res.status(400).json({ error: error.message });

  next();
}
