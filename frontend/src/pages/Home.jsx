// import React, { useState } from 'react';
// import Hero from '../components/Hero';
// import Features from '../components/Features';
// import Categories from '../components/Categories';
// import ProductDisplay from '../components/ProductDisplay';
// import Offer from '../components/Offer';

// const Home = () => {
//   const [category, setCategory] = useState("All"); // Default category is 'All'

//   return (
//     <>
//       <Hero />
//       <Features />
//       <Categories category={category} setCategory={setCategory} />
//       <ProductDisplay category={category} />
//       <Offer />
//     </>
//   );
// };

// export default Home;
import React, { useState, useContext, useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import ProductDisplay from '../components/ProductDisplay';
import Offer from '../components/Offer';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [category, setCategory] = useState("All"); // Default category is 'All'
  const { refreshProducts } = useContext(ShopContext);
  const location = useLocation();

  // Effect to refresh product data when navigating to Home page
  useEffect(() => {
    // This will fetch fresh data whenever the user navigates to the Home page
    refreshProducts();
    
    // Remove the automatic scroll to top
    // window.scrollTo(0, 0); - removed this line
  }, [location.pathname, refreshProducts]);

  return (
    <>
      <Hero />
      <Features />
      <Categories category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
      <Offer />
    </>
  );
};

export default Home;