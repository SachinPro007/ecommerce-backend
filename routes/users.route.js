import { Router } from 'express';

import { registerUser, loginUser, logoutUser, getCurrentUser, updateUserProfile } from '../controllers/users.controller.js';
import { veryfyLoggedInUser } from '../middlewares/auth.middleware.js';


const route = Router();
// Defining user-related routes here

route.post('/register', registerUser);
route.post('/login', loginUser);

// scure routes
route.use(veryfyLoggedInUser);
route.post("/logout", logoutUser);
route.get("/current-user", getCurrentUser);
route.put('/:userId', updateUserProfile);


export default route;