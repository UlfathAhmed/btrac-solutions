import React from 'react'
import ServiceCard from './partials/ServiceCard'

const Service = () => {
  return (
    <section className='px-48 h-screen bg-servicebglight dark:bg-servicebgdark  bg-cover bg-center'>
       <div className='font-blackerdisplay text-black dark:text-white font-normal text-6xl pt-16'>
            <h1>
            Services We Offer
            </h1>
       </div>
       <div className='py-10'>
        <ServiceCard/>
       </div>
        
        

        
    </section>
  )
}

export default Service