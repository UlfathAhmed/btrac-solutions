import React from 'react'
import BlogData from '../../../DummyData/BlogData';

const BlogCard = () => {
  return (
    
        <div className='relative' >
            <div className=' gap-5'>
                {BlogData.map((item) => (
                    
                    <div className=" flex gap-5 py-10 " >
                        <div className='basis-1/2'>
                            <img src={item.image} alt="BlogPicture" className='w-full drop-shadow-2xl' />
                        </div>
                        <div className='text-right basis-1/2'>
                            <p className='text-[#AAA] text-xl font-prata font-normal'>{item.date}</p>
                            <h1 className='text-[#000] dark:text-[#fff] text-7xl font-blackertext font-medium py-2'>{item.headline}</h1>
                            <div className='flex justify-end gap-5'>
                                <img src={item.authorimage} alt="Admin Image" className='rounded-full w-20' />
                                <p className='py-7 dark:text-[#fff] text-xl font-prata font-normal'>{item.authorname}</p>
                            </div>
                            <p className='dark:text-[#fff] font-prata text-xl font-normal py-5'>{item.description}</p>
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