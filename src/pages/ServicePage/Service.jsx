import React from 'react'
import ServiceCard from './partials/ServiceCard'
import ServiceData from '../../DummyData/ServiceData'

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Service = () => {
  return (
    <section className='lg:px-48 px-5 h-auto bg-servicebglight dark:bg-servicebgdark  bg-cover bg-center'>
       <div className='font-blackerdisplay text-black dark:text-white font-normal lg:text-6xl text-5xl pt-16'>
            <h1>
            Services We Offer
            </h1>
       </div>
       <div className="relative py-10 ">
          <Swiper
          breakpoints={{
            '640': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 2,
              
            },
            '1024': {
              slidesPerView: 4,
              
            },
          
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]} 
          className="mySwiper"
          >
          {ServiceData.map((item) => (
            <SwiperSlide className='justify-between'>
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
            </SwiperSlide>
          ))}
          
          </Swiper>
          
        </div>
        
        

        
    </section>
  )
}

export default Service