import { Router } from "express";
import { getAllFavourites, toggleToFavourite, getFavouriteById } from "../controllers/favourites.controller.js";


const router = Router();

// Defining favourite-related routes here
router.use(veryfyLoggedInUser); // Secure routes (only for logged-in users)

router.get('/', getAllFavourites);
router.post('/:itemId', toggleToFavourite);
router.get('/:itemId', getFavouriteById);


export default router;