import React from 'react';
import { Link } from 'react-router-dom';
import { BsFire } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="home" className="w-full h-[777px] bg-hero bg-center bg-cover bg-no-repeat">
      {/* Content Wrapper with Padding */}
      <div className="max-padd-container">
        <div className="relative max-w-[666px] top-44 xs:top-72">
          <h4 className="flex items-baseline gap-x-2 uppercase text-secondary medium-18">
            Latest Collection <BsFire />
          </h4>
          <h2 className="h1 capitalize">
Explore Exquisite Silk Sarees          </h2>
          <p className="border-l-4 border-secondary pl-3 my-2">
            Discover a stunning range of handcrafted silk sarees, featuring vibrant colors,
            intricate designs, and luxurious fabrics.  Experience the elegance of traditional
            Indian attire.
          </p>

          {/* Button */}
          <div className="flex items-center gap-x-4 mt-7">
            <Link to={""} className="btn-secondary rounded-full flexCenter gap-x-2">
              Latest Products <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
