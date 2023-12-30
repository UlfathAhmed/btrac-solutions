import React from 'react'

const LeaveReply = () => {
  return (
    <div className='grid gap-10'>
        <div className=' dark:bg-[#232323] bg-[#FFF] py-6 border dark:border-[#181818] border-[#E2E2E2] '>
           <div className='p-5 '>
              <p className='dark:text-[#000] border-b-2 dark:border-[#181818] border-[#8D8D8D] pb-5 font-normal text-xl font-blackerdisplay'> Posted in <span className='text-[#484848]'> Uncategorized</span></p>
           </div> 
        </div>
        <div className='dark:bg-[#232323] bg-[#FFF] border border-[#E2E2E2] dark:border-[#181818] py-6 p-5'>
            <p className='dark:text-white text-black border-b-2 dark:border-[#181818] border-[#8D8D8D] pb-5 font-blackerdisplay text-xl font-normal '>Leave A Reply</p>
            <p className='dark:text-white pt-5 font-blackerdisplay text-xl font-normal'>Your email address will not be published.</p>
            <div className='flex justify-between'>
                <div>
                   <p className='text-[#606060] font-blackerdisplay text-xl font-normal py-5'>Name</p>
                   <input className='px-44 py-3 dark:bg-[#252525] border dark:border-[#474747] bg-[#F7F7F7] border-[#DADADA]' type="Name" />
                </div>
                <div>
                   <p className='text-[#606060] font-blackerdisplay text-xl font-normal py-5'>Email</p>
                   <input className='px-44 py-3 dark:bg-[#252525] border dark:border-[#474747] bg-[#F7F7F7] border-[#DADADA]' type="mail" />
                </div>
            </div>
            <div className='py-5'>
                <input type="checkbox" className='' id="checkbox"/>
                <label className='dark:text-white font-blackerdisplay text-xl font-normal' for="check"> Save my name, email, and website in this browser for the next time I comment.</label>
                <p className='text-[#606060] font-blackerdisplay text-xl font-normal py-5'>Comment</p>
                <input className='px-[28.5rem] py-10 dark:bg-[#252525] border dark:border-[#474747] bg-[#F7F7F7] border-[#DADADA]' type="text" />
            </div>
            <button className='text-white text-xl font-normal font-blackerdisplay px-5 py-3 bg-[#225FA9] flex justify-center items-center hover:bg-blue-500  transition-all duration-500 '>Submit</button>
        </div>
    </div>
    
  )
}

export default LeaveReply