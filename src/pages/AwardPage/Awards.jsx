import React from 'react'
import AwardCard from './Partials/AwardCard'

const Awards = () => {
  return (
    <div className='px-48 dark:bg-blackbg bg-lightbg py-20 '>
      <h1 className='dark:text-white text-7xl font-blackerdisplay'>
        Our Awards
      </h1>
      <div>
        <AwardCard/>
      </div>
        
    </div>
  )
}

export default Awards