import React from 'react'
import Image from 'next/image'

function Home() {
  return (
    <div className='bg-black fomt-Arial'>
      <nav className='m-[10px] bg-black text-white p-[30px] text-center text-[30px] relative'>
        <Image className='mr-[10px] float-left pl-[30px] pr-[20px]' src="/Systems and technology programming company logo.png" alt="Logo" width={100} height={50}/>
        <h2 className='inline mr-[10px] bg-black float-left text-center pr-[500px]'><a href="home.html">Ascode Solutions</a></h2>
        <ul>
            <li className='inline mr-[10px] pl-[20px]'><a href="home.html" className="text-[#33FF00]">Home</a></li>
            <li className='inline mr-[10px] pl-[20px]'><a href="#about">About</a></li>
            <li className='inline mr-[10px] pl-[20px] relative'>
                <a className=' inline-block bg-red-400' href="services.html">Services<span></span></a>
                <ul className='absolute left-0  bg-yellow-400 w-[200px] text-left '>
                    <li className='block p-[10px]'><a href="web-dev.html">Web Development</a></li>
                    <li className='block p-[10px]'><a href="mobile-app-dev.html">Mobile Development</a></li>
                    <li className='block p-[10px]'><a href="desktop-dev.html">Desktop Development</a></li>
                    <li className='block p-[10px]'><a href="database.html">Database Development</a></li>
                    <li className='block p-[10px]'><a href="UI-UX.html">UI/UX</a></li>
                    <li className='block p-[10px]'><a href="seo.html">SEO</a></li>
                    <li className='block p-[10px]'><a href="digital-markt.html">Digital Marketing</a></li>
                </ul>
            </li>
            <li className='inline mr-[10px] pl-[20px]'><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home