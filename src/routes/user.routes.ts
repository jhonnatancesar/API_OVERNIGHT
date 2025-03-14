import { Router } from 'express';
import UserController from '../controllers/userController';
// Users layout Route
const userRoute = Router();
userRoute.post('', UserController.createUser);
userRoute.get('', UserController.getUsers);
userRoute.get('/:userid', UserController.getUser);
userRoute.delete('/:userid', UserController.deleteUser);
userRoute.patch('/:userid', UserController.updateUser);
export default userRoute;