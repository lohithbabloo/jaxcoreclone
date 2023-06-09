import Image from 'next/image'
import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose,AiOutlineDownload} from 'react-icons/ai'
const Navbar = () => {
  const [nav,setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>

    {/* navbar */}
        <div className='flex justify-evenly items-center lg:px-10 sm:px-5 px-0 h-[80px] w-full font-Play fixed z-10 opacity-100 bg-transparent backdrop-blur-md'>
            <a href='#' className='flex items-center justify-between gap-2'>
            <Image src='/jaxcorelogo.png' className='h-16 animate-spin-short align-top' alt='logo' width={60} height={16}/>
            <p className='text-white text-xl'>JAXCORE</p>
            </a>
            <hr className='md:w-[40vw] sm:w-[40vw] xms:w-[40vw]'/>
             <div className='lg:flex justify-between gap-7 items-center hidden' >
                <a href='#' className='text-white text-xl hover:translate-y-1 '>Home</a>
                <a href='#modules' className='text-white text-xl hover:translate-y-1'>Modules</a>
                <a href='#'><Image src='/s-hub logo.png' width={36} height={8} className='h-8 hover:translate-y-1'alt='s-hub-link' /></a>
                <a href='#'><Image src='/GitHub.png' width={36} height={8} className='h-8 hover:translate-y-1'alt='github-link' /></a>
                <a href="#"><Image src="/Discord.png" width={36} height={8} className='h-8 hover:translate-y-1'alt='discord-link' /></a>
             </div>
             <div className='lg:hidden flex justify-center items-center gap-3 '>
             <div className=' md:flex hidden px-8 py-2 justify-between gap-3 items-center bg-gradient-to-r from-orange-600 to-yellow-400 rounded-xl hover:translate-y-1'> 
              <h3 className='md:text-xl md:font-medium font-semibold text-white'>Download</h3>
              <AiOutlineDownload size={20} color='white'/>
             </div>
              <AiOutlineMenu size={20} color='white' onClick={handleNav}/>
             </div>
        </div>

        {/* overlaynavbar */}
        <div id="drop-down" className={nav ? 
          'lg:hidden fixed flex flex-col items-center justify-center h-[100%] z-10 w-full bg-transparent backdrop-blur-[20px] gap-10 overflow-y-hidden ease-in duration-300 font-Poppins':
          'lg:hidden fixed flex flex-col items-center justify-center h-[0%] z-10 w-full bg-transparent backdrop-blur-[20px] gap-10 overflow-y-hidden ease-in duration-300 font-Poppins'}>
                <AiOutlineClose size={20} color='white' onClick={handleNav} className=' absolute top-10 right-[50px] font-Poppins ' style={{font:"Poppins"}}/>
                <a href='#' className='text-white text-4xl bg-transparent font-Poppins'>Home</a>
                <a href='#' className='text-white text-4xl bg-transparent '>Modules</a>
                <a href='#' className='text-white text-4xl bg-transparent '>S-HUB</a>
                <a href='#' className='text-white text-4xl bg-transparent '>GITHUB</a>
                <a href='#' className='text-white text-4xl bg-transparent '>DISCORD</a>
        </div>
      </>
  )
}

export default Navbar