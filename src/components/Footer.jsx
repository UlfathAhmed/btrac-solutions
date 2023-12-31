import React from 'react'
import SmlogoCard from './SmlogoCard'

const Footer = () => {
  return (
    <section className='lg:px-48 px-5 pt-20 bg-footerbglight dark:bg-footerbgdark bg-cover bg-center' id='contact'>
      <div>
              <p className='font-prata font-normal text-2xl dark:text-[#fff] text-[#000]'>
                Ready to work with us?
              </p>
              <p className='py-3 tracking-widest font-prata font-normal lg:text-7xl text-4xl dark:text-[#fff] text-[#000]'>
                <a href = "mailto: abc@example.com">info@btracsl.com</a>
              </p>
              <SmlogoCard/>
          <div className='flex flex-col lg:flex-row lg:gap-32 pb-14'>
              <div>
                <h1 className='font-prata text-3xl font-normal py-5  dark:text-white text-black'>
                  Address
                </h1>
                <p className='font-Inter font-normal text-lg py-5 text-[#4F4F4F] '>
                  Plot-68 (Old-45), Block-H, <br />Road-11Banani, Dhaka-1213 Bangladesh
                </p>
             </div>
             <div className=''>
                <h1 className='font-prata text-3xl font-normal py-5  dark:text-white text-black'>
                  Support
                </h1>
                <p className='font-Inter font-normal text-lg py-5 text-[#4F4F4F]'>
                  <a href="tel:+ 8802-883 8001-4">+ 8802-883 8001-4</a>
                </p>
             </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-between border-t-2 border-[#424242] dark:border-[#606060] py-10 gap-5 lg:gap-0'>
            <p className='dark:text-white lg:text-start text-center '>
             ©2023 <a href="https://www.btracsolutions.com/ "> 
             <span className='text-[#225FA9]'> B-Trac Solutions Ltd.</span></a>  All rights reserved.
            </p>
            <p className='dark:text-white lg:text-start text-center '>
             Site created by <a href="https://www.btracsolutions.com/ "> 
             <span className='text-[#225FA9]'> B-Trac Solutions Ltd.</span></a>
            </p>
          </div>
      </div>
      
      
    </section>
  )
}

export default Footer