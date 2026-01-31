import { Router } from "express";

import { getAllOrders, getOrderById, addNewOrder, updateOrderStatus } from "../controllers/orders.controller.js";



const router = Router();

// Defining order-related routes here
router.use(veryfyLoggedInUser); // Secure routes (only for logged-in users)

router.get('/', getAllOrders);
router.post('/', addNewOrder);
router.get('/:orderId', getOrderById);
router.put('/:orderId', updateOrderStatus);


export default router;