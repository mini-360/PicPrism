import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-[#ffffff] py-2 shadow-md sm:gap-0 gap-2 z-30 flex flex-col sm:flex-row justify-between items-start sm:items-center px-4'>
      <div>
        <Link to='/home' className='font-bold text-3xl'>PicPrism</Link>
      </div>

      <ul className='flex gap-5 font-semibold text-lg text-gray-600'>
        <li className='hover:text-black cursor-pointer'>About</li> 
        <li className='hover:text-black cursor-pointer'>Contact</li>
        <li className='hover:text-black cursor-pointer'>SignIn</li>
        <li className='hover:text-black cursor-pointer'>SignUp</li>
      </ul>
    </nav>
  )
}

export default Navbar