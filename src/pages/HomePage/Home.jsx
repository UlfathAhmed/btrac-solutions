import React from 'react'

import About from './partials/About';
import Service from './partials/Service';
import Awards from './partials/Awards';
import Product from './partials/Product';
import Project from './partials/Project';
import Industries from './partials/Industries';
import InsideBtsl from './partials/InsideBtsl';
import BlogsAndVlogs from './partials/BlogsAndVlogs';
import LandingPage from './partials/LandingPage';



const Home = () => {

  return (
    <> 
      <LandingPage/>
      <About/>
      <Service/>
      <Awards/>
      <Product/>
      <Project/>
      <Industries/>
      <BlogsAndVlogs/>
      <InsideBtsl/>       
    </>   
  )
}

export default Home
