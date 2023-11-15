import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import ServiceData from '../../../DummyData/ServiceData'


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
// import {RxArrowTopright} from 'react-icons/rx'

const ServiceCard = () => {
  return (
   <div className='container ' >
     <div className='grid lg:grid-cols-4'>
        {ServiceData.map((item) => (       
            <div className=" relative border-2 border-black dark:border-[#414141]  group hover:bg-[#225FA9] duration-500 h-[32rem] flex flex-col justify-center items-center" >
                <h1 className='font-blackerdisplay font-normal dark:text-white text-4xl rotate-90 text-center cursor-pointer group-hover:rotate-0 duration-300 group-hover:mb-12'>{item.title}</h1>
                <p className='font-syne font-normal text-xl dark:text-white text-center px-2 hidden group-hover:block '>{item.description}</p>
                <button>
                    <img src={item.image} className='absolute bottom-5 left-28  rotate-0 group-hover:rotate-45 duration-300'/>
                </button>
            </div>
        ))}
     </div>
   </div>
  )
}

export default ServiceCard