import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer id='contact' className='bg-tertiary max-padd-container text-white py-12 rounded-xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo and description */}
        <div className='flex flex-col items-center md:items-start'>
          <Link to='/' className='bold-24 mb-4'>
            <h3>Sivaprakasam<span className='text-secondary'>Sarees</span></h3>
          </Link>
          <p className='text-center md:text-left'>
            We offer Cotton Sarees for our customers. Our Sarees are designed with utmost attention to the ever-changing trends of the market so as to meet the expectations of our customers. We procure cotton and silk yarn from the authorized vendors of the market to ensure the production of qualitative cum exquisite Sarees. <br/><br />The beauty of every woman is enhanced when she drapes a gorgeous saree. SIVAPRAKASAM SAREES we have a wide range of sarees to suit the different needs of a modern woman.


          </p>
        </div>

        {/* Quick links */}
        <div className='flex flex-col items-center md:items-start'>
          <h4 className='bold-20 mb-4'>Quick Links</h4>
          <ul className='space-y-2 regular-15 text-gray-300'>
            <li><a href="/" className='hover:text-secondary'>Home</a></li>
            <li><a href="#categories" className='hover:text-secondary'>Categories</a></li>
            <li><a href="#shop" className='hover:text-secondary'>Shop</a></li>
            <li><a href="#contact" className='hover:text-secondary'>Contact Us</a></li>
          </ul>
        </div>

        {/* Contact information */}
        <div className='flex flex-col items-center md:items-start'>
          <h4 className='text-lg mb-4'>Contact Us</h4>
          <p>Email: <a href="mailto:support@fusionmart.com" className='hover:text-secondary'>sivaprakasamsarees@yahoo.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className='hover:text-secondary'>9003330044</a></p>
          <p>Address: 31, Brinda Street, Erode - 638001, TN.</p>
        </div>
      </div>

      <div className='flex flex-col items-center mt-8'>
        <SocialIcons />
        <hr className='h-[1px] w-full max-w-screen-md my-4 border-white' />
        <p className='text-center text-sm'>&copy; {new Date().getFullYear()} SIVAPRAKASAM SAREES | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
