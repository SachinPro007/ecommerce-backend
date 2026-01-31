import mongoose from 'mongoose'
import {app} from './app.js';

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_URI).then(value => {
  console.log("MongoDB connected")  

  app.listen(PORT, () => {
    console.log("server runing on port ", PORT);  
  })
}).catch(err => {
  console.log("MongoDB connection failed", err);  
})