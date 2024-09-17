import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section3 from './Section3';
import Section3B1 from './Section3B1';



export default function Section2() {
  return (
    <div id='sec2'>
    <div className='main-1 container'>
        <h2 className='text-center '>Skills</h2>
        <h5 className='text-center'>You Can See My Skills Here </h5>
<div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner  ">
    <div class="carousel-item active " data-bs-interval="10000">
        <div className=' d-flex  '>
        <div className='col  col-sm-6 col-lg-4 div-1'>
            <div>
        <div class="progress blue">
             <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
               <span class="progress-right">
                    <span class="progress-bar"></span>
                 </span>
          <div class="progress-value">90%</div>
</div> 
</div>
<h2 className='text-pro'>Front-end</h2>
</div>
        <div className='col  col-sm-6 col-lg-4 div-1'>
        <div>
        <div class="progress blue">
             <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
               <span class="progress-right">
                    <span class="progress-bar"></span>
                 </span>
          <div class="progress-value">90%</div>
</div> 
</div>
<h2 className='text-pro'>Data Science</h2>

        </div>
        <div className='col  col-sm-6 col-lg-4 div-1'>
        <div>
        <div class="progress blue">
             <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
               <span class="progress-right">
                    <span class="progress-bar"></span>
                 </span>
          <div class="progress-value">90%</div>
</div> 
</div>
<h2 className='text-pro'>Back-End</h2>
        </div>
        </div>

    </div>
    <div class="carousel-item">
    <div className=' d-flex  '>
        <div className='col  col-sm-6 col-lg-4 div-1'>
        <div>
        <div class="progress blue">
             <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
               <span class="progress-right">
                    <span class="progress-bar"></span>
                 </span>
          <div class="progress-value">90%</div>
</div> 
</div>
<h2 className='text-pro'>Back-End</h2>
        </div>
        <div className='col  col-sm-6 col-lg-4 div-1'>
        <div>
        <div class="progress blue">
             <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
               <span class="progress-right">
                    <span class="progress-bar"></span>
                 </span>
          <div class="progress-value">90%</div>
</div> 
</div>
<h2 className='text-pro'>Cyber-Security</h2>

        </div>
        <div className='col  col-sm-6 col-lg-4 div-1'>
            <div>
        <div class="progress blue">
             <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
               <span class="progress-right">
                    <span class="progress-bar"></span>
                 </span>
          <div class="progress-value">90%</div>
</div> 
</div>
<h2 className='text-pro'>Front-end</h2>
</div>
        </div>

    </div>
  </div>
  <button class="carousel-control-prev   " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    {/* <Section3/> */}
    </div>
  )
}
