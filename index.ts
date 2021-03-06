import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import SendEmail from './hadleEmailSend';
import BodyValidator from './bodyValidator';

const app = express();

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.post('/', BodyValidator, SendEmail);

app.listen(PORT, () => console.log(`Server is online in Port: ${PORT}`));
