import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Navbar from './components/Navbar'
import ToggleButton from './components/ToggleButton'
import Footer from './components/Footer'
import { menuItems } from './router/Path'

// import ScrollToTop from './components/ScrollToTop'




function App() {
  
  return (

    <>
      {/* <ScrollToTop /> */}
      <Navbar/>
      <ToggleButton/>
      {
        <Routes>
          {
            menuItems.map(item => (
              <Route path={item.path} element={item.element} key={item.id} />
            ))
          }
        </Routes>
      }
      
      <Footer/>
    
    </>

  )
}

export default App
