// import Image from "./Image";
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Carousel } from 'bootstrap';
import { useTypewriter,Cursor } from "react-simple-typewriter"

import Section2 from './Section2';
import Section3 from './Section3';
import Section3B1 from './Section3B1';
import Section3B2 from './Section3B2';
import Section3B3 from './Section3B3';
import Section4 from './Section4';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Header/>}>
       <Route path='sec2' element={<Section2/>}/>
       <Route path='sec3' element={<Section3/>}>
        <Route path='sec3b1' element={<Section3B1/>}/>
        <Route path='sec3b2' element={<Section3B2/>}/>
        <Route path='sec3b3' element={<Section3B3/>}/>
        </Route>
       </Route>
       
        <Route path='/sec4' element={<Section4/>}/>   
      </Routes>
      </BrowserRouter>
     
  );
}

export default App;
