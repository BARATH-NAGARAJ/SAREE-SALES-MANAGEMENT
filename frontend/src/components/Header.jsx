// // // import React, { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import logo from '../assets/logo.svg'; 
// // // import Navbar from './Navbar';
// // // import  {MdMenu, MdClose} from "react-icons/md";
// // // import {GiShoppingBag} from "react-icons/gi";
// // // import {FaCircleUser} from "react-icons/fa6";
// // // import {FiPackage} from "react-icons/fi";
// // // import {TbLogout} from "react-icons/tb";

// // // const Header = () => {
// // //   const [menuOpened, setMenuOpened] = useState(false);
// // //   const [header, setHeader] = useState(false);
// // //  const[token, setToken] = useState(true);


// // //   const toggleMenu = () => {
// // //     setMenuOpened(!menuOpened);
// // //   }
// // //   useEffect(() => {
// // //     const scrollYPos = window.addEventListener("scroll", ()=> {
// // //       window.scrollY > 40 ? setHeader(true) : setHeader(false)
// // //     }); 

// // //     return () => window.removeEventListener("scroll",scrollYPos)
// // //   })

// // //   return (
// // //     <header className={` ${header ? "!py-3 bg-white shadow-sm":""}fixed w-full mx-auto top-0 left-0 right-0 py-4 z-30 transition-all max-padd-container flexBetween`} >
// // //       {/* Logo */}
// // //       <Link to="/">
// // //         <img src={logo} alt="Logo alt image" height={177} width={177} />
// // //       </Link>

// // //       <div className="flexBetween gap-x-20">
// // //         {/* Desktop Navbar */}
// // //         <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />

// // //         {/* Mobile Navbar */}
// // //         <Navbar
// // //              containerStyles={`${ menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md  w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md  w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
// // //             }`} />

// // //             <div className ="flexBetween gap-x-3 sm:gap-x-8">
// // //               {/* Buttons */}
// // //               {!menuOpened ?  (<MdMenu onClick={toggleMenu} className="md:hidden cursor-pointer hover:text-secondary text-2xl"/>) 
// // //               : 
// // //               (<MdClose onClick={toggleMenu} className="md:hidden cursor-pointer hover:text-secondary text-2xl" />)}
// // //               <Link to={"/cart"} className="flex relative" >
// // //                 <GiShoppingBag className = "text-[22px] text-white bg-secondary h-9 w-9 p-2 rounded-xl"/>
// // //                 <span className = "bg-white text-sm absolute -top-2 -right-3 flexCenter w-5 h-5 rounded-full shadow-md">
// // //                   0
// // //                 </span>
// // //               </Link>
// // //               {!token ? (
// // //                 <button className = "btn-outline rounded-full">
// // //                   Login
// // //                 </button>
// // //               ):(
// // //                 <div className ="group relative">
// // //                   <FaCircleUser className = "text-2xl"/>
// // //                   <ul className="bg-primary shadow-sm p-3 w-24 ring-1 ring-slate-900/15 rounded absolute right-0 group-hover:flex flex-col hidden">
// // //                     <li className ="flexCenter gap-x-2 cursor-pointer">
// // //                         <FiPackage className="text-[19px]"/>
// // //                         <p>Orders</p>
// // //                     </li>
// // //                   <hr className= "my-2"/>
// // //                     <li className= " flexCenter gap-x-2 cursor-pointer">
// // //                         <TbLogout className="text-[19px]"/>
// // //                         <p>Logout</p>
// // //                     </li>
// // //                   </ul>
// // //                   </div>
// // //               )}
// // //             </div>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;
// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import Navbar from './Navbar';
// // import logo from '../assets/logo.svg';

// // import { MdMenu, MdClose } from "react-icons/md";
// // import { GiShoppingBag } from "react-icons/gi";
// // import { FaCircleUser } from "react-icons/fa6";
// // import { FiPackage } from "react-icons/fi";
// // import { TbLogout } from "react-icons/tb";

// // const Header = ({setShowLogin}) => {
// //   const {getTotalCartItems, token, setToken} = useContext(ShopContext)
// //   const [menuOpened, setMenuOpened] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [header, setHeader] = useState(false)
// //   const navigate = useNavigate()
// //   // const [token, setToken] = useState(false); // change to `false` if user is not logged in

// //   const toggleMenu = () => setMenuOpened((prev) => !prev);

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     setToken("/");
// //     navigate("/")
// //   }

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 40);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <header
// //       className={`fixed w-full z-30 transition-all ${
// //         isScrolled ? "bg-white shadow-sm py-3" : "py-4"
// //       } top-0 left-0 right-0`}
// //     >
// //       <div className="max-padd-container flexBetween">
// //         {/* Logo */}
// //         <Link to="/">
// //           <img src={logo} alt="Logo" height={177} width={177} />
// //         </Link>

// //         <div className="flexBetween gap-x-20">
// //           {/* Desktop Navbar */}
// //           <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />

// //           {/* Mobile Navbar */}
// //           <Navbar
// //             containerStyles={`${
// //               menuOpened
// //                 ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
// //                 : "fixed -right-[100%] top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
// //             }`}
// //           />

// //           {/* Right Side */}
// //           <div className="flexBetween gap-x-3 sm:gap-x-8">
// //             {/* Mobile Toggle */}
// //             {menuOpened ? (
// //               <MdClose
// //                 onClick={toggleMenu}
// //                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
// //               />
// //             ) : (
// //               <MdMenu
// //                 onClick={toggleMenu}
// //                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
// //               />
// //             )}

// //             {/* Cart */}
// //             <Link to="/cart" className="relative">
// //               <GiShoppingBag className="text-[22px] text-white bg-secondary h-9 w-9 p-2 rounded-xl" />
// //               <span className="absolute -top-2 -right-3 w-5 h-5 text-sm bg-white text-black rounded-full flexCenter shadow-md">
// //                 {getTotalCartItems()}
// //               </span>
// //             </Link>

// //             {/* Login/User */}
// //             {!token ? (
// //               <button onClick={()=>setShowLogin(true)}className="btn-outline rounded-full">Login</button>
// //             ) : (
// //               <div className="group relative">
// //                 <FaCircleUser className="text-2xl cursor-pointer" />
// //                 <ul className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-primary text-black shadow-sm p-3 w-24 rounded ring-1 ring-slate-900/15">
// //                   <li className="flexCenter gap-x-2 cursor-pointer hover:text-secondary">
// //                     <FiPackage className="text-[19px]" />
// //                     <p>Orders</p>
// //                   </li>
// //                   <hr className="my-2" />
// //                   <li onClick={logout} className="flexCenter gap-x-2 cursor-pointer hover:text-secondary">
// //                     <TbLogout className="text-[19px]" />
// //                     <p>Logout</p>
// //                   </li>
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;
// import React, { useEffect, useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
// import logo2 from '../assets/logo2.jpg';

// import { MdMenu, MdClose } from "react-icons/md";
// import { GiShoppingBag } from "react-icons/gi";
// import { FaCircleUser } from "react-icons/fa6";
// import { FiPackage } from "react-icons/fi";
// import { TbLogout } from "react-icons/tb";
// import { ShopContext } from '../context/ShopContext';

// const Header = ({ setShowLogin }) => {
//   const { getTotalCartItems, token, setToken } = useContext(ShopContext);
//   const [menuOpened, setMenuOpened] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => setMenuOpened(prev => !prev);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     navigate("/");
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed w-full z-30 transition-all ${isScrolled ? "bg-white shadow-sm py-3" : "py-4"} top-0 left-0 right-0`}
//     >
//       <div className="max-padd-container flexBetween">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo2} alt="Logo" height={50} width={50} />
//         </Link>

//         <div className="flexBetween gap-x-20">
//           {/* Desktop Navbar */}
//           <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />

//           {/* Mobile Navbar */}
//           <Navbar
//             containerStyles={`${
//               menuOpened
//                 ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
//                 : "fixed -right-[100%] top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
//             }`}
//           />

//           {/* Right Side */}
//           <div className="flexBetween gap-x-3 sm:gap-x-8">
//             {/* Mobile Toggle */}
//             {menuOpened ? (
//               <MdClose
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             ) : (
//               <MdMenu
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             )}

//             {/* Cart */}
//             <Link to="/cart" className="relative">
//               <GiShoppingBag className="text-[22px] text-white bg-secondary h-9 w-9 p-2 rounded-xl" />
//               <span className="absolute -top-2 -right-3 w-5 h-5 text-sm bg-white text-black rounded-full flexCenter shadow-md">
//                 {getTotalCartItems()}
//               </span>
//             </Link>

//             {/* Login/User */}
//             {!token ? (
//               <button
//                 onClick={() => setShowLogin(true)}
//                 className="btn-outline rounded-full"
//               >
//                 Login
//               </button>
//             ) : (
//               <div className="group relative">
//                 <FaCircleUser className="text-2xl cursor-pointer" />
//                 <ul className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-primary text-black shadow-sm p-3 w-28 rounded ring-1 ring-slate-900/15 z-50">
//                   <li onClick={()=>navigate("/myorders")} className="flexCenter gap-x-2 cursor-pointer hover:text-secondary">
//                     <FiPackage className="text-[19px]" />
//                     <p>Orders</p>
//                   </li>
//                   <hr className="my-2" />
//                   <li
//                     onClick={logout}
//                     className="flexCenter gap-x-2 cursor-pointer hover:text-secondary"
//                   >
//                     <TbLogout className="text-[19px]" />
//                     <p>Logout</p>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import logo2 from '../assets/logo2.jpg';

import { MdMenu, MdClose } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { ShopContext } from '../context/ShopContext';

const Header = ({ setShowLogin }) => {
  const { getTotalCartItems, token, setToken, userName } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpened(prev => !prev);
  const toggleProfileMenu = () => setProfileMenuOpen(prev => !prev);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition-all ${isScrolled ? "bg-white shadow-sm py-3" : "py-4"} top-0 left-0 right-0`}
    >
      <div className="max-padd-container flexBetween">
        {/* Logo */}
        <Link to="/">
          <img src={logo2} alt="Logo" height={80} width={100} />
        </Link>

        <div className="flexBetween gap-x-20">
          {/* Desktop Navbar */}
          <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />

          {/* Mobile Navbar */}
          <Navbar
            containerStyles={`${
              menuOpened
                ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
                : "fixed -right-[100%] top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
            }`}
          />

          {/* Right Side */}
          <div className="flexBetween gap-x-3 sm:gap-x-8">
            {/* Mobile Toggle */}
            {menuOpened ? (
              <MdClose
                onClick={toggleMenu}
                className="md:hidden cursor-pointer hover:text-secondary text-2xl"
              />
            ) : (
              <MdMenu
                onClick={toggleMenu}
                className="md:hidden cursor-pointer hover:text-secondary text-2xl"
              />
            )}

            {/* Cart */}
            <Link to="/cart" className="relative">
              <GiShoppingBag className="text-[22px] text-white bg-secondary h-9 w-9 p-2 rounded-xl" />
              <span className="absolute -top-2 -right-3 w-5 h-5 text-sm bg-white text-black rounded-full flexCenter shadow-md">
                {getTotalCartItems()}
              </span>
            </Link>

            {/* Login/User */}
            {!token ? (
              <button
                onClick={() => setShowLogin(true)}
                className="btn-outline rounded-full"
              >
                Login
              </button>
            ) : (
              <div className="relative">
                <FaCircleUser
                  onClick={toggleProfileMenu}
                  className="text-2xl cursor-pointer"
                />
                {profileMenuOpen && (
                  <ul className="absolute right-0 mt-2 bg-primary text-black shadow-sm p-3 w-28 rounded ring-1 ring-slate-900/15 z-50">
                    <li onClick={() => navigate("/myorders")} className="flexCenter gap-x-2 cursor-pointer hover:text-secondary py-1">
                      <FiPackage className="text-[19px]" />
                      <p>Orders</p>
                    </li>
                    <hr className="my-2" />
                    <li
                      onClick={logout}
                      className="flexCenter gap-x-2 cursor-pointer hover:text-secondary py-1"
                    >
                      <TbLogout className="text-[19px]" />
                      <p>Logout</p>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;