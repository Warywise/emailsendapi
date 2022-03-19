import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import SendEmail from './hadleEmailSend';

const app = express();

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/', SendEmail);

app.listen(PORT, () => console.log(`Server is online in Port: ${PORT}`));
