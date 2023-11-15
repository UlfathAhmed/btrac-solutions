import React from 'react'
import logowb from '../assets/images/btraclogowb.png'
import logobb from '../assets/images/btraclogobb.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav className="fixed z-50">
        <div className="w-screen z-50 px-10 md:px-12 lg:px-48 py-5 relative flex justify-between items-center">
        <div
            className={`absolute md:hidden top-full left-0 py-1 px-5 w-screen ${
            !menuOpen ? "opacity-0" : "opacity-100"
            } transition-all duration-500`}>
            <div className="flex bg-black bg-opacity-90 border-2 rounded-tl-3xl rounded-br-3xl border-white py-5 px-6 ">
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 md:ml-auto' >
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg text-white font-syne ' onClick={()=> setMenuOpen(false)}>
                    <a href="#about">Home</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg text-white font-syne' onClick={()=> setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg text-white font-syne ' onClick={()=> setMenuOpen(false)}>
                    <a href="#services">Services</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg text-white font-syne ' onClick={()=> setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg text-white font-syne ' onClick={()=> setMenuOpen(false)}>
                    <a href="#products">Products</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg text-white font-syne ' onClick={()=> setMenuOpen(false)}>
                    <a href="#client">Client</a>
                </li >
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg text-white font-syne ' onClick={()=> setMenuOpen(false)}>
                    <a href="#blogs">Blogs</a>
                </li >
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg text-white font-syne ' onClick={()=> setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </div>
            </div>
        <div>
            <a href="#">
            <img src={logowb} alt="logo" width={120} />
            
            
            </a>
        </div>
        <div className="items-center flex justify-end relative w-full lg:pr-5 pr-0">
        <div
            className="text-white flex md:hidden cursor-pointer"
            onClick={() => setMenuOpen((prevState) => !prevState)}>
            <FontAwesomeIcon
                icon={!menuOpen ? faBars  : faXmark }
                size="lg"
                style={{color: "#225FA9",}}
            />
            </div>
            <div className="hidden md:flex">
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-4 md:ml-auto'>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg font-syne dark:text-white  '>
                <a href="#about">Home</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg font-syne dark:text-white  '>
                <a href="#about">About</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg font-syne dark:text-white  '>
                <a href="#services">Services</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg font-syne dark:text-white  '>
                <a href="#portfolio">Portfolio</a> 
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg font-syne dark:text-white  '>
                <a href="#products">Products</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg font-syne dark:text-white  '>
                <a href="#client">Client</a>
                </li >
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg font-syne dark:text-white  '>
                <a href="#blogs">Blogs</a>
                </li>
                <li className='hover:scale-110 duration-300 hover:text-[#225FA9] font-normal text-lg font-syne dark:text-white  '>
                <a href="#contact">Contact</a>
                </li>
            </ul>
            </div>
            
        </div>
        </div>
        </nav>
    );
};
export default Navbar;
