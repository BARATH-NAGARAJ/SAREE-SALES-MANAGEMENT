import React from "react"
import logo2 from "../assets/logo2.jpg"
import blogo from "../assets/blogo.png"

const Navbar = () => {
  return (
    <div className='max-padd-container flexBetween py-2'>
      <img src={logo2} alt="logoImg" height={60} width={60} />
      <img src={blogo} alt="profileImg" height={40} width={40} className='rounded-full' />
    </div>
  )
}

export default Navbar
