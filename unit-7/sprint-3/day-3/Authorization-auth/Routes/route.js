
import express from 'express';
import { loggedInUser, login, register } from '../Controllers/Auth.js';

const AuthRouter = express.Router();

AuthRouter.post("/login", login);
AuthRouter.post("/register", register);

export default AuthRouter;