import React from 'react'

import img1 from '../../assets/images/blogone.jpg'
import img2 from '../../assets/images/blogtwo.png'
import img3 from '../../assets/images/blogthree.png'
import img4 from '../../assets/images/blogfour.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules';

const InsideBtsl = () => {
  return (
    <section className='pl-48 bg-[#F4F4F4] dark:bg-[#222] bg-cover bg-center py-28 '>
      <div>
        <h1 className='pb-28 text-6xl font-blackerdisplay dark:text-[#fff] text-[#000]'>
          Inside BTSL
        </h1>
      </div>
        <Swiper
         breakpoints={{
          '640': {
            slidesPerView: 1,
            
          },
          '768': {
            slidesPerView: 2,
            
          },
          '1024': {
            slidesPerView: 3,
            
          },
        
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1}/></SwiperSlide>
        <SwiperSlide><img src={img2} /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>

      </Swiper>
    </section>
  )
}

export default InsideBtsl