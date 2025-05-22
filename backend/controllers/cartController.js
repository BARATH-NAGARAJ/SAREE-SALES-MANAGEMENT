// // import userModel from "../models/userModel.js";

// // const addTocart = async (req, res) => {
// //     try {
// //         let userData = await userModel.findOne({ _id: req.body.userId });
// //         let cartData = userData.cartData;

// //         if (!cartData[req.body.itemId]) {
// //             cartData[req.body.itemId] = 1;
// //         } else {
// //             cartData[req.body.itemId] += 1;
// //         }

// //         await userModel.findByIdAndUpdate(req.body.userId, { cartData });
// //         res.json({ success: true, message: "Added to Cart" });
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: "Error" });
// //     }
// // };

// // const removeFromCart = async (req, res) => {
// //     try {
// //         let userData = await userModel.findById(req.body.userId);
// //         let cartData = userData.cartData;

// //         if (cartData[req.body.itemId] > 0) {
// //             cartData[req.body.itemId] -= 1;
// //         }

// //         await userModel.findByIdAndUpdate(req.body.userId, { cartData });
// //         res.json({ success: true, message: "Removed from cart" });
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: "Error" });
// //     }
// // };

// // const getCart = async (req, res) => {
// //     try {
// //         let userData = await userModel.findById(req.body.userId);
// //         let cartData = userData.cartData;
// //         res.json({ success: true, cartData });
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: "Error" });
// //     }
// // };

// // export { addTocart, removeFromCart, getCart };
// // Updated cartController.js
// import userModel from "../models/userModel.js";
// import productModel from "../models/productModel.js";

// const addTocart = async (req, res) => {
//   try {
//     // First check if product has enough stock
//     const product = await productModel.findById(req.body.itemId);
    
//     if (!product) {
//       return res.json({ 
//         success: false, 
//         message: "Product not found" 
//       });
//     }
    
//     // Get user's current cart data
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = userData.cartData;
    
//     // Calculate current quantity in cart (0 if not in cart yet)
//     const currentQty = cartData[req.body.itemId] || 0;
    
//     // Check if adding one more would exceed stock
//     if (currentQty + 1 > product.stock) {
//       return res.json({ 
//         success: false, 
//         message: `Cannot add more. Only ${product.stock} available in stock.` 
//       });
//     }
    
//     // If enough stock, proceed with adding to cart
//     if (!cartData[req.body.itemId]) {
//       cartData[req.body.itemId] = 1;
//     } else {
//       cartData[req.body.itemId] += 1;
//     }
    
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//     res.json({ 
//       success: true, 
//       message: "Added to Cart",
//       remainingStock: product.stock - cartData[req.body.itemId]
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// const removeFromCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = userData.cartData;
    
//     if (cartData[req.body.itemId] > 0) {
//       cartData[req.body.itemId] -= 1;
//     }
    
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//     res.json({ success: true, message: "Removed from cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// const getCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = userData.cartData;
    
//     // Get current stock information for all items in the cart
//     const cartWithStock = { ...cartData };
    
//     // Add stock information for frontend to use
//     const stockInfo = {};
//     for (const itemId in cartData) {
//       if (cartData[itemId] > 0) {
//         const product = await productModel.findById(itemId);
//         if (product) {
//           stockInfo[itemId] = product.stock;
//         }
//       }
//     }
    
//     res.json({ 
//       success: true, 
//       cartData,
//       stockInfo // Include stock information in the response
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // New function to checkout/process order
// const checkout = async (req, res) => {
//   try {
//     const { userId, cartItems } = req.body;
    
//     // Verify user exists
//     const user = await userModel.findById(userId);
//     if (!user) {
//       return res.json({ success: false, message: "User not found" });
//     }
    
//     // Verify stock for all items in cart
//     for (const itemId in cartItems) {
//       if (cartItems[itemId] > 0) {
//         const product = await productModel.findById(itemId);
        
//         if (!product) {
//           return res.json({ 
//             success: false, 
//             message: `Product with ID ${itemId} not found` 
//           });
//         }
        
//         if (product.stock < cartItems[itemId]) {
//           return res.json({ 
//             success: false, 
//             message: `Not enough stock for ${product.name}. Available: ${product.stock}` 
//           });
//         }
//       }
//     }
    
//     // Process order by updating stock for each item
//     for (const itemId in cartItems) {
//       if (cartItems[itemId] > 0) {
//         const product = await productModel.findById(itemId);
        
//         // Update stock
//         product.stock -= cartItems[itemId];
//         await product.save();
//       }
//     }
    
//     // Clear user's cart
//     await userModel.findByIdAndUpdate(userId, { cartData: {} });
    
//     res.json({ success: true, message: "Order processed successfully" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error processing order" });
//   }
// };

// export { addTocart, removeFromCart, getCart, checkout };
import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";

// Add item to cart with stock check
const addToCart = async (req, res) => {
  try {
    // Check if product has enough stock
    const product = await productModel.findById(req.body.itemId);
    
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }
    
    // Get user's current cart data
    let userData = await userModel.findById(req.userId);
    let cartData = userData.cartData;
    
    // Calculate current quantity in cart
    const currentQty = cartData[req.body.itemId] || 0;
    
    // Check if adding one more would exceed stock
    if (currentQty + 1 > product.stock) {
      return res.json({ 
        success: false, 
        message: `Cannot add more. Only ${product.stock} available in stock.` 
      });
    }
    
    // Add to cart
    cartData[req.body.itemId] = currentQty + 1;
    
    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.userId);
    let cartData = userData.cartData;
    
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    
    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Get cart with current stock information
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.userId);
    let cartData = userData.cartData;
    
    // Get current stock information for all items in the cart
    const stockInfo = {};
    for (const itemId in cartData) {
      if (cartData[itemId] > 0) {
        const product = await productModel.findById(itemId);
        if (product) {
          stockInfo[itemId] = product.stock;
        }
      }
    }
    
    res.json({ success: true, cartData, stockInfo });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Verify product stock for checkout
const checkout = async (req, res) => {
  try {
    const { userId, cartItems } = req.body;
    
    // Verify user exists
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    
    // Verify stock for all items in cart
    let totalAmount = 0;
    const itemsWithDetails = [];
    
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = await productModel.findById(itemId);
        
        if (!product) {
          return res.json({ success: false, message: `Product not found` });
        }
        
        if (product.stock < cartItems[itemId]) {
          return res.json({ 
            success: false, 
            message: `Not enough stock for ${product.name}. Available: ${product.stock}` 
          });
        }
        
        // Calculate item total and add to order details
        const itemTotal = product.price * cartItems[itemId];
        totalAmount += itemTotal;
        
        itemsWithDetails.push({
          _id: itemId,
          name: product.name,
          price: product.price,
          quantity: cartItems[itemId]
        });
      }
    }
    
    res.json({ 
      success: true, 
      message: "Stock verified", 
      items: itemsWithDetails,
      amount: totalAmount
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error processing checkout" });
  }
};

export { addToCart, removeFromCart, getCart, checkout };