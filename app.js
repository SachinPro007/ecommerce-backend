import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use((req, res, next) => {
  res.json({name: "Sachin Sehrawat", role: "Mern Stack developer"})
})


export {app};