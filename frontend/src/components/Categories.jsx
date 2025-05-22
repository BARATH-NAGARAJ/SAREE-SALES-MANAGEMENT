// import React from 'react';
// import { categories } from '../assets/data';

// const Categories = () => {
//   return (
//     <section id='categories' className="max-padd-container pt-16">
//       {/* title */}
//       <div className="flexBetween pb-20">
//         <h4 className='text-4xl font-bold leading-none font-ace flex flex-col'>
//           <span className='medium-16'>Select</span> Categories
//         </h4>
//       </div>

//       {/* container */}
//       <div className='flexStart gap-12 flex-wrap'>
//         {categories.map((item) => (
//           <div
//             id={item.name.toLowerCase().replace(/\s+/g, '-')}
//             key={item.name}
//             className="flexCenter flex-col"
//           >
//             <div className='p-8 rounded-2xl cursor-pointer bg-primary'>
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="object-cover h-32 w-32"
//               />
//             </div>
//             <h4 className='mt-6 medium-18'>{item.name}</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Categories;

// import React from 'react';
// import { categories } from '../assets/data';

// const Categories = ({ category, setCategory }) => {
//   const handleCategoryClick = (item) => {
//     if (category === item.name) {
//       setCategory("All");  // If the same category is clicked again, reset to 'All'
//     } else {
//       setCategory(item.name);  // Otherwise, set to the selected category
//     }
//   };

//   return (
//     <section id='categories' className="max-padd-container pt-16">
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-14'>
//         {categories.map((item) => (
//           <div
//             key={item.name}
//             onClick={() => handleCategoryClick(item)}
//             id={item.name.toLowerCase().replace(/\s+/g, '-')}
//             className="flexCenter flex-col cursor-pointer"
//           >
//             <div className='p-8 rounded-2xl bg-primary'>
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="object-cover h-32 w-32"
//               />
//             </div>
//             <h4 className={`mt-6 medium-18 ${category === item.name ? "border-b-4 border-secondary" : "border-b-4 border-white"}`}>
//               {item.name}
//             </h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Categories;
import React from 'react';
import { categories } from '../assets/data';

const Categories = ({ category, setCategory }) => {
  const handleCategoryClick = (item) => {
    if (category === item.name) {
      setCategory("All");  // If the same category is clicked again, reset to 'All'
    } else {
      setCategory(item.name);  // Otherwise, set to the selected category
    }
  };

  return (
    <section id='categories' className="max-padd-container pt-16">
      {/* Display selected category name */}
      <div className="flexBetween pb-10">
        <h2 className="text-4xl font-bold">
          <span className="text-gray-500 text-base block">Selected Category:</span>
          {category === "All" ? "All Products" : category}
        </h2>
      </div>

      {/* Category grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-14'>
        {categories.map((item) => (
          <div
            key={item.name}
            onClick={() => handleCategoryClick(item)}
            id={item.name.toLowerCase().replace(/\s+/g, '-')}
            className="flexCenter flex-col cursor-pointer"
          >
            <div className='p-8 rounded-2xl bg-primary'>
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-32 w-32"
              />
            </div>
            <h4 className={`mt-6 medium-18 ${category === item.name ? "border-b-4 border-secondary" : "border-b-4 border-white"}`}>
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
