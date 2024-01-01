import React from 'react'
import AchivementCount from './AchivementCount';
import arrow from '../../../assets/images/arrow.png'

const About = () => {
  return (
    <section className=' dark:bg-[#181818] bg-[#F4F4F4] pt-10' id='about'>
      <div className='lg:px-48 px-5'>
        <div className=' flex flex-col lg:flex-row justify-between rounded-xl bg-[#F9F9F9] dark:bg-[#090909]'>
          <div className='py-20 flex-1'>
              <h1 className=' font-blackerdisplay font-normal lg:text-6xl text-5xl lg:px-11 px-5 dark:text-white '> 
              Our <br /> Achievements
              </h1>
          </div>
          <div className='dark:text-white flex '>
              
              <div>
              <AchivementCount/>
              </div>
              
          </div>
        </div>
        <div className='lg:py-20 py-10 text-center dark:text-[#FFF]'>
          <h1 className='font-normal font-blackerdisplay lg:text-6xl text-4xl '>About Us</h1>
          <p className='font-normal font-blackertext lg:text-3xl text-2xl lg:py-16 py-10 lg:px-20 px-5 leading-relaxed'>From Consumer centric to Enterprise, Telecom and Government, B-Trac Solutions Ltd. works alongside our clients to design and develop mobile, web and desktop software applications. Our solutions are founded in user-centered design that emphases on client first, while leveraging the Cloud, Big Data and Internet of Things to deliver context-aware and adaptive experience.</p>    
        </div>
      </div>
      <div>
        <p className="loopslider bg-[#225FA9] text-7xl py-10 font-LondrinaOutline text-white">
            <infinity>  
                <div className='flex'>
                    <h1 className='flex px-20'>Design & Development Craft  <img src={arrow} className='h-20 p-4' /></h1>  
                    <h1 className='flex '>Design & Development Craft  <img src={arrow} className='h-20 p-4' /></h1> 
                    <h1 className='flex px-20'>Design & Development Craft  <img src={arrow} className='h-20 p-4' /></h1>  
                    <h1 className='flex '>Design & Development Craft  <img src={arrow} className='h-20 p-4' /></h1> 
                </div>      
            </infinity>
          </p>
        </div>
          
          
      
    </section>
    
  );
}

export default About
