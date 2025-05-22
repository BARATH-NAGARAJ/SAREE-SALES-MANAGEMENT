// // import React, { useContext, useState, useEffect, useRef } from 'react';
// // import axios from 'axios';
// // import { ShopContext } from '../context/ShopContext';
// // import { useNavigate } from 'react-router-dom';
// // import { QRCodeSVG } from 'qrcode.react';  // Updated import statement

// // const Order = () => {
// //   const navigate = useNavigate();
// //   const { getTotalCartAmount, token, all_products, cartItems, url } = useContext(ShopContext);

// //   const [data, setData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     street: "",
// //     city: "",
// //     state: "",
// //     zipcode: "",
// //     country: "",
// //     phone: ""
// //   });

// //   const [orderPlaced, setOrderPlaced] = useState(false);
// //   const [orderId, setOrderId] = useState('');
// //   const [paymentRef, setPaymentRef] = useState('');
// //   const [orderAmount, setOrderAmount] = useState(0);
// //   const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, success, failed

// //   const onChangeHandler = (e) => {
// //     const { name, value } = e.target;
// //     setData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const placeOrder = async (e) => {
// //     e.preventDefault();

// //     let orderItems = [];

// //     all_products.forEach((item) => {
// //       if (cartItems[item._id] > 0) {
// //         const itemInfo = {
// //           _id: item._id,
// //           name: item.name,
// //           price: item.new_price,
// //           quantity: cartItems[item._id]
// //         };
// //         orderItems.push(itemInfo);
// //       }
// //     });

// //     const orderData = {
// //       userId: localStorage.getItem('userId'), // Assuming you store userId in localStorage
// //       address: data,
// //       items: orderItems,
// //       amount: getTotalCartAmount() + 2,
// //     };

// //     try {
// //       const response = await axios.post(url + "/api/order/place", orderData, {
// //         headers: { token },
// //       });

// //       if (response.data.success) {
// //         setOrderPlaced(true);
// //         setOrderId(response.data.orderId);
// //         setPaymentRef(response.data.paymentRef);
// //         setOrderAmount(response.data.amount);
        
// //         // Start polling for payment status
// //         checkPaymentStatus(response.data.orderId, response.data.paymentRef);
// //       } else {
// //         alert("Error placing order");
// //       }
// //     } catch (err) {
// //       console.error("Order error:", err);
// //       alert("Failed to place order");
// //     }
// //   };

// //   // Poll for payment status
// //   const checkPaymentStatus = async (orderId, paymentRef) => {
// //     const intervalId = setInterval(async () => {
// //       try {
// //         const response = await axios.post(url + "/api/order/verify", {
// //           orderId,
// //           paymentRef
// //         }, {
// //           headers: { token },
// //         });

// //         if (response.data.success) {
// //           setPaymentStatus('success');
// //           clearInterval(intervalId);
// //           setTimeout(() => {
// //             navigate("/orders");
// //           }, 3000); // Redirect to orders page after 3 seconds
// //         }
// //       } catch (error) {
// //         console.error("Payment status check error:", error);
// //       }
// //     }, 5000); // Check every 5 seconds

// //     // Clean up interval after 5 minutes (300000ms) - timeout for payment
// //     setTimeout(() => {
// //       clearInterval(intervalId);
// //       if (paymentStatus === 'pending') {
// //         setPaymentStatus('failed');
// //       }
// //     }, 300000);
// //   };

// //   // For development/testing purposes only
// //   const simulatePayment = async () => {
// //     try {
// //       const response = await axios.post(url + "/api/order/process-payment", {
// //         orderId,
// //         paymentRef
// //       }, {
// //         headers: { token },
// //       });

// //       if (response.data.success) {
// //         setPaymentStatus('success');
// //       } else {
// //         setPaymentStatus('failed');
// //       }
// //     } catch (error) {
// //       console.error("Payment simulation error:", error);
// //       setPaymentStatus('failed');
// //     }
// //   };

// //   useEffect(() => {
// //     if (!token || getTotalCartAmount() === 0) {
// //       navigate("/cart");
// //     }
// //   }, [token, getTotalCartAmount, navigate]);

// //   // Payment QR Code Screen
// //   if (orderPlaced) {
// //     return (
// //       <section className='max-padd-container py-28 xl:py-32 flex flex-col items-center justify-center'>
// //         <h2 className="bold-28 mb-8 text-center">Scan QR Code to Complete Payment</h2>
        
// //         {paymentStatus === 'pending' && (
// //           <>
// //             <div className="mb-8 p-4 border-4 border-gray-200 rounded-md bg-white">
// //               <QRCodeSVG 
// //                 value={JSON.stringify({
// //                   orderId: orderId,
// //                   paymentRef: paymentRef,
// //                   amount: orderAmount
// //                 })}
// //                 size={200}
// //                 level="H"
// //                 includeMargin={true}
// //               />
// //             </div>
// //             <p className="text-center mb-4">Amount: ₹{orderAmount}</p>
// //             <p className="text-center mb-4">Scan the QR code to complete your payment</p>
// //             <p className="text-center text-sm text-gray-500 mb-8">Order ID: {orderId}</p>
            
// //             {/* Development only - remove in production */}
// //             <div className="mt-8">
// //               <button 
// //                 onClick={simulatePayment} 
// //                 className="btn-secondary rounded-sm px-6 py-2"
// //               >
// //                 Simulate Successful Payment
// //               </button>
// //             </div>
// //           </>
// //         )}

// //         {paymentStatus === 'success' && (
// //           <div className="text-center">
// //             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //               </svg>
// //             </div>
// //             <h3 className="bold-22 text-green-600 mb-2">Payment Successful!</h3>
// //             <p className="mb-6">Your order has been placed successfully.</p>
// //             <p className="text-sm text-gray-500">You will be redirected to your orders page shortly...</p>
// //           </div>
// //         )}

// //         {paymentStatus === 'failed' && (
// //           <div className="text-center">
// //             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             </div>
// //             <h3 className="bold-22 text-red-600 mb-2">Payment Failed</h3>
// //             <p className="mb-6">There was a problem processing your payment.</p>
// //             <button 
// //               onClick={() => setOrderPlaced(false)} 
// //               className="btn-secondary rounded-sm"
// //             >
// //               Try Again
// //             </button>
// //           </div>
// //         )}
// //       </section>
// //     );
// //   }

// //   // Order Information Form
// //   return (
// //     <section className='max-padd-container py-28 xl:py-32'>
// //       <form onSubmit={placeOrder} className="flex flex-col xl:flex-row gap-20 xl:gap-28">
// //         {/* Delivery Info */}
// //         <div className="flex flex-1 flex-col gap-3 text-[95%]">
// //           <h3 className="bold-28 mb-4">Delivery Information</h3>
// //           <div className="flex gap-3">
// //             <input onChange={onChangeHandler} value={data.firstName} type="text" name="firstName" placeholder="First Name" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
// //             <input onChange={onChangeHandler} value={data.lastName} type="text" name="lastName" placeholder="Last Name" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
// //           </div>

// //           <input onChange={onChangeHandler} value={data.email} type="email" name="email" placeholder="Email" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none' />
// //           <input onChange={onChangeHandler} value={data.phone} type="text" name="phone" placeholder="Phone Number" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none' />
// //           <input onChange={onChangeHandler} value={data.street} type="text" name="street" placeholder="Street" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none' />

// //           <div className="flex gap-3">
// //             <input onChange={onChangeHandler} value={data.city} type="text" name="city" placeholder="City" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
// //             <input onChange={onChangeHandler} value={data.state} type="text" name="state" placeholder="State" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
// //           </div>

// //           <div className="flex gap-3">
// //             <input onChange={onChangeHandler} value={data.zipcode} type="text" name="zipcode" placeholder="Zip code" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
// //             <input onChange={onChangeHandler} value={data.country} type="text" name="country" placeholder="Country" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
// //           </div>
// //         </div>

// //         {/* Cart Summary */}
// //         <div className="flex flex-1 flex-col gap-2">
// //           <h4 className="bold-22">Summary</h4>
// //           <div>
// //             <div className="flexBetween py-3">
// //               <h4 className="medium-16">Subtotal:</h4>
// //               <h4 className="text-gray-30 font-semibold">₹{getTotalCartAmount()}</h4>
// //             </div>
// //             <hr className="h-[2px] bg-slate-900/15" />
// //             <div className="flexBetween py-3">
// //               <h4 className="medium-16">Shipping Fee:</h4>
// //               <h4 className="text-gray-30 font-semibold">₹{getTotalCartAmount() === 0 ? 0 : 2}</h4>
// //             </div>
// //             <hr className="h-[2px] bg-slate-900/15" />
// //             <div className="flexBetween py-3">
// //               <h4 className="medium-18">Total:</h4>
// //               <h4 className="bold-18">₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h4>
// //             </div>
// //           </div>
// //           <button type="submit" className="btn-secondary w-56 rounded-sm mt-4">
// //             Place Order
// //           </button>
// //         </div>
// //       </form>
// //     </section>
// //   );
// // };

// // export default Order;
// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { ShopContext } from '../context/ShopContext';
// import { useNavigate } from 'react-router-dom';
// import { QRCodeSVG } from 'qrcode.react';

// const Order = () => {
//   const navigate = useNavigate();
//   const { getTotalCartAmount, token, all_products, cartItems, url } = useContext(ShopContext);

//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: ""
//   });

//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [orderId, setOrderId] = useState('');
//   const [paymentRef, setPaymentRef] = useState('');
//   const [orderAmount, setOrderAmount] = useState(0);
//   const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, success, failed

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const placeOrder = async (e) => {
//     e.preventDefault();

//     let orderItems = [];

//     all_products.forEach((item) => {
//       if (cartItems[item._id] > 0) {
//         const itemInfo = {
//           _id: item._id,
//           name: item.name,
//           price: item.new_price,
//           quantity: cartItems[item._id]
//         };
//         orderItems.push(itemInfo);
//       }
//     });

//     const orderData = {
//       userId: localStorage.getItem('userId'), // Assuming you store userId in localStorage
//       address: data,
//       items: orderItems,
//       amount: getTotalCartAmount() + 2,
//     };

//     try {
//       const response = await axios.post(url + "/api/order/place", orderData, {
//         headers: { token },
//       });

//       if (response.data.success) {
//         setOrderPlaced(true);
//         setOrderId(response.data.orderId);
//         setPaymentRef(response.data.paymentRef);
//         setOrderAmount(response.data.amount);
        
//         // Start polling for payment status
//         checkPaymentStatus(response.data.orderId, response.data.paymentRef);
//       } else {
//         alert("Error placing order");
//       }
//     } catch (err) {
//       console.error("Order error:", err);
//       alert("Failed to place order");
//     }
//   };

//   // Poll for payment status
//   const checkPaymentStatus = async (orderId, paymentRef) => {
//     const intervalId = setInterval(async () => {
//       try {
//         const response = await axios.post(url + "/api/order/verify", {
//           orderId,
//           paymentRef
//         }, {
//           headers: { token },
//         });

//         if (response.data.success) {
//           setPaymentStatus('success');
//           clearInterval(intervalId);
//           setTimeout(() => {
//             // Navigate to home page instead of orders page
//             navigate("/");
//           }, 3000); // Redirect to home page after 3 seconds
//         }
//       } catch (error) {
//         console.error("Payment status check error:", error);
//       }
//     }, 5000); // Check every 5 seconds

//     // Clean up interval after 5 minutes (300000ms) - timeout for payment
//     setTimeout(() => {
//       clearInterval(intervalId);
//       if (paymentStatus === 'pending') {
//         setPaymentStatus('failed');
//       }
//     }, 300000);
//   };

//   // For development/testing purposes only
//   const simulatePayment = async () => {
//     try {
//       const response = await axios.post(url + "/api/order/process-payment", {
//         orderId,
//         paymentRef
//       }, {
//         headers: { token },
//       });

//       if (response.data.success) {
//         setPaymentStatus('success');
//         // Will navigate to home after success (in the setTimeout from checkPaymentStatus)
//       } else {
//         setPaymentStatus('failed');
//       }
//     } catch (error) {
//       console.error("Payment simulation error:", error);
//       setPaymentStatus('failed');
//     }
//   };

//   useEffect(() => {
//     if (!token || getTotalCartAmount() === 0) {
//       navigate("/cart");
//     }
//   }, [token, getTotalCartAmount, navigate]);

//   // Payment QR Code Screen
//   if (orderPlaced) {
//     return (
//       <section className='max-padd-container py-28 xl:py-32 flex flex-col items-center justify-center'>
//         <h2 className="bold-28 mb-8 text-center">Scan QR Code to Complete Payment</h2>
        
//         {paymentStatus === 'pending' && (
//           <>
//             <div className="mb-8 p-4 border-4 border-gray-200 rounded-md bg-white">
//               <QRCodeSVG 
//                 value={JSON.stringify({
//                   orderId: orderId,
//                   paymentRef: paymentRef,
//                   amount: orderAmount
//                 })}
//                 size={200}
//                 level="H"
//                 includeMargin={true}
//               />
//             </div>
//             <p className="text-center mb-4">Amount: ₹{orderAmount}</p>
//             <p className="text-center mb-4">Scan the QR code to complete your payment</p>
//             <p className="text-center text-sm text-gray-500 mb-8">Order ID: {orderId}</p>
            
//             {/* Development only - remove in production */}
//             <div className="mt-8">
//               <button 
//                 onClick={simulatePayment} 
//                 className="btn-secondary rounded-sm px-6 py-2"
//               >
//                 Simulate Successful Payment
//               </button>
//             </div>
//           </>
//         )}

//         {paymentStatus === 'success' && (
//           <div className="text-center">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <h3 className="bold-22 text-green-600 mb-2">Payment Successful!</h3>
//             <p className="mb-6">Your order has been placed successfully.</p>
//             <p className="text-sm text-gray-500">You will be redirected to the home page shortly...</p>
//           </div>
//         )}

//         {paymentStatus === 'failed' && (
//           <div className="text-center">
//             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </div>
//             <h3 className="bold-22 text-red-600 mb-2">Payment Failed</h3>
//             <p className="mb-6">There was a problem processing your payment.</p>
//             <button 
//               onClick={() => setOrderPlaced(false)} 
//               className="btn-secondary rounded-sm"
//             >
//               Try Again
//             </button>
//           </div>
//         )}
//       </section>
//     );
//   }

//   // Order Information Form
//   return (
//     <section className='max-padd-container py-28 xl:py-32'>
//       <form onSubmit={placeOrder} className="flex flex-col xl:flex-row gap-20 xl:gap-28">
//         {/* Delivery Info */}
//         <div className="flex flex-1 flex-col gap-3 text-[95%]">
//           <h3 className="bold-28 mb-4">Delivery Information</h3>
//           <div className="flex gap-3">
//             <input onChange={onChangeHandler} value={data.firstName} type="text" name="firstName" placeholder="First Name" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
//             <input onChange={onChangeHandler} value={data.lastName} type="text" name="lastName" placeholder="Last Name" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
//           </div>

//           <input onChange={onChangeHandler} value={data.email} type="email" name="email" placeholder="Email" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none' />
//           <input onChange={onChangeHandler} value={data.phone} type="text" name="phone" placeholder="Phone Number" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none' />
//           <input onChange={onChangeHandler} value={data.street} type="text" name="street" placeholder="Street" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none' />

//           <div className="flex gap-3">
//             <input onChange={onChangeHandler} value={data.city} type="text" name="city" placeholder="City" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
//             <input onChange={onChangeHandler} value={data.state} type="text" name="state" placeholder="State" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
//           </div>

//           <div className="flex gap-3">
//             <input onChange={onChangeHandler} value={data.zipcode} type="text" name="zipcode" placeholder="Zip code" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
//             <input onChange={onChangeHandler} value={data.country} type="text" name="country" placeholder="Country" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
//           </div>
//         </div>

//         {/* Cart Summary */}
//         <div className="flex flex-1 flex-col gap-2">
//           <h4 className="bold-22">Summary</h4>
//           <div>
//             <div className="flexBetween py-3">
//               <h4 className="medium-16">Subtotal:</h4>
//               <h4 className="text-gray-30 font-semibold">₹{getTotalCartAmount()}</h4>
//             </div>
//             <hr className="h-[2px] bg-slate-900/15" />
//             <div className="flexBetween py-3">
//               <h4 className="medium-16">Shipping Fee:</h4>
//               <h4 className="text-gray-30 font-semibold">₹{getTotalCartAmount() === 0 ? 0 : 2}</h4>
//             </div>
//             <hr className="h-[2px] bg-slate-900/15" />
//             <div className="flexBetween py-3">
//               <h4 className="medium-18">Total:</h4>
//               <h4 className="bold-18">₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h4>
//             </div>
//           </div>
//           <button type="submit" className="btn-secondary w-56 rounded-sm mt-4">
//             Place Order
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Order;
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const Order = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, token, all_products, cartItems, setCartItems, url } = useContext(ShopContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [paymentRef, setPaymentRef] = useState('');
  const [orderAmount, setOrderAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, success, failed

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Clear cart items function
  const clearCart = async () => {
    try {
      // Clear local cart state
      setCartItems({});
      
      // Clear cart on the server if user is logged in
      if (token) {
        await axios.post(url + "/api/cart/clear", {}, {
          headers: { token },
        });
      }
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    let orderItems = [];

    all_products.forEach((item) => {
      if (cartItems[item._id] > 0) {
        const itemInfo = {
          _id: item._id,
          name: item.name,
          price: item.new_price,
          quantity: cartItems[item._id]
        };
        orderItems.push(itemInfo);
      }
    });

    const orderData = {
      userId: localStorage.getItem('userId'), // Assuming you store userId in localStorage
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    try {
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        setOrderPlaced(true);
        setOrderId(response.data.orderId);
        setPaymentRef(response.data.paymentRef);
        setOrderAmount(response.data.amount);
        
        // Start polling for payment status
        checkPaymentStatus(response.data.orderId, response.data.paymentRef);
      } else {
        alert("Error placing order");
      }
    } catch (err) {
      console.error("Order error:", err);
      alert("Failed to place order");
    }
  };

  // Poll for payment status
  const checkPaymentStatus = async (orderId, paymentRef) => {
    const intervalId = setInterval(async () => {
      try {
        const response = await axios.post(url + "/api/order/verify", {
          orderId,
          paymentRef
        }, {
          headers: { token },
        });

        if (response.data.success) {
          setPaymentStatus('success');
          
          // Clear the cart when payment is successful
          await clearCart();
          
          clearInterval(intervalId);
          setTimeout(() => {
            // Navigate to home page instead of orders page
            navigate("/");
          }, 3000); // Redirect to home page after 3 seconds
        }
      } catch (error) {
        console.error("Payment status check error:", error);
      }
    }, 5000); // Check every 5 seconds

    // Clean up interval after 5 minutes (300000ms) - timeout for payment
    setTimeout(() => {
      clearInterval(intervalId);
      if (paymentStatus === 'pending') {
        setPaymentStatus('failed');
      }
    }, 300000);
  };

  // For development/testing purposes only
  const simulatePayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/process-payment", {
        orderId,
        paymentRef
      }, {
        headers: { token },
      });

      if (response.data.success) {
        setPaymentStatus('success');
        
        // Clear cart when payment is successful even in simulation mode
        await clearCart();
        
        // Will navigate to home after success (in the setTimeout from checkPaymentStatus)
      } else {
        setPaymentStatus('failed');
      }
    } catch (error) {
      console.error("Payment simulation error:", error);
      setPaymentStatus('failed');
    }
  };

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token, getTotalCartAmount, navigate]);

  // Payment QR Code Screen
  if (orderPlaced) {
    return (
      <section className='max-padd-container py-28 xl:py-32 flex flex-col items-center justify-center'>
        <h2 className="bold-28 mb-8 text-center">Scan QR Code to Complete Payment</h2>
        
        {paymentStatus === 'pending' && (
          <>
            <div className="mb-8 p-4 border-4 border-gray-200 rounded-md bg-white">
              <QRCodeSVG 
                value={JSON.stringify({
                  orderId: orderId,
                  paymentRef: paymentRef,
                  amount: orderAmount
                })}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <p className="text-center mb-4">Amount: ₹{orderAmount}</p>
            <p className="text-center mb-4">Scan the QR code to complete your payment</p>
            <p className="text-center text-sm text-gray-500 mb-8">Order ID: {orderId}</p>
            
            {/* Development only - remove in production */}
            <div className="mt-8">
              <button 
                onClick={simulatePayment} 
                className="btn-secondary rounded-sm px-6 py-2"
              >
                Simulate Successful Payment
              </button>
            </div>
          </>
        )}

        {paymentStatus === 'success' && (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="bold-22 text-green-600 mb-2">Payment Successful!</h3>
            <p className="mb-6">Your order has been placed successfully.</p>
            <p className="text-sm text-gray-500">You will be redirected to the home page shortly...</p>
          </div>
        )}

        {paymentStatus === 'failed' && (
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="bold-22 text-red-600 mb-2">Payment Failed</h3>
            <p className="mb-6">There was a problem processing your payment.</p>
            <button 
              onClick={() => setOrderPlaced(false)} 
              className="btn-secondary rounded-sm"
            >
              Try Again
            </button>
          </div>
        )}
      </section>
    );
  }

  // Order Information Form
  return (
    <section className='max-padd-container py-28 xl:py-32'>
      <form onSubmit={placeOrder} className="flex flex-col xl:flex-row gap-20 xl:gap-28">
        {/* Delivery Info */}
        <div className="flex flex-1 flex-col gap-3 text-[95%]">
          <h3 className="bold-28 mb-4">Delivery Information</h3>
          <div className="flex gap-3">
            <input onChange={onChangeHandler} value={data.firstName} type="text" name="firstName" placeholder="First Name" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
            <input onChange={onChangeHandler} value={data.lastName} type="text" name="lastName" placeholder="Last Name" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
          </div>

          <input onChange={onChangeHandler} value={data.email} type="email" name="email" placeholder="Email" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none' />
          <input onChange={onChangeHandler} value={data.phone} type="text" name="phone" placeholder="Phone Number" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none' />
          <input onChange={onChangeHandler} value={data.street} type="text" name="street" placeholder="Street" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none' />

          <div className="flex gap-3">
            <input onChange={onChangeHandler} value={data.city} type="text" name="city" placeholder="City" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
            <input onChange={onChangeHandler} value={data.state} type="text" name="state" placeholder="State" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
          </div>

          <div className="flex gap-3">
            <input onChange={onChangeHandler} value={data.zipcode} type="text" name="zipcode" placeholder="Zip code" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
            <input onChange={onChangeHandler} value={data.country} type="text" name="country" placeholder="Country" required className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2' />
          </div>
        </div>

        {/* Cart Summary */}
        <div className="flex flex-1 flex-col gap-2">
          <h4 className="bold-22">Summary</h4>
          <div>
            <div className="flexBetween py-3">
              <h4 className="medium-16">Subtotal:</h4>
              <h4 className="text-gray-30 font-semibold">₹{getTotalCartAmount()}</h4>
            </div>
            <hr className="h-[2px] bg-slate-900/15" />
            <div className="flexBetween py-3">
              <h4 className="medium-16">Shipping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">₹{getTotalCartAmount() === 0 ? 0 : 2}</h4>
            </div>
            <hr className="h-[2px] bg-slate-900/15" />
            <div className="flexBetween py-3">
              <h4 className="medium-18">Total:</h4>
              <h4 className="bold-18">₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h4>
            </div>
          </div>
          <button type="submit" className="btn-secondary w-56 rounded-sm mt-4">
            Place Order
          </button>
        </div>
      </form>
    </section>
  );
};

export default Order;