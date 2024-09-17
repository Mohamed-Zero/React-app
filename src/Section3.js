import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link  , Outlet } from 'react-router-dom';
import Section2 from './Section2';
import Section3B1 from './Section3B1';
export default function Section3() {
  return (
  <div  id='sec3Scroll'>
    <div className='container-fluied m-auto md  bg-black mt-4' >
    <h3 className=' text-light mb-2  text-center'>My Profile</h3>
      <div class="btn-group btn-group-lg sec3-btns">

       <button type="button" class="btn btn-primary b1 bs active "><Link to="sec3b1" >Section1</Link></button>
      <button type="button" class="btn btn-primary bs"><Link to="sec3b2">Section2</Link></button>
      <button type="button" class="btn btn-primary bs b3"><Link to="sec3b3">Section3</Link></button>
    </div>
    <Outlet/>
    </div>
    </div>
  )
}
