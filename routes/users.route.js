import {Router} from 'express';
const route = Router();

// Defining user-related routes here

route.post('/register', registerUser);
route.post('/login', loginUser);

// scure routes
route.use(veryfyLoggedInUser);
route.post("/logout", logoutUser);
route.get("/current-user", getCurrentUser);
route.put('/:id', updateUserProfile);


export default route;