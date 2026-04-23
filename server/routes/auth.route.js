import express from "express";
import { signup, login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/", isAuthenticated, logout);
export default router;
