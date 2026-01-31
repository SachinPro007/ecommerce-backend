import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js";



const router = Router();

// Defining product-related routes here
router.get('/', getAllProducts);

router.use(veryfyLoggedInUser); // Secure routes (only for sellers/admins)
router.post('/', createProduct);
router.get('/:itemId', getProductById);
router.put('/:itemId', updateProduct);
router.delete('/:itemId', deleteProduct);



export default router;