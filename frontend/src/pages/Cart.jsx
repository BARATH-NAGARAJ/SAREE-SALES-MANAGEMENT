// // import React, { useContext } from 'react'
// // import { ShopContext } from '../context/ShopContext'
// // import { TbTrash } from 'react-icons/tb'
// // import { useNavigate } from 'react-router-dom'

// // const Cart = () => {
// //   const navigate = useNavigate()
// //   const { all_products, cartItems, removeFromCart, getTotalCartAmount, url } = useContext(ShopContext)

// //   return (
// //     <section className='max-padd-container pt-20'>
// //       <div className='py-10'>
// //         <table className='w-full'>
// //           <thead>
// //             <tr className='border-b border-slate-900/20 text-grey-30 regular-14 xs:regular-16 text-start py-12'>
// //               <th className='p-1 text-left'>Products</th>
// //               <th className='p-1 text-left'>Title</th>
// //               <th className='p-1 text-left'>Price</th>
// //               <th className='p-1 text-left'>Quantity</th>
// //               <th className='p-1 text-left'>Total</th>
// //               <th className='p-1 text-left'>Remove</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {all_products.map((product) => {
// //               if (cartItems[product._id] > 0) {
// //                 return (
// //                   <tr key={product._id} className='border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left'>
// //                     <td className='p-1'>
// //                       <img
// //                         src={url+"/images/"+product.image}
// //                         alt={product.name}
// //                         height={43}
// //                         width={43}
// //                         className='rounded-lg ring-1 ring-slate-900/5 m-1'
// //                       />
// //                     </td>
// //                     <td className='p-1'>
// //                       <div className='line-clamp-3'>{product.name}</div>
// //                     </td>
// //                     <td className='p-1'>${product.price}</td>
// //                     <td className='p-1'>{cartItems[product._id]}</td>
// //                     <td className='p-1'>${product.price * cartItems[product._id]}</td>
// //                     <td className='p-1'>
// //                       <div className='bold-22 cursor-pointer'>
// //                         <TbTrash onClick={() => removeFromCart(product._id)} />
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 )
// //               }
// //               return null
// //             })}
// //           </tbody>
// //         </table>

// //         {/* cart summary */}
// //         <div className="flex flex-col xl:flex-row gap-20 mt-20">
// //           <div className="flex flex-1 flex-col gap-2">
// //             <h4 className="bold-22">Summary</h4>
// //             <div>
// //               <div className="flexBetween py-3">
// //                 <h4 className="medium-16">Subtotal:</h4>
// //                 <h4 className="text-gray-30 font-semibold">${getTotalCartAmount()}</h4>
// //               </div>
// //               <hr className="h-[2px] bg-slate-900/15" />
// //               <div className="flexBetween py-3">
// //                 <h4 className="medium-16">Shipping Fee:</h4>
// //                 <h4 className="text-gray-30 font-semibold">${getTotalCartAmount() === 0 ? 0 : 2}</h4>
// //               </div>
// //               <hr className="h-[2px] bg-slate-900/15" />
// //               <div className="flexBetween py-3">
// //                 <h4 className="medium-18">Total:</h4>
// //                 <h4 className="bold-18">${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h4>
// //               </div>
// //             </div>
// //             <button onClick={() => navigate("/order")} className="btn-secondary w-52 rounded">Proceed to Checkout</button>
// //           </div>

// //           <div className="flex flex-1 flex-col gap-8">
// //             <h4 className="bold-20 capitalize">Your coupon code enter here:</h4>
// //             <div className="flexBetween h-[2.8rem] bg-primary ring-1 ring-slate-900/10 w-full max-w-[488px] rounded">
// //               <input type="text" placeholder="Coupon code" className="pl-3 bg-transparent border-none outline-none" />
// //               <button className="btn-dark rounded relative !px-10 !py-3">Submit</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Cart
// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { TbTrash } from 'react-icons/tb';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const navigate = useNavigate();
//   const { all_products, cartItems, removeFromCart, getTotalCartAmount, url } = useContext(ShopContext);

//   const subtotal = getTotalCartAmount();
//   const shipping = subtotal === 0 ? 0 : 2;
//   const total = subtotal + shipping;

//   return (
//     <section className="max-padd-container pt-20">
//       <div className="py-10 overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="border-b border-slate-300 text-grey-30 regular-14 xs:regular-16">
//               <th className="p-2">Products</th>
//               <th className="p-2">Title</th>
//               <th className="p-2">Price</th>
//               <th className="p-2">Quantity</th>
//               <th className="p-2">Total</th>
//               <th className="p-2">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {all_products.map(product => {
//               const quantity = cartItems[product._id];
//               if (quantity > 0) {
//                 return (
//                   <tr key={product._id} className="border-b border-slate-200">
//                     <td className="p-2">
//                       <img
//                         src={`${url}/images/${product.image}`}
//                         alt={product.name}
//                         width={50}
//                         height={50}
//                         className="rounded-lg ring-1 ring-slate-900/10 object-cover"
//                       />
//                     </td>
//                     <td className="p-2">{product.name}</td>
//                     <td className="p-2">₹{product.price}</td>
//                     <td className="p-2">{quantity}</td>
//                     <td className="p-2">₹{product.price * quantity}</td>
//                     <td className="p-2">
//                       <button onClick={() => removeFromCart(product._id)} className="text-red-500">
//                         <TbTrash size={20} />
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               }
//               return null;
//             })}
//           </tbody>
//         </table>

//         {/* Cart Summary */}
//         <div className="flex flex-col xl:flex-row gap-20 mt-16">
//           <div className="flex flex-1 flex-col gap-4">
//             <h4 className="bold-22">Summary</h4>
//             <div className="flexBetween py-2">
//               <span className="medium-16">Subtotal:</span>
//               <span className="text-gray-700 font-semibold">₹{subtotal}</span>
//             </div>
//             <div className="flexBetween py-2">
//               <span className="medium-16">Shipping Fee:</span>
//               <span className="text-gray-700 font-semibold">₹{shipping}</span>
//             </div>
//             <div className="flexBetween py-2 border-t border-slate-200 pt-2">
//               <span className="bold-18">Total:</span>
//               <span className="bold-18">₹{total}</span>
//             </div>
//             <button
//               onClick={() => navigate('/order')}
//               className="btn-secondary w-52 rounded mt-4 disabled:opacity-60"
//               disabled={subtotal === 0}
//             >
//               Proceed to Checkout
//             </button>
//           </div>

//           {/* Coupon Code */}
//           <div className="flex flex-1 flex-col gap-4">
//             <h4 className="bold-20">Have a coupon code?</h4>
//             <div className="flex h-[2.8rem] bg-primary ring-1 ring-slate-900/10 max-w-[488px] rounded overflow-hidden">
//               <input
//                 type="text"
//                 placeholder="Enter coupon code"
//                 className="flex-1 px-3 bg-transparent border-none outline-none"
//               />
//               <button className="btn-dark rounded-none px-6">Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;

import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url
  } = useContext(ShopContext);

  const subtotal = getTotalCartAmount();
  const shipping = subtotal === 0 ? 0 : 2;
  const total = subtotal + shipping;

  return (
    <section className="max-padd-container pt-20">
      <div className="py-10 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-300 text-grey-30 regular-14 xs:regular-16">
              <th className="p-2">Products</th>
              <th className="p-2">Title</th>
              <th className="p-2">Price</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Total</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map(product => {
              const quantity = cartItems[product._id];
              if (quantity > 0) {
                return (
                  <tr key={product._id} className="border-b border-slate-200">
                    <td className="p-2">
                      <img
                        src={`${url}/images/${product.image}`}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-lg ring-1 ring-slate-900/10 object-cover"
                      />
                    </td>
                    <td className="p-2">{product.name}</td>
                    <td className="p-2">₹{product.price}</td>
                    <td className="p-2">{quantity}</td>
                    <td className="p-2">₹{product.price * quantity}</td>
                    <td className="p-2 flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(product._id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <button
                        onClick={() => addToCart(product._id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>

        {/* Cart Summary */}
        <div className="flex flex-col xl:flex-row gap-20 mt-16">
          <div className="flex flex-1 flex-col gap-4">
            <h4 className="bold-22">Summary</h4>
            <div className="flexBetween py-2">
              <span className="medium-16">Subtotal:</span>
              <span className="text-gray-700 font-semibold">₹{subtotal}</span>
            </div>
            <div className="flexBetween py-2">
              <span className="medium-16">Shipping Fee:</span>
              <span className="text-gray-700 font-semibold">₹{shipping}</span>
            </div>
            <div className="flexBetween py-2 border-t border-slate-200 pt-2">
              <span className="bold-18">Total:</span>
              <span className="bold-18">₹{total}</span>
            </div>
            <button
              onClick={() => navigate('/order')}
              className="btn-secondary w-52 rounded mt-4 disabled:opacity-60"
              disabled={subtotal === 0}
            >
              Proceed to Checkout
            </button>
          </div>

          {/* Coupon Code */}
          <div className="flex flex-1 flex-col gap-4">
            <h4 className="bold-20">Have a coupon code?</h4>
            <div className="flex h-[2.8rem] bg-primary ring-1 ring-slate-900/10 max-w-[488px] rounded overflow-hidden">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-1 px-3 bg-transparent border-none outline-none"
              />
              <button className="btn-dark rounded-none px-6">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
