import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='min-w-full min-h-12 p-2 bg-green-500 text-white flex items-center justify-between'>
        <h1 className='font-serif font-bold text-3xl'>WhatScore</h1>
        <div className='p-3 flex items-center gap-7 text-lg '>
            <Link to={'/'}><span className=' cursor-pointer font-medium hover:font-bold'>Home</span></Link>
            <Link to={'/livescore'}> <span className=' cursor-pointer font-medium hover:font-bold'>Live Score</span></Link>
            <Link to={'/matchinfo'}> <span className=' cursor-pointer font-medium hover:font-bold'>Matches Info</span></Link>
            
           
           
        </div>
    </div>
  )
}

export default NavBar