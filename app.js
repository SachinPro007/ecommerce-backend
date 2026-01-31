import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.json({name: "Sachin Sehrawat", role: "Mern Stack developer"})
})


const PORT = 8080
app.listen(PORT, () => {
  console.log("server runing on port ", PORT);  
})