import React from 'react'
import AchivementCountData from '../../../DummyData/AchivementCountData'

const AchivementCount = () => {
  return (
    
<div className='lg:py-14 relative' >
  <div className='grid lg:grid-cols-2'>
        {AchivementCountData.map((item) => (
            
            <div className="flex lg:px-0 px-4" >
                <h1 className="font-medium text-7xl dark:text-white pr-2 " >{ item.countnumber } </h1>
                <div className='p-4'>
                     <img src={item.image} className="" />
                     <p className=" font-blackertext font-normal text-lg text-[#AAA] " > { item.description } </p>
                </div>
            </div>
        ))}

    </div>
    
</div>

    
  )
}

export default AchivementCount

       