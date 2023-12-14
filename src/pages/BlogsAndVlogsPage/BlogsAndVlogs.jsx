import React from 'react'
import BlogsAndVlogsCard from './partials/BlogsAndVlogsCard'

const BlogsAndVlogs = () => {
  return (
    <div className='dark:bg-[#181818] bg-[#F2F2F2] lg:px-48 px-5 h-auto'>
        <h1 className='lg:text-6xl text-5xl font-normal font-blackerdisplay dark:text-white py-20'>Blogs & Vlogs</h1>
        <BlogsAndVlogsCard/>
    </div>
    
  )
}

export default BlogsAndVlogs