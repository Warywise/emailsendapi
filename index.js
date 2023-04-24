import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import SendEmail from './hadleEmailSend.js';
import BodyValidator from './bodyValidator.js';

const app = express();

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.post('/', BodyValidator, SendEmail);
app.get('/', (_req, res) => res.status(200).send('Ok! It\'s all right!')); // health check

app.listen(PORT, () => console.log(`Server is online in Port: ${PORT}`));
