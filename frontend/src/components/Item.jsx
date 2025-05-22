// // import React from 'react'
// // import {FaMinus, FaPlus} from 'react-icons/fa6'
// // import {Link} from 'react-router-dom'
// // import Product from '../pages/Product'


// // const Item = ({product}) => {
// //   const [cartItems, setCartItems] = useState(false);
// //   return (
// //     <div>
// //       <Link to={''} className='relative top-28 group bg-white flexCenter m-4 rounded-2xl ring-1 ring-slate-200/20 hover:shadow-sm '>
// //          <img src={Product.image} alt="productImg" height={122} width={122} className='object-cover h38'/>
// //       </Link>
// //       <div className='p-3 pt-28 bg-primary rounded-xl'>
// //         <h4 className='medium-18 line-clamp-1'>{product.name}</h4>
// //         <h5 className='text-[16px] font-bold text-grey-900/50 mb-1'>{product.category}</h5>
// //         <p className='line-clamp-2'>{product.description}</p>
// //           <div className ='flexBetween mt-3'>
// //             <div className='text-secondary bold-18'>RS{product.price}</div>
// //           </div>
// //           <div>
// //             {!cartItems? (<FaPlus className = 'bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer'/>):
// //             (<div className='bg-white rounded-full flexCenter gap-2 h-8'>
// //               <FaMinus className='bg-primary h-6 w-6 p-1 ml-1 cursor-pointer rounded-full'/>
// //               <p>0</p>
// //               <FaPlus className='bg-secondary h-6 w-6 p-1 mr-1 cursor-pointer rounded-full'/>
// //             </div>
// //           )}
// //           </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Item
// // import React, { useState } from 'react'
// // import { FaMinus, FaPlus } from 'react-icons/fa6'
// // import { Link } from 'react-router-dom'

// // const Item = ({ product }) => {
// //   const [cartItems, setCartItems] = useState(false);

// //   return (
// //     <div>
// //       <Link to={''} className='relative top-32
// //        group bg-white flexCenter m-4 rounded-2xl ring-1 ring-slate-200/20 hover:shadow-sm'>
// //         <img src={product.image} alt="productImg" height={122} width={122} className='object-cover h-38' />
// //       </Link>

// //       <div className='p-3 pt-28 bg-primary rounded-xl overflow-hidden'>
// //         <h4 className='medium-18 line-clamp-1'>{product.name}</h4>
// //         <h5 className='text-[16px] font-bold text-grey-900/50 mb-1'>{product.category}</h5>
// //         <p className='line-clamp-2'>{product.description}</p>

// //         <div className='flexBetween mt-3'>
// //           <div className='text-secondary bold-18'>₹{product.price}</div>
// //         </div>

// //         <div className='mt-3 flex items-center'>
// //           {!cartItems ? (
// //             <FaPlus
// //               className='bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer'
// //               onClick={() => setCartItems(true)}
// //             />
// //           ) : (
// //             <div className='bg-white rounded-full flex items-center justify-between px-2 h-8'>
// //               <FaMinus
// //                 className='bg-primary h-6 w-6 p-1 cursor-pointer rounded-full'
// //                 onClick={() => setCartItems(false)}
// //               />
// //               <p className='px-2'>1</p>
// //               <FaPlus
// //                 className='bg-secondary h-6 w-6 p-1 cursor-pointer rounded-full'
// //                 onClick={() => {}}
// //               />
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Item;
// import React, { useContext, useState } from 'react';
// import { FaMinus, FaPlus } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Item = ({ product }) => {

//   const {cartItems, addToCart, removeFromCart, url} = useContext(ShopContext)
//   return (
//     <div className='bg-primary rounded-xl p-4 shadow-md'>
//       {/* Image Container: White Box around the image */}
//       <Link to={`/product/${product._id}`} className='flex justify-center mb-4'>
//         <div className='bg-white p-2 rounded-lg'>
//           <img
//             src={url+"/images/"+product.image}
//             alt="productImg"
//             className='object-cover h-32 w-32 rounded-lg'
//           />
//         </div>
//       </Link>

//       {/* Product Details */}
//       <h4 className='medium-18 line-clamp-1'>{product.name}</h4>
//       <h5 className='text-[16px] font-bold text-grey-900/50 mb-1'>{product.category}</h5>
//       <p className='line-clamp-2'>{product.description}</p>

//       {/* Price & Add-to-cart (Aligned correctly) */}
//       <div className='flex justify-between items-center mt-3'>
//         <div className='text-secondary bold-18'>₹{product.price}</div>
//         <div className='mt-3 flex items-center'>
//           {!cartItems[product._id] ? (
//             <FaPlus onClick={()=>addToCart(product._id)}
//               className='bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer'
//             />
//           ) : (
//             <div className='bg-white rounded-full flex items-center justify-between px-2 h-8'>
//               <FaMinus onClick={()=>removeFromCart(product._id)}
//                 className='bg-primary h-6 w-6 p-1 cursor-pointer rounded-full'
                
//               />
//               <p className='px-2'>{cartItems[product._id]}</p>
//               <FaPlus onClick={()=>addToCart(product._id)}
//                 className='bg-secondary h-6 w-6 p-1 cursor-pointer rounded-full'
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;
// Modified Item.jsx Component
import React, { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Item = ({ product }) => {
  const { cartItems, addToCart, removeFromCart, url, isInStock, getAvailableStock } = useContext(ShopContext);
  
  // Get current quantity in cart (default to 0 if not present)
  const quantity = cartItems[product._id] || 0;
  
  // Check if product is in stock
  const stockAvailable = isInStock(product._id);
  const availableStock = getAvailableStock(product._id);
  
  return (
    <div className='bg-primary rounded-xl p-4 shadow-md'>
      {/* Image Container: White Box around the image */}
      <Link to={`/product/${product._id}`} className='flex justify-center mb-4'>
        <div className='bg-white p-2 rounded-lg'>
          <img
            src={url + "/images/" + product.image}
            alt="productImg"
            className='object-cover h-32 w-32 rounded-lg'
          />
        </div>
      </Link>

      {/* Product Details */}
      <h4 className='medium-18 line-clamp-1'>{product.name}</h4>
      <h5 className='text-[16px] font-bold text-grey-900/50 mb-1'>{product.category}</h5>
      <p className='line-clamp-2'>{product.description}</p>

      {/* Price & Add-to-cart (with stock information) */}
      <div className='flex justify-between items-center mt-3'>
        <div className='text-secondary bold-18'>₹{product.price}</div>
        <div className='mt-3 flex flex-col items-end'>
          {/* Stock display */}
          <div className={`text-xs ${stockAvailable ? 'text-green-600' : 'text-red-600'}`}>
            {stockAvailable ? 
              `In Stock (${availableStock})` : 
              'Out of Stock'
            }
          </div>
          
          {/* Add to cart button */}
          {!stockAvailable ? (
            <button disabled className='bg-gray-300 h-8 px-2 rounded-full text-xs mt-1'>
              Out of Stock
            </button>
          ) : !quantity ? (
            <FaPlus onClick={() => addToCart(product._id)}
              className='bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer mt-1'
            />
          ) : (
            <div className='bg-white rounded-full flex items-center justify-between px-2 h-8 mt-1'>
              <FaMinus onClick={() => removeFromCart(product._id)}
                className='bg-primary h-6 w-6 p-1 cursor-pointer rounded-full'
              />
              <p className='px-2'>{quantity}</p>
              <FaPlus 
                onClick={() => addToCart(product._id)}
                className={`h-6 w-6 p-1 cursor-pointer rounded-full ${
                  quantity >= availableStock ? 'bg-gray-400' : 'bg-secondary'
                }`}
                disabled={quantity >= availableStock}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;