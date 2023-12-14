import React from 'react'
import BlogsAndVlogsData from '../../../DummyData/BlogsAndVlogsData';

const BlogsAndVlogsCard = () => {
  return (
    <div className='container realtive ' >
     <div className='grid lg:grid-rows-3 '>
        {BlogsAndVlogsData.map((item, index) => (       
            <div className={` ${index === 0 && 'border-t'} border-b group border-[#979797] flex relative`} >
                <div className='basis-4/5 pr-52 py-8'>
                    <button className=' rounded-3xl px-4 dark:bg-[#232325] bg-[#ECECEC]'>
                    <p className=' text-[#225FA9] font-syne ' >{item.blog}</p>
                    </button>
                    <h1 className='font-prata text-2xl dark:text-white pb-5 group-hover:text-[#225FA9] dark:hover:text-[#225FA9]  transition-all duration-500 pt-5'>{item.headline}</h1>
                    <p className='font-syne font-normal text-2xl dark:text-white'>{item.date}</p>
               </div>  
               <div className='basis-1/5 flex justify-center items-center z-10'>
                     <div className='w-1/4 rounded-full aspect-square border border-white flex justify-center items-center group-hover:bg-[#225FA9] group-hover:border-[#232325] transition-all duration-500'>         
                        <img src={item.imagearr} alt="" className='absolute item' />
                      </div>
               </div>
               <div className=' absolute  transition-all duration-500 w-80 right-0 -top-[12.5%]'>
                    <img src={item.blogimage} alt="BlogCover" className='opacity-0 group-hover:opacity-100 transition-all duration-500' />               
                    {/* <img src={item.imagearr} alt="" className='absolute item' /> */}
               </div>                
            </div>
        ))}
     </div>
   </div>
)}

export default BlogsAndVlogsCard;