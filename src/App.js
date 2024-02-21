import React , {useEffect , useState} from 'react'
import { BrowserRouter , Routes , Route , Link , NavLink } from 'react-router-dom';
//import liberiy react spiner
import RingLoader from 'react-spinners/RingLoader'
//import App.css

import './App.css'

//componts

import Home from './Hom/Home';
import Navbarr from './Nav/Navbarr';
import AboutUs from './Nav/AboutUs';
import Contactus from './Nav/Contactus';
import Gallery from './Nav/Gallery';
import Schedule from './Nav/Schedule';
import UsClasses from './Nav/UsClasses';
import Myjson from './Nav/Myjson'
const App = () => {
  const [lodaing , satLodaing] = useState(false)

      useEffect(() =>{
        satLodaing (true);
        setTimeout(() =>{
          satLodaing(false);
        }, 6000);
      },[] )
  return (
    <BrowserRouter>

    {
      lodaing ?
      <div className='plechorder'>
          <RingLoader 
          color= {"#8116d7b7"}
          lodaing ={lodaing}
          heigth ={5000} 
          margin ={60}
          />
      </div> :

          <>
          <Navbarr />
          <Routes>
          <Route  path='/' element={<Home />}/> 
          <Route  path='/AboutUs' element={<AboutUs />}/> 
          <Route  path='/Contactus' element={<Contactus />}/> 
          <Route  path='/Gallery' element={<Gallery />}/> 
          <Route  path='/Schedule' element={<Schedule />}/> 
          <Route  path='/UsClasses' element={<UsClasses />}/> 
          <Route  path='/Myjson' element={<Myjson />}/> 

          </Routes>
          </>
    }

   </BrowserRouter>
  )
}

export default App