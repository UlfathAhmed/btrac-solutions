import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Typed from 'react-typed';

const LandingPage = () => {
const text = "know more about BTSL. know more about BTSL"
return (
    <section className='' id='home'>
      <div className='lg:px-48 pl-5 h-screen bg-whitehb dark:bg-darkhb  bg-cover bg-center'>
          <div className='pt-72 flex text-left dark:text-white  '>
            <div className='font-blackertext' >
                <h1 className='lg:text-7xl text-4xl'> We Enrich Lives <br /> Through Better User </h1>
                {/* <TypeAnimation className='text-[#225FA9] text-6xl'
                  sequence={[
                    
                    '<   EXPERIENCE  />',
                    1000, 
                    '<   CLOUD  />',
                    1000,
                    '<   E-COMMERCE  />',
                    1000,
                    '<  WEB  />',
                    1000,
                    '<  SOFTWARE  />',
                    1000,
                    '<  DESKTOP  />',
                    1000,
                    '<  HARDWARE  />',
                    1000,
                    '<  MOBILE  />',
                    1000,
                
                
                  ]}
                  wrapper="span"
                  speed={5}
                  repeat={Infinity} 
                  // style={{fontSize: "8px"}}
                  
                /> */}
                {/* <Typed
                    strings={[
                      "<   EXPERIENCE  />",
                      "<   CLOUD  />",
                      "<   E-COMMERCE  />",
                      "<  WEB  />",
                      "<  SOFTWARE  />",
                      "<  DESKTOP  />",
                      "<  HARDWARE  />",
                      "<  MOBILE  />"
                    ]}
                    typeSpeed={100}
                    // attr='placeholder'
                    // loop
                /> */}

            </div>
            {/* <div className='circle pr-16 p-20  '>  
            <div className='logo relative'>
              <div className='text'>
                <p id="rounded-text">
                  {text.split("").map((char, i) => (
                    // `<span className="transform rotate-[ ${i * 5}deg ]"}>
                    //   {char}
                    // </span>`
                    
                      console.log(char)
                  )
                  ).join("")}
                        
                  
                </p>
                              
              </div>

            </div>
              
            </div> */}
          </div>
      </div>
            
    </section>
    
  )
}

export default LandingPage


    
   