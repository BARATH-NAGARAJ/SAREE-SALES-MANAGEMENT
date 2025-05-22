// import React from 'react'
// import { all_products } from '../assets/data'
// import Item from './Item'


// const ProductDisplay = () => {
//   return (
//     <section id="shop" className="max-padd-container py-16">
//         {/* title */}
//       <div className="flexBetween pb-20">
//         <h4 className='text-4xl font-bold leading-none font-ace flex flex-col'>
//           <span className='medium-16'>see</span> Products
//         </h4>
//       </div>
//       {/* container */}
//       <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-33 lg:grid-cols-4 xl:grid-cols-5 gap-x-8">
//         {all_products.map((product)=>{
//             return (
//                 <div key={product._id}>
//                     <Item />
//                 </div>
//             )
//         })}
//       </div>
//     </section>
//   )
// }

// export default ProductDisplay



import React, { useContext } from 'react';
import Item from './Item';
import { ShopContext } from '../context/ShopContext';

const ProductDisplay = ( {category}) => {
  const { all_products } = useContext(ShopContext);

  return (
    <section id="shop" className="max-padd-container py-16">
      {/* title */}
      <div className="flexBetween pb-20">
        <h4 className='text-4xl font-bold leading-none font-ace flex flex-col'>
          <span className='medium-16'>see</span> Products
        </h4>
      </div>

      {/* container */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12">
        {all_products.map((product) => {
        if(category === "All" || category === product.category)
        return (
          <div key={product._id}>
            <Item product={product} />
          </div>
        );
      }
        )}
      </div>
    </section>
  );
};

export default ProductDisplay;
// import React, { useContext } from 'react';
// import Item from './Item';
// import { ShopContext } from '../context/ShopContext';

// const ProductDisplay = ({ category }) => {
//   const { all_products } = useContext(ShopContext);

//   // Filter products by category (case-insensitive)
//   const filteredProducts = all_products.filter(
//     (product) =>
//       category === "All" || category.toLowerCase() === product.category.toLowerCase()
//   );

//   return (
//     <section id="shop" className="max-padd-container py-16">
//       {/* title */}
//       <div className="flexBetween pb-20">
//         <h4 className='text-4xl font-bold leading-none font-ace flex flex-col'>
//           <span className='medium-16'>see</span> Products
//         </h4>
//       </div>

//       {/* container */}
//       <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12">
//         {filteredProducts.map((product) => (
//           <div key={product._id}>
//             <Item product={product} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductDisplay;
