import React, { useState } from "react";
import IndustriesData from '../../../DummyData/IndustriesData'

const IndustriesCard = () => {
  const [theme, setTheme] = useState (
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  
  
  return (
    <div className='container mx-auto relative'>
        <div className='grid lg:grid-cols-4'>
            {IndustriesData.map((item) => (
                
                <div className="p-5" >
                  
                    <div className="container">
                      <img
                        className=""
                        onClick={() => setTheme(prevMode => !prevMode)}
                        
                        src={theme ? item.darkmodeimage : item.lightmodeimage}
                        alt="lightning-bolt"
                        
                      />
                    </div>
                  
                    <h1 className='text-base font-prata dark:text-[#EDEDED] text-center'>{item.title}</h1>
                </div>
            ))}

        </div>
        
    </div>
  )
}

export default IndustriesCard
