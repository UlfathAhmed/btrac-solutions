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
        <div className='lg:px-48 px-5 py-14 flex'>
            <h1 className='font-blackerdisplay font-normal lg:text-6xl text-4xl dark:text-white'>
            Our Produts
            </h1>
        </div>
        
        <div className=" lg:pl-48 px-5 relative lg:py-14 py-5 ">
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
              slidesPerView: 4,
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
          {ProductData.map((item, index) => (
            <SwiperSlide className={`justify-between ${index % 2 === 0 ? "mt-0" : "mt-32"} `}>
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
  
