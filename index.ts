import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.post('/', );

app.listen(PORT, () => console.log(`Server is online in Port: ${PORT}`));
