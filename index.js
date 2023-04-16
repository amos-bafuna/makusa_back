import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config();
const app = express();
connectDB();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`The server is runnig on port: ${port}`);
});
