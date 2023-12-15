import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useRef } from 'react';
import ProjectsData from '../../DummyData/ProjectsData';
import ProjectCard from './partials/ProjectCard';


const Project = () => {
    const swiperRef = useRef() 
    return (
      <section className="bg-lightbg dark:bg-blackbg dark:bg-repeat" id='projects'>
        <div className='lg:px-48 px-5 py-14 flex flex-col lg:flex-row '>
            <h1 className='basis-1/2 font-blackerdisplay font-normal lg:text-6xl text-5xl dark:text-white lg:pb-0 pb-5'>
            Our Project
            </h1>
            <p className='basis-2/3 font-prata font-normal text-xl dark:text-white lg:text-right'>
            Cinzel is the all-in-one WordPress theme to create your amazing dream website. Easy to use, highly customizable and modern, with 29+ detailed prebuilt websites.
            </p>
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
          {ProjectsData.map((item) => (
            <SwiperSlide className='justify-between '>
            <ProjectCard
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
  
  export default Project;
  
