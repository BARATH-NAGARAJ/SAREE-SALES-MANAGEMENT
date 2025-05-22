import express from "express";
import { addToCart, removeFromCart, getCart, checkout } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

// All routes require authentication
cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);
cartRouter.post("/checkout", checkout); // No auth middleware for checkout to allow guest checkout

export default cartRouter;
