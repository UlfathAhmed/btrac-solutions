import React from 'react'
import IndustriesData from '../../../DummyData/IndustriesData'

const IndustriesCard = () => {
  return (
    <div className='container mx-auto relative'>
        <div className='grid lg:grid-cols-4'>
            {IndustriesData.map((item) => (
                
                <div className="p-5" >
                    <img src={item.image} alt="brandlogo" className='w-96' />
                    <h1 className='text-base font-prata dark:text-[#EDEDED] text-center'>{item.title}</h1>
                </div>
            ))}

        </div>
        
    </div>
  )
}

export default IndustriesCard
