import React from 'react'

const AwardCard = ({Awardnum, Award, Awardname, Awardyear}) => {
  return (

    <div className="text-center" >
        <h1 className='font-LondrinaOutline text-9xl border-b-2 border-[#969696] py-10 hover:text-[#225FA9] dark:hover:text-[#225FA9] dark:text-white ' >{Awardnum}</h1>
        <div className='py-10'>
            <p className='font-prata font-normal text-xl dark:text-white pb-5'>{Award}</p>
              <h1 className='font-blackerdisplay text-2xl text-[#AAA] pb-5'>{Awardname}</h1>
            <p className='font-prata text-[#225FA9] font-normal text-2xl'>{Awardyear}</p>    
        </div>                
    </div>
  
)}

export default AwardCard;

