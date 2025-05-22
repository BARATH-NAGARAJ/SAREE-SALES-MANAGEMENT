// // import orderModel from "../models/orderModel.js";
// // import userModel from "../models/userModel.js";
// // import QRCode from "qrcode";

// // // Generate a unique payment reference ID
// // const generatePaymentId = () => {
// //   return 'PAY-' + Date.now() + '-' + Math.random().toString(36).substring(2, 10);
// // };

// // // Initialize payment process
// // const initPayment = async (req, res) => {
// //   try {
// //     const paymentRef = generatePaymentId();
    
// //     // Generate QR code with the payment reference
// //     const qrData = JSON.stringify({
// //       paymentRef: paymentRef,
// //       amount: req.body.amount
// //     });
    
// //     const qrCodeDataURL = await QRCode.toDataURL(qrData);

// //     res.json({ 
// //       success: true, 
// //       paymentRef: paymentRef,
// //       qrCodeData: qrCodeDataURL 
// //     });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: "Error initializing payment" });
// //   }
// // };

// // // Place a new order (after payment is confirmed)
// // const placeOrder = async (req, res) => {
// //   try {
// //     const { userId, items, amount, address, paymentRef } = req.body;
    
// //     const newOrder = new orderModel({
// //       userId,
// //       items,
// //       amount,
// //       address,
// //       paymentRef,
// //       payment: true, // Payment is already confirmed
// //     });

// //     await newOrder.save();
    
// //     // Clear user's cart
// //     await userModel.findByIdAndUpdate(userId, { cartData: {} });

// //     res.json({ 
// //       success: true, 
// //       orderId: newOrder._id
// //     });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: "Error in placing order" });
// //   }
// // };

// // // Verify payment success/failure
// // const verifyOrder = async (req, res) => {
// //   const { paymentRef } = req.body;

// //   try {
// //     // In a real scenario, you would check with a payment gateway
// //     // For now, we're simulating a successful verification
    
// //     res.json({ success: true, message: "Payment successful" });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: "Error in verifying payment" });
// //   }
// // };

// // // Simulate payment processing (for testing)
// // const processPayment = async (req, res) => {
// //   const { paymentRef } = req.body;
  
// //   try {
// //     // In a real application, this would interact with a payment gateway
// //     // For testing purposes, we just return success
    
// //     res.json({ success: true, message: "Payment processed successfully" });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: "Error processing payment" });
// //   }
// // };

// // // Fetch orders by user
// // const userOrders = async (req, res) => {
// //   try {
// //     const orders = await orderModel.find({ userId: req.body.userId });
// //     res.json({ success: true, data: orders });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: "Error fetching user orders" });
// //   }
// // };

// // // Admin: List all orders with optional search
// // const listOrders = async (req, res) => {
// //   try {
// //     const searchTerm = req.query.search;
// //     let query = {};

// //     if (searchTerm) {
// //       const regex = new RegExp(searchTerm, 'i'); // Case-insensitive search
// //       query = {
// //         $or: [
// //           { 'address.firstName': regex },
// //           { 'address.lastName': regex },
// //           { 'items.name': regex }, // Search within item names
// //           { 'category': regex }, // Search by category (assuming 'category' exists in your order items)
// //           { 'amount': Number(searchTerm) ? Number(searchTerm) : undefined }, // Try to search by price if it's a number
// //         ],
// //       };
// //       // Remove undefined price query if searchTerm is not a number
// //       if (isNaN(Number(searchTerm))) {
// //         delete query.$or[query.$or.findIndex(q => Object.keys(q).includes('amount'))];
// //         query.$or = query.$or.filter(q => Object.keys(q).length > 0);
// //         if (query.$or.length === 0) delete query.$or; // If no other search terms remain
// //       }
// //     }

// //     const orders = await orderModel.find(query);
// //     res.json({ success: true, data: orders });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: "Error fetching orders" });
// //   }
// // };

// // // Admin: Update order status
// // const updateStatus = async (req, res) => {
// //   try {
// //     await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
// //     res.json({ success: true, message: "Status updated" });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: "Error updating status" });
// //   }
// // };

// // export { initPayment, placeOrder, verifyOrder, processPayment, userOrders, listOrders, updateStatus };
// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import productModel from "../models/productModel.js";
// import { v4 as uuidv4 } from 'uuid';

// // Generate a unique payment reference ID
// const generatePaymentRef = () => {
//   return 'PAY-' + Date.now() + '-' + uuidv4().substring(0, 8);
// };

// // Place a new order
// const placeOrder = async (req, res) => {
//   try {
//     const { address, items, amount } = req.body;
//     const userId = req.userId;
    
//     // Verify stock availability one more time
//     for (const item of items) {
//       const product = await productModel.findById(item._id);
//       if (!product || product.stock < item.quantity) {
//         return res.json({
//           success: false,
//           message: `Not enough stock for ${product?.name || 'a product'}`
//         });
//       }
//     }
    
//     // Generate payment reference
//     const paymentRef = generatePaymentRef();
    
//     // Create new order with pending payment status
//     const newOrder = new orderModel({
//       userId,
//       items,
//       amount,
//       address,
//       paymentRef,
//       payment: false,
//       status: "Payment Pending"
//     });
    
//     await newOrder.save();
    
//     res.json({
//       success: true,
//       orderId: newOrder._id,
//       paymentRef,
//       amount
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error placing order" });
//   }
// };

// // Verify payment status
// const verifyOrder = async (req, res) => {
//   try {
//     const { orderId, paymentRef } = req.body;
    
//     // Find the order
//     const order = await orderModel.findOne({ _id: orderId, paymentRef });
    
//     if (!order) {
//       return res.json({ success: false, message: "Order not found" });
//     }
    
//     // Return current payment status
//     res.json({ 
//       success: true, 
//       paymentConfirmed: order.payment 
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error verifying order" });
//   }
// };

// // Process payment (for development/testing)
// const processPayment = async (req, res) => {
//   try {
//     const { orderId, paymentRef } = req.body;
    
//     // Find the order
//     const order = await orderModel.findOne({ _id: orderId, paymentRef });
    
//     if (!order) {
//       return res.json({ success: false, message: "Order not found" });
//     }
    
//     // Skip if payment already processed
//     if (order.payment) {
//       return res.json({ success: true, message: "Payment already processed" });
//     }
    
//     // Update order payment status
//     order.payment = true;
//     order.status = "Order Confirmed";
//     await order.save();
    
//     // IMPORTANT: Reduce product stock
//     for (const item of order.items) {
//       await productModel.findByIdAndUpdate(
//         item._id,
//         { $inc: { stock: -item.quantity } }
//       );
//     }
    
//     // IMPORTANT: Clear user's cart
//     const userData = await userModel.findById(order.userId);
//     if (userData) {
//       // Clear items that were purchased
//       const cartData = {...userData.cartData};
//       order.items.forEach(item => {
//         delete cartData[item._id];
//       });
      
//       await userModel.findByIdAndUpdate(order.userId, { cartData });
//     }
    
//     res.json({ success: true, message: "Payment processed successfully" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error processing payment" });
//   }
// };

// // Fetch orders for a specific user
// const userOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({ userId: req.userId }).sort({ date: -1 });
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error fetching user orders" });
//   }
// };

// // Admin: List all orders
// const listOrders = async (req, res) => {
//   try {
//     const searchTerm = req.query.search;
//     let query = {};

//     if (searchTerm) {
//       const regex = new RegExp(searchTerm, 'i');
//       query = {
//         $or: [
//           { 'address.firstName': regex },
//           { 'address.lastName': regex },
//           { 'items.name': regex },
//           { 'status': regex }
//         ]
//       };
//     }

//     const orders = await orderModel.find(query).sort({ date: -1 });
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error fetching orders" });
//   }
// };

// // Update order status (admin)
// const updateStatus = async (req, res) => {
//   try {
//     await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
//     res.json({ success: true, message: "Status updated" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error updating status" });
//   }
// };

// export { placeOrder, verifyOrder, processPayment, userOrders, listOrders, updateStatus };
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";
import { v4 as uuidv4 } from 'uuid';

// Generate a unique payment reference ID
const generatePaymentRef = () => {
  return 'PAY-' + Date.now() + '-' + uuidv4().substring(0, 8);
};

// Place a new order and initiate payment simulation
const placeOrder = async (req, res) => {
  try {
    const { address, items, amount } = req.body;
    const userId = req.userId;

    // Verify stock availability
    for (const item of items) {
      const product = await productModel.findById(item._id);
      if (!product || product.stock < item.quantity) {
        return res.json({
          success: false,
          message: `Not enough stock for ${product?.name || 'a product'}`
        });
      }
    }

    const paymentRef = generatePaymentRef();

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
      paymentRef,
      payment: false,
      status: "Payment Pending"
    });

    await newOrder.save();

    res.json({
      success: true,
      orderId: newOrder._id,
      paymentRef,
      amount,
      message: "Order placed. Simulate payment verification in 5-10 seconds."
    });

    // Simulate payment verification after a delay
    setTimeout(async () => {
      try {
        const updatedOrder = await orderModel.findByIdAndUpdate(
          newOrder._id,
          { payment: true, status: "Order Confirmed" },
          { new: true }
        );

        if (updatedOrder) {
          // Reduce product stock
          for (const item of updatedOrder.items) {
            await productModel.findByIdAndUpdate(
              item._id,
              { $inc: { stock: -item.quantity } }
            );
          }

          // Clear user's cart
          const userData = await userModel.findById(userId);
          if (userData) {
            const cartData = { ...userData.cartData };
            updatedOrder.items.forEach(item => {
              delete cartData[item._id];
            });
            await userModel.findByIdAndUpdate(userId, { cartData });
          }

          console.log(`Order ${newOrder._id} payment simulated as successful and order confirmed.`);
        } else {
          console.log(`Order ${newOrder._id} not found for simulated payment.`);
        }
      } catch (paymentError) {
        console.error("Error during simulated payment:", paymentError);
      }
    }, Math.random() * 5000 + 5000); // Random delay between 5 and 10 seconds

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error placing order" });
  }
};

// Verify payment status (can be used by the client to check the status)
const verifyOrder = async (req, res) => {
  try {
    const { orderId } = req.body; // Only need orderId to check status

    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.json({ success: false, message: "Order not found" });
    }

    res.json({
      success: true,
      paymentConfirmed: order.payment,
      status: order.status
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error verifying order" });
  }
};

// Process payment (no longer directly called by the client in this simulation)
const processPayment = async (req, res) => {
  return res.json({ success: false, message: "Payment processing is now simulated automatically after order placement." });
};

// Fetch orders for a specific user
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.userId }).sort({ date: -1 });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching user orders" });
  }
};

// Admin: List all orders
const listOrders = async (req, res) => {
  try {
    const searchTerm = req.query.search;
    let query = {};

    if (searchTerm) {
      const regex = new RegExp(searchTerm, 'i');
      query = {
        $or: [
          { 'address.firstName': regex },
          { 'address.lastName': regex },
          { 'items.name': regex },
          { 'status': regex }
        ]
      };
    }

    const orders = await orderModel.find(query).sort({ date: -1 });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching orders" });
  }
};

// Update order status (admin)
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error updating status" });
  }
};

export { placeOrder, verifyOrder, processPayment, userOrders, listOrders, updateStatus };