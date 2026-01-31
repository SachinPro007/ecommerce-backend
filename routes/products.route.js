import { Router } from "express";

const router = Router();

// Defining product-related routes here
router.get('/', getAllProducts);

router.use(veryfyLoggedInUser); // Secure routes (only for sellers/admins)
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);



export default router;