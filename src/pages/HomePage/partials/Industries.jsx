import React from 'react'
import IndustriesCard from './IndustriesCard'

const Industries = () => {
  return ( 
    <section className='lg:px-48 px-5 bg-[#F4F4F4] dark:bg-[#222] bg-cover bg-center'id='client'>
        <div className='lg:py-20 py-10 flex flex-col lg:flex-row justify-between'>
            <h1 className='font-blackerdisplay font-normal lg:text-6xl text-5xl dark:text-white lg:pb-0 pb-10'>
            Industries we share
            </h1>
            <p className='font-prata font-normal text-2xl dark:text-white lg:text-right '>
            More than 20+ brands are already <br /> partner to improve their power
            </p>
        </div>
        <div>
           <IndustriesCard/>
        </div>
    </section>
  )
}

export default Industries