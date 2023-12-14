import React from "react";

const ServiceCard = ({ title, image, description }) => {
  return (
    
    <div className='relative border-2 border-black dark:border-[#414141] group duration-500 h-[32rem] flex flex-col justify-center items-center  p-2'>      
      <div className="group-hover:bg-[#225FA9] h-auto group-hover:h-full " >
      
        <h1 className='font-blackerdisplay font-normal dark:text-white text-4xl rotate-90 text-center cursor-pointer group-hover:rotate-0 duration-500 ease-in-out group-hover:mb-12 group-hover:pt-20  '>{title}</h1>
          <p className='font-syne font-normal text-xl dark:text-white text-center px-4 hidden group-hover:block duration-500'>{description}</p>
          <button>
              <img src={image} className='absolute bottom-5 left-24 h-20 p-4  rotate-0 group-hover:rotate-45 duration-500'/>
              
          </button>
        
      </div>
  </div>
    
  );
};

export default ServiceCard;
