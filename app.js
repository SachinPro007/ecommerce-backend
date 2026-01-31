import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// import routes
import userRoute from './routes/users.route.js';
import productRoute from './routes/products.route.js';
import favouriteRoute from './routes/favourites.route.js';
import cartRoute from './routes/cart.route.js';
import orderRoute from './routes/orders.route.js';



// routes declaration
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/favourites", favouriteRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/orders", orderRoute);



export {app};