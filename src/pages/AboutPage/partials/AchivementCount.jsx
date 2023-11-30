import React from 'react'
import AchivementCountData from '../../../DummyData/AchivementCountData'

const AchivementCount = () => {
  return (
    
<div className='container mx-auto lg:py-10 pb-10 pr-5 relative ' >
  <div className='grid lg:grid-cols-2'>
        {AchivementCountData.map((item) => (
            
            <div className="flex px-4" >
                <h1 className="font-medium text-7xl dark:text-white pr-2 " >{ item.countnumber } </h1>
                <div className='p-4'>
                     <img src={item.image} alt="" className="" />
                     <p className=" font-blackertext font-normal text-xl text-[#AAA] " > { item.description } </p>
                </div>
            </div>
        ))}

    </div>
    
</div>

    
  )
}

export default AchivementCount

       