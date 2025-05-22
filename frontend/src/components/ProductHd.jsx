import React from 'react'
import { TbArrowRight, TbArrowUpSquare } from 'react-icons/tb'

const ProductHd = ({product}) => {
  return (
    <div className='max-padd-container flex items-center flex-wrap gap-x-2 medium-16 py-4 capitalize bg-primary rounded-tl-xl rounded-tr-xl'>
      Home
      <TbArrowRight />
      {product.name}
      {/* Optional usage of the square icon */}
      {/* <TbArrowUpSquare /> */}
    </div>
  )
}

export default ProductHd
