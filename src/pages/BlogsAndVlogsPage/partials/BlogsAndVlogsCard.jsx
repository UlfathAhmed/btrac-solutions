import React from 'react'
import BlogsAndVlogsData from '../../../DummyData/BlogsAndVlogsData';

const BlogsAndVlogsCard = () => {
  return (
    <div className='container ' >
     <div className='grid lg:grid-rows-3 '>
        {BlogsAndVlogsData.map((item) => (       
            <div className=" border-t border-b group border-[#979797] py-8 flex" >
                <div className='basis-3/5'>
                    <button className=' rounded-3xl px-4 dark:bg-[#232325] bg-[#ECECEC]'>
                    <p className=' text-[#225FA9] font-syne ' >{item.blog}</p>
                    </button>
                    <h1 className='font-prata text-2xl dark:text-white pb-5 group-hover:text-[#225FA9] dark:hover:text-[#225FA9] pt-5'>{item.headline}</h1>
                    <p className='font-syne font-normal text-2xl dark:text-white'>{item.date}</p>
               </div>  
               <div className='items-end'>
                    <img src={item.blogimage} alt="" className=' hidden group-hover:block w-80' />               
                    <img src={item.imagearr} alt="" className='' />
               </div>                
            </div>
        ))}
     </div>
   </div>
)}

export default BlogsAndVlogsCard;