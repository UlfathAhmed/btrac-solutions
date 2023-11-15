import React from 'react'
import IndustriesCard from './partials/IndustriesCard'

const Industries = () => {
  return (
    <section className='px-48 bg-[#F4F4F4] dark:bg-[#222] bg-cover bg-center'>
        <div className='py-20 flex justify-between'>
            <h1 className='font-blackerdisplay font-normal text-5xl dark:text-white'>
            Industries we share
            </h1>
            <p className='font-prata font-normal text-2xl dark:text-white text-right'>
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