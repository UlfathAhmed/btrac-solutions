import React from 'react'
import BlogsAndVlogsCard from './BlogsAndVlogsCard'

const BlogsAndVlogs = () => {
  return (
    <div className='dark:bg-[#181818] bg-[#F2F2F2] lg:px-48 px-5 h-auto' id='blogs'>
        <h1 className='lg:text-6xl text-5xl font-normal font-blackerdisplay dark:text-white py-20'>Blogs & Vlogs</h1>
        <BlogsAndVlogsCard/>
        <button className='py-10'>
        <p className='text-[#225FA9] text-xl font-syne font-normal hover:text-blue-500 rounded-3xl px-4 py-2 dark:bg-[#232325] bg-[#ECECEC]'>More Blogs & Vlogs</p>
        </button>
    </div>
    
  )
}

export default BlogsAndVlogs