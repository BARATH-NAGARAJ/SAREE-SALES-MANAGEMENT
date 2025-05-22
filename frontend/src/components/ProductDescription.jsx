// import React from 'react';

// const ProductDescription = () => {
//   return (
//     <div className="max-padd-container mt-20">
//       {/* Tabs */}
//       <div className="flex gap-3 mb-4">
//         <button className="btn-dark rounded-sm !text-xs !py-[6px] w-36">
//           Description
//         </button>
//         <button className="btn-outline rounded-sm !text-xs !py-[6px] w-36">
//           Care Guide
//         </button>
//         <button className="btn-outline rounded-sm !text-xs !py-[6px] w-36">
//           Size Guide
//         </button>
//       </div>

//       {/* Description Content */}
//       <div className="flex flex-col pb-16">
//         <p className="text-sm mb-2">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//           elit libero, a pharetra augue.
//         </p>
//         <p className="text-sm">
//           Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque
//           ornare sem lacinia quam venenatis vestibulum.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDescription;
import React, { useState } from 'react';

const ProductDescription = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');
  
  // If no product is passed, show default text
  const description = product?.description || 'No description available';

  return (
    <div className="max-padd-container mt-20">
      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        <button 
          onClick={() => setActiveTab('description')}
          className={activeTab === 'description' ? "btn-dark rounded-sm !text-xs !py-[6px] w-36" : "btn-outline rounded-sm !text-xs !py-[6px] w-36"}
        >
          Description
        </button>
        <button 
          onClick={() => setActiveTab('care')}
          className={activeTab === 'care' ? "btn-dark rounded-sm !text-xs !py-[6px] w-36" : "btn-outline rounded-sm !text-xs !py-[6px] w-36"}
        >
          Care Guide
        </button>
        <button 
          onClick={() => setActiveTab('size')}
          className={activeTab === 'size' ? "btn-dark rounded-sm !text-xs !py-[6px] w-36" : "btn-outline rounded-sm !text-xs !py-[6px] w-36"}
        >
          Size Guide
        </button>
      </div>

      {/* Description Content */}
      <div className="flex flex-col pb-16">
        {activeTab === 'description' && (
          <p className="text-sm mb-2">
            {description}
          </p>
        )}
        
        {activeTab === 'care' && (
          <>
            <p className="text-sm mb-2">
              Hand wash with mild detergent. Do not bleach. Dry in shade.
            </p>
            <p className="text-sm">
              Iron at low temperature. Store in a cool, dry place.
            </p>
          </>
        )}
        
        {activeTab === 'size' && (
          <>
            <p className="text-sm mb-2">
              Please refer to our size chart for accurate measurements.
            </p>
            <p className="text-sm">
              For custom sizing requirements, please contact our customer support.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;