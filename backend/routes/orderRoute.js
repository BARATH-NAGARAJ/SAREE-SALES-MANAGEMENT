// import express from "express";
// import authMiddleware from "../middleware/auth.js";
// import { listOrders,  updateStatus, placeOrder, userOrders, verifyOrder } from "../controllers/orderController.js";

// const orderRouter = express.Router();

// // ✅ Fixed the typo: 'authMiddileware' → 'authMiddleware'
// orderRouter.post("/place", authMiddleware, placeOrder);
// orderRouter.post("/verify", verifyOrder);
// orderRouter.post("/userorders", authMiddleware, userOrders);
// orderRouter.get("/list",listOrders);
// orderRouter.post("/status", updateStatus);
// export default orderRouter;
import express from "express";
import authMiddleware from "../middleware/auth.js";
import { 
  listOrders, 
  updateStatus, 
  placeOrder, 
  userOrders, 
  verifyOrder,
  processPayment
} from "../controllers/orderController.js";

const orderRouter = express.Router();

// User routes with authentication
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);

// Routes that don't require authentication
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/process-payment", processPayment); // For development/testing

// Admin routes (should have admin middleware in production)
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;