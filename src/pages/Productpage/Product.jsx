import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useRef } from 'react';
import ProductData from '../../DummyData/ProductData';
import ProductCard from './partials/ProductCard';


const Product = () => {
    const swiperRef = useRef() 
    return (
      <section className="bg-productbg" id='Project'>
        <div class="w-full h-full justify-center items-center dark:bg-black/90 bg-white/95">
        <div className='px-48 py-14 flex'>
            <h1 className='basis-1/2 font-blackerdisplay font-normal text-6xl dark:text-white'>
            Our Produts
            </h1>
        </div>
        
        <div className=" lg:pl-52 px-5 relative py-14 ">
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
              slidesPerView: 3.3,
              spaceBetween: 20,
            },
          
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]} 
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
        </div>
      </section>
    );
  };
  
  export default Product;
  
