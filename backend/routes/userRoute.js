import express from 'express';
import { loginUser,registerUser,myBlogs } from '../controllers/userController.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/myBlogs',authUser,myBlogs);

export default userRouter;