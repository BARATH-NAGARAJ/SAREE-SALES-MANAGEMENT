// import React from 'react'
// import { Link } from 'react-router-dom'
// import {
//   RiDribbbleFill,
//   RiGithubFill,
//   RiInstagramFill,
//   RiFacebookFill,
//   RiTwitterFill,
// } from 'react-icons/ri'

// const SocialIcons = () => {
//   return (
//     <div className='flex gap-6 pr-4'>
//       <Link to={'https://dribbble.com'} target='_blank' rel='noopener noreferrer' className='text-[#ea4c89] text-2xl hover:-translate-y-1 transition-transform'>
//         <RiDribbbleFill />
//       </Link>
//       <Link to={'https://github.com'} target='_blank' rel='noopener noreferrer' className='text-[#f08a5d] text-2xl hover:-translate-y-1 transition-transform'>
//         <RiGithubFill />
//       </Link>
//       <Link to={'https://instagram.com'} target='_blank' rel='noopener noreferrer' className='text-[#ff2e63] text-2xl hover:-translate-y-1 transition-transform'>
//         <RiInstagramFill />
//       </Link>
//       <Link to={'https://facebook.com'} target='_blank' rel='noopener noreferrer' className='text-[#5272f2] text-2xl hover:-translate-y-1 transition-transform'>
//         <RiFacebookFill />
//       </Link>
//       <Link to={'https://twitter.com'} target='_blank' rel='noopener noreferrer' className='text-[#1DA1F2] text-2xl hover:-translate-y-1 transition-transform'>
//         <RiTwitterFill />
//       </Link>
//     </div>
//   )
// }

// export default SocialIcons
import React from 'react'
import {
  RiDribbbleFill,
  RiGithubFill,
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
} from 'react-icons/ri'

const SocialIcons = () => {
  return (
    <div className='flex gap-6 pr-4'>
      <a href='https://dribbble.com' target='_blank' rel='noopener noreferrer' className='text-[#ea4c89] text-2xl hover:-translate-y-1 transition-transform'>
        <RiDribbbleFill />
      </a>
      <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-[#f08a5d] text-2xl hover:-translate-y-1 transition-transform'>
        <RiGithubFill />
      </a>
      <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-[#ff2e63] text-2xl hover:-translate-y-1 transition-transform'>
        <RiInstagramFill />
      </a>
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-[#5272f2] text-2xl hover:-translate-y-1 transition-transform'>
        <RiFacebookFill />
      </a>
      <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-[#1DA1F2] text-2xl hover:-translate-y-1 transition-transform'>
        <RiTwitterFill />
      </a>
    </div>
  )
}

export default SocialIcons
