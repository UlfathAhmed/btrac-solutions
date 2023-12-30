import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Navbar from './components/Navbar'
import About from './pages/AboutPage/About'
import ToggleButton from './components/ToggleButton'
import Service from './pages/ServicePage/Service'
import Industries from './pages/IndustryPage/Industries'
import Footer from './components/Footer'
import Blog from './pages/BlogPage/Blog'
import InsideBtsl from './pages/InsideBtslpage/InsideBtsl'
import Awards from './pages/AwardPage/Awards'
import Project from './pages/Projectspage/project'
import Product from './pages/Productpage/Product'
import BlogsAndVlogs from './pages/BlogsAndVlogsPage/BlogsAndVlogs'
import BlogDetail from './pages/BlogDetailPage/BlogDetail'
// import ScrollToTop from './components/ScrollToTop'




function App() {
  
  return (

    <>
      {/* <ScrollToTop /> */}
      <Navbar/>
      
      <ToggleButton/>
      <Home/>
      <About/>
      <Service/>
      <Awards/>
      <Product/>
      <Project/>
      <Industries/>
      <BlogsAndVlogs/>
      <Blog/>
      <BlogDetail/>
      <InsideBtsl/>
      <Footer/>
    
    </>

  )
}

export default App
