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
         <Swiper
                  breakpoints={{
                  340: {
                     slidePerView: 2,
                     spaceBetween: 15,
                  },
                  700: {
                     slidePerView: 3,
                     spaceBetween: 15,
                  }
                  }}
                  FreeMode={true}
                  Pagination={{
                     clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
            >
                  {ServiceData.map((item) => (
                     <SwiperSlide key={item.id}>
                        <div className=" relative border-2 border-black dark:border-[#414141] py-48 group hover:bg-[#225FA9] duration-500 " >
                           <h1 className='font-blackerdisplay font-normal dark:text-white text-4xl rotate-90 text-center cursor-pointer group-hover:rotate-0 duration-300'>{item.title}</h1>
                           <button>
                              <img src={item.image} className='absolute bottom-5 left-32 rotate-0 group-hover:rotate-45 duration-300'/>
                           </button>
                        </div>
                     </SwiperSlide>

                  ))}
         </Swiper>
     </div>
   </div>
  )
}

export default ServiceCard