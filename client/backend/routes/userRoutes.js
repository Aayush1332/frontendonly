import express from "express";
import { login, register, logout, getUser } from "../controllers/userController.js";
import { isAuthenticated, refreshToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);
router.post('/refresh', refreshToken);

export default router;
