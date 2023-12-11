import React from 'react'
import BlogData from '../../../DummyData/BlogData';

const BlogCard = () => {
    
  return (
    
        <div className='relative'>
            <div className=' gap-5'>
                {BlogData.map((item, index) => (
                    
                    <div className={`flex gap-20 py-12 ${index % 2 === 0 ? "text-right " : "text-left flex-row-reverse"}`}>
                        <div className='basis-1/2'>
                            <img src={item.image} alt="BlogPicture" className='w-full drop-shadow-2xl'/>
                        </div>
                        <div className='basis-1/2'>
                            <p className='text-[#AAA] text-xl font-prata font-normal'>{item.date}</p>
                            <h1 className='text-[#000] dark:text-[#fff] text-6xl font-blackertext font-medium py-2'>{item.headline}</h1>
                            <div className={`flex gap-5 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                                <img src={item.authorimage} alt="Admin Image" className='rounded-full w-10 h-10' />
                                <p className='py-2 dark:text-[#fff] text-xl font-prata font-normal'>{item.authorname}</p>
                            </div>
                            <p className='dark:text-[#fff] font-prata text-lg font-normal py-5'>{item.description}</p>
                            <button>
                                <p className='text-[#225FA9] text-2xl font-prata font-normal hover:text-blue-500'>{item.readmore}</p>
                            </button>
                            
                        </div>
                    </div>
                ))}

            </div>
        </div>
  )
}

export default BlogCard;