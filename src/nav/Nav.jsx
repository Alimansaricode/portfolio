import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Hero from '../Hero/Hero';



function Nav() {
  let[showCart,setShowCart]=useState(false)

  return (
    <>
    <Hero/>
    <div className='    flex justify-center bg-cover sticky top-0 z-50  ' >
    <div className='w-[1400px] h-[70px]  bg-black/30 flex justify-between items-center mt-13   rounded-[50px] '>
        <h1 className='max-lg:ml-10 text-[36px] font-bold text-white ml-35 cursor-pointer hover:text-blue-500 '>Portfolio</h1>
         <div className='text-white'>
          <ul className='max-md:hidden flex justify-center items-center gap-15 mr-20 cursor-pointer '>

            <li>  <Link to='/' className='text-[20px] font-bold hover:text-blue-500'>Home</Link></li>
            <li><Link to="/Project"className='text-[20px] font-bold hover:text-blue-500'>Projects</Link></li>
            <li><Link to="/Skill"className='text-[20px] font-bold hover:text-blue-500'>Skill</Link></li>
            <li><Link to="/Contact"className='text-[20px] font-bold hover:text-blue-500'>Contact</Link></li>
       </ul>
       <div className='md-barder 'onClick={()=>{
        setShowCart(true)
       }}><FiAlignJustify /> </div>
       
      </div>
    </div>
    <div className={` hidden max-md:block  z-50  max-sm:w-full  h-full  top-0 right-0  bg-black/92 fixed  duration-300 ${showCart?"translate-x-0":"translate-x-full"} `} >
        <header className='w-full flex justify-between cursor-pointer'onClick={()=>setShowCart(false)}>
          <div className='text-[35px] font-black my-20 mx-48 text-white flex flex-col justify-center items-center gap-10 '>
            <h2>Portfolio</h2>
          <ul className='flex flex-col justify-center items-center gap-4 mt-20 cursor-pointer '>

            <li>  <Link to='/' className='text-[20px] font-bold hover:text-blue-500'>Home</Link></li>
            <li><Link to="/Project"className='text-[20px] font-bold hover:text-blue-500'>Project</Link></li>
            <li><Link to="/Skill"className='text-[20px] font-bold hover:text-blue-500'>Skill</Link></li>
            <li><Link to="/Contact"className='text-[20px] font-bold hover:text-blue-500'>Contact</Link></li>
       </ul>
            </div>
       <span className='text-[40px]  pt-1 pr-1 text-white'onClick={()=>setShowCart(false)}><RxCross1 /></span>
       
       </header>

       </div>
    </div>
   
    </>
    
  )
}


export default Nav



