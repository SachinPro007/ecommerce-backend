import { Router } from "express";
import route from "./users.route";
const router = Router();

// Defining order-related routes here
router.use(veryfyLoggedInUser); // Secure routes (only for logged-in users)

route.get('/', getAllOrders);
router.post('/', addNewOrder);
router.get('/:id', getOrderById);
router.put('/:id', updateOrderStatus);


export default router;