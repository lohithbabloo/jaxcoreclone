import Image from 'next/image';
import React from 'react'
// import {useState,useEffect} from 'react'
export const Midcontainer = () => {
  // const [windowheight,setwindowheight] = useState(0)

  // useEffect(() => {
  //   console.log("hook called")

  //   function handlescroll(){
  //   console.log(window)

  //   if(typeof window !== 'undefined'){
  //     setwindowheight(window.innerHeight)
  //   }
  //   if(typeof window !== 'undefined'){
  //   window.addEventListener('scroll',handlescroll)
  //   }
  //   }
  //   return () => {
  //     if(typeof window !== 'undefined'){
  //     window.removeEventListener('scroll',handlescroll)
  //     console.log(windowheight)
  //     }
  //   }
  // }, [])
  
  return (
    <div>
      <div className= "relative lg:top-[10vh] md:top-[15vh] top-[10vh] text-white flex justify-center items-center lg:px-[65px] md:px-[40px] px-[25px] h-[80vh] lg:gap-24 md:gap-14 gap-5 lg:flex-row flex-col w-full opacity-100 z-0 lg:overflow-y-hidden">
      <div className='relative lg:w-[100%] flex'>
      <div className='absolute inset-0.5 bg-gradient-to-br from-blue-400 to-purple-400 background-animate blur-3xl'></div>
          <div className='relative video-wrapper lg:basis-[1200px] basis-[1000px]'>
            <video src='Home.mp4' loop autoPlay muted className='border-4 border-white w-[700px] rounded-lg animate-scale-up'></video>
          </div>
          </div>
          <div className='flex flex-col justify-center lg:w-full lg:items-start items-center'>
            <div className='flex flex-col'>
              <h1 className='2xl:text-8xl lg:text-7xl font-bold font-Play mb-10 text-5xl lg:text-left text-center'>A desktop that's truly yours</h1>
              <p className='md:text-2xl text-lg font-medium font-Play lg:text-left text-center'>JaxCore is a beautiful, functional, customizable set of tools and widgets to spice up your desktop</p>
            </div>
            <div className='flex mt-10 lg:items-start gap-4 font-Roboto'>
              <div className='flex px-10 py-3 gap-3 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 items-center' >
                <a href='#' className='font-bold text-xl'>Download</a>
                <p >300k+</p>
              </div>
            <div className='hidden align-middle text-xl px-10 py-3 bg-zinc-800 rounded-lg transistion ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 md:flex'>
              <a href="#">Modules</a>
            </div>
            </div>
          </div>
      </div>
      <div className='w-full h-[65px] px-[65px] lg:pt-36 md:pt-44 pt-24'>
        <hr></hr>
      </div>
      <div className='flex mt-9 flex-col items-center text-white font-Poppins'>
        <h2 className='mb-2'>Complimentary, customizable,</h2>
        <h1 className='text-4xl font-bold'>Works how you want it to</h1>
        {/* cards */}
        <div className='card-wrapper flex mt-10 items-center justify-center max-w-2xl flex-wrap gap-[30px] md:flex-row flex-col'>
          <div className='card w-[300px] h-[300px] rounded-xl flex flex-col justify-center items-center text-center gap-[10px] bg-zinc-800 text-white p-5 transistion ease-linear duration-150 transform delay-100 hover:opacity-100 hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className='text-xl'>Beautiful</h3>
            <p className=''>A multitude of pre-made styles, matching different UI designs. Seamlessly integrate modules into your setup.</p>
        </div>
        <div className='card w-[300px] h-[300px] rounded-xl flex flex-col justify-center items-center text-center gap-[10px] bg-zinc-800 p-5 transistion ease-linear duration-150 transform delay-100 hover:opacity-100 hover:scale-110 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 className='text-xl'>Settings</h3>
          <p>Every module has a dedicated settings menu with plentiful of options to play with. No more editing files.</p>
        </div>
        <div className='card w-[300px] h-[300px] rounded-xl flex flex-col justify-center items-center text-center gap-[10px] bg-zinc-800 p-5 transistion ease-linear duration-150 transform delay-100 opacity-50 hover:opacity-100 hover:scale-110'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <h3 className='text-xl'>Installer</h3>
          <p>Built-in installer, updater and uninstaller for every module, no need to go to a website to get the latest version of something.</p>
        </div>
          <div className='card w-[300px] h-[300px] rounded-xl flex flex-col justify-center items-center text-center gap-[10px] bg-zinc-800 p-5 transistion ease-linear duration-150 transform delay-100 opacity-50 hover:opacity-100 hover:scale-110'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
          <h3 className='text-xl'>Flexible</h3>
          <p>Since JaxCore runs on Rainmeter, you can customize every aspect to your liking. Sky's the limit.</p></div>
        </div>
      </div>
      <div className='w-full h-[65px] mt-10 px-[65px]' >
      <hr /></div>
      <div className='flex flex-col items-center text-white'>
        <h2 className='mb-2'>Get to know what you'll use</h2>
        <h1 className='text-4xl font-bold'>Modules & Widgets</h1>
        <div className='flex mt-10 bg-zinc-800 max-w-2xl h-[100px] justify-center items-center overflow-scroll overflow-y-hidden rounded-lg px-4 gap-5'>
            <div className='flex gap-5'>
            <Image src="YourFlyouts.png" width={48} height={48} className='transition 150ms hover:border-2 p-1' alt='flyouts'/>
            <Image src="YourMixer.png" width={48} height={48} alt='mixer'/>
            <Image src="ValliStart.png" width={48} height={48} alt='valli'/>
            <Image src="Keylaunch.png" width={48} height={48} alt='key'/>
            </div>
            <div className='flex gap-5'>
            <Image src="IdleStyle.png" width={48} height={48} alt='idle'/>
            <Image src="ModularVisualizer.png" width={48} height={48} alt='visualizer'/>
            <Image src="ModularClocks.png" width={48} height={48} alt='clocks'/>
            <Image src="ModularPlayers.png" width={48} height={48} alt='players'/>
            <Image src="Plainext.png" width={48} height={48} alt='plainext'/>
            </div>
          </div>
        </div>
  </div>
  )
}

export default Midcontainer;