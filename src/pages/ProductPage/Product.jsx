import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useRef } from 'react';
import ProductCard from './Partials/ProductCard';
import ProductData from '../../DummyData/ProductData';


const Product = () => {
    const swiperRef = useRef() 
    return (
      <section className="" id='Products'>
        <div className='px-48 py-20 flex'>
            <h1 className='basis-1/2 font-blackerdisplay font-normal text-7xl dark:text-white'>
            Our Project
            </h1>
            <p className='basis-2/3 font-prata font-normal text-2xl dark:text-white text-right'>
            Cinzel is the all-in-one WordPress theme to create your amazing dream website. Easy to use, highly customizable and modern, with 29+ detailed prebuilt websites.
            </p>
        </div>
        
        <div className=" lg:pl-52 px-5 relative ">
          <Swiper
          breakpoints={{
            '640': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation]} 
          onInit={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
          >
          {ProductData.map((item) => (
            <SwiperSlide className='justify-between '>
            <ProductCard
              key={item.id}
              image={item.image}
              altDesc={item.heading}
              heading={item.heading}
              subHeading={item.subHeading}
              description={item.description}
            />
            </SwiperSlide>
          ))}
          
          </Swiper>
          
          {/* <div className=' absolute border-2 rounded-lg border-[#ff7069] w-10 lg:right-10 lg:top-1/2 right-1/2 '   >
            
              <button className='' >
                <img src={next} className='pt-1 pl-2' onClick={ ()  =>{
                    swiperRef.current?.slideNext();
            
          }}  />
              </button>
            
          </div> */}
          
        </div>
      </section>
    );
  };
  
  export default Product;
