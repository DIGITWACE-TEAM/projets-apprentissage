import { React } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About-us/About'
import Destinations from './Components/Destinations/Destinations'
import Galleries from './Components/Galleries/Galleries'
import Reservations from './Components/Reservations/Reservations'
import Packagecard from './Components/Packagecard/Packagecard'
import Footer from './Components/Footer/Footer'



function App() {
 
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Destinations/>
     <Galleries/>
     <Reservations/>
     <Packagecard/>
     <Footer/>
    </>
  )
}

export default App
