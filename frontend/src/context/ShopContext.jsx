// // // // // // // import React, { createContext, useEffect } from 'react';
// // // // // // // import { all_products } from "../assets/data";

// // // // // // // export const ShopContext = createContext(null);
// // // // // // // const ShopContextProvider = (props) => {
// // // // // // //     const [cartItems, setCartItems] = useState({});

// // // // // // //     const addToCart = (itemId) => {
// // // // // // //         if(!cartItems[itemId]) {
// // // // // // //             setCartItems((prev) => ({ ...prev, [itemId]: 1}));
// // // // // // //         }
// // // // // // //         else{
// // // // // // //             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] +1}));
// // // // // // //         }
// // // // // // //     };
// // // // // // //     const removeFromCart = (itemId) => {
// // // // // // //         setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId]-1})); 
// // // // // // //     };

// // // // // // //     useEffect(()=>{
// // // // // // //         console.log(cartItems)
// // // // // // //     },[cartItems])
// // // // // // //     const contextValue = { all_products, cartItems, setCartItems, addToCart, removeFromCart};

// // // // // // //     return (
// // // // // // //         <ShopContext.Provider value={contextValue}>
// // // // // // //             {props.children}
// // // // // // //         </ShopContext.Provider>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default ShopContextProvider;
// // // // // // import React, { createContext, useEffect, useState } from 'react';
// // // // // // import { all_products } from "../assets/data";

// // // // // // export const ShopContext = createContext(null);

// // // // // // const ShopContextProvider = ({ children }) => {
// // // // // //   const [cartItems, setCartItems] = useState({});
// // // // // //   const url = "http://localhost:4000"
// // // // // //   const[token, setToken] = useState("")
// // // // // //   const [all_product, setAll_products] = useSttae([])

// // // // // //   const addToCart = (itemId) => {
// // // // // //     if (!cartItems[itemId]) {
// // // // // //       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
// // // // // //     } else {
// // // // // //       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
// // // // // //     }
// // // // // //   };

// // // // // //   const removeFromCart = (itemId) => {
// // // // // //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
// // // // // //   };

// // // // // //   const getTotalCartAmount = () => {
// // // // // //     let totalAmount = 0;
// // // // // //     for (const itemId in cartItems) {
// // // // // //       if (cartItems[itemId] > 0) {
// // // // // //         const itemInfo = all_products.find(product => product._id === itemId);
// // // // // //         if (itemInfo) {
// // // // // //           totalAmount += itemInfo.price * cartItems[itemId];
// // // // // //         }
// // // // // //       }
// // // // // //     }
// // // // // //     return totalAmount;
// // // // // //   }

// // // // // //   const getTotalCartItems = () => {
// // // // // //     let totalItems = 0;
// // // // // //     for(const item in cartItems){
// // // // // //       totalItems += cartItems[item];
// // // // // //     }
// // // // // //     return totalItems;
    
// // // // // //   }

// // // // // //   // useEffect(() => {
// // // // // //   //   console.log(cartItems);
// // // // // //   // }, [cartItems]);

// // // // // //   const fetchPRoductList = async()=>{
// // // // // //     const response = await axios.get(url+/"apo/product/list")
// // // // // //     setAll_products(response.data.data)
// // // // // //   }

// // // // // // useEffect(()=>{
// // // // // //   async function loadData(){
// // // // // //     await fetchProductList();
// // // // // // if(localStorage.getItems("token")){
// // // // // //   setToken(localStorage.getItem("token"));
// // // // // // }
// // // // // // // async function loadData;{
// // // // // // //   await fetchProductList()

// // // // // // // }
// // // // // //   }
// // // // // //   loadData();
// // // // // // },
// // // // // // []);


// // // // // //   const contextValue = {
// // // // // //     all_products,
// // // // // //     cartItems,
// // // // // //     setCartItems,
// // // // // //     addToCart,
// // // // // //     removeFromCart,
// // // // // //     getTotalCartAmount,
// // // // // //     getTotalCartItems,
// // // // // //     url, 
// // // // // //     token,
// // // // // //     setToken
// // // // // //   };

// // // // // //   return (
// // // // // //     <ShopContext.Provider value={contextValue}>
// // // // // //       {children}
// // // // // //     </ShopContext.Provider>
// // // // // //   );
// // // // // // };

// // // // // // export default ShopContextProvider;
// // // // // import React, { createContext, useEffect, useState } from 'react';
// // // // // import { all_products } from "../assets/data";
// // // // // import axios from "axios"; // ❗ You forgot to import axios

// // // // // export const ShopContext = createContext(null);

// // // // // const ShopContextProvider = ({ children }) => {
// // // // //   const [cartItems, setCartItems] = useState({});
// // // // //   const url = "http://localhost:4000";
// // // // //   const [token, setToken] = useState("");
// // // // //   const [all_products, setAll_products] = useState([]); // ❗ Typo: useSttae → useState

// // // // //   const addToCart = async(itemId) => {
// // // // //     if (!cartItems[itemId]) {
// // // // //       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
// // // // //     } else {
// // // // //       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
// // // // //     }
// // // // //     if(token){
// // // // //       await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
// // // // //     }
// // // // //   };

// // // // //   const removeFromCart = async(itemId) => {
// // // // //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
// // // // //     if(token){
// // // // //       await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
// // // // //     }
// // // // //   };

// // // // //   const getTotalCartAmount = () => {
// // // // //     let totalAmount = 0;
// // // // //     for (const itemId in cartItems) {
// // // // //       if (cartItems[itemId] > 0) {
// // // // //         const itemInfo = all_products.find(product => product._id === itemId);
// // // // //         if (itemInfo) {
// // // // //           totalAmount += itemInfo.price * cartItems[itemId];
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //     return totalAmount;
// // // // //   };

// // // // //   const getTotalCartItems = () => {
// // // // //     let totalItems = 0;
// // // // //     for (const item in cartItems) {
// // // // //       totalItems += cartItems[item];
// // // // //     }
// // // // //     return totalItems;
// // // // //   };

// // // // //   const fetchProductList = async () => { // ❗ Typo: fetchPRoductList → fetchProductList
// // // // //     const response = await axios.get(url + "/api/product/list"); // ❗ Typo in URL: "apo" → "api"
// // // // //     setAll_products(response.data.data);
// // // // //   };

// // // // //   const loadCartData = async (token)=>{
// // // // //     const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
// // // // //     setCartItems(response.data.cartData);
// // // // //   }

// // // // //   useEffect(() => {
// // // // //     async function loadData() {
// // // // //       await fetchProductList();
// // // // //       if (localStorage.getItem("token")) { // ❗ Typo: getItems → getItem
// // // // //         setToken(localStorage.getItem("token"));
// // // // //         await loadCartData(localStorage.getItem("token"))
// // // // //       }
// // // // //     }
// // // // //     loadData();
// // // // //   }, []);

// // // // //   const contextValue = {
// // // // //     all_products,
// // // // //     cartItems,
// // // // //     setCartItems,
// // // // //     addToCart,
// // // // //     removeFromCart,
// // // // //     getTotalCartAmount,
// // // // //     getTotalCartItems,
// // // // //     url,
// // // // //     token,
// // // // //     setToken,
// // // // //   };

// // // // //   return (
// // // // //     <ShopContext.Provider value={contextValue}>
// // // // //       {children}
// // // // //     </ShopContext.Provider>
// // // // //   );
// // // // // };

// // // // // export default ShopContextProvider;
// // // // import React, { createContext, useEffect, useState } from 'react';
// // // // import { all_products } from "../assets/data";
// // // // import axios from "axios"; // ❗ You forgot to import axios

// // // // export const ShopContext = createContext(null);

// // // // const ShopContextProvider = ({ children }) => {
// // // //   const [cartItems, setCartItems] = useState({});
// // // //   const url = "http://localhost:4000";
// // // //   const [token, setToken] = useState("");
// // // //   const [all_products, setAll_products] = useState([]); // ❗ Typo: useSttae → useState

// // // //   const addToCart = async (itemId) => {
// // // //     if (!cartItems[itemId]) {
// // // //       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
// // // //     } else {
// // // //       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
// // // //     }
// // // //     if (token) {
// // // //       await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
// // // //     }
// // // //   };

// // // //   const removeFromCart = async (itemId) => {
// // // //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
// // // //     if (token) {
// // // //       await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
// // // //     }
// // // //   };

// // // //   const getTotalCartAmount = () => {
// // // //     let totalAmount = 0;
// // // //     for (const itemId in cartItems) {
// // // //       if (cartItems[itemId] > 0) {
// // // //         const itemInfo = all_products.find(product => product._id === itemId);
// // // //         if (itemInfo) {
// // // //           totalAmount += itemInfo.price * cartItems[itemId];
// // // //         }
// // // //       }
// // // //     }
// // // //     return totalAmount;
// // // //   };

// // // //   const getTotalCartItems = () => {
// // // //     let totalItems = 0;
// // // //     for (const item in cartItems) {
// // // //       totalItems += cartItems[item];
// // // //     }
// // // //     return totalItems;
// // // //   };

// // // //   const fetchProductList = async () => { // ❗ Typo: fetchPRoductList → fetchProductList
// // // //     const response = await axios.get(url + "/api/product/list"); // ❗ Typo in URL: "apo" → "api"
// // // //     setAll_products(response.data.data);
// // // //   };

// // // //   const loadCartData = async (currentToken) => { // Renamed parameter for clarity
// // // //     try {
// // // //       const response = await axios.post(url + "/api/cart/get", {}, { headers: { token: currentToken } });
// // // //       setCartItems(response.data.cartData);
// // // //     } catch (error) {
// // // //       console.error("Error loading cart data:", error);
// // // //       // Handle potential errors here (e.g., user not logged in on backend)
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     async function loadData() {
// // // //       await fetchProductList();
// // // //       const storedToken = localStorage.getItem("token");
// // // //       if (storedToken) { // ❗ Typo: getItems → getItem
// // // //         setToken(storedToken);
// // // //         await loadCartData(storedToken);
// // // //       }
// // // //     }
// // // //     loadData();
// // // //   }, []);

// // // //   const contextValue = {
// // // //     all_products,
// // // //     cartItems,
// // // //     setCartItems,
// // // //     addToCart,
// // // //     removeFromCart,
// // // //     getTotalCartAmount,
// // // //     getTotalCartItems,
// // // //     url,
// // // //     token,
// // // //     setToken,
// // // //   };

// // // //   return (
// // // //     <ShopContext.Provider value={contextValue}>
// // // //       {children}
// // // //     </ShopContext.Provider>
// // // //   );
// // // // };

// // // // export default ShopContextProvider;

// // import React, { createContext, useEffect, useState } from 'react';
// // import axios from "axios"; // Import axios

// // export const ShopContext = createContext(null);

// // const ShopContextProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState({});
// //   const [token, setToken] = useState("");
// //   const [all_products, setAll_products] = useState([]);
// //   const url = "http://localhost:4000";

// //   // Add item to cart
// //   const addToCart = async (itemId) => {
// //     setCartItems((prev) => ({
// //       ...prev,
// //       [itemId]: (prev[itemId] || 0) + 1
// //     }));

// //     if (token) {
// //       try {
// //         await axios.post(`${url}/api/cart/add`, { itemId }, {
// //           headers: { token }
// //         });
// //       } catch (error) {
// //         console.error("Error adding to cart:", error);
// //       }
// //     }
// //   };

// //   // Remove item from cart
// //   const removeFromCart = async (itemId) => {
// //     setCartItems((prev) => ({
// //       ...prev,
// //       [itemId]: (prev[itemId] || 0) - 1
// //     }));

// //     if (token) {
// //       try {
// //         await axios.post(`${url}/api/cart/remove`, { itemId }, {
// //           headers: { token }
// //         });
// //       } catch (error) {
// //         console.error("Error removing from cart:", error);
// //       }
// //     }
// //   };

// //   // Get total amount in cart
// //   const getTotalCartAmount = () => {
// //     let totalAmount = 0;
// //     for (const itemId in cartItems) {
// //       if (cartItems[itemId] > 0) {
// //         const itemInfo = all_products.find(product => product._id === itemId);
// //         if (itemInfo) {
// //           totalAmount += itemInfo.price * cartItems[itemId];
// //         }
// //       }
// //     }
// //     return totalAmount;
// //   };

// //   // Get total number of items in cart
// //   const getTotalCartItems = () => {
// //     let totalItems = 0;
// //     for (const item in cartItems) {
// //       totalItems += cartItems[item];
// //     }
// //     return totalItems;
// //   };

// //   // Fetch product list from backend
// //   const fetchProductList = async () => {
// //     try {
// //       const response = await axios.get(`${url}/api/product/list`);
// //       setAll_products(response.data.data);
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //     }
// //   };

// //   // Load cart data from backend
// //   const loadCartData = async (currentToken) => {
// //     try {
// //       const response = await axios.post(`${url}/api/cart/get`, {}, {
// //         headers: { token: currentToken }
// //       });
// //       setCartItems(response.data.cartData);
// //     } catch (error) {
// //       console.error("Error loading cart data:", error);
// //     }
// //   };

// //   // Load product and cart data on mount
// //   useEffect(() => {
// //     async function loadData() {
// //       await fetchProductList();

// //       const storedToken = localStorage.getItem("token");
// //       if (storedToken) {
// //         setToken(storedToken);
// //         await loadCartData(storedToken);
// //       }
// //     }
// //     loadData();
// //   }, []);

// //   // Context value shared across the app
// //   const contextValue = {
// //     all_products,
// //     cartItems,
// //     setCartItems,
// //     addToCart,
// //     removeFromCart,
// //     getTotalCartAmount,
// //     getTotalCartItems,
// //     url,
// //     token,
// //     setToken,
// //   };

// //   return (
// //     <ShopContext.Provider value={contextValue}>
// //       {children}
// //     </ShopContext.Provider>
// //   );
// // };

// // export default ShopContextProvider;
// // Modified ShopContext.jsx
// import React, { createContext, useEffect, useState } from 'react';
// import axios from "axios";

// export const ShopContext = createContext(null);

// const ShopContextProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState({});
//   const [token, setToken] = useState("");
//   const [all_products, setAll_products] = useState([]);
//   const url = "http://localhost:4000";

//   // Add item to cart with stock check
//   const addToCart = async (itemId) => {
//     // Find product to check stock
//     const product = all_products.find(p => p._id === itemId);
    
//     // Get current quantity in cart (default to 0 if not present)
//     const currentQty = cartItems[itemId] || 0;
    
//     // Check if adding one more would exceed available stock
//     if (product && currentQty >= product.stock) {
//       alert(`Sorry! Only ${product.stock} items available in stock.`);
//       return;
//     }
    
//     // Update local cart state
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: currentQty + 1
//     }));

//     // Update server cart if logged in
//     if (token) {
//       try {
//         await axios.post(`${url}/api/cart/add`, { itemId }, {
//           headers: { token }
//         });
//       } catch (error) {
//         console.error("Error adding to cart:", error);
//       }
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) - 1
//     }));

//     if (token) {
//       try {
//         await axios.post(`${url}/api/cart/remove`, { itemId }, {
//           headers: { token }
//         });
//       } catch (error) {
//         console.error("Error removing from cart:", error);
//       }
//     }
//   };

//   // Get total amount in cart
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const itemId in cartItems) {
//       if (cartItems[itemId] > 0) {
//         const itemInfo = all_products.find(product => product._id === itemId);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[itemId];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   // Get total number of items in cart
//   const getTotalCartItems = () => {
//     let totalItems = 0;
//     for (const item in cartItems) {
//       totalItems += cartItems[item];
//     }
//     return totalItems;
//   };

//   // Check if product is in stock
//   const isInStock = (productId) => {
//     const product = all_products.find(p => p._id === productId);
//     return product && product.stock > 0;
//   };

//   // Get available stock for a product
//   const getAvailableStock = (productId) => {
//     const product = all_products.find(p => p._id === productId);
//     return product ? product.stock : 0;
//   };

//   // Fetch product list from backend
//   const fetchProductList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/product/list`);
//       setAll_products(response.data.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Load cart data from backend
//   const loadCartData = async (currentToken) => {
//     try {
//       const response = await axios.post(`${url}/api/cart/get`, {}, {
//         headers: { token: currentToken }
//       });
//       setCartItems(response.data.cartData);
//     } catch (error) {
//       console.error("Error loading cart data:", error);
//     }
//   };

//   // Process checkout/order
//   const checkout = async () => {
//     try {
//       // Verify stock availability before checkout
//       for (const itemId in cartItems) {
//         if (cartItems[itemId] > 0) {
//           const product = all_products.find(p => p._id === itemId);
//           if (!product || product.stock < cartItems[itemId]) {
//             alert(`Not enough stock for ${product?.name || 'a product'}`);
//             return false;
//           }
//         }
//       }
      
//       // Proceed with checkout
//       if (token) {
//         const response = await axios.post(`${url}/api/order/create`, { cartItems }, {
//           headers: { token }
//         });
        
//         if (response.data.success) {
//           // Update products stock after successful order
//           await fetchProductList();
//           setCartItems({});
//           return true;
//         }
//       } else {
//         // For non-logged in users, just update stock
//         for (const itemId in cartItems) {
//           if (cartItems[itemId] > 0) {
//             await axios.post(`${url}/api/product/update-stock`, {
//               productId: itemId,
//               quantity: cartItems[itemId]
//             });
//           }
//         }
//         await fetchProductList();
//         setCartItems({});
//         return true;
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//       return false;
//     }
//   };

//   // Load product and cart data on mount
//   useEffect(() => {
//     async function loadData() {
//       await fetchProductList();

//       const storedToken = localStorage.getItem("token");
//       if (storedToken) {
//         setToken(storedToken);
//         await loadCartData(storedToken);
//       }
//     }
//     loadData();
//   }, []);

//   // Context value shared across the app
//   const contextValue = {
//     all_products,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     getTotalCartItems,
//     isInStock,
//     getAvailableStock,
//     checkout,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [all_products, setAll_products] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const url = "http://localhost:4000";

  // Add item to cart with stock check
  const addToCart = async (itemId) => {
    // Find product to check stock
    const product = all_products.find(p => p._id === itemId);
    
    // Get current quantity in cart (default to 0 if not present)
    const currentQty = cartItems[itemId] || 0;
    
    // Check if adding one more would exceed available stock
    if (product && currentQty >= product.stock) {
      alert(`Sorry! Only ${product.stock} items available in stock.`);
      return;
    }
    
    // Update local cart state
    setCartItems((prev) => ({
      ...prev,
      [itemId]: currentQty + 1
    }));

    // Update server cart if logged in
    if (token) {
      try {
        await axios.post(`${url}/api/cart/add`, { itemId }, {
          headers: { token }
        });
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) - 1
    }));

    if (token) {
      try {
        await axios.post(`${url}/api/cart/remove`, { itemId }, {
          headers: { token }
        });
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    }
  };

  // Get total amount in cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = all_products.find(product => product._id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  // Get total number of items in cart
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  // Check if product is in stock
  const isInStock = (productId) => {
    const product = all_products.find(p => p._id === productId);
    return product && product.stock > 0;
  };

  // Get available stock for a product
  const getAvailableStock = (productId) => {
    const product = all_products.find(p => p._id === productId);
    return product ? product.stock : 0;
  };

  // Fetch product list from backend
  const fetchProductList = async () => {
    try {
      setIsUpdating(true);
      const response = await axios.get(`${url}/api/product/list`);
      setAll_products(response.data.data);
      setIsUpdating(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsUpdating(false);
    }
  };

  // Load cart data from backend
  const loadCartData = async (currentToken) => {
    try {
      const response = await axios.post(`${url}/api/cart/get`, {}, {
        headers: { token: currentToken }
      });
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  // Process checkout/order
  const checkout = async () => {
    try {
      // Verify stock availability before checkout
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          const product = all_products.find(p => p._id === itemId);
          if (!product || product.stock < cartItems[itemId]) {
            alert(`Not enough stock for ${product?.name || 'a product'}`);
            return false;
          }
        }
      }
      
      // Proceed with checkout
      if (token) {
        const response = await axios.post(`${url}/api/order/create`, { cartItems }, {
          headers: { token }
        });
        
        if (response.data.success) {
          // Optimistically update product stock in local state
          const updatedProducts = all_products.map(product => {
            if (cartItems[product._id] > 0) {
              return {
                ...product,
                stock: product.stock - cartItems[product._id]
              };
            }
            return product;
          });
          
          // Update UI immediately
          setAll_products(updatedProducts);
          
          // Then fetch the latest data from server
          fetchProductList();
          setCartItems({});
          return true;
        }
      } else {
        // For non-logged in users, update stock locally first
        const updatedProducts = all_products.map(product => {
          if (cartItems[product._id] > 0) {
            return {
              ...product,
              stock: product.stock - cartItems[product._id]
            };
          }
          return product;
        });
        
        // Update UI immediately
        setAll_products(updatedProducts);
        
        // Then update the server
        for (const itemId in cartItems) {
          if (cartItems[itemId] > 0) {
            await axios.post(`${url}/api/product/update-stock`, {
              productId: itemId,
              quantity: cartItems[itemId]
            });
          }
        }
        
        // Refresh data from server
        fetchProductList();
        setCartItems({});
        return true;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      return false;
    }
  };

  // Load product and cart data on mount
  useEffect(() => {
    async function loadData() {
      await fetchProductList();

      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    }
    loadData();
  }, []);

  // Context value shared across the app
  const contextValue = {
    all_products,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    isInStock,
    getAvailableStock,
    checkout,
    url,
    token,
    setToken,
    isUpdating,
    refreshProducts: fetchProductList
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;