import { Router } from "express";
const router = Router();

// Defining favourite-related routes here
router.use(veryfyLoggedInUser); // Secure routes (only for logged-in users)

router.get('/', getAllFavourites);
router.post('/:id', toggleToFavourite);
router.get('/:id', getFavouriteById);


export default router;