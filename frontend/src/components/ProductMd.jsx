// // import React, { useContext } from "react";
// // import { FaStar, FaHeart, FaPlus, FaMinus } from "react-icons/fa6";
// // import { ShopContext } from "../context/ShopContext";
// // import { LuMoveUpRight } from "react-icons/lu";
// // import { useNavigate } from "react-router-dom";

// // const ProductMd = (props) => {
// //   const { product } = props;
// //   const { addToCart, removeFromCart, cartItems, url } = useContext(ShopContext);
// //   const navigate = useNavigate();

// //   return (
// //     <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
// //       {/* left side */}
// //       <div className="flex gap-x-2 xl:flex-1 py-5">
// //         <div className="flexCenter flex-col gap-[7px] flex-wrap">
// //           {[...Array(4)].map((_, i) => (
// //             <img
// //               key={i}
// //               src={product.image}
// //               alt={`productImg-${i}`}
// //               className="max-h-[89px] rounded-lg bg-gray-10 object-cover" 
// //             />
// //           ))}
// //         </div>
// //         <div className="max-h-[377px] w-auto flex">
// //           <img
// //             src={product.image}
// //             alt="bigImg"
// //             className="max-h-[377px] rounded-lg bg-gray-10"
// //           />
// //         </div>
// //       </div>

// //       {/* right side */}
// //       <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
// //         <h4 className="bold-28">{product.name}</h4>
// //         <div className="flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-3">
// //           <div>${product.price}.00</div>
// //           <div className="flex items-start gap-x-1 medium-16 text-secondary">
// //             <FaStar />
// //             <FaStar />
// //             <FaStar />
// //             <FaStar />
// //             <p>223</p>
// //           </div>
// //         </div>

// //         {/* product color , icons buttons */}
// //         <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-4">
// //           <div>
// //             <h4 className="bold-16">Select color:</h4>
// //             <div className="flex gap-3 my-3">
// //               <div className="h-10 w-10 flexCenter cursor-pointer rounded-sm bg-secondaryRed border-b-black active-color"></div>
// //               <div className="h-10 w-10 flexCenter cursor-pointer rounded-sm bg-secondaryYellow"></div>
// //               <div className="h-10 w-10 flexCenter cursor-pointer rounded-sm bg-secondaryBlue"></div>
// //               <div className="h-10 w-10 flexCenter cursor-pointer rounded-sm bg-secondaryGreen"></div>
// //             </div>
// //           </div>

// //           <div>
// //             <h4 className="bold-16">Select Size:</h4>
// //             <div className="flex gap-3 my-3">
// //               {["S", "M", "L", "XL"].map((size) => (
// //                 <div
// //                   key={size}
// //                   className="border-[1.5px] border-slate-900/15 h-10 w-10 flexCenter cursor-pointer rounded-sm"
// //                 >
// //                   {size}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex gap-4 mb-8 max-w-[555px] flex-wrap">
// //           <button className="btn-secondary rounded-dm !px-4">
// //             <FaHeart />
// //           </button>

// //           <button
// //             onClick={() => navigate("/cart")}
// //             className="btn-dark rounded-sm dm:!px-20 !py-2 flexCenter gap-x-2"
// //           >
// //             Go To Cart
// //             <LuMoveUpRight className="text-xl" />
// //           </button>

// //           {!cartItems[product._id] ? (
// //             <FaPlus
// //               onClick={() => addToCart(product._id)}
// //               className="bg-tertiary text-white rounded-sm h-[38px] w-[38px] p-2 cursor-pointer"
// //             />
// //           ) : (
// //             <div className="bg-tertiary text-white rounded-sm flexCenter gap-2">
// //               <FaMinus
// //                 onClick={() => removeFromCart(product._id)}
// //                 className="h-8 w-8 p-2 cursor-pointer"
// //               />
// //               <p className="text-white pr-2 w-3">{cartItems[product._id]}</p>
// //               <FaPlus
// //                 onClick={() => addToCart(product._id)}
// //                 className="rounded-sm border-secondary h-8 w-8 p-1 mr-1 cursor-pointer"
// //               />
// //             </div>
// //           )}
// //         </div>

// //         <p>
// //           <span className="medium-16 text-tertiary">Category:</span> Women |
// //           Jacket | Winter
// //         </p>
// //         <p>
// //           <span className="medium-16 text-tertiary">Tags:</span> Modern | New
// //           Arrivals
// //         </p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductMd;
// // import React, { useContext, useState } from "react";
// // import { FaStar, FaHeart, FaPlus, FaMinus } from "react-icons/fa6";
// // import { ShopContext } from "../context/ShopContext";
// // import { LuMoveUpRight } from "react-icons/lu";
// // import { useNavigate } from "react-router-dom";

// // const ProductMd = ({ product }) => {
// //   const { addToCart, removeFromCart, cartItems , url} = useContext(ShopContext);
// //   const navigate = useNavigate();

// //   const [selectedColor, setSelectedColor] = useState(null);
// //   const [selectedSize, setSelectedSize] = useState(null);

// //   const colors = ["bg-secondaryRed", "bg-secondaryYellow", "bg-secondaryBlue", "bg-secondaryGreen"];
// //   const sizes = ["5", "6.5", "Free Size"];

// //   return (
// //     <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
// //       {/* Left Side */}
// //       <div className="flex gap-x-2 xl:flex-1 py-5">
// //         <div className="flexCenter flex-col gap-[7px] flex-wrap">
// //           <img
// //             src={url+"/images/"+product.image}
// //             alt="ProductImg"
// //             className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
// //           />
// //           <img
// //             src={url+"/images/"+product.image}
// //             alt="ProductImg"
// //             className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
// //           />
// //           <img
// //             src={url+"/images/"+product.image}
// //             alt="ProductImg"
// //             className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
// //           />
// //           <img
// //             src={url+"/images/"+product.image}
// //             alt="ProductImg"
// //             className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
// //           />
// //         </div>
// //         <div className="max-h-[377px] w-auto flex">
// //           <img
// //             src={url+"/images/"+product.image }
// //             alt="bigImg"
// //             className="max-h-[377px] rounded-lg bg-gray-10"
// //           />
// //         </div>
// //       </div>

// //       {/* Right Side */}
// //       <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
// //         <h4 className="bold-28">{product.name}</h4>
// //         <div className="flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-3">
// //           <div>₹{product.price}.00</div>
// //           <div className="flex items-start gap-x-1 medium-16 text-secondary">
// //             <FaStar /><FaStar /><FaStar /><FaStar />
// //             <p>223</p>
// //           </div>
// //         </div>

// //         {/* Color & Size */}
// //         <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-4">
// //           {/* Colors */}
// //           <div>
// //             <h4 className="bold-16">Select color:</h4>
// //             <div className="flex gap-3 my-3">
// //               {colors.map((colorClass, idx) => (
// //                 <div
// //                   key={idx}
// //                   className={`h-10 w-10 cursor-pointer rounded-sm border-2 ${colorClass} ${
// //                     selectedColor === idx ? "border-black" : "border-transparent"
// //                   }`}
// //                   onClick={() => setSelectedColor(idx)}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Sizes */}
// //           <div>
// //             <h4 className="bold-16">Select Size:</h4>
// //             <div className="flex gap-3 my-3">
// //               {sizes.map((size) => (
// //                 <div
// //                   key={size}
// //                   onClick={() => setSelectedSize(size)}
// //                   className={`border-[1.5px] h-10 w-10 flexCenter cursor-pointer rounded-sm ${
// //                     selectedSize === size ? "border-black" : "border-slate-900/15"
// //                   }`}
// //                 >
// //                   {size}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Action Buttons */}
// //         <div className="flex gap-4 mb-8 max-w-[555px] flex-wrap">
// //           <button className="btn-secondary rounded-dm !px-4" aria-label="Add to Wishlist">
// //             <FaHeart />
// //           </button>

// //           <button
// //             onClick={() => navigate("/cart")}
// //             className="btn-dark rounded-sm dm:!px-20 !py-2 flexCenter gap-x-2"
// //           >
// //             Go To Cart <LuMoveUpRight className="text-xl" />
// //           </button>

// //           {!cartItems[product._id] ? (
// //             <FaPlus
// //               onClick={() => addToCart(product._id)}
// //               className="bg-tertiary text-white rounded-sm h-[38px] w-[38px] p-2 cursor-pointer"
// //               aria-label="Add to cart"
// //             />
// //           ) : (
// //             <div className="bg-tertiary text-white rounded-sm flexCenter gap-2">
// //               <FaMinus
// //                 onClick={() => removeFromCart(product._id)}
// //                 className="h-8 w-8 p-2 cursor-pointer"
// //                 aria-label="Remove from cart"
// //               />
// //               <p className="text-white pr-2 w-3">{cartItems[product._id]}</p>
// //               <FaPlus
// //                 onClick={() => addToCart(product._id)}
// //                 className="rounded-sm border-secondary h-8 w-8 p-1 mr-1 cursor-pointer"
// //                 aria-label="Add more"
// //               />
// //             </div>
// //           )}
// //         </div>

// //         {/* Category & Tags */}
// //         <p>
// //           <span className="medium-16 text-tertiary">Category:</span>{" "}
// //           {product.category || "General"}
// //         </p>
// //         <p>
// //           <span className="medium-16 text-tertiary">Tags:</span>{" "}
// //           {product.tags?.join(" | ") || "New"}
// //         </p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductMd;
// import React, { useContext, useState } from "react";
// import { FaStar, FaHeart, FaPlus, FaMinus } from "react-icons/fa6";
// import { ShopContext } from "../context/ShopContext";
// import { LuMoveUpRight } from "react-icons/lu";
// import { useNavigate } from "react-router-dom";

// const ProductMd = ({ product }) => {
//   const { addToCart, removeFromCart, cartItems, url } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);

//   const colors = ["bg-secondaryRed", "bg-secondaryYellow", "bg-secondaryBlue", "bg-secondaryGreen"];
//   const sizes = ["6", "6.5", "Free Size"];  // Added Free Size

//   return (
//     <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
//       {/* Left Side */}
//       <div className="flex gap-x-2 xl:flex-1 py-5">
//         <div className="flexCenter flex-col gap-[7px] flex-wrap">
//           <img
//             src={url + "/images/" + product.image}
//             alt="ProductImg"
//             className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
//           />
//           <img
//             src={url + "/images/" + product.image}
//             alt="ProductImg"
//             className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
//           />
//           <img
//             src={url + "/images/" + product.image}
//             alt="ProductImg"
//             className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
//           />
//           <img
//             src={url + "/images/" + product.image}
//             alt="ProductImg"
//             className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
//           />
//         </div>
//         <div className="max-h-[377px] w-auto flex">
//           <img
//             src={url + "/images/" + product.image}
//             alt="bigImg"
//             className="max-h-[377px] rounded-lg bg-gray-10"
//           />
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
//         <h4 className="bold-28">{product.name}</h4>
//         <div className="flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-3">
//           <div>₹{product.price}.00</div>
//           <div className="flex items-start gap-x-1 medium-16 text-secondary">
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <p>223</p>
//           </div>
//         </div>

//         {/* Color & Size */}
//         <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-4">
//           {/* Colors */}
//           <div>
//             <h4 className="bold-16">Select color:</h4>
//             <div className="flex gap-3 my-3">
//               {colors.map((colorClass, idx) => (
//                 <div
//                   key={idx}
//                   className={`h-10 w-10 cursor-pointer rounded-sm border-2 ${colorClass} ${
//                     selectedColor === idx ? "border-black" : "border-transparent"
//                   }`}
//                   onClick={() => setSelectedColor(idx)}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Sizes */}
//           <div>
//             <h4 className="bold-16">Select Size:</h4>
//             <div className="flex gap-3 my-3 flex-wrap">
//               {sizes.map((size) => (
//                 <div
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`border-[1.5px] h-10 px-3 flexCenter cursor-pointer rounded-sm ${
//                     selectedSize === size ? "border-black" : "border-slate-900/15"
//                   } min-w-[60px] max-w-fit`}
//                 >
//                   {size}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-4 mb-8 max-w-[555px] flex-wrap">
//           <button className="btn-secondary rounded-dm !px-4" aria-label="Add to Wishlist">
//             <FaHeart />
//           </button>

//           <button
//             onClick={() => navigate("/cart")}
//             className="btn-dark rounded-sm dm:!px-20 !py-2 flexCenter gap-x-2"
//           >
//             Go To Cart <LuMoveUpRight className="text-xl" />
//           </button>

//           {!cartItems[product._id] ? (
//             <FaPlus
//               onClick={() => addToCart(product._id)}
//               className="bg-tertiary text-white rounded-sm h-[38px] w-[38px] p-2 cursor-pointer"
//               aria-label="Add to cart"
//             />
//           ) : (
//             <div className="bg-tertiary text-white rounded-sm flexCenter gap-2">
//               <FaMinus
//                 onClick={() => removeFromCart(product._id)}
//                 className="h-8 w-8 p-2 cursor-pointer"
//                 aria-label="Remove from cart"
//               />
//               <p className="text-white pr-2 w-3">{cartItems[product._id]}</p>
//               <FaPlus
//                 onClick={() => addToCart(product._id)}
//                 className="rounded-sm border-secondary h-8 w-8 p-1 mr-1 cursor-pointer"
//                 aria-label="Add more"
//               />
//             </div>
//           )}
//         </div>

//         {/* Category & Tags */}
//         <p>
//           <span className="medium-16 text-tertiary">Category:</span>{" "}
//           {product.category || "General"}
//         </p>
//         <p>
//           <span className="medium-16 text-tertiary">Tags:</span>{" "}
//           {product.tags?.join(" | ") || "New"}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ProductMd;
import React, { useContext, useState } from "react";
import { FaStar, FaHeart, FaPlus, FaMinus } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";
import { LuMoveUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const ProductMd = ({ product }) => {
  const { addToCart, removeFromCart, cartItems, url } = useContext(ShopContext);
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isLiked, setIsLiked] = useState(false); // 👈 Like state

  const colors = ["bg-secondaryRed", "bg-secondaryYellow", "bg-secondaryBlue", "bg-secondaryGreen"];
  const sizes = ["6", "6.5", "Free Size"]; // Free size added

  return (
    <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
      {/* Left Side */}
      <div className="flex gap-x-2 xl:flex-1 py-5">
        <div className="flexCenter flex-col gap-[7px] flex-wrap">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={url + "/images/" + product.image}
              alt="ProductImg"
              className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
            />
          ))}
        </div>
        <div className="max-h-[377px] w-auto flex">
          <img
            src={url + "/images/" + product.image}
            alt="bigImg"
            className="max-h-[377px] rounded-lg bg-gray-10"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
        <h4 className="bold-28">{product.name}</h4>
        <div className="flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-3">
          <div>₹{product.price}.00</div>
          <div className="flex items-start gap-x-1 medium-16 text-secondary">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>223</p>
          </div>
        </div>

        {/* Color & Size */}
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-4">
          <div>
            <h4 className="bold-16">Select color:</h4>
            <div className="flex gap-3 my-3">
              {colors.map((colorClass, idx) => (
                <div
                  key={idx}
                  className={`h-10 w-10 cursor-pointer rounded-sm border-2 ${colorClass} ${
                    selectedColor === idx ? "border-black" : "border-transparent"
                  }`}
                  onClick={() => setSelectedColor(idx)}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="bold-16">Select Size:</h4>
            <div className="flex gap-3 my-3 flex-wrap">
              {sizes.map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border-[1.5px] h-10 px-3 flexCenter cursor-pointer rounded-sm ${
                    selectedSize === size ? "border-black" : "border-slate-900/15"
                  } min-w-[60px] max-w-fit`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8 max-w-[555px] flex-wrap items-center">
          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="rounded-full p-2 text-2xl transition-colors duration-200"
            aria-label="Toggle Like"
          >
            <FaHeart color={isLiked ? "red" : "gray"} />
          </button>

          {/* Go to Cart Button */}
          <button
            onClick={() => navigate("/cart")}
            className="btn-dark rounded-sm dm:!px-20 !py-2 flexCenter gap-x-2"
          >
            Go To Cart <LuMoveUpRight className="text-xl" />
          </button>

          {/* Cart Quantity Control */}
          {!cartItems[product._id] ? (
            <FaPlus
              onClick={() => addToCart(product._id)}
              className="bg-tertiary text-white rounded-sm h-[38px] w-[38px] p-2 cursor-pointer"
              aria-label="Add to cart"
            />
          ) : (
            <div className="bg-tertiary text-white rounded-sm flexCenter gap-2">
              <FaMinus
                onClick={() => removeFromCart(product._id)}
                className="h-8 w-8 p-2 cursor-pointer"
                aria-label="Remove from cart"
              />
              <p className="text-white pr-2 w-3">{cartItems[product._id]}</p>
              <FaPlus
                onClick={() => addToCart(product._id)}
                className="rounded-sm border-secondary h-8 w-8 p-1 mr-1 cursor-pointer"
                aria-label="Add more"
              />
            </div>
          )}
        </div>

        {/* Category & Tags */}
        <p>
          <span className="medium-16 text-tertiary">Category:</span>{" "}
          {product.category || "General"}
        </p>
        <p>
          <span className="medium-16 text-tertiary">Tags:</span>{" "}
          {product.tags?.join(" | ") || "New"}
        </p>
      </div>
    </section>
  );
};

export default ProductMd;
