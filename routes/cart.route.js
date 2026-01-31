import { Router } from "express";
import { addToCart, getAllCarts, getCartById, removeFromCart, updateCartItem } from "../controllers/cart.controller.js";


const router = Router();

// Defining order-related routes here
router.use(veryfyLoggedInUser); // Secure routes (only for logged-in users)

router.get('/', getAllCarts);
router.post('/', addToCart);
router.get('/:itemId', getCartById);
router.put('/:itemId', updateCartItem);
router.delete('/:itemId', removeFromCart);

export default router;