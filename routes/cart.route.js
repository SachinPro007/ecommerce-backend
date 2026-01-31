import { Router } from "express";
const router = Router();

// Defining order-related routes here
router.use(veryfyLoggedInUser); // Secure routes (only for logged-in users)

router.get('/', getAllCarts);
router.post('/', addToCart);
router.get('/:id', getCartById);
router.put('/:id', updateCartItem);
router.delete('/:id', removeFromCart);

export default router;