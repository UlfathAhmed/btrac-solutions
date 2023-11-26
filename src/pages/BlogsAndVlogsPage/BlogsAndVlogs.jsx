import React from 'react'
import BlogsAndVlogsCard from './partials/BlogsAndVlogsCard'

const BlogsAndVlogs = () => {
  return (
    <div className='dark:bg-[#181818] bg-[#F2F2F2] px-48 h-auto'>
        <h1 className='text-6xl font-normal font-blackerdisplay dark:text-white py-20'>Blogs & Vlogs</h1>
        <BlogsAndVlogsCard/>
    </div>
    
  )
}

export default BlogsAndVlogs