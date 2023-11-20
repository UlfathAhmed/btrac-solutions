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
import Product from './pages/ProductPage/Product'



function App() {
  
  return (

    <>
      <Navbar/>
      <ToggleButton/>
      <Home/>
      <About/>
      <Service/>
      <Awards/>
      <Product/>
      <Industries/>
      <Blog/>
      <InsideBtsl/>
      <Footer/>
    
    </>

  )
}

export default App
